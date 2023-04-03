<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAPIRequest{
        RequestBody: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "corrupti",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: false,
                AllowHeaders: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                AllowMethods: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                AllowOrigins: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                ExposeHeaders: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                MaxAge: 477665,
            },
            CredentialsArn: "minus",
            Description: "placeat",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: false,
            Name: "voluptatum",
            ProtocolType: "WEBSOCKET",
            RouteKey: "excepturi",
            RouteSelectionExpression: "nisi",
            Tags: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
                "ipsam": "repellendus",
            },
            Target: "sapiente",
            Version: "quo",
        },
        XAmzAlgorithm: "odit",
        XAmzContentSha256: "at",
        XAmzCredential: "at",
        XAmzDate: "maiores",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "quod",
        XAmzSignedHeaders: "quod",
    }

    ctx := context.Background()
    res, err := s.CreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
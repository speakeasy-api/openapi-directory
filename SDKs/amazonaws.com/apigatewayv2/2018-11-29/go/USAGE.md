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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAPIRequest{
        Headers: operations.CreateAPIHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "illum",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: false,
                AllowHeaders: []string{
                    "error",
                    "deserunt",
                },
                AllowMethods: []string{
                    "iure",
                    "magnam",
                },
                AllowOrigins: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
                ExposeHeaders: []string{
                    "minus",
                    "placeat",
                },
                MaxAge: 528895,
            },
            CredentialsArn: "iusto",
            Description: "excepturi",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: false,
            Name: "nisi",
            ProtocolType: "HTTP",
            RouteKey: "temporibus",
            RouteSelectionExpression: "ab",
            Tags: map[string]string{
                "veritatis": "deserunt",
                "perferendis": "ipsam",
            },
            Target: "repellendus",
            Version: "sapiente",
        },
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
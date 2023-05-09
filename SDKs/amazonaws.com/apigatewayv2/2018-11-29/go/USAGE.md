<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: sdk.String("corrupti"),
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: sdk.Bool(false),
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
                MaxAge: sdk.Int64(477665),
            },
            CredentialsArn: sdk.String("minus"),
            Description: sdk.String("placeat"),
            DisableExecuteAPIEndpoint: sdk.Bool(false),
            DisableSchemaValidation: sdk.Bool(false),
            Name: "Ted Mante",
            ProtocolType: operations.CreateAPIRequestBodyProtocolTypeEnumHTTP,
            RouteKey: sdk.String("ab"),
            RouteSelectionExpression: sdk.String("quis"),
            Tags: map[string]string{
                "deserunt": "perferendis",
            },
            Target: sdk.String("ipsam"),
            Version: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
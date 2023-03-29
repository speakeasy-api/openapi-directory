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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "nulla",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: false,
                AllowHeaders: []string{
                    "fuga",
                    "facilis",
                },
                AllowMethods: []string{
                    "iusto",
                    "ullam",
                },
                AllowOrigins: []string{
                    "inventore",
                    "sapiente",
                    "enim",
                    "eum",
                },
                ExposeHeaders: []string{
                    "autem",
                    "vel",
                },
                MaxAge: 528895,
            },
            CredentialsArn: "deleniti",
            Description: "similique",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: false,
            Name: "reprehenderit",
            ProtocolType: "HTTP",
            RouteKey: "quo",
            RouteSelectionExpression: "quasi",
            Tags: map[string]string{
                "dicta": "est",
                "voluptatem": "consequatur",
            },
            Target: "fugiat",
            Version: "a",
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
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAPIRequest{
        Headers: operations.CreateAPIHeaders{
            XAmzAlgorithm: "tenetur",
            XAmzContentSha256: "esse",
            XAmzCredential: "similique",
            XAmzDate: "mollitia",
            XAmzSecurityToken: "id",
            XAmzSignature: "laboriosam",
            XAmzSignedHeaders: "quam",
        },
        Request: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "maiores",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: map[string]interface{}{
                    "iusto": "aperiam",
                    "repellendus": "sunt",
                    "eum": "earum",
                },
                AllowHeaders: map[string]interface{}{
                    "officia": "aut",
                },
                AllowMethods: map[string]interface{}{
                    "quia": "quaerat",
                    "ea": "et",
                },
                AllowOrigins: map[string]interface{}{
                    "recusandae": "qui",
                    "qui": "aut",
                },
                ExposeHeaders: map[string]interface{}{
                    "cupiditate": "temporibus",
                    "saepe": "sed",
                    "voluptatem": "vel",
                },
                MaxAge: map[string]interface{}{
                    "nesciunt": "et",
                    "qui": "quis",
                },
            },
            CredentialsArn: "eligendi",
            Description: "velit",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: false,
            Name: "vero",
            ProtocolType: "HTTP",
            RouteKey: "et",
            RouteSelectionExpression: "voluptatem",
            Tags: map[string]string{
                "quae": "placeat",
            },
            Target: "vitae",
            Version: "rerum",
        },
    }
    
    res, err := s.CreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPIResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->
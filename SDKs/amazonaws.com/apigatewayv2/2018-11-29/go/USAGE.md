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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "voluptas",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: map[string]interface{}{
                    "et": "nihil",
                },
                AllowHeaders: map[string]interface{}{
                    "dicta": "debitis",
                    "voluptatum": "et",
                    "ut": "dolorem",
                },
                AllowMethods: map[string]interface{}{
                    "voluptate": "iste",
                    "vitae": "totam",
                },
                AllowOrigins: map[string]interface{}{
                    "illum": "debitis",
                },
                ExposeHeaders: map[string]interface{}{
                    "odio": "dolore",
                    "id": "aspernatur",
                },
                MaxAge: map[string]interface{}{
                    "totam": "commodi",
                    "quis": "est",
                    "aut": "odit",
                },
            },
            CredentialsArn: "non",
            Description: "voluptas",
            DisableExecuteAPIEndpoint: true,
            DisableSchemaValidation: false,
            Name: "illo",
            ProtocolType: "WEBSOCKET",
            RouteKey: "officiis",
            RouteSelectionExpression: "autem",
            Tags: map[string]string{
                "nobis": "odio",
            },
            Target: "qui",
            Version: "recusandae",
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
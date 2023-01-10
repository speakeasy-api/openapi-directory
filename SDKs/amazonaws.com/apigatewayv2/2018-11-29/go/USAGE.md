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
            XAmzAlgorithm: "ex",
            XAmzContentSha256: "iure",
            XAmzCredential: "et",
            XAmzDate: "quos",
            XAmzSecurityToken: "et",
            XAmzSignature: "explicabo",
            XAmzSignedHeaders: "necessitatibus",
        },
        Request: operations.CreateAPIRequestBody{
            APIKeySelectionExpression: "veniam",
            CorsConfiguration: &operations.CreateAPIRequestBodyCorsConfiguration{
                AllowCredentials: map[string]interface{}{
                    "in": "odit",
                },
                AllowHeaders: map[string]interface{}{
                    "corporis": "tenetur",
                    "esse": "similique",
                    "mollitia": "id",
                },
                AllowMethods: map[string]interface{}{
                    "quam": "maiores",
                    "totam": "iusto",
                    "aperiam": "repellendus",
                },
                AllowOrigins: map[string]interface{}{
                    "eum": "earum",
                    "et": "officia",
                },
                ExposeHeaders: map[string]interface{}{
                    "dolor": "quia",
                },
                MaxAge: map[string]interface{}{
                    "ea": "et",
                    "expedita": "recusandae",
                },
            },
            CredentialsArn: "qui",
            Description: "qui",
            DisableExecuteAPIEndpoint: false,
            DisableSchemaValidation: true,
            Name: "cupiditate",
            ProtocolType: "WEBSOCKET",
            RouteKey: "saepe",
            RouteSelectionExpression: "sed",
            Tags: map[string]string{
                "vel": "fugiat",
                "nesciunt": "et",
                "qui": "quis",
            },
            Target: "eligendi",
            Version: "velit",
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
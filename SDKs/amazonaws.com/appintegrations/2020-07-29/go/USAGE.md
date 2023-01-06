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
    
    req := operations.CreateEventIntegrationRequest{
        Headers: operations.CreateEventIntegrationHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "autem",
            XAmzDate: "vitae",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "non",
            XAmzSignedHeaders: "aut",
        },
        Request: operations.CreateEventIntegrationRequestBody{
            ClientToken: "autem",
            Description: "dolores",
            EventBridgeBus: "aperiam",
            EventFilter: operations.CreateEventIntegrationRequestBodyEventFilter{
                Source: "maiores",
            },
            Name: "culpa",
            Tags: map[string]string{
                "possimus": "harum",
                "laudantium": "odio",
            },
        },
    }
    
    res, err := s.CreateEventIntegration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEventIntegrationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->
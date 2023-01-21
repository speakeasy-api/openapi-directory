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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateEventIntegrationRequestBody{
            ClientToken: "voluptas",
            Description: "fugit",
            EventBridgeBus: "et",
            EventFilter: operations.CreateEventIntegrationRequestBodyEventFilter{
                Source: "nihil",
            },
            Name: "rerum",
            Tags: map[string]string{
                "debitis": "voluptatum",
                "et": "ut",
                "dolorem": "et",
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
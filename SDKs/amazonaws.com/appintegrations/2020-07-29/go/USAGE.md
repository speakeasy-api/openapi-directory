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
            XAmzAlgorithm: "asperiores",
            XAmzContentSha256: "voluptatem",
            XAmzCredential: "hic",
            XAmzDate: "doloribus",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "nemo",
            XAmzSignedHeaders: "architecto",
        },
        Request: operations.CreateEventIntegrationRequestBody{
            ClientToken: "neque",
            Description: "autem",
            EventBridgeBus: "saepe",
            EventFilter: operations.CreateEventIntegrationRequestBodyEventFilter{
                Source: "voluptatem",
            },
            Name: "error",
            Tags: map[string]string{
                "in": "mollitia",
                "autem": "distinctio",
                "consequuntur": "autem",
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
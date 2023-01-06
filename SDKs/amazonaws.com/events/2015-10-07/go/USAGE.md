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
    
    req := operations.ActivateEventSourceRequest{
        Headers: operations.ActivateEventSourceHeaders{
            XAmzAlgorithm: "autem",
            XAmzContentSha256: "hic",
            XAmzCredential: "voluptatem",
            XAmzDate: "omnis",
            XAmzSecurityToken: "libero",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "omnis",
            XAmzTarget: "AWSEvents.ActivateEventSource",
        },
        Request: shared.ActivateEventSourceRequest{
            Name: "nostrum",
        },
    }
    
    res, err := s.ActivateEventSource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->
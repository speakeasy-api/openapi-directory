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
            XAmzAlgorithm: "harum",
            XAmzContentSha256: "quisquam",
            XAmzCredential: "expedita",
            XAmzDate: "et",
            XAmzSecurityToken: "voluptate",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "dolores",
            XAmzTarget: "AWSEvents.ActivateEventSource",
        },
        Request: shared.ActivateEventSourceRequest{
            Name: "vel",
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
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
            XAmzAlgorithm: "non",
            XAmzContentSha256: "nihil",
            XAmzCredential: "laborum",
            XAmzDate: "recusandae",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "exercitationem",
            XAmzSignedHeaders: "iste",
            XAmzTarget: "AWSEvents.ActivateEventSource",
        },
        Request: shared.ActivateEventSourceRequest{
            Name: "id",
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
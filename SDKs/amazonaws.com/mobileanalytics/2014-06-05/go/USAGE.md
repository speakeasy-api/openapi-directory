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
    
    req := operations.PutEventsRequest{
        Headers: operations.PutEventsHeaders{
            XAmzAlgorithm: "aliquid",
            XAmzContentSha256: "repellendus",
            XAmzCredential: "sint",
            XAmzDate: "ratione",
            XAmzSecurityToken: "sed",
            XAmzSignature: "placeat",
            XAmzSignedHeaders: "ut",
            XAmzClientContext: "ipsam",
            XAmzClientContextEncoding: "aut",
        },
        Request: operations.PutEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "modi": "dolore",
                    },
                    EventType: "quia",
                    Metrics: map[string]float64{
                        "in": 9.200000,
                        "quis": 28.100000,
                        "deserunt": 55.200001,
                    },
                    Session: &shared.Session{
                        Duration: 8919715189446388193,
                        ID: "libero",
                        StartTimestamp: "voluptates",
                        StopTimestamp: "amet",
                    },
                    Timestamp: "sint",
                    Version: "nostrum",
                },
            },
        },
    }
    
    res, err := s.PutEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->
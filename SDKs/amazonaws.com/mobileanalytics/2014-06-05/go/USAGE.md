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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzClientContext: "voluptas",
            XAmzClientContextEncoding: "fugit",
        },
        Request: operations.PutEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "rerum": "dicta",
                    },
                    EventType: "debitis",
                    Metrics: map[string]float64{
                        "et": 11.100000,
                    },
                    Session: &shared.Session{
                        Duration: 7259475919510918339,
                        ID: "voluptate",
                        StartTimestamp: "iste",
                        StopTimestamp: "vitae",
                    },
                    Timestamp: "totam",
                    Version: "dolores",
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
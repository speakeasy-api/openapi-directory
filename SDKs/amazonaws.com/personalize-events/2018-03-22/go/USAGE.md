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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "est",
            XAmzCredential: "id",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "fuga",
            XAmzSignature: "aperiam",
            XAmzSignedHeaders: "facilis",
        },
        Request: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "atque",
                    EventType: "recusandae",
                    EventValue: 44.099998,
                    Impression: []string{
                        "atque",
                        "iure",
                        "qui",
                    },
                    ItemID: "voluptas",
                    Properties: "sunt",
                    RecommendationID: "ratione",
                    SentAt: "2013-10-07T01:00:59Z",
                },
                shared.Event{
                    EventID: "excepturi",
                    EventType: "vel",
                    EventValue: 63.099998,
                    Impression: []string{
                        "sapiente",
                    },
                    ItemID: "officia",
                    Properties: "id",
                    RecommendationID: "voluptatibus",
                    SentAt: "1995-07-01T12:28:08Z",
                },
            },
            SessionID: "dolor",
            TrackingID: "itaque",
            UserID: "veritatis",
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
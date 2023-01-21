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
        },
        Request: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "fugit",
                    EventType: "et",
                    EventValue: 68.199997,
                    Impression: []string{
                        "debitis",
                        "voluptatum",
                        "et",
                    },
                    ItemID: "ut",
                    Properties: "dolorem",
                    RecommendationID: "et",
                    SentAt: "1998-09-30T11:01:25Z",
                },
                shared.Event{
                    EventID: "vitae",
                    EventType: "totam",
                    EventValue: 80.199997,
                    Impression: []string{
                        "vel",
                    },
                    ItemID: "odio",
                    Properties: "dolore",
                    RecommendationID: "id",
                    SentAt: "2015-12-03T16:44:03Z",
                },
                shared.Event{
                    EventID: "accusantium",
                    EventType: "totam",
                    EventValue: 64.099998,
                    Impression: []string{
                        "aut",
                        "odit",
                    },
                    ItemID: "non",
                    Properties: "voluptas",
                    RecommendationID: "omnis",
                    SentAt: "2015-03-08T17:52:36Z",
                },
            },
            SessionID: "illo",
            TrackingID: "sed",
            UserID: "officiis",
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
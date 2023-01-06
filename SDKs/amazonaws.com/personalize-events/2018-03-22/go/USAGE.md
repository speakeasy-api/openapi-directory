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
            XAmzAlgorithm: "quidem",
            XAmzContentSha256: "rerum",
            XAmzCredential: "id",
            XAmzDate: "facilis",
            XAmzSecurityToken: "cum",
            XAmzSignature: "occaecati",
            XAmzSignedHeaders: "quia",
        },
        Request: operations.PutEventsRequestBody{
            EventList: []shared.Event{
                shared.Event{
                    EventID: "dicta",
                    EventType: "ducimus",
                    EventValue: 16.200001,
                    Impression: []string{
                        "eos",
                    },
                    ItemID: "sit",
                    Properties: "et",
                    RecommendationID: "sed",
                    SentAt: "1977-02-01T10:40:02Z",
                },
            },
            SessionID: "voluptatum",
            TrackingID: "dolor",
            UserID: "sed",
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
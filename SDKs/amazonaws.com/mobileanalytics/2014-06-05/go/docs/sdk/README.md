# SDK

## Overview

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mobileanalytics/>
### Available Operations

* [PutEvents](#putevents) - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

## PutEvents

The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutEvents(ctx, operations.PutEventsRequest{
        RequestBody: operations.PutEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "accusamus": "commodi",
                        "repudiandae": "quae",
                    },
                    EventType: "ipsum",
                    Metrics: map[string]float64{
                        "molestias": 5666.02,
                        "pariatur": 2653.89,
                        "praesentium": 5232.48,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(916723),
                        ID: sdk.String("1e91e450-ad2a-4bd4-8269-802d502a94bb"),
                        StartTimestamp: sdk.String("labore"),
                        StopTimestamp: sdk.String("delectus"),
                    },
                    Timestamp: "eum",
                    Version: sdk.String("non"),
                },
                shared.Event{
                    Attributes: map[string]string{
                        "sint": "aliquid",
                        "provident": "necessitatibus",
                        "sint": "officia",
                        "dolor": "debitis",
                    },
                    EventType: "a",
                    Metrics: map[string]float64{
                        "in": 4491.98,
                        "illum": 9785.71,
                        "rerum": 1162.02,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(297437),
                        ID: sdk.String("cd66ae39-5efb-49ba-88f3-a66997074ba4"),
                        StartTimestamp: sdk.String("labore"),
                        StopTimestamp: sdk.String("suscipit"),
                    },
                    Timestamp: "natus",
                    Version: sdk.String("nobis"),
                },
                shared.Event{
                    Attributes: map[string]string{
                        "vero": "aspernatur",
                        "architecto": "magnam",
                    },
                    EventType: "et",
                    Metrics: map[string]float64{
                        "ullam": 5908.73,
                        "quos": 5743.25,
                        "accusantium": 6532.01,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(968962),
                        ID: sdk.String("a563e251-6fe4-4c8b-b11e-5b7fd2ed0289"),
                        StartTimestamp: sdk.String("magni"),
                        StopTimestamp: sdk.String("sunt"),
                    },
                    Timestamp: "quo",
                    Version: sdk.String("illum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzClientContext: "ab",
        XAmzClientContextEncoding: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

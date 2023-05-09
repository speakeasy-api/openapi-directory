<!-- Start SDK Example Usage -->
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
    res, err := s.PutEvents(ctx, operations.PutEventsRequest{
        RequestBody: operations.PutEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Attributes: map[string]string{
                        "distinctio": "quibusdam",
                        "unde": "nulla",
                        "corrupti": "illum",
                    },
                    EventType: "vel",
                    Metrics: map[string]float64{
                        "deserunt": 3843.82,
                        "iure": 2975.34,
                        "debitis": 567.13,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(963663),
                        ID: sdk.String("467cc879-6ed1-451a-85df-c2ddf7cc78ca"),
                        StartTimestamp: sdk.String("dicta"),
                        StopTimestamp: sdk.String("nam"),
                    },
                    Timestamp: "officia",
                    Version: sdk.String("occaecati"),
                },
                shared.Event{
                    Attributes: map[string]string{
                        "deleniti": "hic",
                    },
                    EventType: "optio",
                    Metrics: map[string]float64{
                        "beatae": 4146.62,
                        "molestiae": 2645.55,
                        "qui": 7742.34,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(736918),
                        ID: sdk.String("73920592-9396-4fea-b596-eb10faaa2352"),
                        StartTimestamp: sdk.String("nobis"),
                        StopTimestamp: sdk.String("enim"),
                    },
                    Timestamp: "omnis",
                    Version: sdk.String("nemo"),
                },
                shared.Event{
                    Attributes: map[string]string{
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                    EventType: "doloribus",
                    Metrics: map[string]float64{
                        "architecto": 6527.9,
                        "dolorem": 6350.59,
                        "consequuntur": 9953,
                        "mollitia": 5818.5,
                    },
                    Session: &shared.Session{
                        Duration: sdk.Int64(253291),
                        ID: sdk.String("67739251-aa52-4c3f-9ad0-19da1ffe78f0"),
                        StartTimestamp: sdk.String("omnis"),
                        StopTimestamp: sdk.String("voluptate"),
                    },
                    Timestamp: "cum",
                    Version: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzClientContext: "iusto",
        XAmzClientContextEncoding: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchGetMetricDataRequest{
        Headers: operations.BatchGetMetricDataHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "fuga": "facilis",
                        "eum": "iusto",
                    },
                    EndDate: "2022-12-10T22:08:53.409Z",
                    ID: "saepe",
                    Metric: "SEND",
                    Namespace: "VDM",
                    StartDate: "2022-12-20T00:04:55.792Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                    EndDate: "2022-10-05T07:57:04.826Z",
                    ID: "similique",
                    Metric: "TRANSIENT_BOUNCE",
                    Namespace: "VDM",
                    StartDate: "2022-05-28T08:30:05.205Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "laboriosam": "dicta",
                    },
                    EndDate: "2022-08-04T22:33:56.773Z",
                    ID: "voluptatem",
                    Metric: "TRANSIENT_BOUNCE",
                    Namespace: "VDM",
                    StartDate: "2022-04-14T03:52:20.434Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "eos": "accusamus",
                        "accusamus": "reiciendis",
                        "rem": "quibusdam",
                        "et": "praesentium",
                    },
                    EndDate: "2022-09-20T13:10:07.121Z",
                    ID: "dolor",
                    Metric: "DELIVERY",
                    Namespace: "VDM",
                    StartDate: "2022-07-09T11:48:33.845Z",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchGetMetricData(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetMetricDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
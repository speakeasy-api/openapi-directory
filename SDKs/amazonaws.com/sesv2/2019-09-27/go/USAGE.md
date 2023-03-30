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
                    EndDate: "2022-12-11T09:37:57.365Z",
                    ID: "saepe",
                    Metric: "SEND",
                    Namespace: "VDM",
                    StartDate: "2022-12-20T11:33:59.748Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                    EndDate: "2022-10-05T19:26:08.783Z",
                    ID: "similique",
                    Metric: "TRANSIENT_BOUNCE",
                    Namespace: "VDM",
                    StartDate: "2022-05-28T19:59:09.162Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "laboriosam": "dicta",
                    },
                    EndDate: "2022-08-05T10:03:00.729Z",
                    ID: "voluptatem",
                    Metric: "TRANSIENT_BOUNCE",
                    Namespace: "VDM",
                    StartDate: "2022-04-14T15:21:24.390Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "eos": "accusamus",
                        "accusamus": "reiciendis",
                        "rem": "quibusdam",
                        "et": "praesentium",
                    },
                    EndDate: "2022-09-21T00:39:11.076Z",
                    ID: "dolor",
                    Metric: "DELIVERY",
                    Namespace: "VDM",
                    StartDate: "2022-07-09T23:17:37.800Z",
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
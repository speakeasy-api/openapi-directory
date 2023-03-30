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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchGetMetricDataRequestBody{
            Queries: []shared.BatchGetMetricDataQuery{
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                    EndDate: "2022-12-11T12:26:49.077Z",
                    ID: "debitis",
                    Metric: "SEND",
                    Namespace: "VDM",
                    StartDate: "2022-04-12T09:09:52.127Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "suscipit": "molestiae",
                        "minus": "placeat",
                    },
                    EndDate: "2022-09-18T01:43:50.375Z",
                    ID: "iusto",
                    Metric: "CLICK",
                    Namespace: "VDM",
                    StartDate: "2022-11-06T18:03:19.248Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    EndDate: "2022-04-14T18:10:16.103Z",
                    ID: "quo",
                    Metric: "COMPLAINT",
                    Namespace: "VDM",
                    StartDate: "2022-05-16T13:32:37.951Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    EndDate: "2023-02-14T22:45:57.986Z",
                    ID: "nam",
                    Metric: "DELIVERY",
                    Namespace: "VDM",
                    StartDate: "2022-08-29T16:21:24.540Z",
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
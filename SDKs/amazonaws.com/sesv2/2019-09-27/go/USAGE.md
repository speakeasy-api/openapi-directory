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
                    EndDate: "2022-12-11T12:00:49.144Z",
                    ID: "debitis",
                    Metric: "SEND",
                    Namespace: "VDM",
                    StartDate: "2022-04-12T08:43:52.194Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "suscipit": "molestiae",
                        "minus": "placeat",
                    },
                    EndDate: "2022-09-18T01:17:50.442Z",
                    ID: "iusto",
                    Metric: "CLICK",
                    Namespace: "VDM",
                    StartDate: "2022-11-06T17:37:19.316Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    EndDate: "2022-04-14T17:44:16.172Z",
                    ID: "quo",
                    Metric: "COMPLAINT",
                    Namespace: "VDM",
                    StartDate: "2022-05-16T13:06:38.019Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    EndDate: "2023-02-14T22:19:58.055Z",
                    ID: "nam",
                    Metric: "DELIVERY",
                    Namespace: "VDM",
                    StartDate: "2022-08-29T15:55:24.610Z",
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
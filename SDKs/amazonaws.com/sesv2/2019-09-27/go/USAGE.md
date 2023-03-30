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
                    EndDate: "2022-02-09T12:04:06.508Z",
                    ID: "ipsa",
                    Metric: "DELIVERY_COMPLAINT",
                    Namespace: "VDM",
                    StartDate: "2022-08-14T01:03:07.567Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "minus": "placeat",
                        "voluptatum": "iusto",
                    },
                    EndDate: "2022-03-20T06:24:36.919Z",
                    ID: "recusandae",
                    Metric: "DELIVERY_CLICK",
                    Namespace: "VDM",
                    StartDate: "2022-08-30T20:24:33.984Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "deserunt": "perferendis",
                    },
                    EndDate: "2022-03-03T02:15:00.468Z",
                    ID: "sapiente",
                    Metric: "DELIVERY_OPEN",
                    Namespace: "VDM",
                    StartDate: "2022-02-17T10:41:36.857Z",
                },
                shared.BatchGetMetricDataQuery{
                    Dimensions: map[string]string{
                        "maiores": "molestiae",
                        "quod": "quod",
                        "esse": "totam",
                        "porro": "dolorum",
                    },
                    EndDate: "2022-04-12T23:15:28.420Z",
                    ID: "officia",
                    Metric: "CLICK",
                    Namespace: "VDM",
                    StartDate: "2022-06-18T20:36:37.412Z",
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
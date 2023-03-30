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

    req := operations.BatchPutMetricsRequest{
        Headers: operations.BatchPutMetricsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchPutMetricsRequestBody{
            MetricData: []shared.RawMetricData{
                shared.RawMetricData{
                    MetricName: "vel",
                    Step: 623564,
                    Timestamp: "2022-08-06T08:22:51.090Z",
                    Value: 3843.82,
                },
                shared.RawMetricData{
                    MetricName: "iure",
                    Step: 297534,
                    Timestamp: "2022-05-08T14:28:54.766Z",
                    Value: 567.13,
                },
                shared.RawMetricData{
                    MetricName: "delectus",
                    Step: 272656,
                    Timestamp: "2022-11-10T03:27:55.826Z",
                    Value: 4776.65,
                },
                shared.RawMetricData{
                    MetricName: "minus",
                    Step: 812169,
                    Timestamp: "2022-09-18T01:17:37.542Z",
                    Value: 4799.77,
                },
            },
            TrialComponentName: "excepturi",
        },
    }

    ctx := context.Background()
    res, err := s.BatchPutMetrics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMetricsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchPutMetricsRequestBody{
            MetricData: []shared.RawMetricData{
                shared.RawMetricData{
                    MetricName: "nihil",
                    Step: 623564,
                    Timestamp: "2022-08-06T05:59:43.386Z",
                    Value: 3843.82,
                },
                shared.RawMetricData{
                    MetricName: "iusto",
                    Step: 297534,
                    Timestamp: "2022-05-08T12:05:47.062Z",
                    Value: 567.13,
                },
                shared.RawMetricData{
                    MetricName: "sapiente",
                    Step: 272656,
                    Timestamp: "2022-11-10T01:04:48.122Z",
                    Value: 4776.65,
                },
                shared.RawMetricData{
                    MetricName: "autem",
                    Step: 812169,
                    Timestamp: "2022-09-17T22:54:29.838Z",
                    Value: 4799.77,
                },
            },
            TrialComponentName: "similique",
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
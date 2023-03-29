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
                    Timestamp: "2022-08-05T18:30:56.531Z",
                    Value: 3843.82,
                },
                shared.RawMetricData{
                    MetricName: "iusto",
                    Step: 297534,
                    Timestamp: "2022-05-08T00:37:00.208Z",
                    Value: 567.13,
                },
                shared.RawMetricData{
                    MetricName: "sapiente",
                    Step: 272656,
                    Timestamp: "2022-11-09T13:36:01.267Z",
                    Value: 4776.65,
                },
                shared.RawMetricData{
                    MetricName: "autem",
                    Step: 812169,
                    Timestamp: "2022-09-17T11:25:42.983Z",
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
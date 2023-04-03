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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchPutMetricsRequest{
        RequestBody: operations.BatchPutMetricsRequestBody{
            MetricData: []shared.RawMetricData{
                shared.RawMetricData{
                    MetricName: "provident",
                    Step: 715190,
                    Timestamp: "2021-03-11T23:22:42.658Z",
                    Value: 8579.46,
                },
                shared.RawMetricData{
                    MetricName: "corrupti",
                    Step: 847252,
                    Timestamp: "2022-05-18T09:34:54.894Z",
                    Value: 6458.94,
                },
                shared.RawMetricData{
                    MetricName: "suscipit",
                    Step: 437587,
                    Timestamp: "2022-02-09T12:04:06.508Z",
                    Value: 567.13,
                },
            },
            TrialComponentName: "delectus",
        },
        XAmzAlgorithm: "tempora",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "molestiae",
        XAmzDate: "minus",
        XAmzSecurityToken: "placeat",
        XAmzSignature: "voluptatum",
        XAmzSignedHeaders: "iusto",
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
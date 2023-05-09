<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchPutMetrics(ctx, operations.BatchPutMetricsRequest{
        RequestBody: operations.BatchPutMetricsRequestBody{
            MetricData: []shared.RawMetricData{
                shared.RawMetricData{
                    MetricName: "provident",
                    Step: sdk.Int64(715190),
                    Timestamp: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
                    Value: 8579.46,
                },
                shared.RawMetricData{
                    MetricName: "corrupti",
                    Step: sdk.Int64(847252),
                    Timestamp: types.MustTimeFromString("2022-05-18T09:34:54.894Z"),
                    Value: 6458.94,
                },
                shared.RawMetricData{
                    MetricName: "suscipit",
                    Step: sdk.Int64(437587),
                    Timestamp: types.MustTimeFromString("2022-02-09T12:04:06.508Z"),
                    Value: 567.13,
                },
            },
            TrialComponentName: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMetricsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
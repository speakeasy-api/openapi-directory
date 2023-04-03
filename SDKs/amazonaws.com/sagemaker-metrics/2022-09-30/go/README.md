# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sagemaker-metrics/2022-09-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchPutMetrics` - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

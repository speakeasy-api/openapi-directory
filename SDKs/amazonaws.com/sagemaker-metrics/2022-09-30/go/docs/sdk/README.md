# SDK

## Overview

<p>Contains all data plane API operations and data types for Amazon SageMaker Metrics. Use these APIs to put and retrieve (get) features related to your training run.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_metrics_BatchPutMetrics.html">BatchPutMetrics</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [BatchPutMetrics](#batchputmetrics) - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

## BatchPutMetrics

Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

### Example Usage

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
    res, err := s.SDK.BatchPutMetrics(ctx, operations.BatchPutMetricsRequest{
        RequestBody: operations.BatchPutMetricsRequestBody{
            MetricData: []shared.RawMetricData{
                shared.RawMetricData{
                    MetricName: "nisi",
                    Step: sdk.Int64(925597),
                    Timestamp: types.MustTimeFromString("2022-10-15T05:10:19.629Z"),
                    Value: 3373.96,
                },
                shared.RawMetricData{
                    MetricName: "veritatis",
                    Step: sdk.Int64(648172),
                    Timestamp: types.MustTimeFromString("2022-08-19T14:12:14.246Z"),
                    Value: 8326.2,
                },
                shared.RawMetricData{
                    MetricName: "sapiente",
                    Step: sdk.Int64(778157),
                    Timestamp: types.MustTimeFromString("2022-02-17T10:41:36.857Z"),
                    Value: 8700.88,
                },
            },
            TrialComponentName: "maiores",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMetricsResponse != nil {
        // handle response
    }
}
```

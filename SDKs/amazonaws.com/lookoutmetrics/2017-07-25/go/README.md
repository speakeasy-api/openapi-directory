# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/lookoutmetrics/2017-07-25/go
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

    req := operations.ActivateAnomalyDetectorRequest{
        RequestBody: operations.ActivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.ActivateAnomalyDetector(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateAnomalyDetectorResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `ActivateAnomalyDetector` - Activates an anomaly detector.
* `BackTestAnomalyDetector` - Runs a backtest for anomaly detection for the specified resource.
* `CreateAlert` - Creates an alert for an anomaly detector.
* `CreateAnomalyDetector` - Creates an anomaly detector.
* `CreateMetricSet` - Creates a dataset.
* `DeactivateAnomalyDetector` - Deactivates an anomaly detector.
* `DeleteAlert` - Deletes an alert.
* `DeleteAnomalyDetector` - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* `DescribeAlert` - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `DescribeAnomalyDetectionExecutions` - Returns information about the status of the specified anomaly detection jobs.
* `DescribeAnomalyDetector` - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `DescribeMetricSet` - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `DetectMetricSetConfig` - Detects an Amazon S3 dataset's file format, interval, and offset.
* `GetAnomalyGroup` - Returns details about a group of anomalous metrics.
* `GetDataQualityMetrics` - Returns details about the requested data quality metrics.
* `GetFeedback` - Get feedback for an anomaly group.
* `GetSampleData` - Returns a selection of sample records from an Amazon S3 datasource.
* `ListAlerts` - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `ListAnomalyDetectors` - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `ListAnomalyGroupRelatedMetrics` - Returns a list of measures that are potential causes or effects of an anomaly group.
* `ListAnomalyGroupSummaries` - Returns a list of anomaly groups.
* `ListAnomalyGroupTimeSeries` - Gets a list of anomalous metrics for a measure in an anomaly group.
* `ListMetricSets` - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `ListTagsForResource` - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* `PutFeedback` - Add feedback for an anomalous metric.
* `TagResource` - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* `UntagResource` - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* `UpdateAlert` - Make changes to an existing alert.
* `UpdateAnomalyDetector` - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* `UpdateMetricSet` - Updates a dataset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActivateAnomalyDetector(ctx, operations.ActivateAnomalyDetectorRequest{
        RequestBody: operations.ActivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
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

### [SDK](docs/sdk/README.md)

* [ActivateAnomalyDetector](docs/sdk/README.md#activateanomalydetector) - Activates an anomaly detector.
* [BackTestAnomalyDetector](docs/sdk/README.md#backtestanomalydetector) - Runs a backtest for anomaly detection for the specified resource.
* [CreateAlert](docs/sdk/README.md#createalert) - Creates an alert for an anomaly detector.
* [CreateAnomalyDetector](docs/sdk/README.md#createanomalydetector) - Creates an anomaly detector.
* [CreateMetricSet](docs/sdk/README.md#createmetricset) - Creates a dataset.
* [DeactivateAnomalyDetector](docs/sdk/README.md#deactivateanomalydetector) - Deactivates an anomaly detector.
* [DeleteAlert](docs/sdk/README.md#deletealert) - Deletes an alert.
* [DeleteAnomalyDetector](docs/sdk/README.md#deleteanomalydetector) - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* [DescribeAlert](docs/sdk/README.md#describealert) - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DescribeAnomalyDetectionExecutions](docs/sdk/README.md#describeanomalydetectionexecutions) - Returns information about the status of the specified anomaly detection jobs.
* [DescribeAnomalyDetector](docs/sdk/README.md#describeanomalydetector) - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DescribeMetricSet](docs/sdk/README.md#describemetricset) - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [DetectMetricSetConfig](docs/sdk/README.md#detectmetricsetconfig) - Detects an Amazon S3 dataset's file format, interval, and offset.
* [GetAnomalyGroup](docs/sdk/README.md#getanomalygroup) - Returns details about a group of anomalous metrics.
* [GetDataQualityMetrics](docs/sdk/README.md#getdataqualitymetrics) - Returns details about the requested data quality metrics.
* [GetFeedback](docs/sdk/README.md#getfeedback) - Get feedback for an anomaly group.
* [GetSampleData](docs/sdk/README.md#getsampledata) - Returns a selection of sample records from an Amazon S3 datasource.
* [ListAlerts](docs/sdk/README.md#listalerts) - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListAnomalyDetectors](docs/sdk/README.md#listanomalydetectors) - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListAnomalyGroupRelatedMetrics](docs/sdk/README.md#listanomalygrouprelatedmetrics) - Returns a list of measures that are potential causes or effects of an anomaly group.
* [ListAnomalyGroupSummaries](docs/sdk/README.md#listanomalygroupsummaries) - Returns a list of anomaly groups.
* [ListAnomalyGroupTimeSeries](docs/sdk/README.md#listanomalygrouptimeseries) - Gets a list of anomalous metrics for a measure in an anomaly group.
* [ListMetricSets](docs/sdk/README.md#listmetricsets) - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* [PutFeedback](docs/sdk/README.md#putfeedback) - Add feedback for an anomalous metric.
* [TagResource](docs/sdk/README.md#tagresource) - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* [UpdateAlert](docs/sdk/README.md#updatealert) - Make changes to an existing alert.
* [UpdateAnomalyDetector](docs/sdk/README.md#updateanomalydetector) - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* [UpdateMetricSet](docs/sdk/README.md#updatemetricset) - Updates a dataset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

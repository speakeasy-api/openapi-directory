# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequest;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorRequestBody;
import org.openapis.openapi.models.operations.ActivateAnomalyDetectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateAnomalyDetectorRequest req = new ActivateAnomalyDetectorRequest(                new ActivateAnomalyDetectorRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            ActivateAnomalyDetectorResponse res = sdk.activateAnomalyDetector(req);

            if (res.activateAnomalyDetectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [activateAnomalyDetector](docs/sdk/README.md#activateanomalydetector) - Activates an anomaly detector.
* [backTestAnomalyDetector](docs/sdk/README.md#backtestanomalydetector) - Runs a backtest for anomaly detection for the specified resource.
* [createAlert](docs/sdk/README.md#createalert) - Creates an alert for an anomaly detector.
* [createAnomalyDetector](docs/sdk/README.md#createanomalydetector) - Creates an anomaly detector.
* [createMetricSet](docs/sdk/README.md#createmetricset) - Creates a dataset.
* [deactivateAnomalyDetector](docs/sdk/README.md#deactivateanomalydetector) - Deactivates an anomaly detector.
* [deleteAlert](docs/sdk/README.md#deletealert) - Deletes an alert.
* [deleteAnomalyDetector](docs/sdk/README.md#deleteanomalydetector) - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* [describeAlert](docs/sdk/README.md#describealert) - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeAnomalyDetectionExecutions](docs/sdk/README.md#describeanomalydetectionexecutions) - Returns information about the status of the specified anomaly detection jobs.
* [describeAnomalyDetector](docs/sdk/README.md#describeanomalydetector) - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeMetricSet](docs/sdk/README.md#describemetricset) - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [detectMetricSetConfig](docs/sdk/README.md#detectmetricsetconfig) - Detects an Amazon S3 dataset's file format, interval, and offset.
* [getAnomalyGroup](docs/sdk/README.md#getanomalygroup) - Returns details about a group of anomalous metrics.
* [getDataQualityMetrics](docs/sdk/README.md#getdataqualitymetrics) - Returns details about the requested data quality metrics.
* [getFeedback](docs/sdk/README.md#getfeedback) - Get feedback for an anomaly group.
* [getSampleData](docs/sdk/README.md#getsampledata) - Returns a selection of sample records from an Amazon S3 datasource.
* [listAlerts](docs/sdk/README.md#listalerts) - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyDetectors](docs/sdk/README.md#listanomalydetectors) - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyGroupRelatedMetrics](docs/sdk/README.md#listanomalygrouprelatedmetrics) - Returns a list of measures that are potential causes or effects of an anomaly group.
* [listAnomalyGroupSummaries](docs/sdk/README.md#listanomalygroupsummaries) - Returns a list of anomaly groups.
* [listAnomalyGroupTimeSeries](docs/sdk/README.md#listanomalygrouptimeseries) - Gets a list of anomalous metrics for a measure in an anomaly group.
* [listMetricSets](docs/sdk/README.md#listmetricsets) - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* [putFeedback](docs/sdk/README.md#putfeedback) - Add feedback for an anomalous metric.
* [tagResource](docs/sdk/README.md#tagresource) - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* [untagResource](docs/sdk/README.md#untagresource) - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* [updateAlert](docs/sdk/README.md#updatealert) - Make changes to an existing alert.
* [updateAnomalyDetector](docs/sdk/README.md#updateanomalydetector) - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* [updateMetricSet](docs/sdk/README.md#updatemetricset) - Updates a dataset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

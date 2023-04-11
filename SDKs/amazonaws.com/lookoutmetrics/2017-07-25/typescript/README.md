# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/lookoutmetrics/2017-07-25/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/lookoutmetrics/2017-07-25/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ActivateAnomalyDetectorRequest,
  ActivateAnomalyDetectorResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ActivateAnomalyDetectorRequest = {
  requestBody: {
    anomalyDetectorArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.activateAnomalyDetector(req).then((res: ActivateAnomalyDetectorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `activateAnomalyDetector` - Activates an anomaly detector.
* `backTestAnomalyDetector` - Runs a backtest for anomaly detection for the specified resource.
* `createAlert` - Creates an alert for an anomaly detector.
* `createAnomalyDetector` - Creates an anomaly detector.
* `createMetricSet` - Creates a dataset.
* `deactivateAnomalyDetector` - Deactivates an anomaly detector.
* `deleteAlert` - Deletes an alert.
* `deleteAnomalyDetector` - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* `describeAlert` - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `describeAnomalyDetectionExecutions` - Returns information about the status of the specified anomaly detection jobs.
* `describeAnomalyDetector` - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `describeMetricSet` - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `detectMetricSetConfig` - Detects an Amazon S3 dataset's file format, interval, and offset.
* `getAnomalyGroup` - Returns details about a group of anomalous metrics.
* `getDataQualityMetrics` - Returns details about the requested data quality metrics.
* `getFeedback` - Get feedback for an anomaly group.
* `getSampleData` - Returns a selection of sample records from an Amazon S3 datasource.
* `listAlerts` - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `listAnomalyDetectors` - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `listAnomalyGroupRelatedMetrics` - Returns a list of measures that are potential causes or effects of an anomaly group.
* `listAnomalyGroupSummaries` - Returns a list of anomaly groups.
* `listAnomalyGroupTimeSeries` - Gets a list of anomalous metrics for a measure in an anomaly group.
* `listMetricSets` - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* `listTagsForResource` - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* `putFeedback` - Add feedback for an anomalous metric.
* `tagResource` - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* `untagResource` - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* `updateAlert` - Make changes to an existing alert.
* `updateAnomalyDetector` - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* `updateMetricSet` - Updates a dataset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


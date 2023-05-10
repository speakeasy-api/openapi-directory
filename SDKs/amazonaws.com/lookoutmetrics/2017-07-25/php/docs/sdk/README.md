# SDK

## Overview

This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon Lookout for Metrics Developer Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutmetrics/>
### Available Operations

* [activateAnomalyDetector](#activateanomalydetector) - Activates an anomaly detector.
* [backTestAnomalyDetector](#backtestanomalydetector) - Runs a backtest for anomaly detection for the specified resource.
* [createAlert](#createalert) - Creates an alert for an anomaly detector.
* [createAnomalyDetector](#createanomalydetector) - Creates an anomaly detector.
* [createMetricSet](#createmetricset) - Creates a dataset.
* [deactivateAnomalyDetector](#deactivateanomalydetector) - Deactivates an anomaly detector.
* [deleteAlert](#deletealert) - Deletes an alert.
* [deleteAnomalyDetector](#deleteanomalydetector) - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
* [describeAlert](#describealert) - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeAnomalyDetectionExecutions](#describeanomalydetectionexecutions) - Returns information about the status of the specified anomaly detection jobs.
* [describeAnomalyDetector](#describeanomalydetector) - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [describeMetricSet](#describemetricset) - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [detectMetricSetConfig](#detectmetricsetconfig) - Detects an Amazon S3 dataset's file format, interval, and offset.
* [getAnomalyGroup](#getanomalygroup) - Returns details about a group of anomalous metrics.
* [getDataQualityMetrics](#getdataqualitymetrics) - Returns details about the requested data quality metrics.
* [getFeedback](#getfeedback) - Get feedback for an anomaly group.
* [getSampleData](#getsampledata) - Returns a selection of sample records from an Amazon S3 datasource.
* [listAlerts](#listalerts) - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyDetectors](#listanomalydetectors) - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listAnomalyGroupRelatedMetrics](#listanomalygrouprelatedmetrics) - Returns a list of measures that are potential causes or effects of an anomaly group.
* [listAnomalyGroupSummaries](#listanomalygroupsummaries) - Returns a list of anomaly groups.
* [listAnomalyGroupTimeSeries](#listanomalygrouptimeseries) - Gets a list of anomalous metrics for a measure in an anomaly group.
* [listMetricSets](#listmetricsets) - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
* [listTagsForResource](#listtagsforresource) - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
* [putFeedback](#putfeedback) - Add feedback for an anomalous metric.
* [tagResource](#tagresource) - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
* [untagResource](#untagresource) - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
* [updateAlert](#updatealert) - Make changes to an existing alert.
* [updateAnomalyDetector](#updateanomalydetector) - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
* [updateMetricSet](#updatemetricset) - Updates a dataset.

## activateAnomalyDetector

Activates an anomaly detector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateAnomalyDetectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateAnomalyDetectorRequest();
    $request->requestBody = new ActivateAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->activateAnomalyDetector($request);

    if ($response->activateAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## backTestAnomalyDetector

Runs a backtest for anomaly detection for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BackTestAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\BackTestAnomalyDetectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BackTestAnomalyDetectorRequest();
    $request->requestBody = new BackTestAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->backTestAnomalyDetector($request);

    if ($response->backTestAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlert

Creates an alert for an anomaly detector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertRequestBodyAction;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SNSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SnsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertRequestBodyAlertFilters;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlertRequest();
    $request->requestBody = new CreateAlertRequestBody();
    $request->requestBody->action = new CreateAlertRequestBodyAction();
    $request->requestBody->action->lambdaConfiguration = new LambdaConfiguration();
    $request->requestBody->action->lambdaConfiguration->lambdaArn = 'excepturi';
    $request->requestBody->action->lambdaConfiguration->roleArn = 'nisi';
    $request->requestBody->action->snsConfiguration = new SNSConfiguration();
    $request->requestBody->action->snsConfiguration->roleArn = 'recusandae';
    $request->requestBody->action->snsConfiguration->snsFormat = SnsFormatEnum::JSON;
    $request->requestBody->action->snsConfiguration->snsTopicArn = 'ab';
    $request->requestBody->alertDescription = 'quis';
    $request->requestBody->alertFilters = new CreateAlertRequestBodyAlertFilters();
    $request->requestBody->alertFilters->dimensionFilterList = [
        new DimensionFilter(),
    ];
    $request->requestBody->alertFilters->metricList = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->requestBody->alertName = 'sapiente';
    $request->requestBody->alertSensitivityThreshold = 778157;
    $request->requestBody->anomalyDetectorArn = 'odit';
    $request->requestBody->tags = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->createAlert($request);

    if ($response->createAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAnomalyDetector

Creates an anomaly detector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyDetectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnomalyDetectorRequest();
    $request->requestBody = new CreateAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorConfig = new CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig();
    $request->requestBody->anomalyDetectorConfig->anomalyDetectorFrequency = FrequencyEnum::PT5_M;
    $request->requestBody->anomalyDetectorDescription = 'optio';
    $request->requestBody->anomalyDetectorName = 'totam';
    $request->requestBody->kmsKeyArn = 'beatae';
    $request->requestBody->tags = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createAnomalyDetector($request);

    if ($response->createAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMetricSet

Creates a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricSetDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\AggregationFunctionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricSetRequestBodyMetricSetFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricSetRequestBodyMetricSource;
use \OpenAPI\OpenAPI\Models\Shared\AppFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\AthenaSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackTestConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\RDSSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CsvFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CSVFileCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileCompressionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMetricSetRequestBodyTimestampColumn;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMetricSetRequest();
    $request->requestBody = new CreateMetricSetRequestBody();
    $request->requestBody->anomalyDetectorArn = 'natus';
    $request->requestBody->dimensionFilterList = [
        new MetricSetDimensionFilter(),
    ];
    $request->requestBody->dimensionList = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->requestBody->metricList = [
        new Metric(),
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->requestBody->metricSetDescription = 'saepe';
    $request->requestBody->metricSetFrequency = CreateMetricSetRequestBodyMetricSetFrequencyEnum::PT10_M;
    $request->requestBody->metricSetName = 'in';
    $request->requestBody->metricSource = new CreateMetricSetRequestBodyMetricSource();
    $request->requestBody->metricSource->appFlowConfig = new AppFlowConfig();
    $request->requestBody->metricSource->appFlowConfig->flowName = 'corporis';
    $request->requestBody->metricSource->appFlowConfig->roleArn = 'iste';
    $request->requestBody->metricSource->athenaSourceConfig = new AthenaSourceConfig();
    $request->requestBody->metricSource->athenaSourceConfig->backTestConfiguration = new BackTestConfiguration();
    $request->requestBody->metricSource->athenaSourceConfig->backTestConfiguration->runBackTestMode = false;
    $request->requestBody->metricSource->athenaSourceConfig->dataCatalog = 'iure';
    $request->requestBody->metricSource->athenaSourceConfig->databaseName = 'saepe';
    $request->requestBody->metricSource->athenaSourceConfig->roleArn = 'quidem';
    $request->requestBody->metricSource->athenaSourceConfig->s3ResultsPath = 'architecto';
    $request->requestBody->metricSource->athenaSourceConfig->tableName = 'ipsa';
    $request->requestBody->metricSource->athenaSourceConfig->workGroupName = 'reiciendis';
    $request->requestBody->metricSource->cloudWatchConfig = new CloudWatchConfig();
    $request->requestBody->metricSource->cloudWatchConfig->backTestConfiguration = new BackTestConfiguration();
    $request->requestBody->metricSource->cloudWatchConfig->backTestConfiguration->runBackTestMode = false;
    $request->requestBody->metricSource->cloudWatchConfig->roleArn = 'est';
    $request->requestBody->metricSource->rdsSourceConfig = new RDSSourceConfig();
    $request->requestBody->metricSource->rdsSourceConfig->dbInstanceIdentifier = 'mollitia';
    $request->requestBody->metricSource->rdsSourceConfig->databaseHost = 'laborum';
    $request->requestBody->metricSource->rdsSourceConfig->databaseName = 'dolores';
    $request->requestBody->metricSource->rdsSourceConfig->databasePort = 210382;
    $request->requestBody->metricSource->rdsSourceConfig->roleArn = 'corporis';
    $request->requestBody->metricSource->rdsSourceConfig->secretManagerArn = 'explicabo';
    $request->requestBody->metricSource->rdsSourceConfig->tableName = 'nobis';
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration = new VpcConfiguration();
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration->securityGroupIdList = [
        'omnis',
        'nemo',
    ];
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration->subnetIdList = [
        'excepturi',
        'accusantium',
    ];
    $request->requestBody->metricSource->redshiftSourceConfig = new RedshiftSourceConfig();
    $request->requestBody->metricSource->redshiftSourceConfig->clusterIdentifier = 'iure';
    $request->requestBody->metricSource->redshiftSourceConfig->databaseHost = 'culpa';
    $request->requestBody->metricSource->redshiftSourceConfig->databaseName = 'doloribus';
    $request->requestBody->metricSource->redshiftSourceConfig->databasePort = 958950;
    $request->requestBody->metricSource->redshiftSourceConfig->roleArn = 'architecto';
    $request->requestBody->metricSource->redshiftSourceConfig->secretManagerArn = 'mollitia';
    $request->requestBody->metricSource->redshiftSourceConfig->tableName = 'dolorem';
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration = new VpcConfiguration();
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration->securityGroupIdList = [
        'consequuntur',
        'repellat',
        'mollitia',
    ];
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration->subnetIdList = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->requestBody->metricSource->s3SourceConfig = new S3SourceConfig();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor = new FileFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor = new CsvFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->charset = 'molestiae';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->containsHeader = false;
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->delimiter = 'velit';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->fileCompression = CSVFileCompressionEnum::GZIP;
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->headerList = [
        'quis',
    ];
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->quoteSymbol = 'vitae';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor = new JsonFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->charset = 'laborum';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->fileCompression = JsonFileCompressionEnum::GZIP;
    $request->requestBody->metricSource->s3SourceConfig->historicalDataPathList = [
        'odit',
        'quo',
    ];
    $request->requestBody->metricSource->s3SourceConfig->roleArn = 'sequi';
    $request->requestBody->metricSource->s3SourceConfig->templatedPathList = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->requestBody->offset = 97101;
    $request->requestBody->tags = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ];
    $request->requestBody->timestampColumn = new CreateMetricSetRequestBodyTimestampColumn();
    $request->requestBody->timestampColumn->columnFormat = 'nihil';
    $request->requestBody->timestampColumn->columnName = 'praesentium';
    $request->requestBody->timezone = 'voluptatibus';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->createMetricSet($request);

    if ($response->createMetricSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateAnomalyDetector

Deactivates an anomaly detector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateAnomalyDetectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateAnomalyDetectorRequest();
    $request->requestBody = new DeactivateAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->deactivateAnomalyDetector($request);

    if ($response->deactivateAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlert

Deletes an alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlertRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlertRequest();
    $request->requestBody = new DeleteAlertRequestBody();
    $request->requestBody->alertArn = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->deleteAlert($request);

    if ($response->deleteAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnomalyDetector

Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalyDetectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnomalyDetectorRequest();
    $request->requestBody = new DeleteAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->deleteAnomalyDetector($request);

    if ($response->deleteAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlert

<p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlertRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlertRequest();
    $request->requestBody = new DescribeAlertRequestBody();
    $request->requestBody->alertArn = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->describeAlert($request);

    if ($response->describeAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAnomalyDetectionExecutions

Returns information about the status of the specified anomaly detection jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAnomalyDetectionExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAnomalyDetectionExecutionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAnomalyDetectionExecutionsRequest();
    $request->maxResults = 'explicabo';
    $request->nextToken = 'deserunt';
    $request->requestBody = new DescribeAnomalyDetectionExecutionsRequestBody();
    $request->requestBody->anomalyDetectorArn = 'distinctio';
    $request->requestBody->maxResults = 841386;
    $request->requestBody->nextToken = 'labore';
    $request->requestBody->timestamp = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->describeAnomalyDetectionExecutions($request);

    if ($response->describeAnomalyDetectionExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAnomalyDetector

<p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAnomalyDetectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAnomalyDetectorRequest();
    $request->requestBody = new DescribeAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->describeAnomalyDetector($request);

    if ($response->describeAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMetricSet

<p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricSetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMetricSetRequest();
    $request->requestBody = new DescribeMetricSetRequestBody();
    $request->requestBody->metricSetArn = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->describeMetricSet($request);

    if ($response->describeMetricSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectMetricSetConfig

Detects an Amazon S3 dataset's file format, interval, and offset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectMetricSetConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectMetricSetConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetectMetricSetConfigRequestBodyAutoDetectionMetricSource;
use \OpenAPI\OpenAPI\Models\Shared\AutoDetectionS3SourceConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectMetricSetConfigRequest();
    $request->requestBody = new DetectMetricSetConfigRequestBody();
    $request->requestBody->anomalyDetectorArn = 'necessitatibus';
    $request->requestBody->autoDetectionMetricSource = new DetectMetricSetConfigRequestBodyAutoDetectionMetricSource();
    $request->requestBody->autoDetectionMetricSource->s3SourceConfig = new AutoDetectionS3SourceConfig();
    $request->requestBody->autoDetectionMetricSource->s3SourceConfig->historicalDataPathList = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->requestBody->autoDetectionMetricSource->s3SourceConfig->templatedPathList = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->detectMetricSetConfig($request);

    if ($response->detectMetricSetConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnomalyGroup

Returns details about a group of anomalous metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalyGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnomalyGroupRequest();
    $request->requestBody = new GetAnomalyGroupRequestBody();
    $request->requestBody->anomalyDetectorArn = 'aliquid';
    $request->requestBody->anomalyGroupId = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getAnomalyGroup($request);

    if ($response->getAnomalyGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataQualityMetrics

Returns details about the requested data quality metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityMetricsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataQualityMetricsRequest();
    $request->requestBody = new GetDataQualityMetricsRequestBody();
    $request->requestBody->anomalyDetectorArn = 'provident';
    $request->requestBody->metricSetArn = 'nam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->getDataQualityMetrics($request);

    if ($response->getDataQualityMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeedback

Get feedback for an anomaly group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeedbackRequest();
    $request->maxResults = 'vel';
    $request->nextToken = 'natus';
    $request->requestBody = new GetFeedbackRequestBody();
    $request->requestBody->anomalyDetectorArn = 'omnis';
    $request->requestBody->anomalyGroupTimeSeriesFeedback = new GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback();
    $request->requestBody->anomalyGroupTimeSeriesFeedback->anomalyGroupId = 'molestiae';
    $request->requestBody->anomalyGroupTimeSeriesFeedback->timeSeriesId = 'perferendis';
    $request->requestBody->maxResults = 470132;
    $request->requestBody->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getFeedback($request);

    if ($response->getFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSampleData

Returns a selection of sample records from an Amazon S3 datasource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSampleDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSampleDataRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetSampleDataRequestBodyS3SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CsvFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CSVFileCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileCompressionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSampleDataRequest();
    $request->requestBody = new GetSampleDataRequestBody();
    $request->requestBody->s3SourceConfig = new GetSampleDataRequestBodyS3SourceConfig();
    $request->requestBody->s3SourceConfig->fileFormatDescriptor = new FileFormatDescriptor();
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor = new CsvFormatDescriptor();
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->charset = 'eum';
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->containsHeader = false;
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->delimiter = 'vero';
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->fileCompression = CSVFileCompressionEnum::NONE;
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->headerList = [
        'magnam',
    ];
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->quoteSymbol = 'et';
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor = new JsonFormatDescriptor();
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->charset = 'excepturi';
    $request->requestBody->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->fileCompression = JsonFileCompressionEnum::NONE;
    $request->requestBody->s3SourceConfig->historicalDataPathList = [
        'quos',
        'sint',
        'accusantium',
    ];
    $request->requestBody->s3SourceConfig->roleArn = 'mollitia';
    $request->requestBody->s3SourceConfig->templatedPathList = [
        'mollitia',
        'ad',
        'eum',
        'dolor',
    ];
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->getSampleData($request);

    if ($response->getSampleDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlerts

<p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlertsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAlertsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlertsRequest();
    $request->maxResults = 'eius';
    $request->nextToken = 'maxime';
    $request->requestBody = new ListAlertsRequestBody();
    $request->requestBody->anomalyDetectorArn = 'deleniti';
    $request->requestBody->maxResults = 703889;
    $request->requestBody->nextToken = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->listAlerts($request);

    if ($response->listAlertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomalyDetectors

<p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyDetectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyDetectorsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomalyDetectorsRequest();
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'sed';
    $request->requestBody = new ListAnomalyDetectorsRequestBody();
    $request->requestBody->maxResults = 904648;
    $request->requestBody->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->listAnomalyDetectors($request);

    if ($response->listAnomalyDetectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomalyGroupRelatedMetrics

Returns a list of measures that are potential causes or effects of an anomaly group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupRelatedMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupRelatedMetricsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomalyGroupRelatedMetricsRequest();
    $request->maxResults = 'illum';
    $request->nextToken = 'pariatur';
    $request->requestBody = new ListAnomalyGroupRelatedMetricsRequestBody();
    $request->requestBody->anomalyDetectorArn = 'maxime';
    $request->requestBody->anomalyGroupId = 'ea';
    $request->requestBody->maxResults = 569101;
    $request->requestBody->nextToken = 'odit';
    $request->requestBody->relationshipTypeFilter = ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum::CAUSE_OF_INPUT_ANOMALY_GROUP;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->listAnomalyGroupRelatedMetrics($request);

    if ($response->listAnomalyGroupRelatedMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomalyGroupSummaries

Returns a list of anomaly groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupSummariesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomalyGroupSummariesRequest();
    $request->maxResults = 'nam';
    $request->nextToken = 'eaque';
    $request->requestBody = new ListAnomalyGroupSummariesRequestBody();
    $request->requestBody->anomalyDetectorArn = 'pariatur';
    $request->requestBody->maxResults = 365496;
    $request->requestBody->nextToken = 'voluptatibus';
    $request->requestBody->sensitivityThreshold = 16627;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->listAnomalyGroupSummaries($request);

    if ($response->listAnomalyGroupSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomalyGroupTimeSeries

Gets a list of anomalous metrics for a measure in an anomaly group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalyGroupTimeSeriesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomalyGroupTimeSeriesRequest();
    $request->maxResults = 'nobis';
    $request->nextToken = 'dolores';
    $request->requestBody = new ListAnomalyGroupTimeSeriesRequestBody();
    $request->requestBody->anomalyDetectorArn = 'quis';
    $request->requestBody->anomalyGroupId = 'totam';
    $request->requestBody->maxResults = 489549;
    $request->requestBody->metricName = 'eaque';
    $request->requestBody->nextToken = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->listAnomalyGroupTimeSeries($request);

    if ($response->listAnomalyGroupTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMetricSets

<p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricSetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMetricSetsRequest();
    $request->maxResults = 'vero';
    $request->nextToken = 'nostrum';
    $request->requestBody = new ListMetricSetsRequestBody();
    $request->requestBody->anomalyDetectorArn = 'hic';
    $request->requestBody->maxResults = 928082;
    $request->requestBody->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->listMetricSets($request);

    if ($response->listMetricSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->resourceArn = 'iste';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFeedback

Add feedback for an anomalous metric.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFeedbackRequest();
    $request->requestBody = new PutFeedbackRequestBody();
    $request->requestBody->anomalyDetectorArn = 'dolorum';
    $request->requestBody->anomalyGroupTimeSeriesFeedback = new PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback();
    $request->requestBody->anomalyGroupTimeSeriesFeedback->anomalyGroupId = 'deleniti';
    $request->requestBody->anomalyGroupTimeSeriesFeedback->isAnomaly = false;
    $request->requestBody->anomalyGroupTimeSeriesFeedback->timeSeriesId = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->putFeedback($request);

    if ($response->putFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'dolorem' => 'dolor',
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->resourceArn = 'reiciendis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->resourceArn = 'odio';
    $request->tagKeys = [
        'accusamus',
        'quidem',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAlert

Make changes to an existing alert.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlertRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlertRequestBodyAction;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SNSConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SnsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlertRequestBodyAlertFilters;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAlertRequest();
    $request->requestBody = new UpdateAlertRequestBody();
    $request->requestBody->action = new UpdateAlertRequestBodyAction();
    $request->requestBody->action->lambdaConfiguration = new LambdaConfiguration();
    $request->requestBody->action->lambdaConfiguration->lambdaArn = 'voluptatibus';
    $request->requestBody->action->lambdaConfiguration->roleArn = 'voluptas';
    $request->requestBody->action->snsConfiguration = new SNSConfiguration();
    $request->requestBody->action->snsConfiguration->roleArn = 'natus';
    $request->requestBody->action->snsConfiguration->snsFormat = SnsFormatEnum::LONG_TEXT;
    $request->requestBody->action->snsConfiguration->snsTopicArn = 'atque';
    $request->requestBody->alertArn = 'sit';
    $request->requestBody->alertDescription = 'fugiat';
    $request->requestBody->alertFilters = new UpdateAlertRequestBodyAlertFilters();
    $request->requestBody->alertFilters->dimensionFilterList = [
        new DimensionFilter(),
    ];
    $request->requestBody->alertFilters->metricList = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->requestBody->alertSensitivityThreshold = 677082;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->updateAlert($request);

    if ($response->updateAlertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnomalyDetector

Updates a detector. After activation, you can only change a detector's ingestion delay and description.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalyDetectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalyDetectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnomalyDetectorRequest();
    $request->requestBody = new UpdateAnomalyDetectorRequestBody();
    $request->requestBody->anomalyDetectorArn = 'voluptate';
    $request->requestBody->anomalyDetectorConfig = new UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig();
    $request->requestBody->anomalyDetectorConfig->anomalyDetectorFrequency = FrequencyEnum::PT10_M;
    $request->requestBody->anomalyDetectorDescription = 'saepe';
    $request->requestBody->kmsKeyArn = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->updateAnomalyDetector($request);

    if ($response->updateAnomalyDetectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMetricSet

Updates a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricSetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricSetDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\AggregationFunctionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricSetRequestBodyMetricSetFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricSetRequestBodyMetricSource;
use \OpenAPI\OpenAPI\Models\Shared\AppFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\AthenaSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackTestConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\RDSSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CsvFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\CSVFileCompressionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonFormatDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\JsonFileCompressionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMetricSetRequestBodyTimestampColumn;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMetricSetRequest();
    $request->requestBody = new UpdateMetricSetRequestBody();
    $request->requestBody->dimensionFilterList = [
        new MetricSetDimensionFilter(),
        new MetricSetDimensionFilter(),
    ];
    $request->requestBody->dimensionList = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->requestBody->metricList = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->requestBody->metricSetArn = 'similique';
    $request->requestBody->metricSetDescription = 'alias';
    $request->requestBody->metricSetFrequency = UpdateMetricSetRequestBodyMetricSetFrequencyEnum::PT5_M;
    $request->requestBody->metricSource = new UpdateMetricSetRequestBodyMetricSource();
    $request->requestBody->metricSource->appFlowConfig = new AppFlowConfig();
    $request->requestBody->metricSource->appFlowConfig->flowName = 'quaerat';
    $request->requestBody->metricSource->appFlowConfig->roleArn = 'tempora';
    $request->requestBody->metricSource->athenaSourceConfig = new AthenaSourceConfig();
    $request->requestBody->metricSource->athenaSourceConfig->backTestConfiguration = new BackTestConfiguration();
    $request->requestBody->metricSource->athenaSourceConfig->backTestConfiguration->runBackTestMode = false;
    $request->requestBody->metricSource->athenaSourceConfig->dataCatalog = 'vel';
    $request->requestBody->metricSource->athenaSourceConfig->databaseName = 'quod';
    $request->requestBody->metricSource->athenaSourceConfig->roleArn = 'officiis';
    $request->requestBody->metricSource->athenaSourceConfig->s3ResultsPath = 'qui';
    $request->requestBody->metricSource->athenaSourceConfig->tableName = 'dolorum';
    $request->requestBody->metricSource->athenaSourceConfig->workGroupName = 'a';
    $request->requestBody->metricSource->cloudWatchConfig = new CloudWatchConfig();
    $request->requestBody->metricSource->cloudWatchConfig->backTestConfiguration = new BackTestConfiguration();
    $request->requestBody->metricSource->cloudWatchConfig->backTestConfiguration->runBackTestMode = false;
    $request->requestBody->metricSource->cloudWatchConfig->roleArn = 'esse';
    $request->requestBody->metricSource->rdsSourceConfig = new RDSSourceConfig();
    $request->requestBody->metricSource->rdsSourceConfig->dbInstanceIdentifier = 'harum';
    $request->requestBody->metricSource->rdsSourceConfig->databaseHost = 'iusto';
    $request->requestBody->metricSource->rdsSourceConfig->databaseName = 'ipsum';
    $request->requestBody->metricSource->rdsSourceConfig->databasePort = 788740;
    $request->requestBody->metricSource->rdsSourceConfig->roleArn = 'tenetur';
    $request->requestBody->metricSource->rdsSourceConfig->secretManagerArn = 'amet';
    $request->requestBody->metricSource->rdsSourceConfig->tableName = 'tempore';
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration = new VpcConfiguration();
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration->securityGroupIdList = [
        'numquam',
        'enim',
        'dolorem',
        'sapiente',
    ];
    $request->requestBody->metricSource->rdsSourceConfig->vpcConfiguration->subnetIdList = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->requestBody->metricSource->redshiftSourceConfig = new RedshiftSourceConfig();
    $request->requestBody->metricSource->redshiftSourceConfig->clusterIdentifier = 'neque';
    $request->requestBody->metricSource->redshiftSourceConfig->databaseHost = 'sed';
    $request->requestBody->metricSource->redshiftSourceConfig->databaseName = 'vel';
    $request->requestBody->metricSource->redshiftSourceConfig->databasePort = 730442;
    $request->requestBody->metricSource->redshiftSourceConfig->roleArn = 'voluptas';
    $request->requestBody->metricSource->redshiftSourceConfig->secretManagerArn = 'deserunt';
    $request->requestBody->metricSource->redshiftSourceConfig->tableName = 'quam';
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration = new VpcConfiguration();
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration->securityGroupIdList = [
        'incidunt',
    ];
    $request->requestBody->metricSource->redshiftSourceConfig->vpcConfiguration->subnetIdList = [
        'cupiditate',
    ];
    $request->requestBody->metricSource->s3SourceConfig = new S3SourceConfig();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor = new FileFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor = new CsvFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->charset = 'maxime';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->containsHeader = false;
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->delimiter = 'pariatur';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->fileCompression = CSVFileCompressionEnum::GZIP;
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->headerList = [
        'laborum',
    ];
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->csvFormatDescriptor->quoteSymbol = 'totam';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor = new JsonFormatDescriptor();
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->charset = 'incidunt';
    $request->requestBody->metricSource->s3SourceConfig->fileFormatDescriptor->jsonFormatDescriptor->fileCompression = JsonFileCompressionEnum::NONE;
    $request->requestBody->metricSource->s3SourceConfig->historicalDataPathList = [
        'distinctio',
    ];
    $request->requestBody->metricSource->s3SourceConfig->roleArn = 'facilis';
    $request->requestBody->metricSource->s3SourceConfig->templatedPathList = [
        'quam',
        'molestias',
    ];
    $request->requestBody->offset = 840429;
    $request->requestBody->timestampColumn = new UpdateMetricSetRequestBodyTimestampColumn();
    $request->requestBody->timestampColumn->columnFormat = 'qui';
    $request->requestBody->timestampColumn->columnName = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->updateMetricSet($request);

    if ($response->updateMetricSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

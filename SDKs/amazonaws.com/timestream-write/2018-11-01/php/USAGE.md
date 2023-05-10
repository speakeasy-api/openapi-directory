<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataModelConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataModel;
use \OpenAPI\OpenAPI\Models\Shared\DimensionMapping;
use \OpenAPI\OpenAPI\Models\Shared\MixedMeasureMapping;
use \OpenAPI\OpenAPI\Models\Shared\MeasureValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiMeasureAttributeMapping;
use \OpenAPI\OpenAPI\Models\Shared\ScalarMeasureValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiMeasureMappings;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataModelS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CsvConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BatchLoadDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\ReportConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ReportS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchLoadTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchLoadTaskRequest();
    $request->createBatchLoadTaskRequest = new CreateBatchLoadTaskRequest();
    $request->createBatchLoadTaskRequest->clientToken = 'corrupti';
    $request->createBatchLoadTaskRequest->dataModelConfiguration = new DataModelConfiguration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel = new DataModel();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->dimensionMappings = [
        new DimensionMapping(),
        new DimensionMapping(),
        new DimensionMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->measureNameColumn = 'distinctio';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->mixedMeasureMappings = [
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings = new MultiMeasureMappings();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->multiMeasureAttributeMappings = [
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->targetMultiMeasureName = 'nulla';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeColumn = 'corrupti';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeUnit = TimeUnitEnum::NANOSECONDS;
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration = new DataModelS3Configuration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->bucketName = 'vel';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->objectKey = 'error';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration = new DataSourceConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration = new CsvConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->columnSeparator = 'deserunt';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->escapeChar = 'suscipit';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->nullValue = 'iure';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->quoteChar = 'magnam';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->trimWhiteSpace = false;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataFormat = BatchLoadDataFormatEnum::CSV;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration = new DataSourceS3Configuration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->bucketName = 'debitis';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->objectKeyPrefix = 'ipsa';
    $request->createBatchLoadTaskRequest->recordVersion = 963663;
    $request->createBatchLoadTaskRequest->reportConfiguration = new ReportConfiguration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration = new ReportS3Configuration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->bucketName = 'tempora';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->encryptionOption = S3EncryptionOptionEnum::SSE_S3;
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->kmsKeyId = 'molestiae';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->objectKeyPrefix = 'minus';
    $request->createBatchLoadTaskRequest->targetDatabaseName = 'placeat';
    $request->createBatchLoadTaskRequest->targetTableName = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateBatchLoadTaskXAmzTargetEnum::TIMESTREAM20181101_CREATE_BATCH_LOAD_TASK;

    $response = $sdk->createBatchLoadTask($request);

    if ($response->createBatchLoadTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
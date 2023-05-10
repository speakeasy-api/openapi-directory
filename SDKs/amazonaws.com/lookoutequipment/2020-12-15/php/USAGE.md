<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetSchema;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->createDatasetRequest = new CreateDatasetRequest();
    $request->createDatasetRequest->clientToken = 'corrupti';
    $request->createDatasetRequest->datasetName = 'provident';
    $request->createDatasetRequest->datasetSchema = new DatasetSchema();
    $request->createDatasetRequest->datasetSchema->inlineDataSchema = 'distinctio';
    $request->createDatasetRequest->serverSideKmsKeyId = 'quibusdam';
    $request->createDatasetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_DATASET;

    $response = $sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
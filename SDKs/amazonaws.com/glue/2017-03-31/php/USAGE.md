<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreatePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreatePartitionRequest();
    $request->batchCreatePartitionRequest = new BatchCreatePartitionRequest();
    $request->batchCreatePartitionRequest->catalogId = 'corrupti';
    $request->batchCreatePartitionRequest->databaseName = 'provident';
    $request->batchCreatePartitionRequest->partitionInputList = [
        new PartitionInput(),
        new PartitionInput(),
        new PartitionInput(),
    ];
    $request->batchCreatePartitionRequest->tableName = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchCreatePartitionXAmzTargetEnum::AWS_GLUE_BATCH_CREATE_PARTITION;

    $response = $sdk->batchCreatePartition($request);

    if ($response->batchCreatePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
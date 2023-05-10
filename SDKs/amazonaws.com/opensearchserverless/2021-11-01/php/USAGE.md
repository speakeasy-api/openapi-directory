<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCollectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCollectionRequest();
    $request->batchGetCollectionRequest = new BatchGetCollectionRequest();
    $request->batchGetCollectionRequest->ids = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->batchGetCollectionRequest->names = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = BatchGetCollectionXAmzTargetEnum::OPEN_SEARCH_SERVERLESS_BATCH_GET_COLLECTION;

    $response = $sdk->batchGetCollection($request);

    if ($response->batchGetCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateClusterRequest();
    $request->batchUpdateClusterRequest = new BatchUpdateClusterRequest();
    $request->batchUpdateClusterRequest->clusterNames = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->batchUpdateClusterRequest->serviceUpdate = new ServiceUpdateRequest();
    $request->batchUpdateClusterRequest->serviceUpdate->serviceUpdateNameToApply = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = BatchUpdateClusterXAmzTargetEnum::AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER;

    $response = $sdk->batchUpdateCluster($request);

    if ($response->batchUpdateClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
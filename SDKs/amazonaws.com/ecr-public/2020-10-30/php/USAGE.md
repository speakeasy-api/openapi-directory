<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCheckLayerAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchCheckLayerAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCheckLayerAvailabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCheckLayerAvailabilityRequest();
    $request->batchCheckLayerAvailabilityRequest = new BatchCheckLayerAvailabilityRequest();
    $request->batchCheckLayerAvailabilityRequest->layerDigests = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->batchCheckLayerAvailabilityRequest->registryId = 'unde';
    $request->batchCheckLayerAvailabilityRequest->repositoryName = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = BatchCheckLayerAvailabilityXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY;

    $response = $sdk->batchCheckLayerAvailability($request);

    if ($response->batchCheckLayerAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAggregateResourceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregateResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetAggregateResourceConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetAggregateResourceConfigRequest();
    $request->batchGetAggregateResourceConfigRequest = new BatchGetAggregateResourceConfigRequest();
    $request->batchGetAggregateResourceConfigRequest->configurationAggregatorName = 'corrupti';
    $request->batchGetAggregateResourceConfigRequest->resourceIdentifiers = [
        new AggregateResourceIdentifier(),
        new AggregateResourceIdentifier(),
        new AggregateResourceIdentifier(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = BatchGetAggregateResourceConfigXAmzTargetEnum::STARLING_DOVE_SERVICE_BATCH_GET_AGGREGATE_RESOURCE_CONFIG;

    $response = $sdk->batchGetAggregateResourceConfig($request);

    if ($response->batchGetAggregateResourceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
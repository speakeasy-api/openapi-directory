<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteScalingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScalableDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScalingPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScalingPolicyRequest();
    $request->deleteScalingPolicyRequest = new DeleteScalingPolicyRequest();
    $request->deleteScalingPolicyRequest->policyName = 'corrupti';
    $request->deleteScalingPolicyRequest->resourceId = 'provident';
    $request->deleteScalingPolicyRequest->scalableDimension = ScalableDimensionEnum::CASSANDRA_TABLE_READ_CAPACITY_UNITS;
    $request->deleteScalingPolicyRequest->serviceNamespace = ServiceNamespaceEnum::KAFKA;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = DeleteScalingPolicyXAmzTargetEnum::ANY_SCALE_FRONTEND_SERVICE_DELETE_SCALING_POLICY;

    $response = $sdk->deleteScalingPolicy($request);

    if ($response->deleteScalingPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
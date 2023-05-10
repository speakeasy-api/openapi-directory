<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelClusterRequest();
    $request->cancelClusterRequest = new CancelClusterRequest();
    $request->cancelClusterRequest->clusterId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CancelClusterXAmzTargetEnum::AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_CLUSTER;

    $response = $sdk->cancelCluster($request);

    if ($response->cancelClusterResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
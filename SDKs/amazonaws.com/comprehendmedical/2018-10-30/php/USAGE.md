<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEntitiesDetectionV2JobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionV2JobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntitiesDetectionV2JobRequest();
    $request->describeEntitiesDetectionV2JobRequest = new DescribeEntitiesDetectionV2JobRequest();
    $request->describeEntitiesDetectionV2JobRequest->jobId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeEntitiesDetectionV2JobXAmzTargetEnum::COMPREHEND_MEDICAL20181030_DESCRIBE_ENTITIES_DETECTION_V2_JOB;

    $response = $sdk->describeEntitiesDetectionV2Job($request);

    if ($response->describeEntitiesDetectionV2JobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTLogBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDRTLogBucketRequest();
    $request->associateDRTLogBucketRequest = new AssociateDRTLogBucketRequest();
    $request->associateDRTLogBucketRequest->logBucket = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AssociateDRTLogBucketXAmzTargetEnum::AWS_SHIELD20160616_ASSOCIATE_DRT_LOG_BUCKET;

    $response = $sdk->associateDRTLogBucket($request);

    if ($response->associateDRTLogBucketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
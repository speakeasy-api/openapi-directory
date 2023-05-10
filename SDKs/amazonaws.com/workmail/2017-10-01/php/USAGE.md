<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDelegateToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegateToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest = new AssociateDelegateToResourceRequest();
    $request->associateDelegateToResourceRequest->entityId = 'corrupti';
    $request->associateDelegateToResourceRequest->organizationId = 'provident';
    $request->associateDelegateToResourceRequest->resourceId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateDelegateToResourceXAmzTargetEnum::WORK_MAIL_SERVICE_ASSOCIATE_DELEGATE_TO_RESOURCE;

    $response = $sdk->associateDelegateToResource($request);

    if ($response->associateDelegateToResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
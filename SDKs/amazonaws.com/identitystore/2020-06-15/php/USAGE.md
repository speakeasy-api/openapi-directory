<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->createGroupRequest = new CreateGroupRequest();
    $request->createGroupRequest->description = 'corrupti';
    $request->createGroupRequest->displayName = 'provident';
    $request->createGroupRequest->identityStoreId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateGroupXAmzTargetEnum::AWS_IDENTITY_STORE_CREATE_GROUP;

    $response = $sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
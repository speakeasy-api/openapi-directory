<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequestBodyActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePermissionRequest();
    $request->requestBody = new DeleteResourcePermissionRequestBody();
    $request->requestBody->actionType = DeleteResourcePermissionRequestBodyActionTypeEnum::RESTORE;
    $request->requestBody->resourceArn = 'corrupti';
    $request->requestBody->sourceResourceArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->deleteResourcePermission($request);

    if ($response->deleteResourcePermissionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
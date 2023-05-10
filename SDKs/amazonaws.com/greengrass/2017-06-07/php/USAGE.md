<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRoleToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRoleToGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateRoleToGroupRequest();
    $request->groupId = 'corrupti';
    $request->requestBody = new AssociateRoleToGroupRequestBody();
    $request->requestBody->roleArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->associateRoleToGroup($request);

    if ($response->associateRoleToGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
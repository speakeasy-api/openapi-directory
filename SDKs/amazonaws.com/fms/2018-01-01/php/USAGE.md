<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAdminAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAdminAccountRequest();
    $request->associateAdminAccountRequest = new AssociateAdminAccountRequest();
    $request->associateAdminAccountRequest->adminAccount = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AssociateAdminAccountXAmzTargetEnum::AWSFMS20180101_ASSOCIATE_ADMIN_ACCOUNT;

    $response = $sdk->associateAdminAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
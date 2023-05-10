<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateUserRequest();
    $request->requestBody = new AssociateUserRequestBody();
    $request->requestBody->domain = 'corrupti';
    $request->requestBody->identityProvider = new AssociateUserRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'provident';
    $request->requestBody->instanceId = 'distinctio';
    $request->requestBody->username = 'Rosalinda_Mitchell84';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->associateUser($request);

    if ($response->associateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
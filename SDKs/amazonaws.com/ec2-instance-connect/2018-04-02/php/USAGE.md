<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendSSHPublicKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendSSHPublicKeyRequest();
    $request->sendSSHPublicKeyRequest = new SendSSHPublicKeyRequest();
    $request->sendSSHPublicKeyRequest->availabilityZone = 'corrupti';
    $request->sendSSHPublicKeyRequest->instanceId = 'provident';
    $request->sendSSHPublicKeyRequest->instanceOSUser = 'distinctio';
    $request->sendSSHPublicKeyRequest->sshPublicKey = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = SendSSHPublicKeyXAmzTargetEnum::AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY;

    $response = $sdk->sendSSHPublicKey($request);

    if ($response->sendSSHPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
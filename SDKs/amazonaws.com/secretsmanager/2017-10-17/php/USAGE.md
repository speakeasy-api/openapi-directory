<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelRotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelRotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelRotateSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelRotateSecretRequest();
    $request->cancelRotateSecretRequest = new CancelRotateSecretRequest();
    $request->cancelRotateSecretRequest->secretId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CancelRotateSecretXAmzTargetEnum::SECRETSMANAGER_CANCEL_ROTATE_SECRET;

    $response = $sdk->cancelRotateSecret($request);

    if ($response->cancelRotateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
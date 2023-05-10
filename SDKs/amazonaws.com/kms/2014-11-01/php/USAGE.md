<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelKeyDeletionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelKeyDeletionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelKeyDeletionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelKeyDeletionRequest();
    $request->cancelKeyDeletionRequest = new CancelKeyDeletionRequest();
    $request->cancelKeyDeletionRequest->keyId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CancelKeyDeletionXAmzTargetEnum::TRENT_SERVICE_CANCEL_KEY_DELETION;

    $response = $sdk->cancelKeyDeletion($request);

    if ($response->cancelKeyDeletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
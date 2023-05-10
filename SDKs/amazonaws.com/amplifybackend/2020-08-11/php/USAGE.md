<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneBackendRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneBackendRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneBackendRequest();
    $request->requestBody = new CloneBackendRequestBody();
    $request->requestBody->targetEnvironmentName = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->appId = 'vel';
    $request->backendEnvironmentName = 'error';

    $response = $sdk->cloneBackend($request);

    if ($response->cloneBackendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
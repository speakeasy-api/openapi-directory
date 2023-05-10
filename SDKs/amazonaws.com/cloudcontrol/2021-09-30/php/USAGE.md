<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelResourceRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelResourceRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelResourceRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelResourceRequestRequest();
    $request->cancelResourceRequestInput = new CancelResourceRequestInput();
    $request->cancelResourceRequestInput->requestToken = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CancelResourceRequestXAmzTargetEnum::CLOUD_API_SERVICE_CANCEL_RESOURCE_REQUEST;

    $response = $sdk->cancelResourceRequest($request);

    if ($response->cancelResourceRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
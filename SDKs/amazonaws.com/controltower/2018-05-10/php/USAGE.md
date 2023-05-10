<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableControlRequest();
    $request->requestBody = new DisableControlRequestBody();
    $request->requestBody->controlIdentifier = 'corrupti';
    $request->requestBody->targetIdentifier = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->disableControl($request);

    if ($response->disableControlOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
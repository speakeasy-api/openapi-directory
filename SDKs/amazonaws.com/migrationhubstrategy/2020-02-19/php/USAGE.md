<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationComponentDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationComponentDetailsRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->applicationComponentId = 'illum';

    $response = $sdk->getApplicationComponentDetails($request);

    if ($response->getApplicationComponentDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DisableRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDisableSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRequest();
    $request->contract = 'corrupti';
    $request->merchantAccount = 'provident';
    $request->recurringDetailReference = 'distinctio';
    $request->shopperReference = 'quibusdam';

    $requestSecurity = new PostDisableSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postDisable($request, $requestSecurity);

    if ($response->disableResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
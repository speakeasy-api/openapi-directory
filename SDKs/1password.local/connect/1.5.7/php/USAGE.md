<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiActivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiActivityRequest();
    $request->limit = 10;
    $request->offset = 50;

    $requestSecurity = new GetApiActivitySecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activity->getApiActivity($request, $requestSecurity);

    if ($response->apiRequests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
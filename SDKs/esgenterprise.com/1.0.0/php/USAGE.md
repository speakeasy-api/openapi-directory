<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchRequest();
    $request->q = 'corrupti';

    $requestSecurity = new GetSearchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->rating->getSearch($request, $requestSecurity);

    if ($response->getSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
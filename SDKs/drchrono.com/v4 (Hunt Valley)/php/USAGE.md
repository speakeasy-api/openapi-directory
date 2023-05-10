<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoctorsListRequest();
    $request->cursor = 'corrupti';
    $request->doctor = 592845;
    $request->pageSize = 715190;

    $requestSecurity = new DoctorsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->doctorsList($request, $requestSecurity);

    if ($response->doctorsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
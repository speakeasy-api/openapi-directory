<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppApiWMMEndpointsWMMMagneticFieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppApiWMMEndpointsWMMMagneticFieldRequest();
    $request->altitude = 10;
    $request->latitude = 80;
    $request->longitude = 100;
    $request->year = 2020.5;

    $response = $sdk->appApiWMMEndpointsWMMMagneticField($request);

    if ($response->appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
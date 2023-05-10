<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCityFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCityRequest();
    $request->format = GetCityFormatEnum::XML;
    $request->key = 'provident';
    $request->lat = 7151.9;
    $request->lng = 8442.66;

    $response = $sdk->getCity($request);

    if ($response->getCity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
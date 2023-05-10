<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HolidayRequest;
use \OpenAPI\OpenAPI\Models\Operations\HolidayOptionalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidayRequest();
    $request->holidayId = 2;
    $request->optional = HolidayOptionalEnum::TRUE;
    $request->year = 592845;

    $response = $sdk->holidays->holiday($request);

    if ($response->holiday200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
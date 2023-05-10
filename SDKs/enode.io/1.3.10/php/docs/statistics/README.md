# statistics

### Available Operations

* [getStatisticsCharging](#getstatisticscharging) - Get User Charging Statistics

## getStatisticsCharging

Returns a normalized timeseries of statistics about power consumption and price for the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsChargingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsChargingResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsChargingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsChargingRequest();
    $request->chargingLocationId = 'debitis';
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-14');
    $request->resolution = GetStatisticsChargingResolutionEnum::DAY;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-10');
    $request->vehicleId = 'minus';

    $requestSecurity = new GetStatisticsChargingSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->statistics->getStatisticsCharging($request, $requestSecurity);

    if ($response->getStatisticsCharging200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

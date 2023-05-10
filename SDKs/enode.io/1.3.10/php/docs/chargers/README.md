# chargers

### Available Operations

* [controlChargerCharging](#controlchargercharging) - Control Charging
* [getCharger](#getcharger) - Get Charger
* [getChargers](#getchargers) - List Chargers

## controlChargerCharging

Instruct the charger to start or stop charging

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ControlChargerChargingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ControlChargerChargingRequest();
    $request->requestBody = new ControlChargerChargingRequestBody();
    $request->requestBody->action = ControlChargerChargingRequestBodyActionEnum::START;
    $request->chargerId = 'provident';

    $requestSecurity = new ControlChargerChargingSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargers->controlChargerCharging($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCharger

Get Charger

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChargerRequest;
use \OpenAPI\OpenAPI\Models\Shared\OnechargersGetParameters0Enum;
use \OpenAPI\OpenAPI\Models\Operations\GetChargerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChargerRequest();
    $request->chargerId = 'distinctio';
    $request->field = [
        OnechargersGetParameters0Enum::LOCATION,
        OnechargersGetParameters0Enum::LOCATION,
        OnechargersGetParameters0Enum::LOCATION,
        OnechargersGetParameters0Enum::LOCATION,
    ];

    $requestSecurity = new GetChargerSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargers->getCharger($request, $requestSecurity);

    if ($response->getCharger200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChargers

List Chargers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChargersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChargersFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetChargersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChargersRequest();
    $request->field = [
        GetChargersFieldEnum::LOCATION,
        GetChargersFieldEnum::LOCATION,
    ];

    $requestSecurity = new GetChargersSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargers->getChargers($request, $requestSecurity);

    if ($response->onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

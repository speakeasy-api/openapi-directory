# vehicles

### Available Operations

* [getVehicleChargestate](#getvehiclechargestate) - Get Vehicle Charge State
* [getVehicles](#getvehicles) - List Vehicles
* [getVehiclesVehicleid](#getvehiclesvehicleid) - Get Vehicle
* [getVehiclesVehicleidInformation](#getvehiclesvehicleidinformation) - Get Vehicle Information
* [getVehiclesVehicleidLocation](#getvehiclesvehicleidlocation) - Get Vehicle Location
* [getVehiclesVehicleidOdometer](#getvehiclesvehicleidodometer) - Get Vehicle Odometer
* [getVehiclesVehicleidSmartchargingpolicy](#getvehiclesvehicleidsmartchargingpolicy) - Get Vehicle Smart Charging Policy
* [postVehiclesVehicleidCharging](#postvehiclesvehicleidcharging) - Start / Stop Charging
* [postVehiclesVehicleidWatch](#postvehiclesvehicleidwatch) - Start Watching Vehicle
* [putVehiclesVehicleidSmartchargingpolicy](#putvehiclesvehicleidsmartchargingpolicy) - Update Vehicle Smart Charging Policy

## getVehicleChargestate

Get Vehicle Charge State

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleChargestateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleChargestateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleChargestateRequest();
    $request->vehicleId = 'excepturi';

    $requestSecurity = new GetVehicleChargestateSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehicleChargestate($request, $requestSecurity);

    if ($response->getVehicleChargestate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicles

List Vehicles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesRequest();
    $request->field = [
        'recusandae',
        'temporibus',
    ];

    $requestSecurity = new GetVehiclesSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehicles($request, $requestSecurity);

    if ($response->onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehiclesVehicleid

Get Vehicle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesVehicleidRequest();
    $request->field = [
        GetVehiclesVehicleidFieldEnum::CHARGE_STATE,
    ];
    $request->vehicleId = 'veritatis';

    $requestSecurity = new GetVehiclesVehicleidSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehiclesVehicleid($request, $requestSecurity);

    if ($response->getVehiclesVehicleid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehiclesVehicleidInformation

Get Vehicle Information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidInformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidInformationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesVehicleidInformationRequest();
    $request->vehicleId = 'deserunt';

    $requestSecurity = new GetVehiclesVehicleidInformationSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehiclesVehicleidInformation($request, $requestSecurity);

    if ($response->getVehiclesVehicleidInformation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehiclesVehicleidLocation

Get Vehicle Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesVehicleidLocationRequest();
    $request->vehicleId = 'perferendis';

    $requestSecurity = new GetVehiclesVehicleidLocationSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehiclesVehicleidLocation($request, $requestSecurity);

    if ($response->getVehiclesVehicleidLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehiclesVehicleidOdometer

Get Vehicle Odometer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidOdometerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidOdometerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesVehicleidOdometerRequest();
    $request->vehicleId = 'ipsam';

    $requestSecurity = new GetVehiclesVehicleidOdometerSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehiclesVehicleidOdometer($request, $requestSecurity);

    if ($response->getVehiclesVehicleidOdometer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehiclesVehicleidSmartchargingpolicy

Get Vehicle Smart Charging Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidSmartchargingpolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesVehicleidSmartchargingpolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesVehicleidSmartchargingpolicyRequest();
    $request->vehicleId = 'repellendus';

    $requestSecurity = new GetVehiclesVehicleidSmartchargingpolicySecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->getVehiclesVehicleidSmartchargingpolicy($request, $requestSecurity);

    if ($response->onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVehiclesVehicleidCharging

Instruct the vehicle to start or stop charging. 

#### Precedence over smart charging
If the vehicle is at a charging location where smart charging is activated:
- a request to `start` charging will override smart charging and charging will stay on until fully charged. 
- a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.

The smart charging settings are not altered by these actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidChargingRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidChargingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVehiclesVehicleidChargingRequest();
    $request->vehicleId = 'sapiente';

    $requestSecurity = new PostVehiclesVehicleidChargingSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->postVehiclesVehicleidCharging($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVehiclesVehicleidWatch

Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.

Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)

The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidWatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidWatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidWatchRequestBodyPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostVehiclesVehicleidWatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVehiclesVehicleidWatchRequest();
    $request->requestBody = new PostVehiclesVehicleidWatchRequestBody();
    $request->requestBody->properties = PostVehiclesVehicleidWatchRequestBodyPropertiesEnum::IS_CHARGING_REASONS;
    $request->vehicleId = 'odit';

    $requestSecurity = new PostVehiclesVehicleidWatchSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->postVehiclesVehicleidWatch($request, $requestSecurity);

    if ($response->onevehicles1Percent7BvehicleIdPercent7D1watchPostRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putVehiclesVehicleidSmartchargingpolicy

Updates the Smart Charging settings for a vehicle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutVehiclesVehicleidSmartchargingpolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutVehiclesVehicleidSmartchargingpolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutVehiclesVehicleidSmartchargingpolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutVehiclesVehicleidSmartchargingpolicyRequest();
    $request->requestBody = new PutVehiclesVehicleidSmartchargingpolicyRequestBody();
    $request->requestBody->deadline = '08:00';
    $request->requestBody->isEnabled = true;
    $request->vehicleId = 'at';

    $requestSecurity = new PutVehiclesVehicleidSmartchargingpolicySecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vehicles->putVehiclesVehicleidSmartchargingpolicy($request, $requestSecurity);

    if ($response->onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

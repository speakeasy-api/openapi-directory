# vehicles

### Available Operations

* [getVehicle](#getvehicle) - Get a vehicle's data
* [getVehicleBattery](#getvehiclebattery) - Get a vehicle's battery
* [getVehicleCharge](#getvehiclecharge) - Get a vehicle's charge
* [getVehicleLocation](#getvehiclelocation) - Get a vehicle's location
* [getVehicleOdometer](#getvehicleodometer) - Get a vehicle's odometer
* [getVehicles](#getvehicles) - List all vehicles
* [postCharge](#postcharge) - Change charge

## getVehicle

Get a vehicle's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleRequest();
    $request->id = 'f9251a5a-9da6-460f-b57b-faad4f9efc1b';
    $request->includeDriver = false;
    $request->includeOrganization = false;
    $request->includeToken = false;

    $response = $sdk->vehicles->getVehicle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicleBattery

Get a vehicle's battery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleBatteryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleBatteryRequest();
    $request->id = '4512c103-2648-4dc2-b615-199ebfd0e9fe';

    $response = $sdk->vehicles->getVehicleBattery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicleCharge

Get a vehicle's charge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleChargeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleChargeRequest();
    $request->id = '6c632ca3-aed0-4117-9963-12fde0477177';

    $response = $sdk->vehicles->getVehicleCharge($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicleLocation

Get a vehicle's location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleLocationRequest();
    $request->id = '8ff61d01-7476-4360-a15d-b6a660659a1a';

    $response = $sdk->vehicles->getVehicleLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicleOdometer

Get a vehicle's odometer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehicleOdometerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehicleOdometerRequest();
    $request->id = 'deaab585-1d6c-4645-b08b-61891baa0fe1';

    $response = $sdk->vehicles->getVehicleOdometer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVehicles

List all vehicles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVehiclesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVehiclesRequest();
    $request->active = false;
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T23:13:52.948Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T00:52:48.741Z');
    $request->includeDriver = false;
    $request->includeOrganization = false;
    $request->includeToken = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 1207;
    $request->paginatePage = 'deleniti';
    $request->sortBy = 'earum';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-06T00:26:53.355Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-27T05:10:30.323Z');

    $response = $sdk->vehicles->getVehicles($request);

    if ($response->getVehicles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCharge

Change charge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostChargeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostChargeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostChargeRequestBodyActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostChargeRequest();
    $request->requestBody = new PostChargeRequestBody();
    $request->requestBody->action = PostChargeRequestBodyActionEnum::STOP;
    $request->id = '350d8cdb-5a34-4181-8301-0421813d5208';

    $response = $sdk->vehicles->postCharge($request);

    if ($response->postCharge200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

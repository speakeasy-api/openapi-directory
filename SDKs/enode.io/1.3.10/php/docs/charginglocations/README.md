# chargingLocations

## Overview

Charging Locations are created by a user to denote locations where they pay for the power used to charge their vehicle. Smart Charging is active at these locations only.

### Available Operations

* [deleteCharginglocationsCharginglocationid](#deletecharginglocationscharginglocationid) - Delete Charging Location
* [getCharginglocations](#getcharginglocations) - List Charging Locations
* [getCharginglocationsCharginglocationid](#getcharginglocationscharginglocationid) - Get Charging Location
* [postCharginglocations](#postcharginglocations) - Create Charging Location
* [putCharginglocationsCharginglocationid](#putcharginglocationscharginglocationid) - Update Charging Location

## deleteCharginglocationsCharginglocationid

Delete a Charging Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCharginglocationsCharginglocationidRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCharginglocationsCharginglocationidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCharginglocationsCharginglocationidRequest();
    $request->chargingLocationId = 'suscipit';

    $requestSecurity = new DeleteCharginglocationsCharginglocationidSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargingLocations->deleteCharginglocationsCharginglocationid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCharginglocations

Returns a list of Charging Locations registered to the User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCharginglocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetCharginglocationsSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargingLocations->getCharginglocations($requestSecurity);

    if ($response->onechargingLocationsPostRequestBodyContentApplication1jsonSchemas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCharginglocationsCharginglocationid

Get Charging Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCharginglocationsCharginglocationidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCharginglocationsCharginglocationidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCharginglocationsCharginglocationidRequest();
    $request->chargingLocationId = 'iure';

    $requestSecurity = new GetCharginglocationsCharginglocationidSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargingLocations->getCharginglocationsCharginglocationid($request, $requestSecurity);

    if ($response->onechargingLocationsPostRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCharginglocations

Create Charging Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCharginglocationsRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Operations\PostCharginglocationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCharginglocationsRequestBodyInput();
    $request->latitude = 59.911491;
    $request->longitude = 10.757933;
    $request->name = 'Home';

    $requestSecurity = new PostCharginglocationsSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargingLocations->postCharginglocations($request, $requestSecurity);

    if ($response->onechargingLocationsPostRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCharginglocationsCharginglocationid

Updates a charging location with new configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCharginglocationsCharginglocationidRequest;
use \OpenAPI\OpenAPI\Models\Shared\OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;
use \OpenAPI\OpenAPI\Models\Operations\PutCharginglocationsCharginglocationidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCharginglocationsCharginglocationidRequest();
    $request->chargingLocationId = 'magnam';
    $request->onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput = new OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput();
    $request->onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput->latitude = 59.911491;
    $request->onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput->longitude = 10.757933;
    $request->onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput->name = 'Home';

    $requestSecurity = new PutCharginglocationsCharginglocationidSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->chargingLocations->putCharginglocationsCharginglocationid($request, $requestSecurity);

    if ($response->onechargingLocationsPostRequestBodyContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

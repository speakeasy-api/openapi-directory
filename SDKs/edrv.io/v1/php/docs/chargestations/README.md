# chargeStations

### Available Operations

* [deleteChargeStation](#deletechargestation) - Use to delete a charge station
* [getChargeStation](#getchargestation) - Get a single charge station's data
* [getChargeStationConnectors](#getchargestationconnectors) - List connectors for a chargestation
* [getChargeStations](#getchargestations) - List all Chargestations
* [patchChargeStation](#patchchargestation) - Update a charge station's data
* [postChargeStations](#postchargestations) - Create a new charge station

## deleteChargeStation

Use to delete a charge station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChargeStationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChargeStationRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->chargeStations->deleteChargeStation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChargeStation

Get a single charge station's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChargeStationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChargeStationRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';
    $request->includeEvses = false;
    $request->includeLocation = false;
    $request->includeOrganization = false;

    $response = $sdk->chargeStations->getChargeStation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChargeStationConnectors

List connectors for a chargestation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChargeStationConnectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChargeStationConnectorsRequest();
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';
    $request->includeEvse = false;
    $request->includeOrganization = false;

    $response = $sdk->chargeStations->getChargeStationConnectors($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChargeStations

List all Chargestations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChargeStationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChargeStationsRequest();
    $request->active = false;
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T10:37:30.872Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T21:41:36.666Z');
    $request->includeEvses = false;
    $request->includeLocation = false;
    $request->includeOrganization = false;
    $request->location = 'sequi';
    $request->online = false;
    $request->organization = 'tenetur';
    $request->paginateEnabled = false;
    $request->paginateLimit = 368725;
    $request->paginatePage = 'id';
    $request->public = false;
    $request->sortBy = 'possimus';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T15:52:05.226Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-24T08:13:29.299Z');

    $response = $sdk->chargeStations->getChargeStations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchChargeStation

Update a charge station's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchChargeStationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Schema1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchChargeStationRequest();
    $request->id = '1ffe78f0-97b0-4074-b154-71b5e6e13b99';
    $request->schema1 = new Schema1();
    $request->schema1->location = 'pariatur';
    $request->schema1->manufacturer = 'modi';
    $request->schema1->model = 'praesentium';
    $request->schema1->protocol = 'rem';
    $request->schema1->public = false;

    $response = $sdk->chargeStations->patchChargeStation($request);

    if ($response->patchChargeStation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postChargeStations

Create a new charge station

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Schema1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Schema1();
    $request->location = 'voluptates';
    $request->manufacturer = 'quasi';
    $request->model = 'repudiandae';
    $request->protocol = 'sint';
    $request->public = false;

    $response = $sdk->chargeStations->postChargeStations($request);

    if ($response->postChargeStations201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

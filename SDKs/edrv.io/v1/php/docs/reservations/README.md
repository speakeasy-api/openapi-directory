# reservations

### Available Operations

* [getReservation](#getreservation) - Get one reservation data
* [getReservations](#getreservations) - Get Reservations data
* [updatereservation](#updatereservation) - Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## getReservation

Get one reservation data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReservationRequest();
    $request->id = '5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2';
    $request->includeChargestation = false;
    $request->includeOrganization = false;

    $response = $sdk->reservations->getReservation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReservations

Get Reservations data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReservationsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-16T19:55:44.497Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-17T04:31:41.347Z');
    $request->includeChargestation = false;
    $request->includeOrganization = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 70869;
    $request->paginatePage = 'iste';
    $request->sortBy = 'dolore';
    $request->sortOrder = SortOrder1Enum::ASC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T15:45:39.001Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T22:21:50.112Z');

    $response = $sdk->reservations->getReservations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatereservation

Use to request a update an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatereservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatereservationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatereservationRequest();
    $request->requestBody = new UpdatereservationRequestBody();
    $request->requestBody->connector = 131289;
    $request->requestBody->driver = 'voluptas';
    $request->requestBody->endDate = 'unde';
    $request->requestBody->evse = 100032;
    $request->id = '6fe1f08f-4294-4e36-98f4-47f603e8b445';

    $response = $sdk->reservations->updatereservation($request);

    if ($response->updatereservation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

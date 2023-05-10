# departuresAndArrivals

### Available Operations

* [getArrivalsAndDeparturesByCRS](#getarrivalsanddeparturesbycrs) - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getArrivalsByCRS](#getarrivalsbycrs) - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
* [getDeparturesByCRS](#getdeparturesbycrs) - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

## getArrivalsAndDeparturesByCRS

getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArrivalsAndDeparturesByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArrivalsAndDeparturesByCRSRequest();
    $request->crs = 'illum';
    $request->apiKey = 'vel';
    $request->filterStation = 'error';
    $request->filterType = 'deserunt';
    $request->numServices = 384382;
    $request->serviceDetails = false;
    $request->timeOffset = 437587;
    $request->timeWindow = 297534;

    $response = $sdk->departuresAndArrivals->getArrivalsAndDeparturesByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArrivalsByCRS

getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArrivalsByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArrivalsByCRSRequest();
    $request->crs = 'debitis';
    $request->apiKey = 'ipsa';
    $request->filterStation = 'delectus';
    $request->numServices = 272656;
    $request->serviceDetails = false;
    $request->timeOffset = 383441;
    $request->timeWindow = 477665;

    $response = $sdk->departuresAndArrivals->getArrivalsByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeparturesByCRS

getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeparturesByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeparturesByCRSRequest();
    $request->crs = 'minus';
    $request->apiKey = 'placeat';
    $request->filterStation = 'voluptatum';
    $request->numServices = 479977;
    $request->serviceDetails = false;
    $request->timeOffset = 568045;
    $request->timeWindow = 392785;

    $response = $sdk->departuresAndArrivals->getDeparturesByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

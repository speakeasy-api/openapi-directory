# greenPowerIndexGrunstromIndex

## Overview

Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).


### Available Operations

* [gsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.
* [gsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)
* [gsiMarketdata](#gsimarketdata) - Marketdata
* [gsiPrediction](#gsiprediction) - Prediction

## gsiBesthour

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GsiBesthourRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GsiBesthourRequest();
    $request->hours = 602763;
    $request->key = 'nulla';
    $request->timeframe = 544883;
    $request->zip = 'illum';

    $response = $sdk->greenPowerIndexGrunstromIndex->gsiBesthour($request);

    if ($response->gsiBesthour200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gsiDispatch

Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GsiDispatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GsiDispatchRequest();
    $request->key = 'vel';
    $request->zip = 'error';

    $response = $sdk->greenPowerIndexGrunstromIndex->gsiDispatch($request);

    if ($response->gsiDispatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gsiMarketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GsiMarketdataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GsiMarketdataRequest();
    $request->zip = 'deserunt';

    $response = $sdk->greenPowerIndexGrunstromIndex->gsiMarketdata($request);

    if ($response->gsiMarketdata200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gsiPrediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GsiPredictionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GsiPredictionRequest();
    $request->key = 'suscipit';
    $request->zip = 'iure';

    $response = $sdk->greenPowerIndexGrunstromIndex->gsiPrediction($request);

    if ($response->gsiPrediction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

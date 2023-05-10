# meteringDecorator

## Overview

Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).


### Available Operations

* [meteringGet](#meteringget) - Meter Reading
* [meteringPost](#meteringpost) - Meter Reading

## meteringGet

Retrieves a metered reading using account (Stromkonto).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeteringGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeteringGetRequest();
    $request->account = 'magnam';

    $response = $sdk->meteringDecorator->meteringGet($request);

    if ($response->meteringGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## meteringPost

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MeteringPostRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeteringPostRequestBody();
    $request->one80 = 891773;
    $request->account = 'ipsa';
    $request->energy = 963663;
    $request->secret = 'tempora';
    $request->value = 383441;
    $request->zip = 'molestiae';

    $response = $sdk->meteringDecorator->meteringPost($request);

    if ($response->meteringPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

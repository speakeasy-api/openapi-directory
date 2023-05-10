# smartHome

## Overview

Helper services and endpoints for smarthome and home automation systems.

### Available Operations

* [gsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.

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
    $request->hours = 791725;
    $request->key = 'placeat';
    $request->timeframe = 528895;
    $request->zip = 'iusto';

    $response = $sdk->smartHome->gsiBesthour($request);

    if ($response->gsiBesthour200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

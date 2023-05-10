# dispatchGreenEnergyDistributionAPI

## Overview

Provides latest dispatch information of green energy at a specific location in Germany (Herkunft/GrünstromMix). It allows to do schedule management (Fahrplanmanagement) of green energy generation facilities, demand and resilience management for grid operators. The public version (OpenAPI) is always post fact. If you are interessted in pre fact (forecast) data, you might get in contact with STROMDAO GmbH.


### Available Operations

* [gsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)

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
    $request->key = 'distinctio';
    $request->zip = 'quibusdam';

    $response = $sdk->dispatchGreenEnergyDistributionAPI->gsiDispatch($request);

    if ($response->gsiDispatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

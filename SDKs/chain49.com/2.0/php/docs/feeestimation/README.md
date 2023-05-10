# feeEstimation

## Overview

 

### Available Operations

* [getEstimateFeeV2](#getestimatefeev2) - Estimate transaction fee V2

## getEstimateFeeV2

Returns an estimated transaction fee for a specific confirmation target.
If you want your transaction to be included in the next block, then you give 1 as parameter. If it is not urgent, then you can wait a bit longer and get an estimation for the fifth next block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetEstimateFeeV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEstimateFeeV2Request();
    $request->blockchain = 'bitcoin';
    $request->confirmationTarget = 1;

    $response = $sdk->feeEstimation->getEstimateFeeV2($request);

    if ($response->getEstimateFeeV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

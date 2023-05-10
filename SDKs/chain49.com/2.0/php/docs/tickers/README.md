# tickers

## Overview

 

### Available Operations

* [getTickersListV2](#gettickerslistv2) - Get Tickers list V2
* [getTickersV2](#gettickersv2) - Get Tickers V2

## getTickersListV2

Returns a list of available currency rate tickers (secondary currencies) for the specified date, along with an actual data timestamp.

Trailing slash '/' is mandatory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetTickersListV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTickersListV2Request();
    $request->blockchain = 'bitcoin';
    $request->timestamp = '1519053802';

    $response = $sdk->tickers->getTickersListV2($request);

    if ($response->getTickersListV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTickersV2

Returns currency rate for the specified currency and date. If the currency is not available for that specific timestamp, the next closest rate will be returned. All responses contain an actual rate timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetTickersV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTickersV2Request();
    $request->blockchain = 'bitcoin';
    $request->currency = 'usd';
    $request->timestamp = '1519053802';

    $response = $sdk->tickers->getTickersV2($request);

    if ($response->getTickersV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

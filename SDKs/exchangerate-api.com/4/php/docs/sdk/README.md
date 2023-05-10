# SDK

## Overview

Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.

API Documentation
<https://www.exchangerate-api.com/docs/documentation>
### Available Operations

* [getLatestBaseCurrency](#getlatestbasecurrency) - Returns latest exchange rates in parameter-supplied base currency.

## getLatestBaseCurrency

Returns latest exchange rates in parameter-supplied base currency.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestBaseCurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestBaseCurrencyRequest();
    $request->baseCurrency = 'provident';

    $response = $sdk->sdk->getLatestBaseCurrency($request);

    if ($response->getLatestBaseCurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

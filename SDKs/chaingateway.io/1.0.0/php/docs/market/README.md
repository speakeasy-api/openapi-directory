# market

### Available Operations

* [getalltimehigh](#getalltimehigh) - getAllTimeHigh
* [getalltimelow](#getalltimelow) - getAllTimeLow
* [getcurrencies](#getcurrencies) - getCurrencies
* [getpricedatabycurrency](#getpricedatabycurrency) - getPriceDataByCurrency
* [getratebycurrency](#getratebycurrency) - getRateByCurrency

## getalltimehigh

getAllTimeHigh

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetalltimehighRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetalltimehighRequest();
    $request->currency1 = 'btc';
    $request->currenty2 = 'eur';

    $response = $sdk->market->getalltimehigh($request);

    if ($response->getalltimehigh200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getalltimelow

getAllTimeLow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetalltimelowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetalltimelowRequest();
    $request->currency1 = 'btc';
    $request->currency2 = 'eur';

    $response = $sdk->market->getalltimelow($request);

    if ($response->getalltimelow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getcurrencies

getCurrencies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->market->getcurrencies();

    if ($response->getcurrencies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpricedatabycurrency

getPriceDataByCurrency

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetpricedatabycurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpricedatabycurrencyRequest();
    $request->currency1 = 'btc';
    $request->currency2 = 'usd';

    $response = $sdk->market->getpricedatabycurrency($request);

    if ($response->getpricedatabycurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getratebycurrency

getRateByCurrency

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetratebycurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetratebycurrencyRequest();
    $request->currency1 = 'btc';
    $request->currency2 = 'eur';

    $response = $sdk->market->getratebycurrency($request);

    if ($response->getratebycurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

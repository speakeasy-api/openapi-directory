# enumApi

### Available Operations

* [enumApiGetOrderStates](#enumapigetorderstates) - Returns a list with all defined orderstates
* [enumApiGetPaymentTypes](#enumapigetpaymenttypes) - Returns a list with all defined paymenttypes
* [enumApiGetShipmentTypes](#enumapigetshipmenttypes) - Returns a list with all defined shipmenttypes
* [enumApiGetShippingCarriers](#enumapigetshippingcarriers) - Returns a list with all defined shippingcarriers

## enumApiGetOrderStates

Returns a list with all defined orderstates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enumApi->enumApiGetOrderStates();

    if ($response->enumApiGetOrderStates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enumApiGetPaymentTypes

Returns a list with all defined paymenttypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enumApi->enumApiGetPaymentTypes();

    if ($response->enumApiGetPaymentTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enumApiGetShipmentTypes

Returns a list with all defined shipmenttypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enumApi->enumApiGetShipmentTypes();

    if ($response->enumApiGetShipmentTypes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enumApiGetShippingCarriers

Returns a list with all defined shippingcarriers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->enumApi->enumApiGetShippingCarriers();

    if ($response->enumApiGetShippingCarriers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

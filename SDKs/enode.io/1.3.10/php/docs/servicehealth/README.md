# serviceHealth

### Available Operations

* [getHealthReady](#gethealthready) - Check Service Readiness
* [getHealthVendors](#gethealthvendors) - Check Available Vendors

## getHealthReady

Gets the combined health status of the service and all functionalities and dependencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->serviceHealth->getHealthReady();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHealthVendors

List the supported vendors and their current status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->serviceHealth->getHealthVendors();

    if ($response->getHealthVendors200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

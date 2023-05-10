# v1System

## Overview

System overview

### Available Operations

* [healthCheck](#healthcheck) - Returns the health information for the official business registers based on usage.
* [systemCountries](#systemcountries) - Returns a list of countries
* [systemPricelist](#systempricelist) - Returns a list of products with prices

## healthCheck

Returns the health information for the official business registers based on usage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthCheckSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1System->healthCheck($requestSecurity);

    if ($response->healthCheck200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## systemCountries

Retrieve the list of all currently enabled countries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SystemCountriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SystemCountriesSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1System->systemCountries($requestSecurity);

    if ($response->systemCountries200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## systemPricelist

Retrieve pricing rules for your subscription plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SystemPricelistSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new SystemPricelistSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1System->systemPricelist($requestSecurity);

    if ($response->systemPricelist200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

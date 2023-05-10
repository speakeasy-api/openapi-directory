# tariffPriceAPI

## Overview

Tariff information for the German market region. Provides base price and energy price information for private households (Standardlastprofil H0, SLP H0 Tarifinformation).

### Available Operations

* [tariffSlph0](#tariffslph0) - Energy Tariff information
* [tariffcomponents](#tariffcomponents) - Energy Tariff price components

## tariffSlph0

Provides pricing data for private households with standard load profiles (Standardlastprofil H0).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TariffSlph0Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TariffSlph0Request();
    $request->zipcode = '36162';

    $response = $sdk->tariffPriceAPI->tariffSlph0($request);

    if ($response->tariffh0s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tariffcomponents

Provides insides into the different cost components of energy for a private household.
Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TariffcomponentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TariffcomponentsRequest();
    $request->email = 'Gertrude_Welch44@yahoo.com';
    $request->kwha = 359508;
    $request->milliseconds = 613064;
    $request->wh = 437032;
    $request->zipcode = '60096-6612';

    $response = $sdk->tariffPriceAPI->tariffcomponents($request);

    if ($response->componentsh0 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

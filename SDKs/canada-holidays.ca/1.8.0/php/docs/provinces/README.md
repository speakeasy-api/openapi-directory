# provinces

## Overview

Get province(s) with associated holidays

### Available Operations

* [province](#province) - Get a province or territory by abbreviation
* [provinces](#provinces) - Get all provinces

## province

Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProvinceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvinceOptionalEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvinceProvinceIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvinceRequest();
    $request->optional = ProvinceOptionalEnum::FALSE;
    $request->provinceId = ProvinceProvinceIDEnum::MB;
    $request->year = 423655;

    $response = $sdk->provinces->province($request);

    if ($response->province200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provinces

Returns provinces and territories in Canada. Each province or territory lists its associated holidays.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProvincesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvincesOptionalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvincesRequest();
    $request->optional = ProvincesOptionalEnum::TRUE;
    $request->year = 645894;

    $response = $sdk->provinces->provinces($request);

    if ($response->provinces200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

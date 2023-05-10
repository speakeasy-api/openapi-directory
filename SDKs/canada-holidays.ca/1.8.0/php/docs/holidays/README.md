# holidays

## Overview

Get holiday(s) with associated provinces

### Available Operations

* [holiday](#holiday) - Get a holiday by id
* [holidays](#holidays) - Get all holidays

## holiday

Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HolidayRequest;
use \OpenAPI\OpenAPI\Models\Operations\HolidayOptionalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidayRequest();
    $request->holidayId = 2;
    $request->optional = HolidayOptionalEnum::TRUE;
    $request->year = 844266;

    $response = $sdk->holidays->holiday($request);

    if ($response->holiday200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## holidays

Returns Canadian public holidays. Each holiday lists the regions that observe it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HolidaysRequest;
use \OpenAPI\OpenAPI\Models\Operations\HolidaysFederalEnum;
use \OpenAPI\OpenAPI\Models\Operations\HolidaysOptionalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidaysRequest();
    $request->federal = HolidaysFederalEnum::TRUE;
    $request->optional = HolidaysOptionalEnum::FALSE;
    $request->year = 544883;

    $response = $sdk->holidays->holidays($request);

    if ($response->holidays200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

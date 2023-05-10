# timePeriods

## Overview

A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).

### Available Operations

* [getTimePeriod](#gettimeperiod) - Get a time period
* [getTimePeriods](#gettimeperiods) - Get time periods

## getTimePeriod

Returns the full record for a single time period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimePeriodRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimePeriodRequest();
    $request->optFields = [
        'incidunt',
        'sed',
        'provident',
        'eius',
    ];
    $request->optPretty = false;
    $request->timePeriodGid = 'necessitatibus';

    $response = $sdk->timePeriods->getTimePeriod($request);

    if ($response->getTimePeriod200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimePeriods

Returns compact time period records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimePeriodsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimePeriodsRequest();
    $request->endOn = DateTime::createFromFormat('Y-m-d', '2022-08-05');
    $request->limit = 579912;
    $request->offset = 'quos';
    $request->optFields = [
        'tempora',
        'tempora',
        'voluptate',
        'reiciendis',
    ];
    $request->optPretty = false;
    $request->startOn = DateTime::createFromFormat('Y-m-d', '2022-12-22');
    $request->workspace = 'non';

    $response = $sdk->timePeriods->getTimePeriods($request);

    if ($response->getTimePeriods200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

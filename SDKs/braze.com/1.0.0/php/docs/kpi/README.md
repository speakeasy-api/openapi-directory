# kpi

### Available Operations

* [dailyActiveUsersByDate](#dailyactiveusersbydate) - Daily Active Users by Date
* [dailyNewUsersByDate](#dailynewusersbydate) - Daily New Users by Date
* [kpIsForDailyAppUninstallsByDate](#kpisfordailyappuninstallsbydate) - KPIs for Daily App Uninstalls by Date
* [monthlyActiveUsersForLast30Days](#monthlyactiveusersforlast30days) - Monthly Active Users for Last 30 Days

## dailyActiveUsersByDate

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "dau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DailyActiveUsersByDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DailyActiveUsersByDateRequest();
    $request->appId = '{{app_identifier}}';
    $request->endingAt = '2018-06-28T23:59:59-5:00';
    $request->length = '10';

    $response = $sdk->kpi->dailyActiveUsersByDate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dailyNewUsersByDate

This endpoint allows you to retrieve a daily series of the total number of new users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "new_users" : (int)
        },
        ...
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DailyNewUsersByDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DailyNewUsersByDateRequest();
    $request->appId = '{{app_identifier}}';
    $request->endingAt = '2018-06-28T23:59:59-5:00';
    $request->length = '14';

    $response = $sdk->kpi->dailyNewUsersByDate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kpIsForDailyAppUninstallsByDate

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "uninstalls" : (int)
        },
        ...
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KpIsForDailyAppUninstallsByDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KpIsForDailyAppUninstallsByDateRequest();
    $request->appId = '{{app_identifier}}';
    $request->endingAt = '2018-06-28T23:59:59-5:00';
    $request->length = '14';

    $response = $sdk->kpi->kpIsForDailyAppUninstallsByDate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monthlyActiveUsersForLast30Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "mau" : (int)
        },
        ...
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonthlyActiveUsersForLast30DaysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonthlyActiveUsersForLast30DaysRequest();
    $request->appId = '{{app_identifier}}';
    $request->endingAt = '2018-06-28T23:59:59-05:00';
    $request->length = '7';

    $response = $sdk->kpi->monthlyActiveUsersForLast30Days($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# monitors

### Available Operations

* [allMonitors](#allmonitors) - All Monitors
* [createMonitor](#createmonitor) - Create Monitor
* [deleteMonitor](#deletemonitor) - Delete Monitor
* [runAMonitor](#runamonitor) - Run a Monitor
* [singleMonitor](#singlemonitor) - Single Monitor
* [updateMonitor](#updatemonitor) - Update Monitor

## allMonitors

The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.

The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->monitors->allMonitors();

    if ($response->allMonitors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMonitor

This endpoint allows you to create a monitor.

Some sample `cron` values are:

| Frequency                  | Cron Pattern   |
|-----------------------|----------------|
| Every 5 minutes       | `*/5 * * * *`  |
| Every 30 minutes     | `*/30 * * * *` |
| Every Hour         | `0 */1 * * *`  |
| Every 6 Hours      | `0 */6 * * *`  |
| Every day at 5pm    | `0 17 * * *`   |
| Every Monday at 12pm  | `0 12 * * MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |

Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 

For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBodyMonitor;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBodyMonitorSchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMonitorRequestBody();
    $request->monitor = new CreateMonitorRequestBodyMonitor();
    $request->monitor->collection = '5852-8d05dd85-222c-1452-553b-e76a531b71ed';
    $request->monitor->environment = '5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef';
    $request->monitor->name = 'This is a Monitor Name';
    $request->monitor->schedule = new CreateMonitorRequestBodyMonitorSchedule();
    $request->monitor->schedule->cron = '0 0 * * *';
    $request->monitor->schedule->timezone = 'Asia/Kolkata';

    $response = $sdk->monitors->createMonitor($request);

    if ($response->createMonitor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMonitor

This endpoint can be used to delete an existing monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMonitorRequest();
    $request->monitorUid = 'sed';

    $response = $sdk->monitors->deleteMonitor($request);

    if ($response->deleteMonitor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runAMonitor

This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunAMonitorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunAMonitorRequest();
    $request->monitorUid = 'iste';

    $response = $sdk->monitors->runAMonitor($request);

    if ($response->runAMonitor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleMonitor

This endpoint fetches you basic information about the monitor using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleMonitorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleMonitorRequest();
    $request->monitorUid = 'dolor';

    $response = $sdk->monitors->singleMonitor($request);

    if ($response->singleMonitor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonitor

This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.

Some example `cron` values are:

| Frequency                  | Cron Pattern   |
|-----------------------|----------------|
| Every 5 minutes       | `*/5 * * * *`  |
| Every 30 minutes     | `*/30 * * * *` |
| Every Hour         | `0 */1 * * *`  |
| Every 6 Hours      | `0 */6 * * *`  |
| Every day at 5pm    | `0 17 * * *`   |
| Every Monday at 12pm  | `0 12 * * MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |

Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 

For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBodyMonitor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitorRequestBodyMonitorSchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonitorRequest();
    $request->requestBody = new UpdateMonitorRequestBody();
    $request->requestBody->monitor = new UpdateMonitorRequestBodyMonitor();
    $request->requestBody->monitor->name = 'Updated Monitor Name';
    $request->requestBody->monitor->schedule = new UpdateMonitorRequestBodyMonitorSchedule();
    $request->requestBody->monitor->schedule->cron = '*/5 * * * *';
    $request->requestBody->monitor->schedule->timezone = 'America/Chicago';
    $request->monitorUid = 'natus';

    $response = $sdk->monitors->updateMonitor($request);

    if ($response->updateMonitor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

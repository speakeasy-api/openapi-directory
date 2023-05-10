# sync

## Overview

Initiate a sync of sync for commerce company data into their respective accounting software.

### Available Operations

* [requestSync](#requestsync) - Run a Commerce sync from the last successful sync
* [requestSyncForDateRange](#requestsyncfordaterange) - Run a Commerce sync from a given date range

## requestSync

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyncToLatestArgs;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestSyncRequest();
    $request->syncToLatestArgs = new SyncToLatestArgs();
    $request->syncToLatestArgs->syncTo = 'occaecati';
    $request->companyId = '5efb9ba8-8f3a-4669-9707-4ba4469b6e21';

    $response = $sdk->sync->requestSync($request);

    if ($response->syncSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestSyncForDateRange

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestSyncForDateRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestSyncForDateRangeRequest();
    $request->dateRange = new DateRange();
    $request->dateRange->finish = 'magnam';
    $request->dateRange->start = 'et';
    $request->companyId = '959890af-a563-4e25-96fe-4c8b711e5b7f';

    $response = $sdk->sync->requestSyncForDateRange($request);

    if ($response->syncSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# syncStatus

## Overview

Check the status of ongoing or previous expense syncs.

### Available Operations

* [getLastSuccessfulSync](#getlastsuccessfulsync) - Last successful sync
* [getLatestSync](#getlatestsync) - Latest sync status
* [getSyncById](#getsyncbyid) - Get Sync status
* [listSyncs](#listsyncs) - List sync statuses

## getLastSuccessfulSync

Gets the status of the last successfull sync

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLastSuccessfulSyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLastSuccessfulSyncRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->syncStatus->getLastSuccessfulSync($request);

    if ($response->companySyncStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestSync

Gets the latest sync status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestSyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestSyncRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->syncStatus->getLatestSync($request);

    if ($response->companySyncStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyncById

Get the sync status for a specified sync

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSyncByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyncByIdRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->syncId = '6fb40d5e-b13e-11ed-afa1-0242ac120002';

    $response = $sdk->syncStatus->getSyncById($request);

    if ($response->companySyncStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncs

Gets a list of sync statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->syncStatus->listSyncs($request);

    if ($response->companySyncStatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

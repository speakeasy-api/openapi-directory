# sync

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [intiateSync](#intiatesync) - Initiate sync

## intiateSync

Initiate sync of pending transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IntiateSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostSync;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntiateSyncRequest();
    $request->postSync = new PostSync();
    $request->postSync->datasetIds = [
        '9d8d69a6-74e0-4f46-bcc8-796ed151a05d',
        'fc2ddf7c-c78c-4a1b-a928-fc816742cb73',
        '92059293-96fe-4a75-96eb-10faaa2352c5',
        '955907af-f1a3-4a2f-a946-7739251aa52c',
    ];
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->sync->intiateSync($request);

    if ($response->syncInitiated !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

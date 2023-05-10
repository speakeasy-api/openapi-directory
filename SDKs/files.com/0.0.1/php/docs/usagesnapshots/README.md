# usageSnapshots

## Overview

Operations about usage_snapshots

### Available Operations

* [getUsageSnapshots](#getusagesnapshots) - List Usage Snapshots

## getUsageSnapshots

List Usage Snapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageSnapshotsRequest();
    $request->cursor = 'incidunt';
    $request->perPage = 97493;

    $response = $sdk->usageSnapshots->getUsageSnapshots($request);

    if ($response->usageSnapshotEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

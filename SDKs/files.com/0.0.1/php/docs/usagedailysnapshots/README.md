# usageDailySnapshots

## Overview

Operations about usage_daily_snapshots

### Available Operations

* [getUsageDailySnapshots](#getusagedailysnapshots) - List Usage Daily Snapshots

## getUsageDailySnapshots

List Usage Daily Snapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageDailySnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageDailySnapshotsRequest();
    $request->cursor = 'esse';
    $request->filter = [
        'sed' => 'veniam',
        'nesciunt' => 'expedita',
        'eum' => 'vel',
        'voluptatum' => 'magnam',
    ];
    $request->filterGt = [
        'ab' => 'porro',
        'autem' => 'nobis',
    ];
    $request->filterGteq = [
        'recusandae' => 'consequuntur',
        'voluptatem' => 'exercitationem',
    ];
    $request->filterLt = [
        'quasi' => 'nisi',
        'at' => 'vero',
        'est' => 'harum',
        'sequi' => 'doloribus',
    ];
    $request->filterLteq = [
        'optio' => 'occaecati',
        'nemo' => 'voluptate',
        'blanditiis' => 'officia',
        'voluptas' => 'numquam',
    ];
    $request->perPage = 364912;
    $request->sortBy = [
        'eius' => 'aspernatur',
        'ducimus' => 'nesciunt',
        'fuga' => 'laudantium',
    ];

    $response = $sdk->usageDailySnapshots->getUsageDailySnapshots($request);

    if ($response->usageDailySnapshotEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

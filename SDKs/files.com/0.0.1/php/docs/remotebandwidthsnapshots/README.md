# remoteBandwidthSnapshots

## Overview

Operations about remote_bandwidth_snapshots

### Available Operations

* [getRemoteBandwidthSnapshots](#getremotebandwidthsnapshots) - List Remote Bandwidth Snapshots

## getRemoteBandwidthSnapshots

List Remote Bandwidth Snapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteBandwidthSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoteBandwidthSnapshotsRequest();
    $request->cursor = 'reiciendis';
    $request->filter = [
        'repudiandae' => 'dicta',
    ];
    $request->filterGt = [
        'beatae' => 'dolores',
    ];
    $request->filterGteq = [
        'laboriosam' => 'velit',
        'a' => 'molestias',
    ];
    $request->filterLt = [
        'saepe' => 'consequuntur',
        'occaecati' => 'officiis',
    ];
    $request->filterLteq = [
        'in' => 'adipisci',
        'eveniet' => 'occaecati',
        'consequuntur' => 'fugit',
    ];
    $request->perPage = 661118;
    $request->sortBy = [
        'reprehenderit' => 'error',
        'illo' => 'corporis',
    ];

    $response = $sdk->remoteBandwidthSnapshots->getRemoteBandwidthSnapshots($request);

    if ($response->remoteBandwidthSnapshotEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

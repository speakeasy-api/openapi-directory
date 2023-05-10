# bandwidthSnapshots

## Overview

Operations about bandwidth_snapshots

### Available Operations

* [getBandwidthSnapshots](#getbandwidthsnapshots) - List Bandwidth Snapshots

## getBandwidthSnapshots

List Bandwidth Snapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBandwidthSnapshotsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBandwidthSnapshotsRequest();
    $request->cursor = 'illum';
    $request->filter = [
        'maxime' => 'ea',
        'excepturi' => 'odit',
        'ea' => 'accusantium',
        'ab' => 'maiores',
    ];
    $request->filterGt = [
        'ipsam' => 'voluptate',
        'autem' => 'nam',
        'eaque' => 'pariatur',
    ];
    $request->filterGteq = [
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->filterLt = [
        'cumque' => 'corporis',
    ];
    $request->filterLteq = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->perPage = 199996;
    $request->sortBy = [
        'perferendis' => 'dolores',
    ];

    $response = $sdk->bandwidthSnapshots->getBandwidthSnapshots($request);

    if ($response->bandwidthSnapshotEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

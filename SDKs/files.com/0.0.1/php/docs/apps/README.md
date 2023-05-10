# apps

## Overview

Operations about apps

### Available Operations

* [getApps](#getapps) - List Apps

## getApps

List Apps

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsRequest();
    $request->cursor = 'fugit';
    $request->filter = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->filterPrefix = [
        'qui' => 'impedit',
        'cum' => 'esse',
    ];
    $request->perPage = 216550;
    $request->sortBy = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];

    $response = $sdk->apps->getApps($request);

    if ($response->appEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

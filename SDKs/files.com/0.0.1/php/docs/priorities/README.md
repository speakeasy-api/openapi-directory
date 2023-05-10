# priorities

## Overview

Operations about priorities

### Available Operations

* [getPriorities](#getpriorities) - List Priorities

## getPriorities

List Priorities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrioritiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrioritiesRequest();
    $request->cursor = 'natus';
    $request->path = 'minima';
    $request->perPage = 133461;

    $response = $sdk->priorities->getPriorities($request);

    if ($response->priorityEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

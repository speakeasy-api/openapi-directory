# SDK

## Overview

Execute SQL queries against a Datasette database and return the results as JSON

### Available Operations

* [query](#query) - Execute a SQLite SQL query against the content database

## query

Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryShapeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->shape = QueryShapeEnum::ARRAY;
    $request->sql = 'provident';

    $response = $sdk->sdk->query($request);

    if ($response->query200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

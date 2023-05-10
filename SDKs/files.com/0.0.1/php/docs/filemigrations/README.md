# fileMigrations

## Overview

Operations about file_migrations

### Available Operations

* [getFileMigrationsId](#getfilemigrationsid) - Show File Migration

## getFileMigrationsId

Show File Migration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFileMigrationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileMigrationsIdRequest();
    $request->id = 509342;

    $response = $sdk->fileMigrations->getFileMigrationsId($request);

    if ($response->fileMigrationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

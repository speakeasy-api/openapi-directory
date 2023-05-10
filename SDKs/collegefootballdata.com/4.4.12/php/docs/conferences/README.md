# conferences

## Overview

Conference information

### Available Operations

* [getConferences](#getconferences) - Conferences

## getConferences

Get conference list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->conferences->getConferences();

    if ($response->conferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

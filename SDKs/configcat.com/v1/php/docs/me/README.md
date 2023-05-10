# me

## Overview

Information about the current user.

### Available Operations

* [getMe](#getme) - Get authenticated user details

## getMe

Get authenticated user details

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
    $response = $sdk->me->getMe();

    if ($response->meModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

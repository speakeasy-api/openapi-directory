# users

## Overview

Operations related to users.

### Available Operations

* [getCurrentUserInfo](#getcurrentuserinfo) - Get current user

## getCurrentUserInfo

Returns information about the currently authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->users->getCurrentUserInfo();

    if ($response->userInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

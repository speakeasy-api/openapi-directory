# user

## Overview

user-specific methods

### Available Operations

* [getUserExtensions](#getuserextensions) - Get User Extensions

## getUserExtensions

This endpoint allows you to get list of your extensions including extensions from the watchlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserExtensionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserExtensionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->user->getUserExtensions($requestSecurity);

    if ($response->extensions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

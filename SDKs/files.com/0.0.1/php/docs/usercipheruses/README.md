# userCipherUses

## Overview

Operations about user_cipher_uses

### Available Operations

* [getUserCipherUses](#getusercipheruses) - List User Cipher Uses

## getUserCipherUses

List User Cipher Uses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserCipherUsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserCipherUsesRequest();
    $request->cursor = 'consectetur';
    $request->perPage = 244889;
    $request->userId = 538869;

    $response = $sdk->userCipherUses->getUserCipherUses($request);

    if ($response->userCipherUseEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# balance

## Overview

Authorized users with API Key can call endpoints under this tag.

### Available Operations

* [balanceLookup](#balancelookup) - Check Balance

## balanceLookup

Get Account balance and expiry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BalanceLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceLookupRequest();
    $request->apiKey = 'provident';

    $response = $sdk->balance->balanceLookup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# lookup

## Overview

Authorized users with API Key can call this service

### Available Operations

* [binLookup](#binlookup) - Lookup for bin

## binLookup

By passing in the appropriate BIN, you can lookup for
card meta data in bintable.com API


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BinLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BinLookupRequest();
    $request->apiKey = 'distinctio';
    $request->bin = 'quibusdam';

    $response = $sdk->lookup->binLookup($request);

    if ($response->responseItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

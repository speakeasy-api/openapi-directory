# status

## Overview

 

### Available Operations

* [getAvailableBlockchains](#getavailableblockchains) - List available blockchains
* [getBlockchain](#getblockchain) - Blockchain Info Summary

## getAvailableBlockchains

Get an array of active blockchains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->status->getAvailableBlockchains();

    if ($response->getAvailableBlockchains200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockchain

Get basic summary of info relating to the currently selected blockchain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockchainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockchainRequest();
    $request->blockchain = 'bitcoin';

    $response = $sdk->status->getBlockchain($request);

    if ($response->getBlockchain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

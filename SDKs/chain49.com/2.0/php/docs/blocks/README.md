# blocks

## Overview

 

### Available Operations

* [getBlockHashV2](#getblockhashv2) - Get block hash V2
* [getBlockV2](#getblockv2) - Get Block V2
* [getRawBlockV2](#getrawblockv2) - Get raw block data V2

## getBlockHashV2

Get block hash by its height

Note: Blockbook always follows the main chain of the backend it is attached to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockHashV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockHashV2Request();
    $request->blockHeight = 15;
    $request->blockchain = 'bitcoin';

    $response = $sdk->blocks->getBlockHashV2($request);

    if ($response->getBlockHashV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockV2

Returns information about block with transactions, subject to paging.

Note: Blockbook always follows the main chain of the backend it is attached to. If there is a rollback-reorg in the backend, Blockbook will also do rollback. When you ask for block by height, you will always get the main chain block. If you ask for block by hash, you may get the block from another fork but it is not guaranteed (backend may not keep it)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockV2Request();
    $request->blockHashOrHeight = '00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c';
    $request->blockchain = 'bitcoin';
    $request->page = 1;
    $request->pageSize = 1000;

    $response = $sdk->blocks->getBlockV2($request);

    if ($response->getBlockV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRawBlockV2

Returns the raw hex-encoded block data for a given block hash or height

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetRawBlockV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRawBlockV2Request();
    $request->blockHashOrHeight = '00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c';
    $request->blockchain = 'bitcoin';

    $response = $sdk->blocks->getRawBlockV2($request);

    if ($response->getRawBlockV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

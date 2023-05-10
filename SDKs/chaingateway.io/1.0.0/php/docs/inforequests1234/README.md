# infoRequests1234

### Available Operations

* [getblock4](#getblock4) - getBlock
* [getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [getfees](#getfees) - getFees
* [getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](#gettransaction4) - getTransaction

## getblock4

getBlock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getblock4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getblock4Request();
    $request->requestBody = 'quod';
    $request->block = '737832';

    $response = $sdk->infoRequests1234->getblock4($request);

    if ($response->getblock4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getblockchaininfo

getBlockchaIninfo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->infoRequests1234->getblockchaininfo();

    if ($response->getblockchaininfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getfees

The fees are parted into three categroies

fast (10min / 1 block)  
medium (30 min / 3 blocks)  
slow (60 min / 6 blocks)

this tells you in wich block distance your transaction get confirmed. A block is around \~10 minutes.

Please note that fees are dynamic by transaction size. This is only an estimation!

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->infoRequests1234->getfees();

    if ($response->getfees200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlastblocknumber4

Get the latest block number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->infoRequests1234->getlastblocknumber4();

    if ($response->getlastblocknumber4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransaction4

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransaction4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransaction4Request();
    $request->requestBody = 'esse';
    $request->id = 'abf9fdf4144c999034075815455285c5a475d6e0203e4af7050844c8264f16e3';

    $response = $sdk->infoRequests1234->gettransaction4($request);

    if ($response->gettransaction4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

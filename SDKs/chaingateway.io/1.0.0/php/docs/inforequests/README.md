# infoRequests

### Available Operations

* [getallerc20balance](#getallerc20balance) - getAllERC20Balance
* [getblock](#getblock) - getBlock
* [geterc20](#geterc20) - getERC20
* [getethereumbalance](#getethereumbalance) - getEthereumBalance
* [getgasprice](#getgasprice) - getGasPrice
* [getlastblocknumber](#getlastblocknumber) - getLastBlockNumber
* [getnftowner](#getnftowner) - getNFTOwner
* [getnfturi](#getnfturi) - getNFTUri
* [gettransaction](#gettransaction) - getTransaction
* [gettransactionreceipt](#gettransactionreceipt) - getTransactionReceipt

## getallerc20balance

Get the balance of an ERC20 address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getallerc20balanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getallerc20balanceRequest();
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->erc20Token = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->infoRequests->getallerc20balance($request);

    if ($response->getallerc20balance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getblock

Get information of a specific block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetblockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetblockRequest();
    $request->block = '0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5';

    $response = $sdk->infoRequests->getblock($request);

    if ($response->getblock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## geterc20

Get information about an ERC20 token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Geterc20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Geterc20Request();
    $request->erc20Token = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->infoRequests->geterc20($request);

    if ($response->geterc20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getethereumbalance

Get the balance of an address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetethereumbalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetethereumbalanceRequest();
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->infoRequests->getethereumbalance($request);

    if ($response->getethereumbalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getgasprice

Get gas price

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->infoRequests->getgasprice();

    if ($response->getgasprice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlastblocknumber

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
'odit'

    $response = $sdk->infoRequests->getlastblocknumber($request);

    if ($response->getlastblocknumber200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnftowner

Get the Owner of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetnftownerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetnftownerRequest();
    $request->contract = '0x9db475371b5cc2913d3219f72e16a3f101339a05';
    $request->tokenId = '374';

    $response = $sdk->infoRequests->getnftowner($request);

    if ($response->getnftowner200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnfturi

Get the URI of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetnfturiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetnfturiRequest();
    $request->contract = '0x9db475371b5cc2913d3219f72e16a3f101339a05';
    $request->tokenId = '374';

    $response = $sdk->infoRequests->getnfturi($request);

    if ($response->getnfturi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransaction

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GettransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GettransactionRequest();
    $request->transaction = '0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037';

    $response = $sdk->infoRequests->gettransaction($request);

    if ($response->gettransaction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransactionreceipt

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GettransactionreceiptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GettransactionreceiptRequest();
    $request->transaction = '0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037';

    $response = $sdk->infoRequests->gettransactionreceipt($request);

    if ($response->gettransactionreceipt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

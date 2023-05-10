# infoRequests

## Overview

Requests that return information on balances, transactions, gas price, exchange rates, ...

### Available Operations

* [getBlock](#getblock) - getBlock
* [getEthereumBalance](#getethereumbalance) - getEthereumBalance
* [getExchangeRate](#getexchangerate) - getExchangeRate
* [getGasPrice](#getgasprice) - getGasPrice
* [getLastBlockNumber](#getlastblocknumber) - getLastBlockNumber
* [getToken](#gettoken) - getToken
* [getTokenBalance](#gettokenbalance) - getTokenBalance
* [getTransactions](#gettransactions) - getTransactions

## getBlock

Returns information of an ethereum block with or without transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getBlockRequest = new GetBlockRequest();
    $request->getBlockRequest->block = 'molestiae';

    $response = $sdk->infoRequests->getBlock($request);

    if ($response->getBlock !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEthereumBalance

Returns the ethereum balance of a given address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEthereumBalanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEthereumBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEthereumBalanceRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getEthereumBalanceRequest = new GetEthereumBalanceRequest();
    $request->getEthereumBalanceRequest->ethereumaddress = 'modi';

    $response = $sdk->infoRequests->getEthereumBalance($request);

    if ($response->getEthereumBalance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExchangeRate

Returns the current Ethereum price in Euro or US Dollar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExchangeRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetExchangeRateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExchangeRateRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getExchangeRateRequest = new GetExchangeRateRequest();
    $request->getExchangeRateRequest->currency = 'qui';

    $response = $sdk->infoRequests->getExchangeRate($request);

    if ($response->getExchangeRate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGasPrice

Returns the current gas price in GWEI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGasPriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGasPriceRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->contentType = 'application/json';

    $response = $sdk->infoRequests->getGasPrice($request);

    if ($response->getGasPrice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLastBlockNumber

Returns the block number of the last mined ethereum block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLastBlockNumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLastBlockNumberRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->contentType = 'application/json';

    $response = $sdk->infoRequests->getLastBlockNumber($request);

    if ($response->getLastBlockNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getToken

Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getTokenRequest = new GetTokenRequest();
    $request->getTokenRequest->contractaddress = 'impedit';

    $response = $sdk->infoRequests->getToken($request);

    if ($response->getToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenBalance

Returns the token balance of a given address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenBalanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTokenBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenBalanceRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getTokenBalanceRequest = new GetTokenBalanceRequest();
    $request->getTokenBalanceRequest->contractaddress = 'cum';
    $request->getTokenBalanceRequest->ethereumaddress = 'esse';

    $response = $sdk->infoRequests->getTokenBalance($request);

    if ($response->getTokenBalance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactions

Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->getTransactionsRequest = new GetTransactionsRequest();
    $request->getTransactionsRequest->txid = 'ipsum';

    $response = $sdk->infoRequests->getTransactions($request);

    if ($response->getTransactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

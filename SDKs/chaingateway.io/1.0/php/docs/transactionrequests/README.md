# transactionRequests

## Overview

Requests to send Tokens, Ethereum and clear addresses

### Available Operations

* [clearAddress](#clearaddress) - clearAddress
* [sendEthereum](#sendethereum) - sendEthereum
* [sendToken](#sendtoken) - sendToken

## clearAddress

Sends all available ethereum funds of an address to a specified receiver address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClearAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->clearAddressRequest = new ClearAddressRequest();
    $request->clearAddressRequest->ethereumaddress = 'dolor';
    $request->clearAddressRequest->newaddress = 'natus';
    $request->clearAddressRequest->password = 'laboriosam';

    $response = $sdk->transactionRequests->clearAddress($request);

    if ($response->clearAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEthereum

Sends ethereum from an address controlled by the account to a specified receiver address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendEthereumRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendEthereumRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendEthereumRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->sendEthereumRequest = new SendEthereumRequest();
    $request->sendEthereumRequest->amount = 9437.49;
    $request->sendEthereumRequest->from = 'saepe';
    $request->sendEthereumRequest->password = 'fuga';
    $request->sendEthereumRequest->to = 'in';

    $response = $sdk->transactionRequests->sendEthereum($request);

    if ($response->sendEthereum !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendToken

Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTokenRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->sendTokenRequest = new SendTokenRequest();
    $request->sendTokenRequest->amount = 359508;
    $request->sendTokenRequest->contractaddress = 'iste';
    $request->sendTokenRequest->from = 'iure';
    $request->sendTokenRequest->identifier = 'saepe';
    $request->sendTokenRequest->password = 'quidem';
    $request->sendTokenRequest->to = 'architecto';

    $response = $sdk->transactionRequests->sendToken($request);

    if ($response->sendToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

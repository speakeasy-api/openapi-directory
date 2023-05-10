# bitcoin

### Available Operations

* [createwallet](#createwallet) - createWallet
* [createwalletaddress](#createwalletaddress) - createWalletAddress
* [deletewallet](#deletewallet) - deleteWallet
* [exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [getblock4](#getblock4) - getBlock
* [getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [getfees](#getfees) - getFees
* [getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](#gettransaction4) - getTransaction
* [getwallet](#getwallet) - getWallet
* [getwalletaddresses](#getwalletaddresses) - getWalletAddresses
* [listfailedipns4](#listfailedipns4) - listFailedIPNs
* [listsubscribedaddresses4](#listsubscribedaddresses4) - listSubscribedAddresses
* [resendfailedipn4](#resendfailedipn4) - resendFailedIPN
* [sendtransaction4](#sendtransaction4) - sendTransaction
* [subscribeaddress4](#subscribeaddress4) - subscribeAddress
* [unsubscribeaddress4](#unsubscribeaddress4) - unsubscribeAddress

## createwallet

createWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatewalletRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatewalletRequestBody();
    $request->password = 'test123';

    $response = $sdk->bitcoin->createwallet($request);

    if ($response->createwallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createwalletaddress

createWalletAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatewalletaddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatewalletaddressRequest();
    $request->requestBody = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->walletName = 'Evolo_2163532';

    $response = $sdk->bitcoin->createwalletaddress($request);

    if ($response->createwalletaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletewallet

deleteWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletewalletRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletewalletRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletewalletRequest();
    $request->requestBody = new DeletewalletRequestBody();
    $request->requestBody->password = 'test123';
    $request->walletname = 'Evolo_4215179';

    $response = $sdk->bitcoin->deletewallet($request);

    if ($response->deletewallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportaddressprivatekey

exportAddressPrivateKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressprivatekeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressprivatekeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportaddressprivatekeyRequest();
    $request->requestBody = new ExportaddressprivatekeyRequestBody();
    $request->requestBody->password = 'test123';
    $request->address = 'bc1qz3hdws5lt5ug7qwfv4m4ttanaq67ts77ekv95x';
    $request->name = 'Evolo_4215179';

    $response = $sdk->bitcoin->exportaddressprivatekey($request);

    if ($response->exportaddressprivatekey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->requestBody = 'delectus';
    $request->block = '737832';

    $response = $sdk->bitcoin->getblock4($request);

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
    $response = $sdk->bitcoin->getblockchaininfo();

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
    $response = $sdk->bitcoin->getfees();

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
    $response = $sdk->bitcoin->getlastblocknumber4();

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
    $request->requestBody = 'tempora';
    $request->id = 'abf9fdf4144c999034075815455285c5a475d6e0203e4af7050844c8264f16e3';

    $response = $sdk->bitcoin->gettransaction4($request);

    if ($response->gettransaction4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getwallet

getWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'suscipit'

    $response = $sdk->bitcoin->getwallet($request);

    if ($response->getwallet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getwalletaddresses

getWalletAddresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetwalletaddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetwalletaddressesRequest();
    $request->walletName = 'Evolo_2163532';

    $response = $sdk->bitcoin->getwalletaddresses($request);

    if ($response->getwalletaddresses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listfailedipns4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'molestiae'

    $response = $sdk->bitcoin->listfailedipns4($request);

    if ($response->listfailedipns4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'minus'

    $response = $sdk->bitcoin->listsubscribedaddresses4($request);

    if ($response->listsubscribedaddresses4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Resendfailedipn4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Resendfailedipn4Request();
    $request->requestBody = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->notificationId = '62640817eb594da78c7bee00';

    $response = $sdk->bitcoin->resendfailedipn4($request);

    if ($response->resendfailedipn4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction4

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction4RequestBody();
    $request->amount = '1';
    $request->password = 'Test123';
    $request->speed = 'fast';
    $request->subtractfee = false;
    $request->to = 'bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn';
    $request->walletname = 'Evolo_6928232';

    $response = $sdk->bitcoin->sendtransaction4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress4

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress4RequestBody();
    $request->from = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->bitcoin->subscribeaddress4($request);

    if ($response->subscribeaddress4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress4

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress4Request();
    $request->requestBody = 'veritatis';
    $request->id = '63ef470294d74b0f290b4b64';

    $response = $sdk->bitcoin->unsubscribeaddress4($request);

    if ($response->unsubscribeaddress4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

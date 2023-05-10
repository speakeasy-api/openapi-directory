# binanceSmartChain

### Available Operations

* [broadcasttransaction2](#broadcasttransaction2) - broadcastTransaction
* [deleteaddress2](#deleteaddress2) - deleteAddress
* [exportaddress2](#exportaddress2) - exportAddress
* [getbep20](#getbep20) - getBEP20
* [getbep20balance](#getbep20balance) - getBEP20Balance
* [getbinancecoinbalance](#getbinancecoinbalance) - getBinanceCoinBalance
* [getblock2](#getblock2) - getBlock
* [getgasprice2](#getgasprice2) - getGasPrice
* [getlastblocknumber2](#getlastblocknumber2) - getLastBlocknumber
* [getnftowner2](#getnftowner2) - getNFTOwner
* [getnfturi2](#getnfturi2) - getNFTUri
* [gettransaction2](#gettransaction2) - getTransaction
* [gettransactionreceipt2](#gettransactionreceipt2) - getTransactionReceipt
* [importaddress2](#importaddress2) - importAddress
* [listaddress](#listaddress) - listAddress
* [listfailedipns2](#listfailedipns2) - listFailedIPNs
* [listsubscribedaddresses2](#listsubscribedaddresses2) - listSubscribedAddresses
* [listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](#newaddress2) - newAddress
* [resendfailedipn2](#resendfailedipn2) - resendFailedIPN
* [sendbep20](#sendbep20) - sendBEP20
* [sendbep721](#sendbep721) - sendBEP721
* [sendtransaction2](#sendtransaction2) - sendTransaction
* [subscribeaddress2](#subscribeaddress2) - subscribeAddress
* [unsubscribeaddress2](#unsubscribeaddress2) - unsubscribeAddress

## broadcasttransaction2

Broadcast raw transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Broadcasttransaction2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Broadcasttransaction2RequestBody();
    $request->data = '0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85';

    $response = $sdk->binanceSmartChain->broadcasttransaction2($request);

    if ($response->broadcasttransaction2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteaddress2

deleteAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Deleteaddress2Request;
use \OpenAPI\OpenAPI\Models\Operations\Deleteaddress2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Deleteaddress2Request();
    $request->requestBody = new Deleteaddress2RequestBody();
    $request->requestBody->password = 'test123';
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->binanceSmartChain->deleteaddress2($request);

    if ($response->deleteaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportaddress2

exportAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Exportaddress2Request;
use \OpenAPI\OpenAPI\Models\Operations\Exportaddress2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Exportaddress2Request();
    $request->requestBody = new Exportaddress2RequestBody();
    $request->requestBody->password = 'test123';
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->binanceSmartChain->exportaddress2($request);

    if ($response->exportaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getbep20

Receive information of a BEP20 address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getbep20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getbep20Request();
    $request->contract = '0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B';

    $response = $sdk->binanceSmartChain->getbep20($request);

    if ($response->getbep20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getbep20balance

Get the balance of a BEP20 address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getbep20balanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getbep20balanceRequest();
    $request->contract = '0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec';
    $request->tokenId = '0x9dB475371B5cC2913D3219f72e16a3F101339a05';

    $response = $sdk->binanceSmartChain->getbep20balance($request);

    if ($response->getbep20balance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getbinancecoinbalance

Get the balance of an address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetbinancecoinbalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetbinancecoinbalanceRequest();
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->binanceSmartChain->getbinancecoinbalance($request);

    if ($response->getbinancecoinbalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getblock2

Get information of a specific block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getblock2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getblock2Request();
    $request->block = '2000';

    $response = $sdk->binanceSmartChain->getblock2($request);

    if ($response->getblock2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getgasprice2

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
    $response = $sdk->binanceSmartChain->getgasprice2();

    if ($response->getgasprice2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlastblocknumber2

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
    $response = $sdk->binanceSmartChain->getlastblocknumber2();

    if ($response->getlastblocknumber2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnftowner2

Get the Owner of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getnftowner2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getnftowner2Request();
    $request->contract = '0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B';
    $request->tokenId = '403706';

    $response = $sdk->binanceSmartChain->getnftowner2($request);

    if ($response->getnftowner2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnfturi2

Get the URI of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getnfturi2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getnfturi2Request();
    $request->contract = '0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B';
    $request->tokenId = '403706';

    $response = $sdk->binanceSmartChain->getnfturi2($request);

    if ($response->getnfturi2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransaction2

Get info about a transaction

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransaction2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransaction2Request();
    $request->transaction = '0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534';

    $response = $sdk->binanceSmartChain->gettransaction2($request);

    if ($response->gettransaction2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransactionreceipt2

Get info about a transaction receipt

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransactionreceipt2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransactionreceipt2Request();
    $request->transaction = '0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534';

    $response = $sdk->binanceSmartChain->gettransactionreceipt2($request);

    if ($response->gettransactionreceipt2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importaddress2

importAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress2RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress2RequestBodyContent;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress2RequestBodyContentCrypto;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress2RequestBodyContentCryptoCipherparams;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress2RequestBodyContentCryptoKdfparams;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Importaddress2RequestBody();
    $request->content = new Importaddress2RequestBodyContent();
    $request->content->address = '4fb45889cd2d3348348e39c613c41bf1dc43760a';
    $request->content->crypto = new Importaddress2RequestBodyContentCrypto();
    $request->content->crypto->cipher = 'aes-128-ctr';
    $request->content->crypto->cipherparams = new Importaddress2RequestBodyContentCryptoCipherparams();
    $request->content->crypto->cipherparams->iv = 'a2b3022a9d7d76ade60dd70e5405cc09';
    $request->content->crypto->ciphertext = '027fbbe9d7b91b1a4a3afddcb27a07ac5e7fff550fd167452a6345a961f21a4d';
    $request->content->crypto->kdf = 'scrypt';
    $request->content->crypto->kdfparams = new Importaddress2RequestBodyContentCryptoKdfparams();
    $request->content->crypto->kdfparams->dklen = 32;
    $request->content->crypto->kdfparams->n = 131056;
    $request->content->crypto->kdfparams->p = 1;
    $request->content->crypto->kdfparams->r = 6;
    $request->content->crypto->kdfparams->salt = 'fd84f455da4ad1325cf5bc7beb06bf3052919278c76373a67507aaa68bcebab3';
    $request->content->crypto->mac = 'd46d36b6facd1f3f5549f01cb5c87de0c01b68b6445410259128c52d515a7b6d';
    $request->content->id = 'f0449f3f-1ef2-5fb9-bf09-20bb72c47167';
    $request->content->version = 3;
    $request->filename = 'UTC--2020-05-01T12-30-12.020Z--4fb45889cd2d3348348e39c613c41bf1dc43760a';
    $request->password = 'padN39QkRA2hJ';

    $response = $sdk->binanceSmartChain->importaddress2($request);

    if ($response->importaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listaddress

listAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->binanceSmartChain->listaddress();

    if ($response->listaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listfailedipns2

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
    $response = $sdk->binanceSmartChain->listfailedipns2();

    if ($response->listfailedipns2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses2

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
    $response = $sdk->binanceSmartChain->listsubscribedaddresses2();

    if ($response->listsubscribedaddresses2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listtransactionsbyaddress2

Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.

Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.

To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,

For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:

```
/addresses//transactions/1

```

If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:

```
/addresses//transactions/2
```

By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.

each request tells you the max pages within the Request in the **max_pages** field

`"max_pages": 515`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Listtransactionsbyaddress2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Listtransactionsbyaddress2Request();
    $request->address = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5';
    $request->page = '1';

    $response = $sdk->binanceSmartChain->listtransactionsbyaddress2($request);

    if ($response->listtransactionsbyaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newaddress2

newAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Newaddress2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Newaddress2RequestBody();
    $request->password = 'test123';

    $response = $sdk->binanceSmartChain->newaddress2($request);

    if ($response->newaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn2

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Resendfailedipn2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Resendfailedipn2Request();
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->notificationId = '62640817eb594da78c7bee00';

    $response = $sdk->binanceSmartChain->resendfailedipn2($request);

    if ($response->resendfailedipn2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendbep20

sendBEP20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendbep20RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendbep20RequestBody();
    $request->amount = '0.1';
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 4236.55;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->binanceSmartChain->sendbep20($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendbep721

sendBEP721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendbep721RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendbep721RequestBody();
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';
    $request->tokenid = 123;

    $response = $sdk->binanceSmartChain->sendbep721($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction2

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction2RequestBody();
    $request->amount = '0.1';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->binanceSmartChain->sendtransaction2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress2

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress2RequestBody();
    $request->contractaddress = '0x514910771af9ca656af840dff83e8264ecf986ca';
    $request->ethereumaddress = '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->binanceSmartChain->subscribeaddress2($request);

    if ($response->subscribeaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress2

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress2Request();
    $request->webhook = '624d7db34b026365cc22356b';

    $response = $sdk->binanceSmartChain->unsubscribeaddress2($request);

    if ($response->unsubscribeaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

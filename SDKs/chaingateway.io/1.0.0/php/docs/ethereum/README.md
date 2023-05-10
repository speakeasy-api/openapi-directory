# ethereum

### Available Operations

* [broadcasttransaction](#broadcasttransaction) - broadcastTransaction
* [deleteaddress](#deleteaddress) - deleteAddress
* [exportaddress](#exportaddress) - exportAddress
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
* [importaddress](#importaddress) - importAddress
* [listaddresses](#listaddresses) - listAddresses
* [listfailedipns](#listfailedipns) - listFailedIPNs
* [listipnsbywebhookid](#listipnsbywebhookid) - listIPNsByWebhookId
* [listsubscribedaddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](#newaddress) - newAddress
* [resendfailedipn](#resendfailedipn) - resendFailedIPN
* [senderc20](#senderc20) - sendERC20
* [senderc721](#senderc721) - sendERC721
* [sendtransaction](#sendtransaction) - sendTransaction
* [subscribeaddress](#subscribeaddress) - subscribeAddress
* [unsubscribeaddress](#unsubscribeaddress) - unsubscribeAddress

## broadcasttransaction

Broadcast raw transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BroadcasttransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BroadcasttransactionRequestBody();
    $request->data = '0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85';

    $response = $sdk->ethereum->broadcasttransaction($request);

    if ($response->broadcasttransaction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteaddress

deleteAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteaddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteaddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteaddressRequest();
    $request->requestBody = new DeleteaddressRequestBody();
    $request->requestBody->ethereumaddress = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';
    $request->requestBody->password = 'test123';
    $request->address = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';

    $response = $sdk->ethereum->deleteaddress($request);

    if ($response->deleteaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportaddress

exportAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportaddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportaddressRequest();
    $request->requestBody = new ExportaddressRequestBody();
    $request->requestBody->password = 'test123';
    $request->address = '0xacc767f4042360c5f08c7b98bac8e66a5c679cef';

    $response = $sdk->ethereum->exportaddress($request);

    if ($response->exportaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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

    $response = $sdk->ethereum->getallerc20balance($request);

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

    $response = $sdk->ethereum->getblock($request);

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

    $response = $sdk->ethereum->geterc20($request);

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

    $response = $sdk->ethereum->getethereumbalance($request);

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
    $response = $sdk->ethereum->getgasprice();

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
'deserunt'

    $response = $sdk->ethereum->getlastblocknumber($request);

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

    $response = $sdk->ethereum->getnftowner($request);

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

    $response = $sdk->ethereum->getnfturi($request);

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

    $response = $sdk->ethereum->gettransaction($request);

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

    $response = $sdk->ethereum->gettransactionreceipt($request);

    if ($response->gettransactionreceipt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importaddress

importAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportaddressRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportaddressRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Operations\ImportaddressRequestBodyContentCrypto;
use \OpenAPI\OpenAPI\Models\Operations\ImportaddressRequestBodyContentCryptoCipherparams;
use \OpenAPI\OpenAPI\Models\Operations\ImportaddressRequestBodyContentCryptoKdfparams;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportaddressRequestBody();
    $request->content = new ImportaddressRequestBodyContent();
    $request->content->address = '71892889ed4d79d88ab6ea3783b571b8ece9bef4';
    $request->content->crypto = new ImportaddressRequestBodyContentCrypto();
    $request->content->crypto->cipher = 'aes-128-ctr';
    $request->content->crypto->cipherparams = new ImportaddressRequestBodyContentCryptoCipherparams();
    $request->content->crypto->cipherparams->iv = '76e6f2497b9f2a8e024fc752a5418a6d';
    $request->content->crypto->ciphertext = '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f';
    $request->content->crypto->kdf = 'scrypt';
    $request->content->crypto->kdfparams = new ImportaddressRequestBodyContentCryptoKdfparams();
    $request->content->crypto->kdfparams->dklen = 32;
    $request->content->crypto->kdfparams->n = 131072;
    $request->content->crypto->kdfparams->p = 1;
    $request->content->crypto->kdfparams->r = 8;
    $request->content->crypto->kdfparams->salt = 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4';
    $request->content->crypto->mac = 'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9';
    $request->content->id = '85b790ff-408e-42b8-b123-bec9523964dc';
    $request->content->version = 3;
    $request->filename = 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4';
    $request->password = 'padN39QkRA2hJ';

    $response = $sdk->ethereum->importaddress($request);

    if ($response->importaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listaddresses

listAddresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ethereum->listaddresses();

    if ($response->listaddresses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listfailedipns

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListfailedipnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListfailedipnsRequest();
    $request->webhook = '626407c62e5e8235ca561dce';

    $response = $sdk->ethereum->listfailedipns($request);

    if ($response->listfailedipns200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listipnsbywebhookid

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
    $response = $sdk->ethereum->listipnsbywebhookid();

    if ($response->listipnsbywebhookid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses

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
    $response = $sdk->ethereum->listsubscribedaddresses();

    if ($response->listsubscribedaddresses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listtransactionsbyaddress

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
use \OpenAPI\OpenAPI\Models\Operations\ListtransactionsbyaddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListtransactionsbyaddressRequest();
    $request->address = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5';
    $request->page = '1';

    $response = $sdk->ethereum->listtransactionsbyaddress($request);

    if ($response->listtransactionsbyaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newaddress

newAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NewaddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewaddressRequestBody();
    $request->password = 'test123';

    $response = $sdk->ethereum->newaddress($request);

    if ($response->newaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResendfailedipnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendfailedipnRequest();
    $request->requestBody = [
        'ipsam' => 'repellendus',
    ];
    $request->notification = '62640817eb594da78c7bee00';

    $response = $sdk->ethereum->resendfailedipn($request);

    if ($response->resendfailedipn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc20

sendERC20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc20RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc20RequestBody();
    $request->amount = 0.1;
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 9571.56;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->ethereum->senderc20($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc721

sendERC721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc721RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc721RequestBody();
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';
    $request->tokenid = 123;

    $response = $sdk->ethereum->senderc721($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendtransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendtransactionRequestBody();
    $request->amount = '0.1';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 7781.57;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->ethereum->sendtransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.

You can choose one or more from following filter criterias

| **Parameter** | **Description** |
| --- | --- |
| from | ethereum address |
| to | ethereum address |
| contractaddress | contract address |
| tokenid | token id |

You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeaddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeaddressRequestBody();
    $request->to = '0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203';
    $request->type = 'ETH';
    $request->url = 'https://example.com/ipnreceiver.php';

    $response = $sdk->ethereum->subscribeaddress($request);

    if ($response->subscribeaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeaddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeaddressRequest();
    $request->webhook = '626407c62e5e8235ca561dce';

    $response = $sdk->ethereum->unsubscribeaddress($request);

    if ($response->unsubscribeaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

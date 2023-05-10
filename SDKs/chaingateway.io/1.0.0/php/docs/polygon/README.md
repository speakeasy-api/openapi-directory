# polygon

### Available Operations

* [broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [deleteaddress1](#deleteaddress1) - deleteAddress
* [exportaddress1](#exportaddress1) - exportAddress
* [getblock1](#getblock1) - getBlock
* [geterc201](#geterc201) - getERC20
* [geterc20balance1](#geterc20balance1) - getERC20Balance
* [getgasprice1](#getgasprice1) - getGasPrice
* [getlastblocknumber1](#getlastblocknumber1) - getLastBlockNumber
* [getnftowner1](#getnftowner1) - getNFTOwner
* [getnfturi1](#getnfturi1) - getNFTUri
* [getpolygonbalance](#getpolygonbalance) - getPolygonBalance
* [gettransaction1](#gettransaction1) - getTransaction
* [gettransactionreceipt1](#gettransactionreceipt1) - getTransactionReceipt
* [importaddress1](#importaddress1) - importAddress
* [listaddresses1](#listaddresses1) - listAddresses
* [listfailedipns1](#listfailedipns1) - listFailedIPNs
* [listipnsbywebhookid1](#listipnsbywebhookid1) - listIPNsByWebhookId
* [listsubscribedaddresses1](#listsubscribedaddresses1) - listSubscribedAddresses
* [listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](#newaddress1) - newAddress
* [resendfailedipn1](#resendfailedipn1) - resendFailedIPN
* [senderc201](#senderc201) - sendERC20
* [senderc7211](#senderc7211) - sendERC721
* [sendtransaction1](#sendtransaction1) - sendTransaction
* [subscribeaddress1](#subscribeaddress1) - subscribeAddress
* [unsubscribeaddress1](#unsubscribeaddress1) - unsubscribeAddress

## broadcasttransaction1

Broadcast raw transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Broadcasttransaction1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Broadcasttransaction1RequestBody();
    $request->data = '0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85';

    $response = $sdk->polygon->broadcasttransaction1($request);

    if ($response->broadcasttransaction1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteaddress1

deleteAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Deleteaddress1Request;
use \OpenAPI\OpenAPI\Models\Operations\Deleteaddress1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Deleteaddress1Request();
    $request->requestBody = new Deleteaddress1RequestBody();
    $request->requestBody->ethereumaddress = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';
    $request->requestBody->password = 'test123';
    $request->address = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';

    $response = $sdk->polygon->deleteaddress1($request);

    if ($response->deleteaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportaddress1

exportAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Exportaddress1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Exportaddress1Request();
    $request->requestBody = 'totam';
    $request->address = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';

    $response = $sdk->polygon->exportaddress1($request);

    if ($response->exportaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getblock1

Get information of a specific block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getblock1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getblock1Request();
    $request->block = '0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5';

    $response = $sdk->polygon->getblock1($request);

    if ($response->getblock1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## geterc201

Get information about an ERC20 token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Geterc201Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Geterc201Request();
    $request->erc20Token = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->polygon->geterc201($request);

    if ($response->geterc201200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## geterc20balance1

Get the balance of an ERC20 address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Geterc20balance1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Geterc20balance1Request();
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->erc20Token = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->polygon->geterc20balance1($request);

    if ($response->geterc20balance1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getgasprice1

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
    $response = $sdk->polygon->getgasprice1();

    if ($response->getgasprice1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlastblocknumber1

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
'porro'

    $response = $sdk->polygon->getlastblocknumber1($request);

    if ($response->getlastblocknumber1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnftowner1

Get the Owner of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getnftowner1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getnftowner1Request();
    $request->contract = '0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5';
    $request->tokenId = '374';

    $response = $sdk->polygon->getnftowner1($request);

    if ($response->getnftowner1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnfturi1

Get the URI of an NFT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getnfturi1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getnfturi1Request();
    $request->ftContract = 'dolorum';
    $request->tokenId = 'dicta';

    $response = $sdk->polygon->getnfturi1($request);

    if ($response->getnfturi1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpolygonbalance

Get the balance of an address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetpolygonbalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpolygonbalanceRequest();
    $request->address = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';

    $response = $sdk->polygon->getpolygonbalance($request);

    if ($response->getpolygonbalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransaction1

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransaction1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransaction1Request();
    $request->transaction = '0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037';

    $response = $sdk->polygon->gettransaction1($request);

    if ($response->gettransaction1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransactionreceipt1

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransactionreceipt1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransactionreceipt1Request();
    $request->transaction = '0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037';

    $response = $sdk->polygon->gettransactionreceipt1($request);

    if ($response->gettransactionreceipt1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importaddress1

importAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress1RequestBodyContent;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress1RequestBodyContentCrypto;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress1RequestBodyContentCryptoCipherparams;
use \OpenAPI\OpenAPI\Models\Operations\Importaddress1RequestBodyContentCryptoKdfparams;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Importaddress1RequestBody();
    $request->content = new Importaddress1RequestBodyContent();
    $request->content->address = '71892889ed4d79d88ab6ea3783b571b8ece9bef4';
    $request->content->crypto = new Importaddress1RequestBodyContentCrypto();
    $request->content->crypto->cipher = 'aes-128-ctr';
    $request->content->crypto->cipherparams = new Importaddress1RequestBodyContentCryptoCipherparams();
    $request->content->crypto->cipherparams->iv = '76e6f2497b9f2a8e024fc752a5418a6d';
    $request->content->crypto->ciphertext = '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f';
    $request->content->crypto->kdf = 'scrypt';
    $request->content->crypto->kdfparams = new Importaddress1RequestBodyContentCryptoKdfparams();
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

    $response = $sdk->polygon->importaddress1($request);

    if ($response->importaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listaddresses1

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
    $response = $sdk->polygon->listaddresses1();

    if ($response->listaddresses1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listfailedipns1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Listfailedipns1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Listfailedipns1Request();
    $request->webhook = '626407c62e5e8235ca561dce';

    $response = $sdk->polygon->listfailedipns1($request);

    if ($response->listfailedipns1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listipnsbywebhookid1

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
    $response = $sdk->polygon->listipnsbywebhookid1();

    if ($response->listipnsbywebhookid1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses1

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
    $response = $sdk->polygon->listsubscribedaddresses1();

    if ($response->listsubscribedaddresses1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listtransactionsbyaddress1

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
use \OpenAPI\OpenAPI\Models\Operations\Listtransactionsbyaddress1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Listtransactionsbyaddress1Request();
    $request->address = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5';
    $request->page = '1';

    $response = $sdk->polygon->listtransactionsbyaddress1($request);

    if ($response->listtransactionsbyaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newaddress1

newAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Newaddress1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Newaddress1RequestBody();
    $request->password = 'test123';

    $response = $sdk->polygon->newaddress1($request);

    if ($response->newaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Resendfailedipn1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Resendfailedipn1Request();
    $request->requestBody = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->notificationId = '626407c62e5e8235ca561dce';

    $response = $sdk->polygon->resendfailedipn1($request);

    if ($response->resendfailedipn1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc201

sendERC20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc201RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc201RequestBody();
    $request->amount = 0.1;
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 5218.48;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->polygon->senderc201($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## senderc7211

sendERC721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Senderc7211RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Senderc7211RequestBody();
    $request->contractaddress = '0x55d398326f99059fF775485246999027B3197955';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';
    $request->tokenid = 123;

    $response = $sdk->polygon->senderc7211($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction1

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction1RequestBody();
    $request->amount = '0.1';
    $request->from = '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce';
    $request->gas = 1059.07;
    $request->password = 'test123';
    $request->to = '0xef4943d727e34280a2efa0b3352dfd61f508ee48';

    $response = $sdk->polygon->sendtransaction1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress1

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
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress1RequestBody();
    $request->to = '0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203';
    $request->type = 'ETH';
    $request->url = 'https://example.com/ipnreceiver.php';

    $response = $sdk->polygon->subscribeaddress1($request);

    if ($response->subscribeaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress1

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress1Request();
    $request->webhook = '626407c62e5e8235ca561dce';

    $response = $sdk->polygon->unsubscribeaddress1($request);

    if ($response->unsubscribeaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

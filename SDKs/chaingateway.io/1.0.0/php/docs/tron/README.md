# tron

### Available Operations

* [getaccountresources](#getaccountresources) - getAccountResources
* [getblock3](#getblock3) - getBlock
* [getchainparameters](#getchainparameters) - getChainParameters
* [getlastblocknumber3](#getlastblocknumber3) - getLastBlockNumber
* [gettransaction3](#gettransaction3) - getTransaction
* [gettransactionreceipt3](#gettransactionreceipt3) - getTransactionReceipt
* [gettrc10balance](#gettrc10balance) - getTRC10Balance
* [gettrc20balance](#gettrc20balance) - getTRC20Balance
* [gettronbalance](#gettronbalance) - getTronBalance
* [listfailedipns3](#listfailedipns3) - listFailedIPNs
* [listsubscribedaddresses3](#listsubscribedaddresses3) - listSubscribedAddresses
* [listtransactionsbyaddress3](#listtransactionsbyaddress3) - ListTransactionsByAddress
* [newaddress3](#newaddress3) - newAddress
* [resendfailedipn3](#resendfailedipn3) - resendFailedIPN
* [sendtransaction3](#sendtransaction3) - sendTransaction
* [sendtrc10](#sendtrc10) - sendTRC10
* [sendtrc20](#sendtrc20) - sendTRC20
* [sendtrc721](#sendtrc721) - sendTRC721
* [subscribeaddress3](#subscribeaddress3) - subscribeAddress
* [unsubscribeaddress3](#unsubscribeaddress3) - unsubscribeAddress

## getaccountresources

getAccountResources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetaccountresourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetaccountresourcesRequest();
    $request->address = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';

    $response = $sdk->tron->getaccountresources($request);

    if ($response->getaccountresources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getblock3

getBlock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Getblock3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Getblock3Request();
    $request->requestBody = 'esse';
    $request->block = '300';

    $response = $sdk->tron->getblock3($request);

    if ($response->getblock3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getchainparameters

getChainParameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tron->getchainparameters();

    if ($response->getchainparameters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlastblocknumber3

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
    $response = $sdk->tron->getlastblocknumber3();

    if ($response->getlastblocknumber3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransaction3

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransaction3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransaction3Request();
    $request->requestBody = 'ipsum';
    $request->transaction = 'dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9';

    $response = $sdk->tron->gettransaction3($request);

    if ($response->gettransaction3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettransactionreceipt3

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettransactionreceipt3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettransactionreceipt3Request();
    $request->transaction = 'dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9';

    $response = $sdk->tron->gettransactionreceipt3($request);

    if ($response->gettransactionreceipt3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettrc10balance

getTRC10Balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettrc10balanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettrc10balanceRequest();
    $request->account = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->tokenId = '10020000';

    $response = $sdk->tron->gettrc10balance($request);

    if ($response->gettrc10balance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettrc20balance

getTRC20Balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Gettrc20balanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\Gettrc20balanceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Gettrc20balanceRequest();
    $request->requestBody = new Gettrc20balanceRequestBody();
    $request->requestBody->contractaddress = 'TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ';
    $request->requestBody->tronaddress = 'TK84ZqTuFHUbfGs5BY5rMAbkMJAxdgbYB5';
    $request->account = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->token = 'TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ';

    $response = $sdk->tron->gettrc20balance($request);

    if ($response->gettrc20balance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gettronbalance

getTronBalance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GettronbalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GettronbalanceRequest();
    $request->address = 'TSU2h3XdoW53hNkts2dQoXbJSNP1uL4r7A';

    $response = $sdk->tron->gettronbalance($request);

    if ($response->gettronbalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listfailedipns3

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
'excepturi'

    $response = $sdk->tron->listfailedipns3($request);

    if ($response->listfailedipns3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses3

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
'aspernatur'

    $response = $sdk->tron->listsubscribedaddresses3($request);

    if ($response->listsubscribedaddresses3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listtransactionsbyaddress3

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
use \OpenAPI\OpenAPI\Models\Operations\Listtransactionsbyaddress3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Listtransactionsbyaddress3Request();
    $request->address = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5';
    $request->page = '1';

    $response = $sdk->tron->listtransactionsbyaddress3($request);

    if ($response->listtransactionsbyaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## newaddress3

newAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Newaddress3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Newaddress3RequestBody();
    $request->password = 'test123';

    $response = $sdk->tron->newaddress3($request);

    if ($response->newaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn3

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
    $request = [
        'ad' => 'natus',
    ]

    $response = $sdk->tron->resendfailedipn3($request);

    if ($response->resendfailedipn3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtransaction3

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction3RequestBody();
    $request->amount = '1';
    $request->privatekey = '92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';

    $response = $sdk->tron->sendtransaction3($request);

    if ($response->sendtransaction3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc10

sendTRC10

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtrc10RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtrc10RequestBody();
    $request->amount = '0.000001';
    $request->privatekey = '92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';
    $request->tokenId = 1002000;

    $response = $sdk->tron->sendtrc10($request);

    if ($response->sendtrc10200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc20

sendTRC20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtrc20RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtrc20RequestBody();
    $request->amount = '0.1';
    $request->contractaddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    $request->from = 'TPbJ4q2wZP2UpsE7ME3bxewS5pKAdWZwCj';
    $request->privatekey = 'privatekey';
    $request->to = 'TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M';

    $response = $sdk->tron->sendtrc20($request);

    if ($response->sendtrc20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendtrc721

sendTRC721

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'sed'

    $response = $sdk->tron->sendtrc721($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress3

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress3RequestBody();
    $request->from = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->tron->subscribeaddress3($request);

    if ($response->subscribeaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress3

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress3Request;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress3Request();
    $request->requestBody = new Unsubscribeaddress3RequestBody();
    $request->requestBody->id = '624d80774b026365cc22356e';
    $request->webhookid = '624d7db34b026365cc22356b';

    $response = $sdk->tron->unsubscribeaddress3($request);

    if ($response->unsubscribeaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

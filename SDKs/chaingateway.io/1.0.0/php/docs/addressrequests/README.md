# addressRequests

### Available Operations

* [deleteaddress](#deleteaddress) - deleteAddress
* [exportaddress](#exportaddress) - exportAddress
* [importaddress](#importaddress) - importAddress
* [listaddresses](#listaddresses) - listAddresses
* [listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](#newaddress) - newAddress

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

    $response = $sdk->addressRequests->deleteaddress($request);

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

    $response = $sdk->addressRequests->exportaddress($request);

    if ($response->exportaddress200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests->importaddress($request);

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
    $response = $sdk->addressRequests->listaddresses();

    if ($response->listaddresses200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests->listtransactionsbyaddress($request);

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

    $response = $sdk->addressRequests->newaddress($request);

    if ($response->newaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

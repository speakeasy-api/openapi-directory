# addressRequests1

### Available Operations

* [deleteaddress1](#deleteaddress1) - deleteAddress
* [exportaddress1](#exportaddress1) - exportAddress
* [importaddress1](#importaddress1) - importAddress
* [listaddresses1](#listaddresses1) - listAddresses
* [listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](#newaddress1) - newAddress

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

    $response = $sdk->addressRequests1->deleteaddress1($request);

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
    $request->requestBody = 'corrupti';
    $request->address = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';

    $response = $sdk->addressRequests1->exportaddress1($request);

    if ($response->exportaddress1200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests1->importaddress1($request);

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
    $response = $sdk->addressRequests1->listaddresses1();

    if ($response->listaddresses1200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests1->listtransactionsbyaddress1($request);

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

    $response = $sdk->addressRequests1->newaddress1($request);

    if ($response->newaddress1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

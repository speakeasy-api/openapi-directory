# addressRequests12

### Available Operations

* [deleteaddress2](#deleteaddress2) - deleteAddress
* [exportaddress2](#exportaddress2) - exportAddress
* [importaddress2](#importaddress2) - importAddress
* [listaddress](#listaddress) - listAddress
* [listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](#newaddress2) - newAddress

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

    $response = $sdk->addressRequests12->deleteaddress2($request);

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

    $response = $sdk->addressRequests12->exportaddress2($request);

    if ($response->exportaddress2200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests12->importaddress2($request);

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
    $response = $sdk->addressRequests12->listaddress();

    if ($response->listaddress200ApplicationJSONObject !== null) {
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

    $response = $sdk->addressRequests12->listtransactionsbyaddress2($request);

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

    $response = $sdk->addressRequests12->newaddress2($request);

    if ($response->newaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

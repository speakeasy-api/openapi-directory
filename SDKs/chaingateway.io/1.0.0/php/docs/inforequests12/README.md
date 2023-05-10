# infoRequests12

### Available Operations

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

    $response = $sdk->infoRequests12->getbep20($request);

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

    $response = $sdk->infoRequests12->getbep20balance($request);

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

    $response = $sdk->infoRequests12->getbinancecoinbalance($request);

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

    $response = $sdk->infoRequests12->getblock2($request);

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
    $response = $sdk->infoRequests12->getgasprice2();

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
    $response = $sdk->infoRequests12->getlastblocknumber2();

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

    $response = $sdk->infoRequests12->getnftowner2($request);

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

    $response = $sdk->infoRequests12->getnfturi2($request);

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

    $response = $sdk->infoRequests12->gettransaction2($request);

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

    $response = $sdk->infoRequests12->gettransactionreceipt2($request);

    if ($response->gettransactionreceipt2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

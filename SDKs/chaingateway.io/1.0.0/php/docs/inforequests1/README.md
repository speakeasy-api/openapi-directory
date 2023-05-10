# infoRequests1

### Available Operations

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

    $response = $sdk->infoRequests1->getblock1($request);

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

    $response = $sdk->infoRequests1->geterc201($request);

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

    $response = $sdk->infoRequests1->geterc20balance1($request);

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
    $response = $sdk->infoRequests1->getgasprice1();

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
'at'

    $response = $sdk->infoRequests1->getlastblocknumber1($request);

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

    $response = $sdk->infoRequests1->getnftowner1($request);

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
    $request->ftContract = 'at';
    $request->tokenId = 'maiores';

    $response = $sdk->infoRequests1->getnfturi1($request);

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

    $response = $sdk->infoRequests1->getpolygonbalance($request);

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

    $response = $sdk->infoRequests1->gettransaction1($request);

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

    $response = $sdk->infoRequests1->gettransactionreceipt1($request);

    if ($response->gettransactionreceipt1200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

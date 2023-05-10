# infoRequests123

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

    $response = $sdk->infoRequests123->getaccountresources($request);

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
    $request->requestBody = 'molestiae';
    $request->block = '300';

    $response = $sdk->infoRequests123->getblock3($request);

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
    $response = $sdk->infoRequests123->getchainparameters();

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
    $response = $sdk->infoRequests123->getlastblocknumber3();

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
    $request->requestBody = 'quod';
    $request->transaction = 'dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9';

    $response = $sdk->infoRequests123->gettransaction3($request);

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

    $response = $sdk->infoRequests123->gettransactionreceipt3($request);

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

    $response = $sdk->infoRequests123->gettrc10balance($request);

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

    $response = $sdk->infoRequests123->gettrc20balance($request);

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

    $response = $sdk->infoRequests123->gettronbalance($request);

    if ($response->gettronbalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

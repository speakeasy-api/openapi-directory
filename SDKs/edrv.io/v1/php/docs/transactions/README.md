# transactions

### Available Operations

* [getTransaction](#gettransaction) - Get a specific transaction
* [getTransactionCost](#gettransactioncost) - Get a specific transaction's cost
* [getTransactions](#gettransactions) - Get a list of transactions

## getTransaction

Get a specific transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionRequest();
    $request->id = '94e29e97-3e92-42a5-ba15-be3e060807e2';
    $request->includeChargestation = false;
    $request->includeConnector = false;
    $request->includeDriver = false;
    $request->includeEvse = false;
    $request->includeOrganization = false;
    $request->includeRate = false;
    $request->includeReservation = false;
    $request->includeToken = false;

    $response = $sdk->transactions->getTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionCost

Get a specific transaction's cost

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionCostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionCostRequest();
    $request->id = 'b6e3ab88-45f0-4597-a60f-f2a54a31e947';

    $response = $sdk->transactions->getTransactionCost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactions

Get a list of transactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T08:09:35.938Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-10T22:59:57.144Z');
    $request->includeChargestation = false;
    $request->includeConnector = false;
    $request->includeDriver = false;
    $request->includeEvse = false;
    $request->includeOrganization = false;
    $request->includeRate = false;
    $request->includeReservation = false;
    $request->includeToken = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 890653;
    $request->paginatePage = 'laudantium';
    $request->sortBy = 'eum';
    $request->sortOrder = SortOrder1Enum::DESC;
    $request->status = GetTransactionsStatusEnum::ENDED;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T21:22:23.687Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T09:33:49.991Z');

    $response = $sdk->transactions->getTransactions($request);

    if ($response->getTransactions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

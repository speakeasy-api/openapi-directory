# transactionStatus

## Overview

Retrieve the status of transactions within a sync.

### Available Operations

* [getSyncTransaction](#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](#listsynctransactions) - Get Sync transactions

## getSyncTransaction

Gets the status of a transaction for a sync

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSyncTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyncTransactionRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->syncId = '6fb40d5e-b13e-11ed-afa1-0242ac120002';
    $request->transactionId = '336694d8-2dca-4cb5-a28d-3ccb83e55eee';

    $response = $sdk->transactionStatus->getSyncTransaction($request);

    if ($response->transactionMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncTransactions

Get's the transactions and status for a sync

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncTransactionsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->page = 1;
    $request->pageSize = 100;
    $request->syncId = '6fb40d5e-b13e-11ed-afa1-0242ac120002';

    $response = $sdk->transactionStatus->listSyncTransactions($request);

    if ($response->transactionMetadataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

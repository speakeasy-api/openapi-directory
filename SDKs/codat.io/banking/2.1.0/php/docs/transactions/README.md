# transactions

## Overview

An immutable source of up-to-date information on income and expenditure.

### Available Operations

* [~~getTransaction~~](#gettransaction) - Get bank transaction :warning: **Deprecated**
* [listBankTransactions](#listbanktransactions) - List banking transactions
* [listTransactions](#listtransactions) - List transactions

## ~~getTransaction~~

Gets a specified bank transaction for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->transactionId = 'nulla';

    $response = $sdk->transactions->getTransaction($request);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBankTransactions

Gets a list of transactions incurred by a company across all bank accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBankTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBankTransactionsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'corrupti';

    $response = $sdk->transactions->listBankTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransactions

Gets a list of transactions incurred by a bank account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTransactionsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'illum';

    $response = $sdk->transactions->listTransactions($request);

    if ($response->transactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

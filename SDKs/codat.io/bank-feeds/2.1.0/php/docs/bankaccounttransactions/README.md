# bankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [createBankTransactions](#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](#listbankaccounttransactions) - List bank transactions for bank account

## createBankTransactions

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankTransactions;
use \OpenAPI\OpenAPI\Models\Shared\BankTransactionLine;
use \OpenAPI\OpenAPI\Models\Shared\BankTransactionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBankTransactionsRequest();
    $request->bankTransactions = new BankTransactions();
    $request->bankTransactions->accountId = 'quibusdam';
    $request->bankTransactions->transactions = [
        new BankTransactionLine(),
        new BankTransactionLine(),
        new BankTransactionLine(),
    ];
    $request->accountId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->allowSyncOnPushComplete = false;
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->timeoutInMinutes = 857946;

    $response = $sdk->bankAccountTransactions->createBankTransactions($request);

    if ($response->createBankTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateBankAccountModel

Gets the options of pushing bank account transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCreateBankAccountModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreateBankAccountModelRequest();
    $request->accountId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->bankAccountTransactions->getCreateBankAccountModel($request);

    if ($response->pushOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBankAccountTransactions

Gets bank transactions for a given bank account ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBankAccountTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBankAccountTransactionsRequest();
    $request->accountId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'corrupti';

    $response = $sdk->bankAccountTransactions->listBankAccountTransactions($request);

    if ($response->bankTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

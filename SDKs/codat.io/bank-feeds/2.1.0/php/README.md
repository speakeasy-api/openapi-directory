# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->bankTransactions->accountId = 'corrupti';
    $request->bankTransactions->transactions = [
        new BankTransactionLine(),
        new BankTransactionLine(),
        new BankTransactionLine(),
    ];
    $request->accountId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->allowSyncOnPushComplete = false;
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->timeoutInMinutes = 715190;

    $response = $sdk->bankAccountTransactions->createBankTransactions($request);

    if ($response->createBankTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bankAccountTransactions](docs/bankaccounttransactions/README.md)

* [createBankTransactions](docs/bankaccounttransactions/README.md#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](docs/bankaccounttransactions/README.md#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](docs/bankaccounttransactions/README.md#listbankaccounttransactions) - List bank transactions for bank account

### [bankFeedAccounts](docs/bankfeedaccounts/README.md)

* [createBankFeed](docs/bankfeedaccounts/README.md#createbankfeed) - Create bank feed bank accounts
* [getBankFeeds](docs/bankfeedaccounts/README.md#getbankfeeds) - List bank feed bank accounts
* [updateBankFeed](docs/bankfeedaccounts/README.md#updatebankfeed) - Update bank feed bank account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

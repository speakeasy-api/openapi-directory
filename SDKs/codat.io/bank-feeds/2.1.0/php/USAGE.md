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
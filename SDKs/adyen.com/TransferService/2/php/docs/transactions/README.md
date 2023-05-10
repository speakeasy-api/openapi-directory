# transactions

### Available Operations

* [getTransactions](#gettransactions) - Get all transactions
* [getTransactionsId](#gettransactionsid) - Get a transaction

## getTransactions

Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->accountHolderId = 'deserunt';
    $request->balanceAccountId = 'suscipit';
    $request->balancePlatform = 'iure';
    $request->createdSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T12:04:06.508Z');
    $request->createdUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');
    $request->cursor = 'tempora';
    $request->limit = 383441;
    $request->paymentInstrumentId = 'molestiae';

    $requestSecurity = new GetTransactionsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactions->getTransactions($request, $requestSecurity);

    if ($response->transactionSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsId

Returns a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsIdRequest();
    $request->id = 'cc8796ed-151a-405d-bc2d-df7cc78ca1ba';

    $requestSecurity = new GetTransactionsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transactions->getTransactionsId($request, $requestSecurity);

    if ($response->transaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

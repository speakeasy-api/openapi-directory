<!-- Start SDK Example Usage -->
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
    $request->accountHolderId = 'corrupti';
    $request->balanceAccountId = 'provident';
    $request->balancePlatform = 'distinctio';
    $request->createdSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->createdUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-14T08:28:11.899Z');
    $request->cursor = 'illum';
    $request->limit = 423655;
    $request->paymentInstrumentId = 'error';

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
<!-- End SDK Example Usage -->
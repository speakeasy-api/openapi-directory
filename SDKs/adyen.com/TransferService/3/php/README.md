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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [transactions](docs/transactions/README.md)

* [getTransactions](docs/transactions/README.md#gettransactions) - Get all transactions
* [getTransactionsId](docs/transactions/README.md#gettransactionsid) - Get a transaction

### [transfers](docs/transfers/README.md)

* [postTransfers](docs/transfers/README.md#posttransfers) - Transfer funds
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

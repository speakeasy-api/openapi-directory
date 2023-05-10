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
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderBalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountHolderBalanceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountHolderBalanceRequest();
    $request->accountHolderCode = 'corrupti';

    $requestSecurity = new PostAccountHolderBalanceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAccountHolderBalance($request, $requestSecurity);

    if ($response->accountHolderBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [general](docs/general/README.md)

* [postAccountHolderBalance](docs/general/README.md#postaccountholderbalance) - Get the balances of an account holder
* [postAccountHolderTransactionList](docs/general/README.md#postaccountholdertransactionlist) - Get a list of transactions
* [postDebitAccountHolder](docs/general/README.md#postdebitaccountholder) - Send a direct debit request
* [postPayoutAccountHolder](docs/general/README.md#postpayoutaccountholder) - Pay out from an account to the account holder
* [postRefundFundsTransfer](docs/general/README.md#postrefundfundstransfer) - Refund a funds transfer
* [postRefundNotPaidOutTransfers](docs/general/README.md#postrefundnotpaidouttransfers) - Refund all transactions of an account since the most recent payout
* [postSetupBeneficiary](docs/general/README.md#postsetupbeneficiary) - Designate a beneficiary account and transfer the benefactor's current balance
* [postTransferFunds](docs/general/README.md#posttransferfunds) - Transfer funds between platform accounts
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

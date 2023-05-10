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
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostChangeStatusSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueStatusChangeRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'corrupti';
    $request->amount->value = 592845;
    $request->merchantAccount = 'distinctio';
    $request->paymentMethod = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->recurringDetailReference = 'iure';
    $request->reference = 'magnam';
    $request->shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum::POS;
    $request->shopperReference = 'ipsa';
    $request->status = StoredValueStatusChangeRequestStatusEnum::INACTIVE;
    $request->store = 'tempora';

    $requestSecurity = new PostChangeStatusSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postChangeStatus($request, $requestSecurity);

    if ($response->storedValueStatusChangeResponse !== null) {
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

* [postChangeStatus](docs/general/README.md#postchangestatus) - Changes the status of the payment method.
* [postCheckBalance](docs/general/README.md#postcheckbalance) - Checks the balance.
* [postIssue](docs/general/README.md#postissue) - Issues a new card.
* [postLoad](docs/general/README.md#postload) - Loads the payment method.
* [postMergeBalance](docs/general/README.md#postmergebalance) - Merge the balance of two cards.
* [postVoidTransaction](docs/general/README.md#postvoidtransaction) - Voids a transaction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

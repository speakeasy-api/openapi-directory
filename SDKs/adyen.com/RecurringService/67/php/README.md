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
use \OpenAPI\OpenAPI\Models\Shared\CreatePermitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Permit;
use \OpenAPI\OpenAPI\Models\Shared\PermitRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePermitSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermitRequest();
    $request->merchantAccount = 'corrupti';
    $request->permits = [
        new Permit(),
        new Permit(),
        new Permit(),
    ];
    $request->recurringDetailReference = 'distinctio';
    $request->shopperReference = 'quibusdam';

    $requestSecurity = new PostCreatePermitSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreatePermit($request, $requestSecurity);

    if ($response->createPermitResult !== null) {
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

* [postCreatePermit](docs/general/README.md#postcreatepermit) - Create new permits linked to a recurring contract.
* [postDisable](docs/general/README.md#postdisable) - Disable stored payment details
* [postDisablePermit](docs/general/README.md#postdisablepermit) - Disable an existing permit.
* [postListRecurringDetails](docs/general/README.md#postlistrecurringdetails) - Get stored payment details
* [postNotifyShopper](docs/general/README.md#postnotifyshopper) - Ask issuer to notify the shopper
* [postScheduleAccountUpdater](docs/general/README.md#postscheduleaccountupdater) - Schedule running the Account Updater
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

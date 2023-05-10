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
use \OpenAPI\OpenAPI\Models\Shared\AssignTerminalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAssignTerminalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignTerminalsRequest();
    $request->companyAccount = 'corrupti';
    $request->merchantAccount = 'provident';
    $request->merchantInventory = false;
    $request->store = 'distinctio';
    $request->terminals = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];

    $requestSecurity = new PostAssignTerminalsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAssignTerminals($request, $requestSecurity);

    if ($response->assignTerminalsResponse !== null) {
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

* [postAssignTerminals](docs/general/README.md#postassignterminals) - Assign terminals
* [postFindTerminal](docs/general/README.md#postfindterminal) - Get the account or store of a terminal
* [postGetStoresUnderAccount](docs/general/README.md#postgetstoresunderaccount) - Get the stores of an account
* [postGetTerminalDetails](docs/general/README.md#postgetterminaldetails) - Get the details of a terminal
* [postGetTerminalsUnderAccount](docs/general/README.md#postgetterminalsunderaccount) - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

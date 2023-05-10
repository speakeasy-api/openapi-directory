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
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateGenerateInsultRequest();
    $request->limit = 548814;

    $requestSecurity = new GetPirateGenerateInsultSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getPirateGenerateInsult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [generation](docs/generation/README.md)

* [getPirateGenerateInsult](docs/generation/README.md#getpirategenerateinsult) - Generate random pirate insults.
* [getPirateGenerateLoremIpsum](docs/generation/README.md#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [getPirateGenerateName](docs/generation/README.md#getpirategeneratename) - Generate random pirate names.

### [translation](docs/translation/README.md)

* [getPirateTranslate](docs/translation/README.md#getpiratetranslate) - Translate from English to pirate.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

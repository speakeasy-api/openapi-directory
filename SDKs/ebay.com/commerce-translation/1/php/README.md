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
use \OpenAPI\OpenAPI\Models\Shared\TranslateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TranslateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateRequest();
    $request->from = 'corrupti';
    $request->text = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->to = 'nulla';
    $request->translationContext = 'corrupti';

    $requestSecurity = new TranslateSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->language->translate($request, $requestSecurity);

    if ($response->translateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [language](docs/language/README.md)

* [translate](docs/language/README.md#translate) - Translates input text inot a given language.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

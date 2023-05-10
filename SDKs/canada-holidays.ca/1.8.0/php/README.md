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
use \OpenAPI\OpenAPI\Models\Operations\HolidayRequest;
use \OpenAPI\OpenAPI\Models\Operations\HolidayOptionalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HolidayRequest();
    $request->holidayId = 2;
    $request->optional = HolidayOptionalEnum::TRUE;
    $request->year = 592845;

    $response = $sdk->holidays->holiday($request);

    if ($response->holiday200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [holidays](docs/holidays/README.md)

* [holiday](docs/holidays/README.md#holiday) - Get a holiday by id
* [holidays](docs/holidays/README.md#holidays) - Get all holidays

### [info](docs/info/README.md)

* [root](docs/info/README.md#root) - root
* [spec](docs/info/README.md#spec) - Get JSON schema

### [provinces](docs/provinces/README.md)

* [province](docs/provinces/README.md#province) - Get a province or territory by abbreviation
* [provinces](docs/provinces/README.md#provinces) - Get all provinces
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

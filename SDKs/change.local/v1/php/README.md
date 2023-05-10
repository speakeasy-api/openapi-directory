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
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsCarbonCalculateRequest();
    $request->destinationAddress = 5488.14;
    $request->distanceMi = 5928.45;
    $request->originAddress = 7151.9;
    $request->transportationMethod = GetApiV1DonationsCarbonCalculateTransportationMethodEnum::SEA;
    $request->weightLb = 6027.63;

    $requestSecurity = new GetApiV1DonationsCarbonCalculateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->getApiV1DonationsCarbonCalculate($request, $requestSecurity);

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

### [SDK](docs/sdk/README.md)

* [getApiV1DonationsCarbonCalculate](docs/sdk/README.md#getapiv1donationscarboncalculate) - Calculate shipping carbon offset
* [getApiV1DonationsCarbonStats](docs/sdk/README.md#getapiv1donationscarbonstats) - Retrieve carbon offset stats
* [getApiV1DonationsCryptoCalculate](docs/sdk/README.md#getapiv1donationscryptocalculate) - Calculate crypto carbon offset
* [getApiV1DonationsIndex](docs/sdk/README.md#getapiv1donationsindex) - List your donations
* [getApiV1DonationsShow](docs/sdk/README.md#getapiv1donationsshow) - Retrieve a donation
* [getApiV1NonprofitsList](docs/sdk/README.md#getapiv1nonprofitslist) - Search a nonprofit
* [getApiV1NonprofitsShow](docs/sdk/README.md#getapiv1nonprofitsshow) - Show a nonprofit
* [postApiV1DonationsCreate](docs/sdk/README.md#postapiv1donationscreate) - Create a donation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InterferenceRequest();
    $request->name = 'Terrence Rau';
    $request->network = 'nulla';

    $requestSecurity = new InterferenceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->analyse->interference($request, $requestSecurity);

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


### [analyse](docs/analyse/README.md)

* [interference](docs/analyse/README.md#interference) - Find the best server for overlapping coverage
* [mesh](docs/analyse/README.md#mesh) - Merge sites into a super layer.
* [network](docs/analyse/README.md#network) - Find the best server for somewhere

### [create](docs/create/README.md)

* [area](docs/create/README.md#area) - Create a point-to-multipoint heatmap
* [path](docs/create/README.md#path) - Point-to-point path profile analysis (Tx to Rx)
* [points](docs/create/README.md#points) - Point-to-multipoint path profile analysis (Many Tx, one Rx)

### [manage](docs/manage/README.md)

* [addClutter](docs/manage/README.md#addclutter) - Upload clutter data as GeoJSON
* [delete](docs/manage/README.md#delete) - Delete a calculation from the database.
* [deleteNetwork](docs/manage/README.md#deletenetwork) - Delete an entire network
* [export](docs/manage/README.md#export) - Export a calculation in a GIS file format
* [list](docs/manage/README.md#list) - List calculations from your archive
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

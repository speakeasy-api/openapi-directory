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
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVersionIncidentsFormatIncidentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVersionIncidentsFormatRequest();
    $request->incidentType = GETVersionIncidentsFormatIncidentTypeEnum::UNCONFIRMED;
    $request->occurredAfter = 592845;
    $request->occurredBefore = 715190;
    $request->page = 844266;
    $request->perPage = 602763;
    $request->proximity = 'nulla';
    $request->proximitySquare = 544883;
    $request->query = 'illum';

    $response = $sdk->incidents->getVersionIncidentsFormat($request);

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


### [incidents](docs/incidents/README.md)

* [getVersionIncidentsFormat](docs/incidents/README.md#getversionincidentsformat) - Paginated incidents matching parameters
* [getVersionIncidentsIdFormat](docs/incidents/README.md#getversionincidentsidformat)

### [locations](docs/locations/README.md)

* [getVersionLocationsFormat](docs/locations/README.md#getversionlocationsformat) - Unpaginated geojson response
* [getVersionLocationsMarkersFormat](docs/locations/README.md#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

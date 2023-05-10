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
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiResourceCoverageOneRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->resourceId = 'deserunt';
    $request->xApideckAppId = 'perferendis';

    $requestSecurity = new ApiResourceCoverageOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiResources->apiResourceCoverageOne($request, $requestSecurity);

    if ($response->getApiResourceCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiResources](docs/apiresources/README.md)

* [apiResourceCoverageOne](docs/apiresources/README.md#apiresourcecoverageone) - Get API Resource Coverage
* [apiResourcesOne](docs/apiresources/README.md#apiresourcesone) - Get API Resource

### [apIs](docs/apis/README.md)

* [apisAll](docs/apis/README.md#apisall) - List APIs
* [apisOne](docs/apis/README.md#apisone) - Get API

### [connectorDocs](docs/connectordocs/README.md)

* [connectorDocsOne](docs/connectordocs/README.md#connectordocsone) - Get Connector Doc content

### [connectorResources](docs/connectorresources/README.md)

* [connectorResourcesOne](docs/connectorresources/README.md#connectorresourcesone) - Get Connector Resource

### [connectors](docs/connectors/README.md)

* [connectorsAll](docs/connectors/README.md#connectorsall) - List Connectors
* [connectorsOne](docs/connectors/README.md#connectorsone) - Get Connector
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

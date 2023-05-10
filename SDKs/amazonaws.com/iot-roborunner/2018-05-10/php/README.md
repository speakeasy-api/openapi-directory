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
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDestinationRequest();
    $request->requestBody = new CreateDestinationRequestBody();
    $request->requestBody->additionalFixedProperties = 'corrupti';
    $request->requestBody->clientToken = 'provident';
    $request->requestBody->name = 'Ellis Mitchell';
    $request->requestBody->site = 'illum';
    $request->requestBody->state = CreateDestinationRequestBodyStateEnum::DISABLED;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->createDestination($request);

    if ($response->createDestinationResponse !== null) {
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

* [createDestination](docs/sdk/README.md#createdestination) - Grants permission to create a destination
* [createSite](docs/sdk/README.md#createsite) - Grants permission to create a site
* [createWorker](docs/sdk/README.md#createworker) - Grants permission to create a worker
* [createWorkerFleet](docs/sdk/README.md#createworkerfleet) - Grants permission to create a worker fleet
* [deleteDestination](docs/sdk/README.md#deletedestination) - Grants permission to delete a destination
* [deleteSite](docs/sdk/README.md#deletesite) - Grants permission to delete a site
* [deleteWorker](docs/sdk/README.md#deleteworker) - Grants permission to delete a worker
* [deleteWorkerFleet](docs/sdk/README.md#deleteworkerfleet) - Grants permission to delete a worker fleet
* [getDestination](docs/sdk/README.md#getdestination) - Grants permission to get a destination
* [getSite](docs/sdk/README.md#getsite) - Grants permission to get a site
* [getWorker](docs/sdk/README.md#getworker) - Grants permission to get a worker
* [getWorkerFleet](docs/sdk/README.md#getworkerfleet) - Grants permission to get a worker fleet
* [listDestinations](docs/sdk/README.md#listdestinations) - Grants permission to list destinations
* [listSites](docs/sdk/README.md#listsites) - Grants permission to list sites
* [listWorkerFleets](docs/sdk/README.md#listworkerfleets) - Grants permission to list worker fleets
* [listWorkers](docs/sdk/README.md#listworkers) - Grants permission to list workers
* [updateDestination](docs/sdk/README.md#updatedestination) - Grants permission to update a destination
* [updateSite](docs/sdk/README.md#updatesite) - Grants permission to update a site
* [updateWorker](docs/sdk/README.md#updateworker) - Grants permission to update a worker
* [updateWorkerFleet](docs/sdk/README.md#updateworkerfleet) - Grants permission to update a worker fleet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest->dryRun = false;
    $request->createHomeRegionControlRequest->homeRegion = 'corrupti';
    $request->createHomeRegionControlRequest->target = new Target();
    $request->createHomeRegionControlRequest->target->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->createHomeRegionControlRequest->target->type = TargetTypeEnum::ACCOUNT;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateHomeRegionControlXAmzTargetEnum::AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL;

    $response = $sdk->createHomeRegionControl($request);

    if ($response->createHomeRegionControlResult !== null) {
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

* [createHomeRegionControl](docs/sdk/README.md#createhomeregioncontrol) - This API sets up the home region for the calling account only.
* [describeHomeRegionControls](docs/sdk/README.md#describehomeregioncontrols) - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* [getHomeRegion](docs/sdk/README.md#gethomeregion) - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest->reportName = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DeleteReportDefinitionXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION;

    $response = $sdk->deleteReportDefinition($request);

    if ($response->deleteReportDefinitionResponse !== null) {
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

* [deleteReportDefinition](docs/sdk/README.md#deletereportdefinition) - Deletes the specified report.
* [describeReportDefinitions](docs/sdk/README.md#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [modifyReportDefinition](docs/sdk/README.md#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [putReportDefinition](docs/sdk/README.md#putreportdefinition) - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

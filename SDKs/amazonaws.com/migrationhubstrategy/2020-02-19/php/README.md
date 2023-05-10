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
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationComponentDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationComponentDetailsRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->applicationComponentId = 'illum';

    $response = $sdk->getApplicationComponentDetails($request);

    if ($response->getApplicationComponentDetailsResponse !== null) {
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

* [getApplicationComponentDetails](docs/sdk/README.md#getapplicationcomponentdetails) -  Retrieves details about an application component. 
* [getApplicationComponentStrategies](docs/sdk/README.md#getapplicationcomponentstrategies) -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* [getAssessment](docs/sdk/README.md#getassessment) -  Retrieves the status of an on-going assessment. 
* [getImportFileTask](docs/sdk/README.md#getimportfiletask) -  Retrieves the details about a specific import task. 
* [getLatestAssessmentId](docs/sdk/README.md#getlatestassessmentid) - Retrieve the latest ID of a specific assessment task.
* [getPortfolioPreferences](docs/sdk/README.md#getportfoliopreferences) -  Retrieves your migration and modernization preferences. 
* [getPortfolioSummary](docs/sdk/README.md#getportfoliosummary) -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* [getRecommendationReportDetails](docs/sdk/README.md#getrecommendationreportdetails) -  Retrieves detailed information about the specified recommendation report. 
* [getServerDetails](docs/sdk/README.md#getserverdetails) -  Retrieves detailed information about a specified server. 
* [getServerStrategies](docs/sdk/README.md#getserverstrategies) -  Retrieves recommended strategies and tools for the specified server. 
* [listApplicationComponents](docs/sdk/README.md#listapplicationcomponents) -  Retrieves a list of all the application components (processes). 
* [listCollectors](docs/sdk/README.md#listcollectors) -  Retrieves a list of all the installed collectors. 
* [listImportFileTask](docs/sdk/README.md#listimportfiletask) -  Retrieves a list of all the imports performed. 
* [listServers](docs/sdk/README.md#listservers) -  Returns a list of all the servers. 
* [putPortfolioPreferences](docs/sdk/README.md#putportfoliopreferences) -  Saves the specified migration and modernization preferences. 
* [startAssessment](docs/sdk/README.md#startassessment) -  Starts the assessment of an on-premises environment. 
* [startImportFileTask](docs/sdk/README.md#startimportfiletask) -  Starts a file import. 
* [startRecommendationReportGeneration](docs/sdk/README.md#startrecommendationreportgeneration) -  Starts generating a recommendation report. 
* [stopAssessment](docs/sdk/README.md#stopassessment) -  Stops the assessment of an on-premises environment. 
* [updateApplicationComponentConfig](docs/sdk/README.md#updateapplicationcomponentconfig) -  Updates the configuration of an application component. 
* [updateServerConfig](docs/sdk/README.md#updateserverconfig) -  Updates the configuration of the specified server. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

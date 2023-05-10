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
use \OpenAPI\OpenAPI\Models\Operations\AppDGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDGETRequest();
    $request->allFields = 'corrupti';
    $request->appDId = 'provident';
    $request->excludeDefault = 'distinctio';
    $request->excludeFields = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';

    $response = $sdk->appPkgm->appDGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [appPkgm](docs/apppkgm/README.md)

* [appDGET](docs/apppkgm/README.md#appdget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appDIdGET](docs/apppkgm/README.md#appdidget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appDIdPUT](docs/apppkgm/README.md#appdidput) - Uploads the content of application package.
* [appPkgGET](docs/apppkgm/README.md#apppkgget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appPkgIdGET](docs/apppkgm/README.md#apppkgidget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appPkgPUT](docs/apppkgm/README.md#apppkgput) - Uploads the content of application package.
* [appPackageDELETE](docs/apppkgm/README.md#apppackagedelete) - Deletes an individual application package resources
* [appPackageGET](docs/apppkgm/README.md#apppackageget) - Queries the information related to individual application package resources
* [appPackagePATCH](docs/apppkgm/README.md#apppackagepatch) - Updates the operational state of an individual application package resource
* [appPackagesGET](docs/apppkgm/README.md#apppackagesget) - Queries information relating to on-boarded application packages in the MEO
* [appPackagesPOST](docs/apppkgm/README.md#apppackagespost) - Create a resource for on-boarding an application package to a MEO
* [individualSubscriptionDELETE](docs/apppkgm/README.md#individualsubscriptiondelete) - Deletes the individual subscription to notifications about application package changes in MEO.
* [individualSubscriptionGET](docs/apppkgm/README.md#individualsubscriptionget) - Used to represent an individual subscription to notifications about application package changes.
* [subscriptionsGET](docs/apppkgm/README.md#subscriptionsget) - used to retrieve the information of subscriptions to individual application package resource in MEO
* [subscriptionsPOST](docs/apppkgm/README.md#subscriptionspost) - Subscribe to notifications about on-boarding an application package

### [appPkgmNotifications](docs/apppkgmnotifications/README.md)

* [appPkgNotificationPOST](docs/apppkgmnotifications/README.md#apppkgnotificationpost) - Registers a notification endpoint to notify application package operations
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingsOrganizationsOrganizationNameRequest();
    $request->organizationName = 'corrupti';

    $requestSecurity = new DeleteSettingsOrganizationsOrganizationNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->deleteSettingsOrganizationsOrganizationName($request, $requestSecurity);

    if ($response->organization !== null) {
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

* [deleteSettingsOrganizationsOrganizationName](docs/sdk/README.md#deletesettingsorganizationsorganizationname) - Delete an organization (and the associated receivers and senders)
* [deleteSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#deletesettingsorganizationsorganizationnamereceiversreceivername) - Delete a receiver
* [deleteSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#deletesettingsorganizationsorganizationnamesenderssendername) - Delete a sender
* [getSettingsOrganizations](docs/sdk/README.md#getsettingsorganizations) - The settings for all organizations of the system. Must have admin access.
* [getSettingsOrganizationsOrganizationName](docs/sdk/README.md#getsettingsorganizationsorganizationname) - A single organization settings
* [getSettingsOrganizationsOrganizationNameReceivers](docs/sdk/README.md#getsettingsorganizationsorganizationnamereceivers) - A list of receivers and their current settings
* [getSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#getsettingsorganizationsorganizationnamereceiversreceivername) - The settings of a single of receiver
* [getSettingsOrganizationsOrganizationNameSenders](docs/sdk/README.md#getsettingsorganizationsorganizationnamesenders) - A list of senders
* [getSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#getsettingsorganizationsorganizationnamesenderssendername) - The settings of a single of sender
* [headSettingsOrganizations](docs/sdk/README.md#headsettingsorganizations) - Retrived the last modified for all settings of the system. Must have admin access.
* [postReports](docs/sdk/README.md#postreports) - Post a report to the data hub
* [putSettingsOrganizationsOrganizationName](docs/sdk/README.md#putsettingsorganizationsorganizationname) - Create or update the direct settings associated with an organization
* [putSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#putsettingsorganizationsorganizationnamereceiversreceivername) - Update a single reciever
* [putSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#putsettingsorganizationsorganizationnamesenderssendername) - Update a single sender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

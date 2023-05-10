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
use \OpenAPI\OpenAPI\Models\Shared\CreateNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationIncludeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetailsSslProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateNotificationConfigurationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationConfigurationRequest();
    $request->configurationDetails = new NotificationConfigurationDetails();
    $request->configurationDetails->active = false;
    $request->configurationDetails->apiVersion = 548814;
    $request->configurationDetails->description = 'provident';
    $request->configurationDetails->eventConfigs = [
        new NotificationEventConfiguration(),
        new NotificationEventConfiguration(),
        new NotificationEventConfiguration(),
    ];
    $request->configurationDetails->hmacSignatureKey = 'quibusdam';
    $request->configurationDetails->notificationId = 602763;
    $request->configurationDetails->notifyPassword = 'nulla';
    $request->configurationDetails->notifyURL = 'corrupti';
    $request->configurationDetails->notifyUsername = 'illum';
    $request->configurationDetails->sslProtocol = NotificationConfigurationDetailsSslProtocolEnum::TL_SV12;

    $requestSecurity = new PostCreateNotificationConfigurationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreateNotificationConfiguration($request, $requestSecurity);

    if ($response->getNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [general](docs/general/README.md)

* [postCreateNotificationConfiguration](docs/general/README.md#postcreatenotificationconfiguration) - Subscribe to notifications
* [postDeleteNotificationConfigurations](docs/general/README.md#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [postGetNotificationConfiguration](docs/general/README.md#postgetnotificationconfiguration) - Get a notification subscription configuration
* [postGetNotificationConfigurationList](docs/general/README.md#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [postTestNotificationConfiguration](docs/general/README.md#posttestnotificationconfiguration) - Test a notification configuration
* [postUpdateNotificationConfiguration](docs/general/README.md#postupdatenotificationconfiguration) - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

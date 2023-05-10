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
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionSettingsAllRequest();
    $request->resource = 'corrupti';
    $request->serviceId = 'provident';
    $request->unifiedApi = 'distinctio';
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';

    $requestSecurity = new ConnectionSettingsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionSettingsAll($request, $requestSecurity);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [connections](docs/connections/README.md)

* [connectionSettingsAll](docs/connections/README.md#connectionsettingsall) - Get resource settings
* [connectionSettingsUpdate](docs/connections/README.md#connectionsettingsupdate) - Update settings
* [connectionsAdd](docs/connections/README.md#connectionsadd) - Create connection
* [connectionsAll](docs/connections/README.md#connectionsall) - Get all connections
* [connectionsCallback](docs/connections/README.md#connectionscallback) - Callback
* [connectionsDelete](docs/connections/README.md#connectionsdelete) - Deletes a connection
* [connectionsImport](docs/connections/README.md#connectionsimport) - Import connection
* [connectionsOne](docs/connections/README.md#connectionsone) - Get connection
* [connectionsRevoke](docs/connections/README.md#connectionsrevoke) - Revoke connection
* [connectionsToken](docs/connections/README.md#connectionstoken) - Get Access Token
* [connectionsUpdate](docs/connections/README.md#connectionsupdate) - Update connection

### [consumers](docs/consumers/README.md)

* [consumerRequestCountsAll](docs/consumers/README.md#consumerrequestcountsall) - Consumer request counts
* [consumersAdd](docs/consumers/README.md#consumersadd) - Create consumer
* [consumersAll](docs/consumers/README.md#consumersall) - Get all consumers
* [consumersDelete](docs/consumers/README.md#consumersdelete) - Delete consumer
* [consumersOne](docs/consumers/README.md#consumersone) - Get consumer
* [consumersUpdate](docs/consumers/README.md#consumersupdate) - Update consumer

### [logs](docs/logs/README.md)

* [logsAll](docs/logs/README.md#logsall) - Get all consumer request logs

### [sessions](docs/sessions/README.md)

* [sessionsCreate](docs/sessions/README.md#sessionscreate) - Create Session
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
use \OpenAPI\OpenAPI\Models\Operations\GetAuditEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCursor();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');
    $request->limit = 5928.45;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');

    $requestSecurity = new GetAuditEventsSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apiV1->getAuditEvents($request, $requestSecurity);

    if ($response->getAuditEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiV1](docs/apiv1/README.md)

* [getAuditEvents](docs/apiv1/README.md#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [getItemUsages](docs/apiv1/README.md#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [getSignInAttempts](docs/apiv1/README.md#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

### [auth](docs/auth/README.md)

* [~~getAuthIntrospect~~](docs/auth/README.md#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [getAuthIntrospectV2](docs/auth/README.md#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

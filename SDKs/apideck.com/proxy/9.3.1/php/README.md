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
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProxyRequest();
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckDownstreamAuthorization = 'distinctio';
    $request->xApideckDownstreamUrl = 'quibusdam';
    $request->xApideckServiceId = 'unde';

    $requestSecurity = new DeleteProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->deleteProxy($request, $requestSecurity);

    if ($response->deleteProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [execute](docs/execute/README.md)

* [deleteProxy](docs/execute/README.md#deleteproxy) - DELETE
* [getProxy](docs/execute/README.md#getproxy) - GET
* [optionsProxy](docs/execute/README.md#optionsproxy) - OPTIONS
* [patchProxy](docs/execute/README.md#patchproxy) - PATCH
* [postProxy](docs/execute/README.md#postproxy) - POST
* [putProxy](docs/execute/README.md#putproxy) - PUT
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

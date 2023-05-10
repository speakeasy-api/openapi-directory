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
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->requestBody = new CreateTokenRequestBody();
    $request->requestBody->clientId = 'corrupti';
    $request->requestBody->clientSecret = 'provident';
    $request->requestBody->code = 'distinctio';
    $request->requestBody->deviceCode = 'quibusdam';
    $request->requestBody->grantType = 'unde';
    $request->requestBody->redirectUri = 'nulla';
    $request->requestBody->refreshToken = 'corrupti';
    $request->requestBody->scope = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->createToken($request);

    if ($response->createTokenResponse !== null) {
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

* [createToken](docs/sdk/README.md#createtoken) - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* [registerClient](docs/sdk/README.md#registerclient) - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* [startDeviceAuthorization](docs/sdk/README.md#startdeviceauthorization) - Initiates device authorization by requesting a pair of verification codes from the authorization service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

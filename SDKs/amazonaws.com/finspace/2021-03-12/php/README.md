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
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationParameters;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodySuperuserParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = new CreateEnvironmentRequestBody();
    $request->requestBody->dataBundles = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->description = 'unde';
    $request->requestBody->federationMode = CreateEnvironmentRequestBodyFederationModeEnum::LOCAL;
    $request->requestBody->federationParameters = new CreateEnvironmentRequestBodyFederationParameters();
    $request->requestBody->federationParameters->applicationCallBackURL = 'corrupti';
    $request->requestBody->federationParameters->attributeMap = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->federationParameters->federationProviderName = 'delectus';
    $request->requestBody->federationParameters->federationURN = 'tempora';
    $request->requestBody->federationParameters->samlMetadataDocument = 'suscipit';
    $request->requestBody->federationParameters->samlMetadataURL = 'molestiae';
    $request->requestBody->kmsKeyId = 'minus';
    $request->requestBody->name = 'Ken Kshlerin';
    $request->requestBody->superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters();
    $request->requestBody->superuserParameters->emailAddress = 'recusandae';
    $request->requestBody->superuserParameters->firstName = 'Rocky';
    $request->requestBody->superuserParameters->lastName = 'Bernier';
    $request->requestBody->tags = [
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->createEnvironment($request);

    if ($response->createEnvironmentResponse !== null) {
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

* [createEnvironment](docs/sdk/README.md#createenvironment) - Create a new FinSpace environment.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Delete an FinSpace environment.
* [getEnvironment](docs/sdk/README.md#getenvironment) - Returns the FinSpace environment object.
* [listEnvironments](docs/sdk/README.md#listenvironments) - A list of all of your FinSpace environments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - A list of all tags for a resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a FinSpace resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes metadata tags from a FinSpace resource.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

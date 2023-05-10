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
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request->automaticStopTimeMinutes = 548814;
    $request->createEnvironmentEc2Request->clientRequestToken = 'provident';
    $request->createEnvironmentEc2Request->connectionType = ConnectionTypeEnum::CONNECT_SSM;
    $request->createEnvironmentEc2Request->description = 'quibusdam';
    $request->createEnvironmentEc2Request->dryRun = false;
    $request->createEnvironmentEc2Request->imageId = 'unde';
    $request->createEnvironmentEc2Request->instanceType = 'nulla';
    $request->createEnvironmentEc2Request->name = 'Dallas Kassulke';
    $request->createEnvironmentEc2Request->ownerArn = 'suscipit';
    $request->createEnvironmentEc2Request->subnetId = 'iure';
    $request->createEnvironmentEc2Request->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = CreateEnvironmentEc2XAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2;

    $response = $sdk->createEnvironmentEc2($request);

    if ($response->createEnvironmentEc2Result !== null) {
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

* [createEnvironmentEc2](docs/sdk/README.md#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [createEnvironmentMembership](docs/sdk/README.md#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [deleteEnvironmentMembership](docs/sdk/README.md#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [describeEnvironmentMemberships](docs/sdk/README.md#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [describeEnvironmentStatus](docs/sdk/README.md#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [describeEnvironments](docs/sdk/README.md#describeenvironments) - Gets information about Cloud9 development environments.
* [listEnvironments](docs/sdk/README.md#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from an Cloud9 development environment.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [updateEnvironmentMembership](docs/sdk/README.md#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

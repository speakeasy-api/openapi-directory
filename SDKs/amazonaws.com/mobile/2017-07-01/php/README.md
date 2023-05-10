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
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->contents = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->name = 'Sabrina Oberbrunner';
    $request->region = 'magnam';
    $request->snapshotId = 'debitis';

    $response = $sdk->createProject($request);

    if ($response->createProjectResult !== null) {
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

* [createProject](docs/sdk/README.md#createproject) -  Creates an AWS Mobile Hub project. 
* [deleteProject](docs/sdk/README.md#deleteproject) -  Delets a project in AWS Mobile Hub. 
* [describeBundle](docs/sdk/README.md#describebundle) -  Get the bundle details for the requested bundle id. 
* [describeProject](docs/sdk/README.md#describeproject) -  Gets details about a project in AWS Mobile Hub. 
* [exportBundle](docs/sdk/README.md#exportbundle) -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
* [exportProject](docs/sdk/README.md#exportproject) -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
* [listBundles](docs/sdk/README.md#listbundles) -  List all available bundles. 
* [listProjects](docs/sdk/README.md#listprojects) -  Lists projects in AWS Mobile Hub. 
* [updateProject](docs/sdk/README.md#updateproject) -  Update an existing project. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

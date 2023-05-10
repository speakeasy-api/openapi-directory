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
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDeviceWithPlacementRequest();
    $request->requestBody = new AssociateDeviceWithPlacementRequestBody();
    $request->requestBody->deviceId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->deviceTemplateName = 'vel';
    $request->placementName = 'error';
    $request->projectName = 'deserunt';

    $response = $sdk->associateDeviceWithPlacement($request);

    if ($response->associateDeviceWithPlacementResponse !== null) {
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

* [associateDeviceWithPlacement](docs/sdk/README.md#associatedevicewithplacement) - Associates a physical device with a placement.
* [createPlacement](docs/sdk/README.md#createplacement) - Creates an empty placement.
* [createProject](docs/sdk/README.md#createproject) - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* [deletePlacement](docs/sdk/README.md#deleteplacement) - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* [deleteProject](docs/sdk/README.md#deleteproject) - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* [describePlacement](docs/sdk/README.md#describeplacement) - Describes a placement in a project.
* [describeProject](docs/sdk/README.md#describeproject) - Returns an object describing a project.
* [disassociateDeviceFromPlacement](docs/sdk/README.md#disassociatedevicefromplacement) - Removes a physical device from a placement.
* [getDevicesInPlacement](docs/sdk/README.md#getdevicesinplacement) - Returns an object enumerating the devices in a placement.
* [listPlacements](docs/sdk/README.md#listplacements) - Lists the placement(s) of a project.
* [listProjects](docs/sdk/README.md#listprojects) - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* [tagResource](docs/sdk/README.md#tagresource) - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (metadata key/value pairs) from a resource.
* [updatePlacement](docs/sdk/README.md#updateplacement) - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* [updateProject](docs/sdk/README.md#updateproject) - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

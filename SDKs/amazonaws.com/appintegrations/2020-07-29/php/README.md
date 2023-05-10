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
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBodyFileConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBodyScheduleConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataIntegrationRequest();
    $request->requestBody = new CreateDataIntegrationRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration();
    $request->requestBody->fileConfiguration->filters = [
        'quibusdam' => [
            'nulla',
            'corrupti',
            'illum',
        ],
        'vel' => [
            'deserunt',
            'suscipit',
            'iure',
        ],
        'magnam' => [
            'ipsa',
            'delectus',
            'tempora',
            'suscipit',
        ],
    ];
    $request->requestBody->fileConfiguration->folders = [
        'minus',
        'placeat',
    ];
    $request->requestBody->kmsKey = 'voluptatum';
    $request->requestBody->name = 'Miriam Huel';
    $request->requestBody->objectConfiguration = [
        'quis' => [
            'deserunt' => [
                'ipsam',
            ],
        ],
    ];
    $request->requestBody->scheduleConfig = new CreateDataIntegrationRequestBodyScheduleConfig();
    $request->requestBody->scheduleConfig->firstExecutionFrom = 'repellendus';
    $request->requestBody->scheduleConfig->object = 'sapiente';
    $request->requestBody->scheduleConfig->scheduleExpression = 'quo';
    $request->requestBody->sourceURI = 'odit';
    $request->requestBody->tags = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->createDataIntegration($request);

    if ($response->createDataIntegrationResponse !== null) {
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

* [createDataIntegration](docs/sdk/README.md#createdataintegration) - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* [createEventIntegration](docs/sdk/README.md#createeventintegration) - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* [deleteDataIntegration](docs/sdk/README.md#deletedataintegration) - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [deleteEventIntegration](docs/sdk/README.md#deleteeventintegration) - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* [getDataIntegration](docs/sdk/README.md#getdataintegration) - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [getEventIntegration](docs/sdk/README.md#geteventintegration) - Returns information about the event integration.
* [listDataIntegrationAssociations](docs/sdk/README.md#listdataintegrationassociations) - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listDataIntegrations](docs/sdk/README.md#listdataintegrations) - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listEventIntegrationAssociations](docs/sdk/README.md#listeventintegrationassociations) - Returns a paginated list of event integration associations in the account. 
* [listEventIntegrations](docs/sdk/README.md#listeventintegrations) - Returns a paginated list of event integrations in the account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateDataIntegration](docs/sdk/README.md#updatedataintegration) - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [updateEventIntegration](docs/sdk/README.md#updateeventintegration) - Updates the description of an event integration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

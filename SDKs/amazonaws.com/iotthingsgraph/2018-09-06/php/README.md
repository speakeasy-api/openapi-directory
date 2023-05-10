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
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntityToThingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateEntityToThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntityToThingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEntityToThingRequest();
    $request->associateEntityToThingRequest = new AssociateEntityToThingRequest();
    $request->associateEntityToThingRequest->entityId = 'corrupti';
    $request->associateEntityToThingRequest->namespaceVersion = 592845;
    $request->associateEntityToThingRequest->thingName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateEntityToThingXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_ASSOCIATE_ENTITY_TO_THING;

    $response = $sdk->associateEntityToThing($request);

    if ($response->associateEntityToThingResponse !== null) {
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

* [~~associateEntityToThing~~](docs/sdk/README.md#associateentitytothing) - <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p> :warning: **Deprecated**
* [~~createFlowTemplate~~](docs/sdk/README.md#createflowtemplate) - Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~createSystemInstance~~](docs/sdk/README.md#createsysteminstance) - <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p> :warning: **Deprecated**
* [~~createSystemTemplate~~](docs/sdk/README.md#createsystemtemplate) - Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~deleteFlowTemplate~~](docs/sdk/README.md#deleteflowtemplate) - Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment). :warning: **Deprecated**
* [~~deleteNamespace~~](docs/sdk/README.md#deletenamespace) - Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters. :warning: **Deprecated**
* [~~deleteSystemInstance~~](docs/sdk/README.md#deletesysteminstance) - <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p> :warning: **Deprecated**
* [~~deleteSystemTemplate~~](docs/sdk/README.md#deletesystemtemplate) - Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed. :warning: **Deprecated**
* [~~deploySystemInstance~~](docs/sdk/README.md#deploysysteminstance) - <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p> :warning: **Deprecated**
* [~~deprecateFlowTemplate~~](docs/sdk/README.md#deprecateflowtemplate) - Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run. :warning: **Deprecated**
* [~~deprecateSystemTemplate~~](docs/sdk/README.md#deprecatesystemtemplate) - Deprecates the specified system. :warning: **Deprecated**
* [~~describeNamespace~~](docs/sdk/README.md#describenamespace) - Gets the latest version of the user's namespace and the public version that it is tracking. :warning: **Deprecated**
* [~~dissociateEntityFromThing~~](docs/sdk/README.md#dissociateentityfromthing) - Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing. :warning: **Deprecated**
* [~~getEntities~~](docs/sdk/README.md#getentities) - <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p> :warning: **Deprecated**
* [~~getFlowTemplate~~](docs/sdk/README.md#getflowtemplate) - Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow. :warning: **Deprecated**
* [~~getFlowTemplateRevisions~~](docs/sdk/README.md#getflowtemplaterevisions) - Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted. :warning: **Deprecated**
* [~~getNamespaceDeletionStatus~~](docs/sdk/README.md#getnamespacedeletionstatus) - Gets the status of a namespace deletion task. :warning: **Deprecated**
* [~~getSystemInstance~~](docs/sdk/README.md#getsysteminstance) - Gets a system instance. :warning: **Deprecated**
* [~~getSystemTemplate~~](docs/sdk/README.md#getsystemtemplate) - Gets a system. :warning: **Deprecated**
* [~~getSystemTemplateRevisions~~](docs/sdk/README.md#getsystemtemplaterevisions) - Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted. :warning: **Deprecated**
* [~~getUploadStatus~~](docs/sdk/README.md#getuploadstatus) - Gets the status of the specified upload. :warning: **Deprecated**
* [~~listFlowExecutionMessages~~](docs/sdk/README.md#listflowexecutionmessages) - Returns a list of objects that contain information about events in a flow execution. :warning: **Deprecated**
* [~~listTagsForResource~~](docs/sdk/README.md#listtagsforresource) - Lists all tags on an AWS IoT Things Graph resource. :warning: **Deprecated**
* [~~searchEntities~~](docs/sdk/README.md#searchentities) - Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking. :warning: **Deprecated**
* [~~searchFlowExecutions~~](docs/sdk/README.md#searchflowexecutions) - Searches for AWS IoT Things Graph workflow execution instances. :warning: **Deprecated**
* [~~searchFlowTemplates~~](docs/sdk/README.md#searchflowtemplates) - Searches for summary information about workflows. :warning: **Deprecated**
* [~~searchSystemInstances~~](docs/sdk/README.md#searchsysteminstances) - Searches for system instances in the user's account. :warning: **Deprecated**
* [~~searchSystemTemplates~~](docs/sdk/README.md#searchsystemtemplates) - Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow. :warning: **Deprecated**
* [~~searchThings~~](docs/sdk/README.md#searchthings) - <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p> :warning: **Deprecated**
* [~~tagResource~~](docs/sdk/README.md#tagresource) - Creates a tag for the specified resource. :warning: **Deprecated**
* [~~undeploySystemInstance~~](docs/sdk/README.md#undeploysysteminstance) - Removes a system instance from its target (Cloud or Greengrass). :warning: **Deprecated**
* [~~untagResource~~](docs/sdk/README.md#untagresource) - Removes a tag from the specified resource. :warning: **Deprecated**
* [~~updateFlowTemplate~~](docs/sdk/README.md#updateflowtemplate) - Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.  :warning: **Deprecated**
* [~~updateSystemTemplate~~](docs/sdk/README.md#updatesystemtemplate) - Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed. :warning: **Deprecated**
* [~~uploadEntityDefinitions~~](docs/sdk/README.md#uploadentitydefinitions) - <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p> :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

# SDK

## Overview

<fullname>AWS IoT Things Graph</fullname> <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level.</p> <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p> <p>The AWS IoT Things Graph service is discontinued.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotthingsgraph/>
### Available Operations

* [~~associateEntityToThing~~](#associateentitytothing) - <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p> :warning: **Deprecated**
* [~~createFlowTemplate~~](#createflowtemplate) - Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~createSystemInstance~~](#createsysteminstance) - <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p> :warning: **Deprecated**
* [~~createSystemTemplate~~](#createsystemtemplate) - Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~deleteFlowTemplate~~](#deleteflowtemplate) - Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment). :warning: **Deprecated**
* [~~deleteNamespace~~](#deletenamespace) - Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters. :warning: **Deprecated**
* [~~deleteSystemInstance~~](#deletesysteminstance) - <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p> :warning: **Deprecated**
* [~~deleteSystemTemplate~~](#deletesystemtemplate) - Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed. :warning: **Deprecated**
* [~~deploySystemInstance~~](#deploysysteminstance) - <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p> :warning: **Deprecated**
* [~~deprecateFlowTemplate~~](#deprecateflowtemplate) - Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run. :warning: **Deprecated**
* [~~deprecateSystemTemplate~~](#deprecatesystemtemplate) - Deprecates the specified system. :warning: **Deprecated**
* [~~describeNamespace~~](#describenamespace) - Gets the latest version of the user's namespace and the public version that it is tracking. :warning: **Deprecated**
* [~~dissociateEntityFromThing~~](#dissociateentityfromthing) - Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing. :warning: **Deprecated**
* [~~getEntities~~](#getentities) - <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p> :warning: **Deprecated**
* [~~getFlowTemplate~~](#getflowtemplate) - Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow. :warning: **Deprecated**
* [~~getFlowTemplateRevisions~~](#getflowtemplaterevisions) - Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted. :warning: **Deprecated**
* [~~getNamespaceDeletionStatus~~](#getnamespacedeletionstatus) - Gets the status of a namespace deletion task. :warning: **Deprecated**
* [~~getSystemInstance~~](#getsysteminstance) - Gets a system instance. :warning: **Deprecated**
* [~~getSystemTemplate~~](#getsystemtemplate) - Gets a system. :warning: **Deprecated**
* [~~getSystemTemplateRevisions~~](#getsystemtemplaterevisions) - Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted. :warning: **Deprecated**
* [~~getUploadStatus~~](#getuploadstatus) - Gets the status of the specified upload. :warning: **Deprecated**
* [~~listFlowExecutionMessages~~](#listflowexecutionmessages) - Returns a list of objects that contain information about events in a flow execution. :warning: **Deprecated**
* [~~listTagsForResource~~](#listtagsforresource) - Lists all tags on an AWS IoT Things Graph resource. :warning: **Deprecated**
* [~~searchEntities~~](#searchentities) - Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking. :warning: **Deprecated**
* [~~searchFlowExecutions~~](#searchflowexecutions) - Searches for AWS IoT Things Graph workflow execution instances. :warning: **Deprecated**
* [~~searchFlowTemplates~~](#searchflowtemplates) - Searches for summary information about workflows. :warning: **Deprecated**
* [~~searchSystemInstances~~](#searchsysteminstances) - Searches for system instances in the user's account. :warning: **Deprecated**
* [~~searchSystemTemplates~~](#searchsystemtemplates) - Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow. :warning: **Deprecated**
* [~~searchThings~~](#searchthings) - <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p> :warning: **Deprecated**
* [~~tagResource~~](#tagresource) - Creates a tag for the specified resource. :warning: **Deprecated**
* [~~undeploySystemInstance~~](#undeploysysteminstance) - Removes a system instance from its target (Cloud or Greengrass). :warning: **Deprecated**
* [~~untagResource~~](#untagresource) - Removes a tag from the specified resource. :warning: **Deprecated**
* [~~updateFlowTemplate~~](#updateflowtemplate) - Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.  :warning: **Deprecated**
* [~~updateSystemTemplate~~](#updatesystemtemplate) - Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed. :warning: **Deprecated**
* [~~uploadEntityDefinitions~~](#uploadentitydefinitions) - <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p> :warning: **Deprecated**

## ~~associateEntityToThing~~

<p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

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
    $request->associateEntityToThingRequest->entityId = 'deserunt';
    $request->associateEntityToThingRequest->namespaceVersion = 384382;
    $request->associateEntityToThingRequest->thingName = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AssociateEntityToThingXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_ASSOCIATE_ENTITY_TO_THING;

    $response = $sdk->sdk->associateEntityToThing($request);

    if ($response->associateEntityToThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createFlowTemplate~~

Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlowTemplateRequest();
    $request->createFlowTemplateRequest = new CreateFlowTemplateRequest();
    $request->createFlowTemplateRequest->compatibleNamespaceVersion = 791725;
    $request->createFlowTemplateRequest->definition = new DefinitionDocument();
    $request->createFlowTemplateRequest->definition->language = DefinitionLanguageEnum::GRAPHQL;
    $request->createFlowTemplateRequest->definition->text = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = CreateFlowTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_FLOW_TEMPLATE;

    $response = $sdk->sdk->createFlowTemplate($request);

    if ($response->createFlowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createSystemInstance~~

<p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentTargetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSystemInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSystemInstanceRequest();
    $request->createSystemInstanceRequest = new CreateSystemInstanceRequest();
    $request->createSystemInstanceRequest->definition = new DefinitionDocument();
    $request->createSystemInstanceRequest->definition->language = DefinitionLanguageEnum::GRAPHQL;
    $request->createSystemInstanceRequest->definition->text = 'quis';
    $request->createSystemInstanceRequest->flowActionsRoleArn = 'veritatis';
    $request->createSystemInstanceRequest->greengrassGroupName = 'deserunt';
    $request->createSystemInstanceRequest->metricsConfiguration = new MetricsConfiguration();
    $request->createSystemInstanceRequest->metricsConfiguration->cloudMetricEnabled = false;
    $request->createSystemInstanceRequest->metricsConfiguration->metricRuleRoleArn = 'perferendis';
    $request->createSystemInstanceRequest->s3BucketName = 'ipsam';
    $request->createSystemInstanceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createSystemInstanceRequest->target = DeploymentTargetEnum::CLOUD;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateSystemInstanceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_SYSTEM_INSTANCE;

    $response = $sdk->sdk->createSystemInstance($request);

    if ($response->createSystemInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createSystemTemplate~~

Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSystemTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSystemTemplateRequest();
    $request->createSystemTemplateRequest = new CreateSystemTemplateRequest();
    $request->createSystemTemplateRequest->compatibleNamespaceVersion = 800911;
    $request->createSystemTemplateRequest->definition = new DefinitionDocument();
    $request->createSystemTemplateRequest->definition->language = DefinitionLanguageEnum::GRAPHQL;
    $request->createSystemTemplateRequest->definition->text = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = CreateSystemTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_SYSTEM_TEMPLATE;

    $response = $sdk->sdk->createSystemTemplate($request);

    if ($response->createSystemTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteFlowTemplate~~

Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlowTemplateRequest();
    $request->deleteFlowTemplateRequest = new DeleteFlowTemplateRequest();
    $request->deleteFlowTemplateRequest->id = '28fc8167-42cb-4739-a059-29396fea7596';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteFlowTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_FLOW_TEMPLATE;

    $response = $sdk->sdk->deleteFlowTemplate($request);

    if ($response->deleteFlowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteNamespace~~

Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNamespaceRequest();
    $request->requestBody = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DeleteNamespaceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_NAMESPACE;

    $response = $sdk->sdk->deleteNamespace($request);

    if ($response->deleteNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteSystemInstance~~

<p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSystemInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSystemInstanceRequest();
    $request->deleteSystemInstanceRequest = new DeleteSystemInstanceRequest();
    $request->deleteSystemInstanceRequest->id = 'ff1a3a2f-a946-4773-9251-aa52c3f5ad01';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteSystemInstanceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_SYSTEM_INSTANCE;

    $response = $sdk->sdk->deleteSystemInstance($request);

    if ($response->deleteSystemInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteSystemTemplate~~

Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSystemTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSystemTemplateRequest();
    $request->deleteSystemTemplateRequest = new DeleteSystemTemplateRequest();
    $request->deleteSystemTemplateRequest->id = '78f097b0-074f-4154-b1b5-e6e13b99d488';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DeleteSystemTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_SYSTEM_TEMPLATE;

    $response = $sdk->sdk->deleteSystemTemplate($request);

    if ($response->deleteSystemTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deploySystemInstance~~

<p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeploySystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeploySystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeploySystemInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploySystemInstanceRequest();
    $request->deploySystemInstanceRequest = new DeploySystemInstanceRequest();
    $request->deploySystemInstanceRequest->id = '50ad2abd-4426-4980-ad50-2a94bb4f63c9';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = DeploySystemInstanceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPLOY_SYSTEM_INSTANCE;

    $response = $sdk->sdk->deploySystemInstance($request);

    if ($response->deploySystemInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deprecateFlowTemplate~~

Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeprecateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateFlowTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecateFlowTemplateRequest();
    $request->deprecateFlowTemplateRequest = new DeprecateFlowTemplateRequest();
    $request->deprecateFlowTemplateRequest->id = 'fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = DeprecateFlowTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPRECATE_FLOW_TEMPLATE;

    $response = $sdk->sdk->deprecateFlowTemplate($request);

    if ($response->deprecateFlowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deprecateSystemTemplate~~

Deprecates the specified system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeprecateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateSystemTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecateSystemTemplateRequest();
    $request->deprecateSystemTemplateRequest = new DeprecateSystemTemplateRequest();
    $request->deprecateSystemTemplateRequest->id = 'a4469b6e-2141-4959-890a-fa563e2516fe';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DeprecateSystemTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPRECATE_SYSTEM_TEMPLATE;

    $response = $sdk->sdk->deprecateSystemTemplate($request);

    if ($response->deprecateSystemTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeNamespace~~

Gets the latest version of the user's namespace and the public version that it is tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNamespaceRequest();
    $request->describeNamespaceRequest = new DescribeNamespaceRequest();
    $request->describeNamespaceRequest->namespaceName = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DescribeNamespaceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DESCRIBE_NAMESPACE;

    $response = $sdk->sdk->describeNamespace($request);

    if ($response->describeNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~dissociateEntityFromThing~~

Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DissociateEntityFromThingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DissociateEntityFromThingRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DissociateEntityFromThingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DissociateEntityFromThingRequest();
    $request->dissociateEntityFromThingRequest = new DissociateEntityFromThingRequest();
    $request->dissociateEntityFromThingRequest->entityType = EntityTypeEnum::MAPPING;
    $request->dissociateEntityFromThingRequest->thingName = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DissociateEntityFromThingXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_DISSOCIATE_ENTITY_FROM_THING;

    $response = $sdk->sdk->dissociateEntityFromThing($request);

    if ($response->dissociateEntityFromThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEntities~~

<p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitiesRequest();
    $request->getEntitiesRequest = new GetEntitiesRequest();
    $request->getEntitiesRequest->ids = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->getEntitiesRequest->namespaceVersion = 407183;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = GetEntitiesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_ENTITIES;

    $response = $sdk->sdk->getEntities($request);

    if ($response->getEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getFlowTemplate~~

Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFlowTemplateRequest();
    $request->getFlowTemplateRequest = new GetFlowTemplateRequest();
    $request->getFlowTemplateRequest->id = 'b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe';
    $request->getFlowTemplateRequest->revisionNumber = 608253;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetFlowTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_FLOW_TEMPLATE;

    $response = $sdk->sdk->getFlowTemplate($request);

    if ($response->getFlowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getFlowTemplateRevisions~~

Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowTemplateRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFlowTemplateRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFlowTemplateRevisionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFlowTemplateRevisionsRequest();
    $request->getFlowTemplateRevisionsRequest = new GetFlowTemplateRevisionsRequest();
    $request->getFlowTemplateRevisionsRequest->id = '09b3fe49-a8d9-4cbf-8863-3323f9b77f3a';
    $request->getFlowTemplateRevisionsRequest->maxResults = 254356;
    $request->getFlowTemplateRevisionsRequest->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetFlowTemplateRevisionsXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_FLOW_TEMPLATE_REVISIONS;
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->getFlowTemplateRevisions($request);

    if ($response->getFlowTemplateRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getNamespaceDeletionStatus~~

Gets the status of a namespace deletion task.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceDeletionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceDeletionStatusRequest();
    $request->requestBody = [
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = GetNamespaceDeletionStatusXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_NAMESPACE_DELETION_STATUS;

    $response = $sdk->sdk->getNamespaceDeletionStatus($request);

    if ($response->getNamespaceDeletionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSystemInstance~~

Gets a system instance.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSystemInstanceRequest();
    $request->getSystemInstanceRequest = new GetSystemInstanceRequest();
    $request->getSystemInstanceRequest->id = 'bf737ae4-203c-4e5e-aa95-d8a0d446ce2a';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = GetSystemInstanceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_INSTANCE;

    $response = $sdk->sdk->getSystemInstance($request);

    if ($response->getSystemInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSystemTemplate~~

Gets a system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSystemTemplateRequest();
    $request->getSystemTemplateRequest = new GetSystemTemplateRequest();
    $request->getSystemTemplateRequest->id = '3be453f8-70b3-426b-9a73-429cdb1a8422';
    $request->getSystemTemplateRequest->revisionNumber = 716860;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = GetSystemTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_TEMPLATE;

    $response = $sdk->sdk->getSystemTemplate($request);

    if ($response->getSystemTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSystemTemplateRevisions~~

Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemTemplateRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSystemTemplateRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSystemTemplateRevisionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSystemTemplateRevisionsRequest();
    $request->getSystemTemplateRevisionsRequest = new GetSystemTemplateRevisionsRequest();
    $request->getSystemTemplateRevisionsRequest->id = '22715bf0-cbb1-4e31-b8b9-0f3443a1108e';
    $request->getSystemTemplateRevisionsRequest->maxResults = 9240;
    $request->getSystemTemplateRevisionsRequest->nextToken = 'est';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetSystemTemplateRevisionsXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_TEMPLATE_REVISIONS;
    $request->maxResults = 'quae';
    $request->nextToken = 'laudantium';

    $response = $sdk->sdk->getSystemTemplateRevisions($request);

    if ($response->getSystemTemplateRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getUploadStatus~~

Gets the status of the specified upload.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUploadStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUploadStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUploadStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUploadStatusRequest();
    $request->getUploadStatusRequest = new GetUploadStatusRequest();
    $request->getUploadStatusRequest->uploadId = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = GetUploadStatusXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_UPLOAD_STATUS;

    $response = $sdk->sdk->getUploadStatus($request);

    if ($response->getUploadStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listFlowExecutionMessages~~

Returns a list of objects that contain information about events in a flow execution.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowExecutionMessagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFlowExecutionMessagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowExecutionMessagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlowExecutionMessagesRequest();
    $request->listFlowExecutionMessagesRequest = new ListFlowExecutionMessagesRequest();
    $request->listFlowExecutionMessagesRequest->flowExecutionId = 'delectus';
    $request->listFlowExecutionMessagesRequest->maxResults = 455169;
    $request->listFlowExecutionMessagesRequest->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = ListFlowExecutionMessagesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_LIST_FLOW_EXECUTION_MESSAGES;
    $request->maxResults = 'similique';
    $request->nextToken = 'facilis';

    $response = $sdk->sdk->listFlowExecutionMessages($request);

    if ($response->listFlowExecutionMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listTagsForResource~~

Lists all tags on an AWS IoT Things Graph resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->maxResults = 874288;
    $request->listTagsForResourceRequest->nextToken = 'ducimus';
    $request->listTagsForResourceRequest->resourceArn = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_LIST_TAGS_FOR_RESOURCE;
    $request->maxResults = 'exercitationem';
    $request->nextToken = 'nulla';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchEntities~~

Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\EntityFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEntitiesRequest();
    $request->searchEntitiesRequest = new SearchEntitiesRequest();
    $request->searchEntitiesRequest->entityTypes = [
        EntityTypeEnum::PROPERTY,
    ];
    $request->searchEntitiesRequest->filters = [
        new EntityFilter(),
        new EntityFilter(),
        new EntityFilter(),
        new EntityFilter(),
    ];
    $request->searchEntitiesRequest->maxResults = 985033;
    $request->searchEntitiesRequest->namespaceVersion = 478370;
    $request->searchEntitiesRequest->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = SearchEntitiesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_ENTITIES;
    $request->maxResults = 'vel';
    $request->nextToken = 'possimus';

    $response = $sdk->sdk->searchEntities($request);

    if ($response->searchEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchFlowExecutions~~

Searches for AWS IoT Things Graph workflow execution instances.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchFlowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchFlowExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchFlowExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFlowExecutionsRequest();
    $request->searchFlowExecutionsRequest = new SearchFlowExecutionsRequest();
    $request->searchFlowExecutionsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-23T16:55:55.380Z');
    $request->searchFlowExecutionsRequest->flowExecutionId = 'ex';
    $request->searchFlowExecutionsRequest->maxResults = 511319;
    $request->searchFlowExecutionsRequest->nextToken = 'dicta';
    $request->searchFlowExecutionsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T01:04:15.076Z');
    $request->searchFlowExecutionsRequest->systemInstanceId = 'quasi';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = SearchFlowExecutionsXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_FLOW_EXECUTIONS;
    $request->maxResults = 'saepe';
    $request->nextToken = 'ea';

    $response = $sdk->sdk->searchFlowExecutions($request);

    if ($response->searchFlowExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchFlowTemplates~~

Searches for summary information about workflows.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchFlowTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchFlowTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlowTemplateFilter;
use \OpenAPI\OpenAPI\Models\Shared\FlowTemplateFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchFlowTemplatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFlowTemplatesRequest();
    $request->searchFlowTemplatesRequest = new SearchFlowTemplatesRequest();
    $request->searchFlowTemplatesRequest->filters = [
        new FlowTemplateFilter(),
        new FlowTemplateFilter(),
        new FlowTemplateFilter(),
        new FlowTemplateFilter(),
    ];
    $request->searchFlowTemplatesRequest->maxResults = 359271;
    $request->searchFlowTemplatesRequest->nextToken = 'veniam';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = SearchFlowTemplatesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_FLOW_TEMPLATES;
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'minima';

    $response = $sdk->sdk->searchFlowTemplates($request);

    if ($response->searchFlowTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchSystemInstances~~

Searches for system instances in the user's account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchSystemInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchSystemInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SystemInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\SystemInstanceFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSystemInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSystemInstancesRequest();
    $request->searchSystemInstancesRequest = new SearchSystemInstancesRequest();
    $request->searchSystemInstancesRequest->filters = [
        new SystemInstanceFilter(),
    ];
    $request->searchSystemInstancesRequest->maxResults = 952871;
    $request->searchSystemInstancesRequest->nextToken = 'libero';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = SearchSystemInstancesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_SYSTEM_INSTANCES;
    $request->maxResults = 'inventore';
    $request->nextToken = 'non';

    $response = $sdk->sdk->searchSystemInstances($request);

    if ($response->searchSystemInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchSystemTemplates~~

Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchSystemTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchSystemTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SystemTemplateFilter;
use \OpenAPI\OpenAPI\Models\Shared\SystemTemplateFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSystemTemplatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSystemTemplatesRequest();
    $request->searchSystemTemplatesRequest = new SearchSystemTemplatesRequest();
    $request->searchSystemTemplatesRequest->filters = [
        new SystemTemplateFilter(),
    ];
    $request->searchSystemTemplatesRequest->maxResults = 677412;
    $request->searchSystemTemplatesRequest->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = SearchSystemTemplatesXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_SYSTEM_TEMPLATES;
    $request->maxResults = 'nulla';
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->searchSystemTemplates($request);

    if ($response->searchSystemTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~searchThings~~

<p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchThingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchThingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchThingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchThingsRequest();
    $request->searchThingsRequest = new SearchThingsRequest();
    $request->searchThingsRequest->entityId = 'libero';
    $request->searchThingsRequest->maxResults = 96549;
    $request->searchThingsRequest->namespaceVersion = 270328;
    $request->searchThingsRequest->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = SearchThingsXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_THINGS;
    $request->maxResults = 'esse';
    $request->nextToken = 'esse';

    $response = $sdk->sdk->searchThings($request);

    if ($response->searchThingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~tagResource~~

Creates a tag for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'rem';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~undeploySystemInstance~~

Removes a system instance from its target (Cloud or Greengrass).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UndeploySystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UndeploySystemInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UndeploySystemInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UndeploySystemInstanceRequest();
    $request->undeploySystemInstanceRequest = new UndeploySystemInstanceRequest();
    $request->undeploySystemInstanceRequest->id = '28c10ab3-cdca-4425-9904-e523c7e0bc71';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = UndeploySystemInstanceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_UNDEPLOY_SYSTEM_INSTANCE;

    $response = $sdk->sdk->undeploySystemInstance($request);

    if ($response->undeploySystemInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~untagResource~~

Removes a tag from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'sapiente';
    $request->untagResourceRequest->tagKeys = [
        'deserunt',
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateFlowTemplate~~

Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFlowTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlowTemplateRequest();
    $request->updateFlowTemplateRequest = new UpdateFlowTemplateRequest();
    $request->updateFlowTemplateRequest->compatibleNamespaceVersion = 536178;
    $request->updateFlowTemplateRequest->definition = new DefinitionDocument();
    $request->updateFlowTemplateRequest->definition->language = DefinitionLanguageEnum::GRAPHQL;
    $request->updateFlowTemplateRequest->definition->text = 'fugit';
    $request->updateFlowTemplateRequest->id = 'aa482562-f222-4e98-97ee-17cbe61e6b7b';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = UpdateFlowTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPDATE_FLOW_TEMPLATE;

    $response = $sdk->sdk->updateFlowTemplate($request);

    if ($response->updateFlowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateSystemTemplate~~

Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSystemTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSystemTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSystemTemplateRequest();
    $request->updateSystemTemplateRequest = new UpdateSystemTemplateRequest();
    $request->updateSystemTemplateRequest->compatibleNamespaceVersion = 240020;
    $request->updateSystemTemplateRequest->definition = new DefinitionDocument();
    $request->updateSystemTemplateRequest->definition->language = DefinitionLanguageEnum::GRAPHQL;
    $request->updateSystemTemplateRequest->definition->text = 'cumque';
    $request->updateSystemTemplateRequest->id = '20c4f378-9fd8-471f-99dd-2efd121aa6f1';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = UpdateSystemTemplateXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPDATE_SYSTEM_TEMPLATE;

    $response = $sdk->sdk->updateSystemTemplate($request);

    if ($response->updateSystemTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~uploadEntityDefinitions~~

<p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadEntityDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UploadEntityDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionDocument;
use \OpenAPI\OpenAPI\Models\Shared\DefinitionLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadEntityDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadEntityDefinitionsRequest();
    $request->uploadEntityDefinitionsRequest = new UploadEntityDefinitionsRequest();
    $request->uploadEntityDefinitionsRequest->deprecateExistingEntities = false;
    $request->uploadEntityDefinitionsRequest->document = new DefinitionDocument();
    $request->uploadEntityDefinitionsRequest->document->language = DefinitionLanguageEnum::GRAPHQL;
    $request->uploadEntityDefinitionsRequest->document->text = 'accusantium';
    $request->uploadEntityDefinitionsRequest->syncWithPublicNamespace = false;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = UploadEntityDefinitionsXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPLOAD_ENTITY_DEFINITIONS;

    $response = $sdk->sdk->uploadEntityDefinitions($request);

    if ($response->uploadEntityDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

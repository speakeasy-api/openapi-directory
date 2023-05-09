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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEntityToThingRequest;
import org.openapis.openapi.models.operations.AssociateEntityToThingResponse;
import org.openapis.openapi.models.operations.AssociateEntityToThingXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateEntityToThingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntityToThingRequest req = new AssociateEntityToThingRequest(                new AssociateEntityToThingRequest("iure", "magnam") {{
                                namespaceVersion = 891773L;
                            }};, AssociateEntityToThingXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_ASSOCIATE_ENTITY_TO_THING) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AssociateEntityToThingResponse res = sdk.sdk.associateEntityToThing(req);

            if (res.associateEntityToThingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createFlowTemplate~~

Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFlowTemplateRequest;
import org.openapis.openapi.models.operations.CreateFlowTemplateResponse;
import org.openapis.openapi.models.operations.CreateFlowTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFlowTemplateRequest;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFlowTemplateRequest req = new CreateFlowTemplateRequest(                new CreateFlowTemplateRequest(                new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "iusto");) {{
                                compatibleNamespaceVersion = 568045L;
                            }};, CreateFlowTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_FLOW_TEMPLATE) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            CreateFlowTemplateResponse res = sdk.sdk.createFlowTemplate(req);

            if (res.createFlowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createSystemInstance~~

<p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSystemInstanceRequest;
import org.openapis.openapi.models.operations.CreateSystemInstanceResponse;
import org.openapis.openapi.models.operations.CreateSystemInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSystemInstanceRequest;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.DeploymentTargetEnum;
import org.openapis.openapi.models.shared.MetricsConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSystemInstanceRequest req = new CreateSystemInstanceRequest(                new CreateSystemInstanceRequest(                new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "ipsam");, DeploymentTargetEnum.CLOUD) {{
                                flowActionsRoleArn = "sapiente";
                                greengrassGroupName = "quo";
                                metricsConfiguration = new MetricsConfiguration() {{
                                    cloudMetricEnabled = false;
                                    metricRuleRoleArn = "odit";
                                }};;
                                s3BucketName = "at";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quod", "quod") {{
                                        key = "maiores";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag("porro", "dolorum") {{
                                        key = "esse";
                                        value = "totam";
                                    }}),
                                    add(new Tag("officia", "occaecati") {{
                                        key = "dicta";
                                        value = "nam";
                                    }}),
                                    add(new Tag("hic", "optio") {{
                                        key = "fugit";
                                        value = "deleniti";
                                    }}),
                                }};
                            }};, CreateSystemInstanceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_SYSTEM_INSTANCE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            CreateSystemInstanceResponse res = sdk.sdk.createSystemInstance(req);

            if (res.createSystemInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createSystemTemplate~~

Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSystemTemplateRequest;
import org.openapis.openapi.models.operations.CreateSystemTemplateResponse;
import org.openapis.openapi.models.operations.CreateSystemTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSystemTemplateRequest;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSystemTemplateRequest req = new CreateSystemTemplateRequest(                new CreateSystemTemplateRequest(                new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "esse");) {{
                                compatibleNamespaceVersion = 216550L;
                            }};, CreateSystemTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_CREATE_SYSTEM_TEMPLATE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            CreateSystemTemplateResponse res = sdk.sdk.createSystemTemplate(req);

            if (res.createSystemTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteFlowTemplate~~

Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFlowTemplateRequest;
import org.openapis.openapi.models.operations.DeleteFlowTemplateResponse;
import org.openapis.openapi.models.operations.DeleteFlowTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFlowTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFlowTemplateRequest req = new DeleteFlowTemplateRequest(                new DeleteFlowTemplateRequest("natus");, DeleteFlowTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_FLOW_TEMPLATE) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteFlowTemplateResponse res = sdk.sdk.deleteFlowTemplate(req);

            if (res.deleteFlowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteNamespace~~

Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNamespaceRequest;
import org.openapis.openapi.models.operations.DeleteNamespaceResponse;
import org.openapis.openapi.models.operations.DeleteNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNamespaceRequest req = new DeleteNamespaceRequest(                new java.util.HashMap<String, Object>() {{
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                                put("est", "mollitia");
                                put("laborum", "dolores");
                            }}, DeleteNamespaceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_NAMESPACE) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteNamespaceResponse res = sdk.sdk.deleteNamespace(req);

            if (res.deleteNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteSystemInstance~~

<p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSystemInstanceRequest;
import org.openapis.openapi.models.operations.DeleteSystemInstanceResponse;
import org.openapis.openapi.models.operations.DeleteSystemInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSystemInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSystemInstanceRequest req = new DeleteSystemInstanceRequest(                new DeleteSystemInstanceRequest() {{
                                id = "907aff1a-3a2f-4a94-a773-9251aa52c3f5";
                            }};, DeleteSystemInstanceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_SYSTEM_INSTANCE) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteSystemInstanceResponse res = sdk.sdk.deleteSystemInstance(req);

            if (res.deleteSystemInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteSystemTemplate~~

Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSystemTemplateRequest;
import org.openapis.openapi.models.operations.DeleteSystemTemplateResponse;
import org.openapis.openapi.models.operations.DeleteSystemTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSystemTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSystemTemplateRequest req = new DeleteSystemTemplateRequest(                new DeleteSystemTemplateRequest("reiciendis");, DeleteSystemTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DELETE_SYSTEM_TEMPLATE) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteSystemTemplateResponse res = sdk.sdk.deleteSystemTemplate(req);

            if (res.deleteSystemTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deploySystemInstance~~

<p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeploySystemInstanceRequest;
import org.openapis.openapi.models.operations.DeploySystemInstanceResponse;
import org.openapis.openapi.models.operations.DeploySystemInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeploySystemInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeploySystemInstanceRequest req = new DeploySystemInstanceRequest(                new DeploySystemInstanceRequest() {{
                                id = "b0074f15-471b-45e6-a13b-99d488e1e91e";
                            }};, DeploySystemInstanceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPLOY_SYSTEM_INSTANCE) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeploySystemInstanceResponse res = sdk.sdk.deploySystemInstance(req);

            if (res.deploySystemInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deprecateFlowTemplate~~

Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecateFlowTemplateRequest;
import org.openapis.openapi.models.operations.DeprecateFlowTemplateResponse;
import org.openapis.openapi.models.operations.DeprecateFlowTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeprecateFlowTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprecateFlowTemplateRequest req = new DeprecateFlowTemplateRequest(                new DeprecateFlowTemplateRequest("quibusdam");, DeprecateFlowTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPRECATE_FLOW_TEMPLATE) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeprecateFlowTemplateResponse res = sdk.sdk.deprecateFlowTemplate(req);

            if (res.deprecateFlowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deprecateSystemTemplate~~

Deprecates the specified system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecateSystemTemplateRequest;
import org.openapis.openapi.models.operations.DeprecateSystemTemplateResponse;
import org.openapis.openapi.models.operations.DeprecateSystemTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeprecateSystemTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprecateSystemTemplateRequest req = new DeprecateSystemTemplateRequest(                new DeprecateSystemTemplateRequest("assumenda");, DeprecateSystemTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DEPRECATE_SYSTEM_TEMPLATE) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            DeprecateSystemTemplateResponse res = sdk.sdk.deprecateSystemTemplate(req);

            if (res.deprecateSystemTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeNamespace~~

Gets the latest version of the user's namespace and the public version that it is tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNamespaceRequest;
import org.openapis.openapi.models.operations.DescribeNamespaceResponse;
import org.openapis.openapi.models.operations.DescribeNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNamespaceRequest req = new DescribeNamespaceRequest(                new DescribeNamespaceRequest() {{
                                namespaceName = "labore";
                            }};, DescribeNamespaceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DESCRIBE_NAMESPACE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeNamespaceResponse res = sdk.sdk.describeNamespace(req);

            if (res.describeNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~dissociateEntityFromThing~~

Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DissociateEntityFromThingRequest;
import org.openapis.openapi.models.operations.DissociateEntityFromThingResponse;
import org.openapis.openapi.models.operations.DissociateEntityFromThingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DissociateEntityFromThingRequest;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DissociateEntityFromThingRequest req = new DissociateEntityFromThingRequest(                new DissociateEntityFromThingRequest(EntityTypeEnum.ACTION, "officia");, DissociateEntityFromThingXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_DISSOCIATE_ENTITY_FROM_THING) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            DissociateEntityFromThingResponse res = sdk.sdk.dissociateEntityFromThing(req);

            if (res.dissociateEntityFromThingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEntities~~

<p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitiesRequest;
import org.openapis.openapi.models.operations.GetEntitiesResponse;
import org.openapis.openapi.models.operations.GetEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEntitiesRequest req = new GetEntitiesRequest(                new GetEntitiesRequest(                new String[]{{
                                                add("dicta"),
                                                add("magnam"),
                                                add("cumque"),
                                            }}) {{
                                namespaceVersion = 813798L;
                            }};, GetEntitiesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_ENTITIES) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            GetEntitiesResponse res = sdk.sdk.getEntities(req);

            if (res.getEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getFlowTemplate~~

Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlowTemplateRequest;
import org.openapis.openapi.models.operations.GetFlowTemplateResponse;
import org.openapis.openapi.models.operations.GetFlowTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFlowTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFlowTemplateRequest req = new GetFlowTemplateRequest(                new GetFlowTemplateRequest("delectus") {{
                                revisionNumber = 692532L;
                            }};, GetFlowTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_FLOW_TEMPLATE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            GetFlowTemplateResponse res = sdk.sdk.getFlowTemplate(req);

            if (res.getFlowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getFlowTemplateRevisions~~

Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlowTemplateRevisionsRequest;
import org.openapis.openapi.models.operations.GetFlowTemplateRevisionsResponse;
import org.openapis.openapi.models.operations.GetFlowTemplateRevisionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFlowTemplateRevisionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFlowTemplateRevisionsRequest req = new GetFlowTemplateRevisionsRequest(                new GetFlowTemplateRevisionsRequest("nisi") {{
                                maxResults = 423855L;
                                nextToken = "natus";
                            }};, GetFlowTemplateRevisionsXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_FLOW_TEMPLATE_REVISIONS) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
                maxResults = "labore";
                nextToken = "labore";
            }};            

            GetFlowTemplateRevisionsResponse res = sdk.sdk.getFlowTemplateRevisions(req);

            if (res.getFlowTemplateRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getNamespaceDeletionStatus~~

Gets the status of a namespace deletion task.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceDeletionStatusRequest;
import org.openapis.openapi.models.operations.GetNamespaceDeletionStatusResponse;
import org.openapis.openapi.models.operations.GetNamespaceDeletionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamespaceDeletionStatusRequest req = new GetNamespaceDeletionStatusRequest(                new java.util.HashMap<String, Object>() {{
                                put("nobis", "eum");
                                put("vero", "aspernatur");
                                put("architecto", "magnam");
                            }}, GetNamespaceDeletionStatusXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_NAMESPACE_DELETION_STATUS) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetNamespaceDeletionStatusResponse res = sdk.sdk.getNamespaceDeletionStatus(req);

            if (res.getNamespaceDeletionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSystemInstance~~

Gets a system instance.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSystemInstanceRequest;
import org.openapis.openapi.models.operations.GetSystemInstanceResponse;
import org.openapis.openapi.models.operations.GetSystemInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSystemInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSystemInstanceRequest req = new GetSystemInstanceRequest(                new GetSystemInstanceRequest("reiciendis");, GetSystemInstanceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_INSTANCE) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            GetSystemInstanceResponse res = sdk.sdk.getSystemInstance(req);

            if (res.getSystemInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSystemTemplate~~

Gets a system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSystemTemplateRequest;
import org.openapis.openapi.models.operations.GetSystemTemplateResponse;
import org.openapis.openapi.models.operations.GetSystemTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSystemTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSystemTemplateRequest req = new GetSystemTemplateRequest(                new GetSystemTemplateRequest("iure") {{
                                revisionNumber = 984043L;
                            }};, GetSystemTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_TEMPLATE) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            GetSystemTemplateResponse res = sdk.sdk.getSystemTemplate(req);

            if (res.getSystemTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSystemTemplateRevisions~~

Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSystemTemplateRevisionsRequest;
import org.openapis.openapi.models.operations.GetSystemTemplateRevisionsResponse;
import org.openapis.openapi.models.operations.GetSystemTemplateRevisionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSystemTemplateRevisionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSystemTemplateRevisionsRequest req = new GetSystemTemplateRevisionsRequest(                new GetSystemTemplateRevisionsRequest("repudiandae") {{
                                maxResults = 352312L;
                                nextToken = "expedita";
                            }};, GetSystemTemplateRevisionsXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_SYSTEM_TEMPLATE_REVISIONS) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
                maxResults = "consequuntur";
                nextToken = "praesentium";
            }};            

            GetSystemTemplateRevisionsResponse res = sdk.sdk.getSystemTemplateRevisions(req);

            if (res.getSystemTemplateRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getUploadStatus~~

Gets the status of the specified upload.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUploadStatusRequest;
import org.openapis.openapi.models.operations.GetUploadStatusResponse;
import org.openapis.openapi.models.operations.GetUploadStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUploadStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUploadStatusRequest req = new GetUploadStatusRequest(                new GetUploadStatusRequest("magni");, GetUploadStatusXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_UPLOAD_STATUS) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            GetUploadStatusResponse res = sdk.sdk.getUploadStatus(req);

            if (res.getUploadStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listFlowExecutionMessages~~

Returns a list of objects that contain information about events in a flow execution.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlowExecutionMessagesRequest;
import org.openapis.openapi.models.operations.ListFlowExecutionMessagesResponse;
import org.openapis.openapi.models.operations.ListFlowExecutionMessagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFlowExecutionMessagesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFlowExecutionMessagesRequest req = new ListFlowExecutionMessagesRequest(                new ListFlowExecutionMessagesRequest("ea") {{
                                maxResults = 33222L;
                                nextToken = "ab";
                            }};, ListFlowExecutionMessagesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_LIST_FLOW_EXECUTION_MESSAGES) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
                maxResults = "pariatur";
                nextToken = "nemo";
            }};            

            ListFlowExecutionMessagesResponse res = sdk.sdk.listFlowExecutionMessages(req);

            if (res.listFlowExecutionMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listTagsForResource~~

Lists all tags on an AWS IoT Things Graph resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("perferendis") {{
                                maxResults = 855804L;
                                nextToken = "amet";
                            }};, ListTagsForResourceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
                maxResults = "quis";
                nextToken = "totam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchEntities~~

Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEntitiesRequest;
import org.openapis.openapi.models.operations.SearchEntitiesResponse;
import org.openapis.openapi.models.operations.SearchEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.EntityFilter;
import org.openapis.openapi.models.shared.EntityFilterNameEnum;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.SearchEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchEntitiesRequest req = new SearchEntitiesRequest(                new SearchEntitiesRequest(                new org.openapis.openapi.models.shared.EntityTypeEnum[]{{
                                                add(EntityTypeEnum.CAPABILITY),
                                            }}) {{
                                filters = new org.openapis.openapi.models.shared.EntityFilter[]{{
                                    add(new EntityFilter() {{
                                        name = EntityFilterNameEnum.NAME;
                                        value = new String[]{{
                                            add("dolores"),
                                        }};
                                    }}),
                                }};
                                maxResults = 793698L;
                                namespaceVersion = 463451L;
                                nextToken = "dolor";
                            }};, SearchEntitiesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_ENTITIES) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
                maxResults = "voluptatem";
                nextToken = "porro";
            }};            

            SearchEntitiesResponse res = sdk.sdk.searchEntities(req);

            if (res.searchEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchFlowExecutions~~

Searches for AWS IoT Things Graph workflow execution instances.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFlowExecutionsRequest;
import org.openapis.openapi.models.operations.SearchFlowExecutionsResponse;
import org.openapis.openapi.models.operations.SearchFlowExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.SearchFlowExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchFlowExecutionsRequest req = new SearchFlowExecutionsRequest(                new SearchFlowExecutionsRequest("blanditiis") {{
                                endTime = OffsetDateTime.parse("2022-11-25T05:30:58.706Z");
                                flowExecutionId = "occaecati";
                                maxResults = 699098L;
                                nextToken = "adipisci";
                                startTime = OffsetDateTime.parse("2020-03-14T00:51:21.656Z");
                            }};, SearchFlowExecutionsXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_FLOW_EXECUTIONS) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
                maxResults = "libero";
                nextToken = "delectus";
            }};            

            SearchFlowExecutionsResponse res = sdk.sdk.searchFlowExecutions(req);

            if (res.searchFlowExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchFlowTemplates~~

Searches for summary information about workflows.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFlowTemplatesRequest;
import org.openapis.openapi.models.operations.SearchFlowTemplatesResponse;
import org.openapis.openapi.models.operations.SearchFlowTemplatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.FlowTemplateFilter;
import org.openapis.openapi.models.shared.FlowTemplateFilterNameEnum;
import org.openapis.openapi.models.shared.SearchFlowTemplatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchFlowTemplatesRequest req = new SearchFlowTemplatesRequest(                new SearchFlowTemplatesRequest() {{
                                filters = new org.openapis.openapi.models.shared.FlowTemplateFilter[]{{
                                    add(new FlowTemplateFilter(FlowTemplateFilterNameEnum.DEVICE_MODEL_ID,                 new String[]{{
                                                        add("qui"),
                                                    }}) {{
                                        name = FlowTemplateFilterNameEnum.DEVICE_MODEL_ID;
                                        value = new String[]{{
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new FlowTemplateFilter(FlowTemplateFilterNameEnum.DEVICE_MODEL_ID,                 new String[]{{
                                                        add("cum"),
                                                        add("voluptate"),
                                                        add("dignissimos"),
                                                    }}) {{
                                        name = FlowTemplateFilterNameEnum.DEVICE_MODEL_ID;
                                        value = new String[]{{
                                            add("hic"),
                                        }};
                                    }}),
                                    add(new FlowTemplateFilter(FlowTemplateFilterNameEnum.DEVICE_MODEL_ID,                 new String[]{{
                                                        add("ipsa"),
                                                    }}) {{
                                        name = FlowTemplateFilterNameEnum.DEVICE_MODEL_ID;
                                        value = new String[]{{
                                            add("amet"),
                                            add("dolorum"),
                                            add("numquam"),
                                            add("veritatis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 434417L;
                                nextToken = "odio";
                            }};, SearchFlowTemplatesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_FLOW_TEMPLATES) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
                maxResults = "atque";
                nextToken = "sit";
            }};            

            SearchFlowTemplatesResponse res = sdk.sdk.searchFlowTemplates(req);

            if (res.searchFlowTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchSystemInstances~~

Searches for system instances in the user's account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSystemInstancesRequest;
import org.openapis.openapi.models.operations.SearchSystemInstancesResponse;
import org.openapis.openapi.models.operations.SearchSystemInstancesXAmzTargetEnum;
import org.openapis.openapi.models.shared.SearchSystemInstancesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SystemInstanceFilter;
import org.openapis.openapi.models.shared.SystemInstanceFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchSystemInstancesRequest req = new SearchSystemInstancesRequest(                new SearchSystemInstancesRequest() {{
                                filters = new org.openapis.openapi.models.shared.SystemInstanceFilter[]{{
                                    add(new SystemInstanceFilter() {{
                                        name = SystemInstanceFilterNameEnum.GREENGRASS_GROUP_NAME;
                                        value = new String[]{{
                                            add("iusto"),
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                }};
                                maxResults = 536579L;
                                nextToken = "omnis";
                            }};, SearchSystemInstancesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_SYSTEM_INSTANCES) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
                maxResults = "saepe";
                nextToken = "eius";
            }};            

            SearchSystemInstancesResponse res = sdk.sdk.searchSystemInstances(req);

            if (res.searchSystemInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchSystemTemplates~~

Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSystemTemplatesRequest;
import org.openapis.openapi.models.operations.SearchSystemTemplatesResponse;
import org.openapis.openapi.models.operations.SearchSystemTemplatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.SearchSystemTemplatesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SystemTemplateFilter;
import org.openapis.openapi.models.shared.SystemTemplateFilterNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchSystemTemplatesRequest req = new SearchSystemTemplatesRequest(                new SearchSystemTemplatesRequest() {{
                                filters = new org.openapis.openapi.models.shared.SystemTemplateFilter[]{{
                                    add(new SystemTemplateFilter(SystemTemplateFilterNameEnum.FLOW_TEMPLATE_ID,                 new String[]{{
                                                        add("ad"),
                                                        add("saepe"),
                                                        add("suscipit"),
                                                        add("deserunt"),
                                                    }}) {{
                                        name = SystemTemplateFilterNameEnum.FLOW_TEMPLATE_ID;
                                        value = new String[]{{
                                            add("optio"),
                                        }};
                                    }}),
                                }};
                                maxResults = 588317L;
                                nextToken = "minima";
                            }};, SearchSystemTemplatesXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_SYSTEM_TEMPLATES) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
                maxResults = "vel";
                nextToken = "quod";
            }};            

            SearchSystemTemplatesResponse res = sdk.sdk.searchSystemTemplates(req);

            if (res.searchSystemTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~searchThings~~

<p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchThingsRequest;
import org.openapis.openapi.models.operations.SearchThingsResponse;
import org.openapis.openapi.models.operations.SearchThingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.SearchThingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchThingsRequest req = new SearchThingsRequest(                new SearchThingsRequest("qui") {{
                                maxResults = 679880L;
                                namespaceVersion = 952792L;
                                nextToken = "esse";
                            }};, SearchThingsXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_THINGS) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
                maxResults = "accusamus";
                nextToken = "numquam";
            }};            

            SearchThingsResponse res = sdk.sdk.searchThings(req);

            if (res.searchThingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~tagResource~~

Creates a tag for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorem",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("sit", "expedita") {{
                                                    key = "totam";
                                                    value = "nihil";
                                                }}),
                                                add(new Tag("vel", "libero") {{
                                                    key = "neque";
                                                    value = "sed";
                                                }}),
                                                add(new Tag("quam", "ipsum") {{
                                                    key = "voluptas";
                                                    value = "deserunt";
                                                }}),
                                                add(new Tag("cupiditate", "maxime") {{
                                                    key = "incidunt";
                                                    value = "qui";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~undeploySystemInstance~~

Removes a system instance from its target (Cloud or Greengrass).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UndeploySystemInstanceRequest;
import org.openapis.openapi.models.operations.UndeploySystemInstanceResponse;
import org.openapis.openapi.models.operations.UndeploySystemInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UndeploySystemInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UndeploySystemInstanceRequest req = new UndeploySystemInstanceRequest(                new UndeploySystemInstanceRequest() {{
                                id = "bb679d23-2271-45bf-8cbb-1e31b8b90f34";
                            }};, UndeploySystemInstanceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_UNDEPLOY_SYSTEM_INSTANCE) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
            }};            

            UndeploySystemInstanceResponse res = sdk.sdk.undeploySystemInstance(req);

            if (res.undeploySystemInstanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~untagResource~~

Removes a tag from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("consequatur",                 new String[]{{
                                                add("repellendus"),
                                                add("porro"),
                                                add("doloribus"),
                                            }});, UntagResourceXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "qui";
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateFlowTemplate~~

Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlowTemplateRequest;
import org.openapis.openapi.models.operations.UpdateFlowTemplateResponse;
import org.openapis.openapi.models.operations.UpdateFlowTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFlowTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFlowTemplateRequest req = new UpdateFlowTemplateRequest(                new UpdateFlowTemplateRequest(                new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "voluptatibus");, "quisquam") {{
                                compatibleNamespaceVersion = 876506L;
                            }};, UpdateFlowTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPDATE_FLOW_TEMPLATE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            UpdateFlowTemplateResponse res = sdk.sdk.updateFlowTemplate(req);

            if (res.updateFlowTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateSystemTemplate~~

Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSystemTemplateRequest;
import org.openapis.openapi.models.operations.UpdateSystemTemplateResponse;
import org.openapis.openapi.models.operations.UpdateSystemTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSystemTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSystemTemplateRequest req = new UpdateSystemTemplateRequest(                new UpdateSystemTemplateRequest(                new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "dignissimos");, "hic") {{
                                compatibleNamespaceVersion = 715561L;
                            }};, UpdateSystemTemplateXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPDATE_SYSTEM_TEMPLATE) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            UpdateSystemTemplateResponse res = sdk.sdk.updateSystemTemplate(req);

            if (res.updateSystemTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~uploadEntityDefinitions~~

<p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadEntityDefinitionsRequest;
import org.openapis.openapi.models.operations.UploadEntityDefinitionsResponse;
import org.openapis.openapi.models.operations.UploadEntityDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DefinitionDocument;
import org.openapis.openapi.models.shared.DefinitionLanguageEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadEntityDefinitionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadEntityDefinitionsRequest req = new UploadEntityDefinitionsRequest(                new UploadEntityDefinitionsRequest() {{
                                deprecateExistingEntities = false;
                                document = new DefinitionDocument(DefinitionLanguageEnum.GRAPHQL, "illum");;
                                syncWithPublicNamespace = false;
                            }};, UploadEntityDefinitionsXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_UPLOAD_ENTITY_DEFINITIONS) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
            }};            

            UploadEntityDefinitionsResponse res = sdk.sdk.uploadEntityDefinitions(req);

            if (res.uploadEntityDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

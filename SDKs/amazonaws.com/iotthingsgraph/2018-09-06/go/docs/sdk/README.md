# SDK

## Overview

<fullname>AWS IoT Things Graph</fullname> <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level.</p> <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p> <p>The AWS IoT Things Graph service is discontinued.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotthingsgraph/>
### Available Operations

* [~~AssociateEntityToThing~~](#associateentitytothing) - <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p> :warning: **Deprecated**
* [~~CreateFlowTemplate~~](#createflowtemplate) - Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~CreateSystemInstance~~](#createsysteminstance) - <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p> :warning: **Deprecated**
* [~~CreateSystemTemplate~~](#createsystemtemplate) - Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request. :warning: **Deprecated**
* [~~DeleteFlowTemplate~~](#deleteflowtemplate) - Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment). :warning: **Deprecated**
* [~~DeleteNamespace~~](#deletenamespace) - Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters. :warning: **Deprecated**
* [~~DeleteSystemInstance~~](#deletesysteminstance) - <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p> :warning: **Deprecated**
* [~~DeleteSystemTemplate~~](#deletesystemtemplate) - Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed. :warning: **Deprecated**
* [~~DeploySystemInstance~~](#deploysysteminstance) - <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p> :warning: **Deprecated**
* [~~DeprecateFlowTemplate~~](#deprecateflowtemplate) - Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run. :warning: **Deprecated**
* [~~DeprecateSystemTemplate~~](#deprecatesystemtemplate) - Deprecates the specified system. :warning: **Deprecated**
* [~~DescribeNamespace~~](#describenamespace) - Gets the latest version of the user's namespace and the public version that it is tracking. :warning: **Deprecated**
* [~~DissociateEntityFromThing~~](#dissociateentityfromthing) - Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing. :warning: **Deprecated**
* [~~GetEntities~~](#getentities) - <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p> :warning: **Deprecated**
* [~~GetFlowTemplate~~](#getflowtemplate) - Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow. :warning: **Deprecated**
* [~~GetFlowTemplateRevisions~~](#getflowtemplaterevisions) - Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted. :warning: **Deprecated**
* [~~GetNamespaceDeletionStatus~~](#getnamespacedeletionstatus) - Gets the status of a namespace deletion task. :warning: **Deprecated**
* [~~GetSystemInstance~~](#getsysteminstance) - Gets a system instance. :warning: **Deprecated**
* [~~GetSystemTemplate~~](#getsystemtemplate) - Gets a system. :warning: **Deprecated**
* [~~GetSystemTemplateRevisions~~](#getsystemtemplaterevisions) - Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted. :warning: **Deprecated**
* [~~GetUploadStatus~~](#getuploadstatus) - Gets the status of the specified upload. :warning: **Deprecated**
* [~~ListFlowExecutionMessages~~](#listflowexecutionmessages) - Returns a list of objects that contain information about events in a flow execution. :warning: **Deprecated**
* [~~ListTagsForResource~~](#listtagsforresource) - Lists all tags on an AWS IoT Things Graph resource. :warning: **Deprecated**
* [~~SearchEntities~~](#searchentities) - Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking. :warning: **Deprecated**
* [~~SearchFlowExecutions~~](#searchflowexecutions) - Searches for AWS IoT Things Graph workflow execution instances. :warning: **Deprecated**
* [~~SearchFlowTemplates~~](#searchflowtemplates) - Searches for summary information about workflows. :warning: **Deprecated**
* [~~SearchSystemInstances~~](#searchsysteminstances) - Searches for system instances in the user's account. :warning: **Deprecated**
* [~~SearchSystemTemplates~~](#searchsystemtemplates) - Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow. :warning: **Deprecated**
* [~~SearchThings~~](#searchthings) - <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p> :warning: **Deprecated**
* [~~TagResource~~](#tagresource) - Creates a tag for the specified resource. :warning: **Deprecated**
* [~~UndeploySystemInstance~~](#undeploysysteminstance) - Removes a system instance from its target (Cloud or Greengrass). :warning: **Deprecated**
* [~~UntagResource~~](#untagresource) - Removes a tag from the specified resource. :warning: **Deprecated**
* [~~UpdateFlowTemplate~~](#updateflowtemplate) - Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.  :warning: **Deprecated**
* [~~UpdateSystemTemplate~~](#updatesystemtemplate) - Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed. :warning: **Deprecated**
* [~~UploadEntityDefinitions~~](#uploadentitydefinitions) - <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p> :warning: **Deprecated**

## ~~AssociateEntityToThing~~

<p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateEntityToThing(ctx, operations.AssociateEntityToThingRequest{
        AssociateEntityToThingRequest: shared.AssociateEntityToThingRequest{
            EntityID: "deserunt",
            NamespaceVersion: sdk.Int64(384382),
            ThingName: "iure",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AssociateEntityToThingXAmzTargetEnumIotThingsGraphFrontEndServiceAssociateEntityToThing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntityToThingResponse != nil {
        // handle response
    }
}
```

## ~~CreateFlowTemplate~~

Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFlowTemplate(ctx, operations.CreateFlowTemplateRequest{
        CreateFlowTemplateRequest: shared.CreateFlowTemplateRequest{
            CompatibleNamespaceVersion: sdk.Int64(791725),
            Definition: shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "placeat",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.CreateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceCreateFlowTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFlowTemplateResponse != nil {
        // handle response
    }
}
```

## ~~CreateSystemInstance~~

<p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSystemInstance(ctx, operations.CreateSystemInstanceRequest{
        CreateSystemInstanceRequest: shared.CreateSystemInstanceRequest{
            Definition: shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "quis",
            },
            FlowActionsRoleArn: sdk.String("veritatis"),
            GreengrassGroupName: sdk.String("deserunt"),
            MetricsConfiguration: &shared.MetricsConfiguration{
                CloudMetricEnabled: sdk.Bool(false),
                MetricRuleRoleArn: sdk.String("perferendis"),
            },
            S3BucketName: sdk.String("ipsam"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sapiente",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "odit",
                    Value: "at",
                },
                shared.Tag{
                    Key: "at",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "quod",
                },
            },
            Target: shared.DeploymentTargetEnumCloud,
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.CreateSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceCreateSystemInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSystemInstanceResponse != nil {
        // handle response
    }
}
```

## ~~CreateSystemTemplate~~

Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSystemTemplate(ctx, operations.CreateSystemTemplateRequest{
        CreateSystemTemplateRequest: shared.CreateSystemTemplateRequest{
            CompatibleNamespaceVersion: sdk.Int64(582020),
            Definition: shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "fugit",
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceCreateSystemTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSystemTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeleteFlowTemplate~~

Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFlowTemplate(ctx, operations.DeleteFlowTemplateRequest{
        DeleteFlowTemplateRequest: shared.DeleteFlowTemplateRequest{
            ID: "42cb7392-0592-4939-afea-7596eb10faaa",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DeleteFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteFlowTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFlowTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeleteNamespace~~

Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no request parameters.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNamespace(ctx, operations.DeleteNamespaceRequest{
        RequestBody: map[string]interface{}{
            "minima": "excepturi",
            "accusantium": "iure",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DeleteNamespaceXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNamespaceResponse != nil {
        // handle response
    }
}
```

## ~~DeleteSystemInstance~~

<p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSystemInstance(ctx, operations.DeleteSystemInstanceRequest{
        DeleteSystemInstanceRequest: shared.DeleteSystemInstanceRequest{
            ID: sdk.String("2fa94677-3925-41aa-92c3-f5ad019da1ff"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DeleteSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteSystemInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSystemInstanceResponse != nil {
        // handle response
    }
}
```

## ~~DeleteSystemTemplate~~

Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSystemTemplate(ctx, operations.DeleteSystemTemplateRequest{
        DeleteSystemTemplateRequest: shared.DeleteSystemTemplateRequest{
            ID: "b0074f15-471b-45e6-a13b-99d488e1e91e",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteSystemTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSystemTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeploySystemInstance~~

<p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeploySystemInstance(ctx, operations.DeploySystemInstanceRequest{
        DeploySystemInstanceRequest: shared.DeploySystemInstanceRequest{
            ID: sdk.String("bd442698-02d5-402a-94bb-4f63c969e9a3"),
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeploySystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceDeploySystemInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeploySystemInstanceResponse != nil {
        // handle response
    }
}
```

## ~~DeprecateFlowTemplate~~

Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeprecateFlowTemplate(ctx, operations.DeprecateFlowTemplateRequest{
        DeprecateFlowTemplateRequest: shared.DeprecateFlowTemplateRequest{
            ID: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DeprecateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeprecateFlowTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeprecateFlowTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DeprecateSystemTemplate~~

Deprecates the specified system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeprecateSystemTemplate(ctx, operations.DeprecateSystemTemplateRequest{
        DeprecateSystemTemplateRequest: shared.DeprecateSystemTemplateRequest{
            ID: "6e214195-9890-4afa-963e-2516fe4c8b71",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.DeprecateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeprecateSystemTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeprecateSystemTemplateResponse != nil {
        // handle response
    }
}
```

## ~~DescribeNamespace~~

Gets the latest version of the user's namespace and the public version that it is tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeNamespace(ctx, operations.DescribeNamespaceRequest{
        DescribeNamespaceRequest: shared.DescribeNamespaceRequest{
            NamespaceName: sdk.String("sed"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DescribeNamespaceXAmzTargetEnumIotThingsGraphFrontEndServiceDescribeNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNamespaceResponse != nil {
        // handle response
    }
}
```

## ~~DissociateEntityFromThing~~

Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DissociateEntityFromThing(ctx, operations.DissociateEntityFromThingRequest{
        DissociateEntityFromThingRequest: shared.DissociateEntityFromThingRequest{
            EntityType: shared.EntityTypeEnumService,
            ThingName: "quo",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DissociateEntityFromThingXAmzTargetEnumIotThingsGraphFrontEndServiceDissociateEntityFromThing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DissociateEntityFromThingResponse != nil {
        // handle response
    }
}
```

## ~~GetEntities~~

<p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEntities(ctx, operations.GetEntitiesRequest{
        GetEntitiesRequest: shared.GetEntitiesRequest{
            Ids: []string{
                "ab",
            },
            NamespaceVersion: sdk.Int64(982575),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.GetEntitiesXAmzTargetEnumIotThingsGraphFrontEndServiceGetEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitiesResponse != nil {
        // handle response
    }
}
```

## ~~GetFlowTemplate~~

Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFlowTemplate(ctx, operations.GetFlowTemplateRequest{
        GetFlowTemplateRequest: shared.GetFlowTemplateRequest{
            ID: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
            RevisionNumber: sdk.Int64(31838),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.GetFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceGetFlowTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFlowTemplateResponse != nil {
        // handle response
    }
}
```

## ~~GetFlowTemplateRevisions~~

Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFlowTemplateRevisions(ctx, operations.GetFlowTemplateRevisionsRequest{
        GetFlowTemplateRevisionsRequest: shared.GetFlowTemplateRevisionsRequest{
            ID: "3fe49a8d-9cbf-4486-b332-3f9b77f3a410",
            MaxResults: sdk.Int64(56418),
            NextToken: sdk.String("iure"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.GetFlowTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetFlowTemplateRevisions,
        MaxResults: sdk.String("eos"),
        NextToken: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFlowTemplateRevisionsResponse != nil {
        // handle response
    }
}
```

## ~~GetNamespaceDeletionStatus~~

Gets the status of a namespace deletion task.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetNamespaceDeletionStatus(ctx, operations.GetNamespaceDeletionStatusRequest{
        RequestBody: map[string]interface{}{
            "fugiat": "ab",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetNamespaceDeletionStatusXAmzTargetEnumIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceDeletionStatusResponse != nil {
        // handle response
    }
}
```

## ~~GetSystemInstance~~

Gets a system instance.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSystemInstance(ctx, operations.GetSystemInstanceRequest{
        GetSystemInstanceRequest: shared.GetSystemInstanceRequest{
            ID: "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.GetSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSystemInstanceResponse != nil {
        // handle response
    }
}
```

## ~~GetSystemTemplate~~

Gets a system.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSystemTemplate(ctx, operations.GetSystemTemplateRequest{
        GetSystemTemplateRequest: shared.GetSystemTemplateRequest{
            ID: "f3be453f-870b-4326-b5a7-3429cdb1a842",
            RevisionNumber: sdk.Int64(174909),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.GetSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSystemTemplateResponse != nil {
        // handle response
    }
}
```

## ~~GetSystemTemplateRevisions~~

Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSystemTemplateRevisions(ctx, operations.GetSystemTemplateRevisionsRequest{
        GetSystemTemplateRevisionsRequest: shared.GetSystemTemplateRevisionsRequest{
            ID: "322715bf-0cbb-41e3-9b8b-90f3443a1108",
            MaxResults: sdk.Int64(929530),
            NextToken: sdk.String("consequatur"),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.GetSystemTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplateRevisions,
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSystemTemplateRevisionsResponse != nil {
        // handle response
    }
}
```

## ~~GetUploadStatus~~

Gets the status of the specified upload.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUploadStatus(ctx, operations.GetUploadStatusRequest{
        GetUploadStatusRequest: shared.GetUploadStatusRequest{
            UploadID: "laudantium",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.GetUploadStatusXAmzTargetEnumIotThingsGraphFrontEndServiceGetUploadStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUploadStatusResponse != nil {
        // handle response
    }
}
```

## ~~ListFlowExecutionMessages~~

Returns a list of objects that contain information about events in a flow execution.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFlowExecutionMessages(ctx, operations.ListFlowExecutionMessagesRequest{
        ListFlowExecutionMessagesRequest: shared.ListFlowExecutionMessagesRequest{
            FlowExecutionID: "ipsum",
            MaxResults: sdk.Int64(961571),
            NextToken: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.ListFlowExecutionMessagesXAmzTargetEnumIotThingsGraphFrontEndServiceListFlowExecutionMessages,
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlowExecutionMessagesResponse != nil {
        // handle response
    }
}
```

## ~~ListTagsForResource~~

Lists all tags on an AWS IoT Things Graph resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            MaxResults: sdk.Int64(708548),
            NextToken: sdk.String("vero"),
            ResourceArn: "ducimus",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumIotThingsGraphFrontEndServiceListTagsForResource,
        MaxResults: sdk.String("voluptatibus"),
        NextToken: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ~~SearchEntities~~

Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchEntities(ctx, operations.SearchEntitiesRequest{
        SearchEntitiesRequest: shared.SearchEntitiesRequest{
            EntityTypes: []shared.EntityTypeEnum{
                shared.EntityTypeEnumService,
                shared.EntityTypeEnumProperty,
                shared.EntityTypeEnumEnum,
                shared.EntityTypeEnumEnum,
            },
            Filters: []shared.EntityFilter{
                shared.EntityFilter{
                    Name: shared.EntityFilterNameEnumReferencedEntityID.ToPointer(),
                    Value: []string{
                        "alias",
                        "officia",
                    },
                },
                shared.EntityFilter{
                    Name: shared.EntityFilterNameEnumNamespace.ToPointer(),
                    Value: []string{
                        "ea",
                        "aspernatur",
                    },
                },
            },
            MaxResults: sdk.Int64(428224),
            NamespaceVersion: sdk.Int64(822118),
            NextToken: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.SearchEntitiesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchEntities,
        MaxResults: sdk.String("ex"),
        NextToken: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchEntitiesResponse != nil {
        // handle response
    }
}
```

## ~~SearchFlowExecutions~~

Searches for AWS IoT Things Graph workflow execution instances.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchFlowExecutions(ctx, operations.SearchFlowExecutionsRequest{
        SearchFlowExecutionsRequest: shared.SearchFlowExecutionsRequest{
            EndTime: types.MustTimeFromString("2021-01-20T18:27:01.887Z"),
            FlowExecutionID: sdk.String("nostrum"),
            MaxResults: sdk.Int64(960835),
            NextToken: sdk.String("quisquam"),
            StartTime: types.MustTimeFromString("2021-10-07T13:07:57.949Z"),
            SystemInstanceID: "impedit",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.SearchFlowExecutionsXAmzTargetEnumIotThingsGraphFrontEndServiceSearchFlowExecutions,
        MaxResults: sdk.String("consectetur"),
        NextToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchFlowExecutionsResponse != nil {
        // handle response
    }
}
```

## ~~SearchFlowTemplates~~

Searches for summary information about workflows.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchFlowTemplates(ctx, operations.SearchFlowTemplatesRequest{
        SearchFlowTemplatesRequest: shared.SearchFlowTemplatesRequest{
            Filters: []shared.FlowTemplateFilter{
                shared.FlowTemplateFilter{
                    Name: shared.FlowTemplateFilterNameEnumDeviceModelID,
                    Value: []string{
                        "eaque",
                        "a",
                    },
                },
            },
            MaxResults: sdk.Int64(725595),
            NextToken: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.SearchFlowTemplatesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchFlowTemplates,
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchFlowTemplatesResponse != nil {
        // handle response
    }
}
```

## ~~SearchSystemInstances~~

Searches for system instances in the user's account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchSystemInstances(ctx, operations.SearchSystemInstancesRequest{
        SearchSystemInstancesRequest: shared.SearchSystemInstancesRequest{
            Filters: []shared.SystemInstanceFilter{
                shared.SystemInstanceFilter{
                    Name: shared.SystemInstanceFilterNameEnumGreengrassGroupName.ToPointer(),
                    Value: []string{
                        "velit",
                        "eum",
                        "autem",
                        "nobis",
                    },
                },
                shared.SystemInstanceFilter{
                    Name: shared.SystemInstanceFilterNameEnumStatus.ToPointer(),
                    Value: []string{
                        "nulla",
                        "voluptas",
                        "libero",
                        "quasi",
                    },
                },
                shared.SystemInstanceFilter{
                    Name: shared.SystemInstanceFilterNameEnumSystemTemplateID.ToPointer(),
                    Value: []string{
                        "explicabo",
                        "provident",
                    },
                },
            },
            MaxResults: sdk.Int64(55374),
            NextToken: sdk.String("molestiae"),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.SearchSystemInstancesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchSystemInstances,
        MaxResults: sdk.String("reprehenderit"),
        NextToken: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchSystemInstancesResponse != nil {
        // handle response
    }
}
```

## ~~SearchSystemTemplates~~

Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchSystemTemplates(ctx, operations.SearchSystemTemplatesRequest{
        SearchSystemTemplatesRequest: shared.SearchSystemTemplatesRequest{
            Filters: []shared.SystemTemplateFilter{
                shared.SystemTemplateFilter{
                    Name: shared.SystemTemplateFilterNameEnumFlowTemplateID,
                    Value: []string{
                        "eum",
                        "suscipit",
                    },
                },
                shared.SystemTemplateFilter{
                    Name: shared.SystemTemplateFilterNameEnumFlowTemplateID,
                    Value: []string{
                        "eos",
                        "praesentium",
                        "quisquam",
                        "veritatis",
                    },
                },
                shared.SystemTemplateFilter{
                    Name: shared.SystemTemplateFilterNameEnumFlowTemplateID,
                    Value: []string{
                        "id",
                    },
                },
                shared.SystemTemplateFilter{
                    Name: shared.SystemTemplateFilterNameEnumFlowTemplateID,
                    Value: []string{
                        "neque",
                        "quo",
                        "illum",
                    },
                },
            },
            MaxResults: sdk.Int64(777408),
            NextToken: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.SearchSystemTemplatesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchSystemTemplates,
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchSystemTemplatesResponse != nil {
        // handle response
    }
}
```

## ~~SearchThings~~

<p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchThings(ctx, operations.SearchThingsRequest{
        SearchThingsRequest: shared.SearchThingsRequest{
            EntityID: "aspernatur",
            MaxResults: sdk.Int64(197054),
            NamespaceVersion: sdk.Int64(779192),
            NextToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.SearchThingsXAmzTargetEnumIotThingsGraphFrontEndServiceSearchThings,
        MaxResults: sdk.String("totam"),
        NextToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchThingsResponse != nil {
        // handle response
    }
}
```

## ~~TagResource~~

Creates a tag for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "aliquam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "occaecati",
                    Value: "commodi",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "dolores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumIotThingsGraphFrontEndServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## ~~UndeploySystemInstance~~

Removes a system instance from its target (Cloud or Greengrass).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UndeploySystemInstance(ctx, operations.UndeploySystemInstanceRequest{
        UndeploySystemInstanceRequest: shared.UndeploySystemInstanceRequest{
            ID: sdk.String("282aa482-562f-4222-a981-7ee17cbe61e6"),
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.UndeploySystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceUndeploySystemInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UndeploySystemInstanceResponse != nil {
        // handle response
    }
}
```

## ~~UntagResource~~

Removes a tag from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "sit",
            TagKeys: []string{
                "tempore",
                "adipisci",
                "cumque",
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumIotThingsGraphFrontEndServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## ~~UpdateFlowTemplate~~

Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFlowTemplate(ctx, operations.UpdateFlowTemplateRequest{
        UpdateFlowTemplateRequest: shared.UpdateFlowTemplateRequest{
            CompatibleNamespaceVersion: sdk.Int64(503427),
            Definition: shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "provident",
            },
            ID: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.UpdateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceUpdateFlowTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFlowTemplateResponse != nil {
        // handle response
    }
}
```

## ~~UpdateSystemTemplate~~

Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSystemTemplate(ctx, operations.UpdateSystemTemplateRequest{
        UpdateSystemTemplateRequest: shared.UpdateSystemTemplateRequest{
            CompatibleNamespaceVersion: sdk.Int64(531849),
            Definition: shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "qui",
            },
            ID: "d68ea19f-1d17-4051-b39d-08086a184039",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceUpdateSystemTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSystemTemplateResponse != nil {
        // handle response
    }
}
```

## ~~UploadEntityDefinitions~~

<p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UploadEntityDefinitions(ctx, operations.UploadEntityDefinitionsRequest{
        UploadEntityDefinitionsRequest: shared.UploadEntityDefinitionsRequest{
            DeprecateExistingEntities: sdk.Bool(false),
            Document: &shared.DefinitionDocument{
                Language: shared.DefinitionLanguageEnumGraphql,
                Text: "maiores",
            },
            SyncWithPublicNamespace: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.UploadEntityDefinitionsXAmzTargetEnumIotThingsGraphFrontEndServiceUploadEntityDefinitions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadEntityDefinitionsResponse != nil {
        // handle response
    }
}
```

# SDK

## Overview

<fullname>Amazon AppStream 2.0</fullname> <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p> <note> <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p> </note> <p>To learn more about AppStream 2.0, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appstream2/>
### Available Operations

* [AssociateApplicationFleet](#associateapplicationfleet) - Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
* [AssociateApplicationToEntitlement](#associateapplicationtoentitlement) - Associates an application to entitle.
* [AssociateFleet](#associatefleet) - Associates the specified fleet with the specified stack.
* [BatchAssociateUserStack](#batchassociateuserstack) - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* [BatchDisassociateUserStack](#batchdisassociateuserstack) - Disassociates the specified users from the specified stacks.
* [CopyImage](#copyimage) - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* [CreateAppBlock](#createappblock) - <p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
* [CreateApplication](#createapplication) - <p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>
* [CreateDirectoryConfig](#createdirectoryconfig) - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [CreateEntitlement](#createentitlement) - Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
* [CreateFleet](#createfleet) - Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
* [CreateImageBuilder](#createimagebuilder) - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* [CreateImageBuilderStreamingURL](#createimagebuilderstreamingurl) - Creates a URL to start an image builder streaming session.
* [CreateStack](#createstack) - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* [CreateStreamingURL](#createstreamingurl) - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* [CreateUpdatedImage](#createupdatedimage) - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [CreateUsageReportSubscription](#createusagereportsubscription) - Creates a usage report subscription. Usage reports are generated daily.
* [CreateUser](#createuser) - Creates a new user in the user pool.
* [DeleteAppBlock](#deleteappblock) - Deletes an app block.
* [DeleteApplication](#deleteapplication) - Deletes an application.
* [DeleteDirectoryConfig](#deletedirectoryconfig) - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* [DeleteEntitlement](#deleteentitlement) - Deletes the specified entitlement.
* [DeleteFleet](#deletefleet) - Deletes the specified fleet.
* [DeleteImage](#deleteimage) - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* [DeleteImageBuilder](#deleteimagebuilder) - Deletes the specified image builder and releases the capacity.
* [DeleteImagePermissions](#deleteimagepermissions) - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* [DeleteStack](#deletestack) - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* [DeleteUsageReportSubscription](#deleteusagereportsubscription) - Disables usage report generation.
* [DeleteUser](#deleteuser) - Deletes a user from the user pool.
* [DescribeAppBlocks](#describeappblocks) - Retrieves a list that describes one or more app blocks.
* [DescribeApplicationFleetAssociations](#describeapplicationfleetassociations) - Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
* [DescribeApplications](#describeapplications) - Retrieves a list that describes one or more applications.
* [DescribeDirectoryConfigs](#describedirectoryconfigs) - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* [DescribeEntitlements](#describeentitlements) - Retrieves a list that describes one of more entitlements.
* [DescribeFleets](#describefleets) - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* [DescribeImageBuilders](#describeimagebuilders) - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* [DescribeImagePermissions](#describeimagepermissions) - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* [DescribeImages](#describeimages) - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* [DescribeSessions](#describesessions) - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* [DescribeStacks](#describestacks) - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* [DescribeUsageReportSubscriptions](#describeusagereportsubscriptions) - Retrieves a list that describes one or more usage report subscriptions.
* [DescribeUserStackAssociations](#describeuserstackassociations) - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* [DescribeUsers](#describeusers) - Retrieves a list that describes one or more specified users in the user pool.
* [DisableUser](#disableuser) - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* [DisassociateApplicationFleet](#disassociateapplicationfleet) - Disassociates the specified application from the fleet.
* [DisassociateApplicationFromEntitlement](#disassociateapplicationfromentitlement) - Deletes the specified application from the specified entitlement.
* [DisassociateFleet](#disassociatefleet) - Disassociates the specified fleet from the specified stack.
* [EnableUser](#enableuser) - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* [ExpireSession](#expiresession) - Immediately stops the specified streaming session.
* [ListAssociatedFleets](#listassociatedfleets) - Retrieves the name of the fleet that is associated with the specified stack.
* [ListAssociatedStacks](#listassociatedstacks) - Retrieves the name of the stack with which the specified fleet is associated.
* [ListEntitledApplications](#listentitledapplications) - Retrieves a list of entitled applications.
* [ListTagsForResource](#listtagsforresource) - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [StartFleet](#startfleet) - Starts the specified fleet.
* [StartImageBuilder](#startimagebuilder) - Starts the specified image builder.
* [StopFleet](#stopfleet) - Stops the specified fleet.
* [StopImageBuilder](#stopimagebuilder) - Stops the specified image builder.
* [TagResource](#tagresource) - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [UntagResource](#untagresource) - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [UpdateApplication](#updateapplication) - Updates the specified application.
* [UpdateDirectoryConfig](#updatedirectoryconfig) - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [UpdateEntitlement](#updateentitlement) - Updates the specified entitlement.
* [UpdateFleet](#updatefleet) - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
* [UpdateImagePermissions](#updateimagepermissions) - Adds or updates permissions for the specified private image. 
* [UpdateStack](#updatestack) - Updates the specified fields for the specified stack.

## AssociateApplicationFleet

Associates the specified application with the specified fleet. This is only supported for Elastic fleets.

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
    res, err := s.SDK.AssociateApplicationFleet(ctx, operations.AssociateApplicationFleetRequest{
        AssociateApplicationFleetRequest: shared.AssociateApplicationFleetRequest{
            ApplicationArn: "error",
            FleetName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AssociateApplicationFleetXAmzTargetEnumPhotonAdminProxyServiceAssociateApplicationFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateApplicationFleetResult != nil {
        // handle response
    }
}
```

## AssociateApplicationToEntitlement

Associates an application to entitle.

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
    res, err := s.SDK.AssociateApplicationToEntitlement(ctx, operations.AssociateApplicationToEntitlementRequest{
        AssociateApplicationToEntitlementRequest: shared.AssociateApplicationToEntitlementRequest{
            ApplicationIdentifier: "suscipit",
            EntitlementName: "molestiae",
            StackName: "minus",
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.AssociateApplicationToEntitlementXAmzTargetEnumPhotonAdminProxyServiceAssociateApplicationToEntitlement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateApplicationToEntitlementResult != nil {
        // handle response
    }
}
```

## AssociateFleet

Associates the specified fleet with the specified stack.

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
    res, err := s.SDK.AssociateFleet(ctx, operations.AssociateFleetRequest{
        AssociateFleetRequest: shared.AssociateFleetRequest{
            FleetName: "ab",
            StackName: "quis",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.AssociateFleetXAmzTargetEnumPhotonAdminProxyServiceAssociateFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFleetResult != nil {
        // handle response
    }
}
```

## BatchAssociateUserStack

Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.

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
    res, err := s.SDK.BatchAssociateUserStack(ctx, operations.BatchAssociateUserStackRequest{
        BatchAssociateUserStackRequest: shared.BatchAssociateUserStackRequest{
            UserStackAssociations: []shared.UserStackAssociation{
                shared.UserStackAssociation{
                    AuthenticationType: shared.AuthenticationTypeEnumAwsAd,
                    SendEmailNotification: sdk.Bool(false),
                    StackName: "at",
                    UserName: "maiores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.BatchAssociateUserStackXAmzTargetEnumPhotonAdminProxyServiceBatchAssociateUserStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateUserStackResult != nil {
        // handle response
    }
}
```

## BatchDisassociateUserStack

Disassociates the specified users from the specified stacks.

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
    res, err := s.SDK.BatchDisassociateUserStack(ctx, operations.BatchDisassociateUserStackRequest{
        BatchDisassociateUserStackRequest: shared.BatchDisassociateUserStackRequest{
            UserStackAssociations: []shared.UserStackAssociation{
                shared.UserStackAssociation{
                    AuthenticationType: shared.AuthenticationTypeEnumUserpool,
                    SendEmailNotification: sdk.Bool(false),
                    StackName: "officia",
                    UserName: "occaecati",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.BatchDisassociateUserStackXAmzTargetEnumPhotonAdminProxyServiceBatchDisassociateUserStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateUserStackResult != nil {
        // handle response
    }
}
```

## CopyImage

Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.

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
    res, err := s.SDK.CopyImage(ctx, operations.CopyImageRequest{
        CopyImageRequest: shared.CopyImageRequest{
            DestinationImageDescription: sdk.String("molestiae"),
            DestinationImageName: "modi",
            DestinationRegion: "qui",
            SourceImageName: "impedit",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.CopyImageXAmzTargetEnumPhotonAdminProxyServiceCopyImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyImageResponse != nil {
        // handle response
    }
}
```

## CreateAppBlock

<p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>

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
    res, err := s.SDK.CreateAppBlock(ctx, operations.CreateAppBlockRequest{
        CreateAppBlockRequest: shared.CreateAppBlockRequest{
            Description: sdk.String("natus"),
            DisplayName: sdk.String("sed"),
            Name: "Curtis Morissette",
            SetupScriptDetails: shared.ScriptDetails{
                ExecutableParameters: sdk.String("saepe"),
                ExecutablePath: "fuga",
                ScriptS3Location: shared.S3Location{
                    S3Bucket: "in",
                    S3Key: "corporis",
                },
                TimeoutInSeconds: 613064,
            },
            SourceS3Location: shared.S3Location{
                S3Bucket: "iure",
                S3Key: "saepe",
            },
            Tags: map[string]string{
                "architecto": "ipsa",
                "reiciendis": "est",
                "mollitia": "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.CreateAppBlockXAmzTargetEnumPhotonAdminProxyServiceCreateAppBlock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppBlockResult != nil {
        // handle response
    }
}
```

## CreateApplication

<p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            AppBlockArn: "nemo",
            Description: sdk.String("minima"),
            DisplayName: sdk.String("excepturi"),
            IconS3Location: shared.S3Location{
                S3Bucket: "accusantium",
                S3Key: "iure",
            },
            InstanceFamilies: []string{
                "doloribus",
                "sapiente",
                "architecto",
            },
            LaunchParameters: sdk.String("mollitia"),
            LaunchPath: "dolorem",
            Name: "Carlos Ziemann",
            Platforms: []shared.PlatformTypeEnum{
                shared.PlatformTypeEnumWindowsServer2016,
                shared.PlatformTypeEnumWindowsServer2016,
            },
            Tags: map[string]string{
                "velit": "error",
                "quia": "quis",
            },
            WorkingDirectory: sdk.String("vitae"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumPhotonAdminProxyServiceCreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResult != nil {
        // handle response
    }
}
```

## CreateDirectoryConfig

Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

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
    res, err := s.SDK.CreateDirectoryConfig(ctx, operations.CreateDirectoryConfigRequest{
        CreateDirectoryConfigRequest: shared.CreateDirectoryConfigRequest{
            CertificateBasedAuthProperties: &shared.CertificateBasedAuthProperties{
                CertificateAuthorityArn: sdk.String("ipsam"),
                Status: shared.CertificateBasedAuthStatusEnumEnabled.ToPointer(),
            },
            DirectoryName: "possimus",
            OrganizationalUnitDistinguishedNames: []string{
                "quasi",
            },
            ServiceAccountCredentials: &shared.ServiceAccountCredentials{
                AccountName: "error",
                AccountPassword: "temporibus",
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceCreateDirectoryConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectoryConfigResult != nil {
        // handle response
    }
}
```

## CreateEntitlement

Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

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
    res, err := s.SDK.CreateEntitlement(ctx, operations.CreateEntitlementRequest{
        CreateEntitlementRequest: shared.CreateEntitlementRequest{
            AppVisibility: shared.AppVisibilityEnumAssociated,
            Attributes: []shared.EntitlementAttribute{
                shared.EntitlementAttribute{
                    Name: "Mr. Jared Ritchie",
                    Value: "ut",
                },
            },
            Description: sdk.String("maiores"),
            Name: "Stacy Gulgowski MD",
            StackName: "enim",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.CreateEntitlementXAmzTargetEnumPhotonAdminProxyServiceCreateEntitlement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEntitlementResult != nil {
        // handle response
    }
}
```

## CreateFleet

Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.

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
    res, err := s.SDK.CreateFleet(ctx, operations.CreateFleetRequest{
        CreateFleetRequest: shared.CreateFleetRequest{
            ComputeCapacity: &shared.ComputeCapacity{
                DesiredInstances: 566602,
            },
            Description: sdk.String("pariatur"),
            DisconnectTimeoutInSeconds: sdk.Int64(265389),
            DisplayName: sdk.String("praesentium"),
            DomainJoinInfo: &shared.DomainJoinInfo{
                DirectoryName: sdk.String("rem"),
                OrganizationalUnitDistinguishedName: sdk.String("voluptates"),
            },
            EnableDefaultInternetAccess: sdk.Bool(false),
            FleetType: shared.FleetTypeEnumAlwaysOn.ToPointer(),
            IamRoleArn: sdk.String("repudiandae"),
            IdleDisconnectTimeoutInSeconds: sdk.Int64(575947),
            ImageArn: sdk.String("veritatis"),
            ImageName: sdk.String("itaque"),
            InstanceType: "incidunt",
            MaxConcurrentSessions: sdk.Int64(318569),
            MaxUserDurationInSeconds: sdk.Int64(9356),
            Name: "Taylor Cole",
            Platform: shared.PlatformTypeEnumAmazonLinux2.ToPointer(),
            SessionScriptS3Location: &shared.S3Location{
                S3Bucket: "labore",
                S3Key: "modi",
            },
            StreamView: shared.StreamViewEnumApp.ToPointer(),
            Tags: map[string]string{
                "cupiditate": "quos",
                "perferendis": "magni",
            },
            UsbDeviceFilterStrings: []string{
                "ipsam",
                "alias",
                "fugit",
                "dolorum",
            },
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "tempora",
                    "facilis",
                    "tempore",
                },
                SubnetIds: []string{
                    "delectus",
                    "eum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.CreateFleetXAmzTargetEnumPhotonAdminProxyServiceCreateFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetResult != nil {
        // handle response
    }
}
```

## CreateImageBuilder

<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>

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
    res, err := s.SDK.CreateImageBuilder(ctx, operations.CreateImageBuilderRequest{
        CreateImageBuilderRequest: shared.CreateImageBuilderRequest{
            AccessEndpoints: []shared.AccessEndpoint{
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("dolor"),
                },
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("debitis"),
                },
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("a"),
                },
            },
            AppstreamAgentVersion: sdk.String("dolorum"),
            Description: sdk.String("in"),
            DisplayName: sdk.String("in"),
            DomainJoinInfo: &shared.DomainJoinInfo{
                DirectoryName: sdk.String("illum"),
                OrganizationalUnitDistinguishedName: sdk.String("maiores"),
            },
            EnableDefaultInternetAccess: sdk.Bool(false),
            IamRoleArn: sdk.String("rerum"),
            ImageArn: sdk.String("dicta"),
            ImageName: sdk.String("magnam"),
            InstanceType: "cumque",
            Name: "Nathaniel Hyatt",
            Tags: map[string]string{
                "occaecati": "enim",
            },
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "delectus",
                    "quidem",
                    "provident",
                    "nam",
                },
                SubnetIds: []string{
                    "blanditiis",
                    "deleniti",
                    "sapiente",
                },
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateImageBuilderXAmzTargetEnumPhotonAdminProxyServiceCreateImageBuilder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageBuilderResult != nil {
        // handle response
    }
}
```

## CreateImageBuilderStreamingURL

Creates a URL to start an image builder streaming session.

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
    res, err := s.SDK.CreateImageBuilderStreamingURL(ctx, operations.CreateImageBuilderStreamingURLRequest{
        CreateImageBuilderStreamingURLRequest: shared.CreateImageBuilderStreamingURLRequest{
            Name: "Marcia Gutkowski",
            Validity: sdk.Int64(287991),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.CreateImageBuilderStreamingURLXAmzTargetEnumPhotonAdminProxyServiceCreateImageBuilderStreamingURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImageBuilderStreamingURLResult != nil {
        // handle response
    }
}
```

## CreateStack

Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 

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
    res, err := s.SDK.CreateStack(ctx, operations.CreateStackRequest{
        CreateStackRequest: shared.CreateStackRequest{
            AccessEndpoints: []shared.AccessEndpoint{
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("magnam"),
                },
            },
            ApplicationSettings: &shared.ApplicationSettings{
                Enabled: false,
                SettingsGroup: sdk.String("et"),
            },
            Description: sdk.String("excepturi"),
            DisplayName: sdk.String("ullam"),
            EmbedHostDomains: []string{
                "quos",
                "sint",
                "accusantium",
            },
            FeedbackURL: sdk.String("mollitia"),
            Name: "Shaun Hammes",
            RedirectURL: sdk.String("necessitatibus"),
            StorageConnectors: []shared.StorageConnector{
                shared.StorageConnector{
                    ConnectorType: shared.StorageConnectorTypeEnumGoogleDrive,
                    Domains: []string{
                        "iure",
                    },
                    ResourceIdentifier: sdk.String("doloribus"),
                },
            },
            StreamingExperienceSettings: &shared.StreamingExperienceSettings{
                PreferredProtocol: shared.PreferredProtocolEnumUDP.ToPointer(),
            },
            Tags: map[string]string{
                "maxime": "deleniti",
                "facilis": "in",
            },
            UserSettings: []shared.UserSetting{
                shared.UserSetting{
                    Action: shared.ActionEnumClipboardCopyFromLocalDevice,
                    Permission: shared.PermissionEnumDisabled,
                },
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateStackXAmzTargetEnumPhotonAdminProxyServiceCreateStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStackResult != nil {
        // handle response
    }
}
```

## CreateStreamingURL

Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 

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
    res, err := s.SDK.CreateStreamingURL(ctx, operations.CreateStreamingURLRequest{
        CreateStreamingURLRequest: shared.CreateStreamingURLRequest{
            ApplicationID: sdk.String("pariatur"),
            FleetName: "accusantium",
            SessionContext: sdk.String("consequuntur"),
            StackName: "praesentium",
            UserID: "natus",
            Validity: sdk.Int64(166847),
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateStreamingURLXAmzTargetEnumPhotonAdminProxyServiceCreateStreamingURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamingURLResult != nil {
        // handle response
    }
}
```

## CreateUpdatedImage

<p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
    res, err := s.SDK.CreateUpdatedImage(ctx, operations.CreateUpdatedImageRequest{
        CreateUpdatedImageRequest: shared.CreateUpdatedImageRequest{
            DryRun: sdk.Bool(false),
            ExistingImageName: "odit",
            NewImageDescription: sdk.String("ea"),
            NewImageDisplayName: sdk.String("accusantium"),
            NewImageName: "ab",
            NewImageTags: map[string]string{
                "quidem": "ipsam",
                "voluptate": "autem",
                "nam": "eaque",
                "pariatur": "nemo",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateUpdatedImageXAmzTargetEnumPhotonAdminProxyServiceCreateUpdatedImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUpdatedImageResult != nil {
        // handle response
    }
}
```

## CreateUsageReportSubscription

Creates a usage report subscription. Usage reports are generated daily.

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
    res, err := s.SDK.CreateUsageReportSubscription(ctx, operations.CreateUsageReportSubscriptionRequest{
        RequestBody: map[string]interface{}{
            "libero": "nobis",
            "dolores": "quis",
            "totam": "dignissimos",
            "eaque": "quis",
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.CreateUsageReportSubscriptionXAmzTargetEnumPhotonAdminProxyServiceCreateUsageReportSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageReportSubscriptionResult != nil {
        // handle response
    }
}
```

## CreateUser

Creates a new user in the user pool.

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
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            AuthenticationType: shared.AuthenticationTypeEnumAwsAd,
            FirstName: sdk.String("nostrum"),
            LastName: sdk.String("hic"),
            MessageAction: shared.MessageActionEnumResend.ToPointer(),
            UserName: "omnis",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateUserXAmzTargetEnumPhotonAdminProxyServiceCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResult != nil {
        // handle response
    }
}
```

## DeleteAppBlock

Deletes an app block.

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
    res, err := s.SDK.DeleteAppBlock(ctx, operations.DeleteAppBlockRequest{
        DeleteAppBlockRequest: shared.DeleteAppBlockRequest{
            Name: "Violet Price",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteAppBlockXAmzTargetEnumPhotonAdminProxyServiceDeleteAppBlock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppBlockResult != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes an application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        DeleteApplicationRequest: shared.DeleteApplicationRequest{
            Name: "Randolph Wintheiser",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DeleteApplicationXAmzTargetEnumPhotonAdminProxyServiceDeleteApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResult != nil {
        // handle response
    }
}
```

## DeleteDirectoryConfig

Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.

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
    res, err := s.SDK.DeleteDirectoryConfig(ctx, operations.DeleteDirectoryConfigRequest{
        DeleteDirectoryConfigRequest: shared.DeleteDirectoryConfigRequest{
            DirectoryName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DeleteDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceDeleteDirectoryConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectoryConfigResult != nil {
        // handle response
    }
}
```

## DeleteEntitlement

Deletes the specified entitlement.

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
    res, err := s.SDK.DeleteEntitlement(ctx, operations.DeleteEntitlementRequest{
        DeleteEntitlementRequest: shared.DeleteEntitlementRequest{
            Name: "Melissa Bednar",
            StackName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.DeleteEntitlementXAmzTargetEnumPhotonAdminProxyServiceDeleteEntitlement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEntitlementResult != nil {
        // handle response
    }
}
```

## DeleteFleet

Deletes the specified fleet.

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
    res, err := s.SDK.DeleteFleet(ctx, operations.DeleteFleetRequest{
        DeleteFleetRequest: shared.DeleteFleetRequest{
            Name: "Ginger Bergstrom",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteFleetXAmzTargetEnumPhotonAdminProxyServiceDeleteFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFleetResult != nil {
        // handle response
    }
}
```

## DeleteImage

Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.

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
    res, err := s.SDK.DeleteImage(ctx, operations.DeleteImageRequest{
        DeleteImageRequest: shared.DeleteImageRequest{
            Name: "Jessie Emmerich",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeleteImageXAmzTargetEnumPhotonAdminProxyServiceDeleteImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageResult != nil {
        // handle response
    }
}
```

## DeleteImageBuilder

Deletes the specified image builder and releases the capacity.

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
    res, err := s.SDK.DeleteImageBuilder(ctx, operations.DeleteImageBuilderRequest{
        DeleteImageBuilderRequest: shared.DeleteImageBuilderRequest{
            Name: "Jenna Hoppe",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DeleteImageBuilderXAmzTargetEnumPhotonAdminProxyServiceDeleteImageBuilder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImageBuilderResult != nil {
        // handle response
    }
}
```

## DeleteImagePermissions

Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.

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
    res, err := s.SDK.DeleteImagePermissions(ctx, operations.DeleteImagePermissionsRequest{
        DeleteImagePermissionsRequest: shared.DeleteImagePermissionsRequest{
            Name: "Gina Schmeler",
            SharedAccountID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DeleteImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceDeleteImagePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImagePermissionsResult != nil {
        // handle response
    }
}
```

## DeleteStack

Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.

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
    res, err := s.SDK.DeleteStack(ctx, operations.DeleteStackRequest{
        DeleteStackRequest: shared.DeleteStackRequest{
            Name: "Kelli Thompson",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DeleteStackXAmzTargetEnumPhotonAdminProxyServiceDeleteStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStackResult != nil {
        // handle response
    }
}
```

## DeleteUsageReportSubscription

Disables usage report generation.

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
    res, err := s.SDK.DeleteUsageReportSubscription(ctx, operations.DeleteUsageReportSubscriptionRequest{
        RequestBody: map[string]interface{}{
            "vel": "libero",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.DeleteUsageReportSubscriptionXAmzTargetEnumPhotonAdminProxyServiceDeleteUsageReportSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUsageReportSubscriptionResult != nil {
        // handle response
    }
}
```

## DeleteUser

Deletes a user from the user pool.

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
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            AuthenticationType: shared.AuthenticationTypeEnumAwsAd,
            UserName: "pariatur",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumPhotonAdminProxyServiceDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserResult != nil {
        // handle response
    }
}
```

## DescribeAppBlocks

Retrieves a list that describes one or more app blocks.

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
    res, err := s.SDK.DescribeAppBlocks(ctx, operations.DescribeAppBlocksRequest{
        DescribeAppBlocksRequest: shared.DescribeAppBlocksRequest{
            Arns: []string{
                "facilis",
                "aliquid",
                "quam",
            },
            MaxResults: sdk.Int64(565421),
            NextToken: sdk.String("temporibus"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.DescribeAppBlocksXAmzTargetEnumPhotonAdminProxyServiceDescribeAppBlocks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAppBlocksResult != nil {
        // handle response
    }
}
```

## DescribeApplicationFleetAssociations

Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.

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
    res, err := s.SDK.DescribeApplicationFleetAssociations(ctx, operations.DescribeApplicationFleetAssociationsRequest{
        DescribeApplicationFleetAssociationsRequest: shared.DescribeApplicationFleetAssociationsRequest{
            ApplicationArn: sdk.String("nam"),
            FleetName: sdk.String("hic"),
            MaxResults: sdk.Int64(30452),
            NextToken: sdk.String("cumque"),
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeApplicationFleetAssociationsXAmzTargetEnumPhotonAdminProxyServiceDescribeApplicationFleetAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationFleetAssociationsResult != nil {
        // handle response
    }
}
```

## DescribeApplications

Retrieves a list that describes one or more applications.

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
    res, err := s.SDK.DescribeApplications(ctx, operations.DescribeApplicationsRequest{
        DescribeApplicationsRequest: shared.DescribeApplicationsRequest{
            Arns: []string{
                "tempore",
                "cupiditate",
                "aperiam",
            },
            MaxResults: sdk.Int64(961937),
            NextToken: sdk.String("dolorem"),
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeApplicationsXAmzTargetEnumPhotonAdminProxyServiceDescribeApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationsResult != nil {
        // handle response
    }
}
```

## DescribeDirectoryConfigs

<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>

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
    res, err := s.SDK.DescribeDirectoryConfigs(ctx, operations.DescribeDirectoryConfigsRequest{
        DescribeDirectoryConfigsRequest: shared.DescribeDirectoryConfigsRequest{
            DirectoryNames: []string{
                "itaque",
                "consequatur",
                "est",
            },
            MaxResults: sdk.Int64(833038),
            NextToken: sdk.String("porro"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.DescribeDirectoryConfigsXAmzTargetEnumPhotonAdminProxyServiceDescribeDirectoryConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectoryConfigsResult != nil {
        // handle response
    }
}
```

## DescribeEntitlements

Retrieves a list that describes one of more entitlements.

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
    res, err := s.SDK.DescribeEntitlements(ctx, operations.DescribeEntitlementsRequest{
        DescribeEntitlementsRequest: shared.DescribeEntitlementsRequest{
            MaxResults: sdk.Int64(485628),
            Name: sdk.String("Jan Schaefer"),
            NextToken: sdk.String("quis"),
            StackName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DescribeEntitlementsXAmzTargetEnumPhotonAdminProxyServiceDescribeEntitlements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitlementsResult != nil {
        // handle response
    }
}
```

## DescribeFleets

Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.

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
    res, err := s.SDK.DescribeFleets(ctx, operations.DescribeFleetsRequest{
        DescribeFleetsRequest: shared.DescribeFleetsRequest{
            Names: []string{
                "quod",
                "odio",
                "similique",
            },
            NextToken: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeFleetsXAmzTargetEnumPhotonAdminProxyServiceDescribeFleets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetsResult != nil {
        // handle response
    }
}
```

## DescribeImageBuilders

Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.

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
    res, err := s.SDK.DescribeImageBuilders(ctx, operations.DescribeImageBuildersRequest{
        DescribeImageBuildersRequest: shared.DescribeImageBuildersRequest{
            MaxResults: sdk.Int64(773326),
            Names: []string{
                "voluptatibus",
            },
            NextToken: sdk.String("exercitationem"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.DescribeImageBuildersXAmzTargetEnumPhotonAdminProxyServiceDescribeImageBuilders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageBuildersResult != nil {
        // handle response
    }
}
```

## DescribeImagePermissions

Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 

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
    res, err := s.SDK.DescribeImagePermissions(ctx, operations.DescribeImagePermissionsRequest{
        DescribeImagePermissionsRequest: shared.DescribeImagePermissionsRequest{
            MaxResults: sdk.Int64(497391),
            Name: "Brandi Glover",
            NextToken: sdk.String("aspernatur"),
            SharedAwsAccountIds: []string{
                "possimus",
                "magnam",
            },
        },
        MaxResults: sdk.String("ratione"),
        NextToken: sdk.String("ex"),
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.DescribeImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceDescribeImagePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImagePermissionsResult != nil {
        // handle response
    }
}
```

## DescribeImages

Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.

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
    res, err := s.SDK.DescribeImages(ctx, operations.DescribeImagesRequest{
        DescribeImagesRequest: shared.DescribeImagesRequest{
            Arns: []string{
                "voluptatibus",
                "nostrum",
                "sapiente",
            },
            MaxResults: sdk.Int64(788873),
            Names: []string{
                "ea",
                "impedit",
                "corporis",
                "veniam",
            },
            NextToken: sdk.String("aliquid"),
            Type: shared.VisibilityTypeEnumPublic.ToPointer(),
        },
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("ea"),
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.DescribeImagesXAmzTargetEnumPhotonAdminProxyServiceDescribeImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImagesResult != nil {
        // handle response
    }
}
```

## DescribeSessions

Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.

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
    res, err := s.SDK.DescribeSessions(ctx, operations.DescribeSessionsRequest{
        DescribeSessionsRequest: shared.DescribeSessionsRequest{
            AuthenticationType: shared.AuthenticationTypeEnumUserpool.ToPointer(),
            FleetName: "aut",
            Limit: sdk.Int64(11427),
            NextToken: sdk.String("deleniti"),
            StackName: "impedit",
            UserID: sdk.String("aliquam"),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DescribeSessionsXAmzTargetEnumPhotonAdminProxyServiceDescribeSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSessionsResult != nil {
        // handle response
    }
}
```

## DescribeStacks

Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.

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
    res, err := s.SDK.DescribeStacks(ctx, operations.DescribeStacksRequest{
        DescribeStacksRequest: shared.DescribeStacksRequest{
            Names: []string{
                "velit",
                "eum",
                "autem",
                "nobis",
            },
            NextToken: sdk.String("quas"),
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DescribeStacksXAmzTargetEnumPhotonAdminProxyServiceDescribeStacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStacksResult != nil {
        // handle response
    }
}
```

## DescribeUsageReportSubscriptions

Retrieves a list that describes one or more usage report subscriptions.

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
    res, err := s.SDK.DescribeUsageReportSubscriptions(ctx, operations.DescribeUsageReportSubscriptionsRequest{
        DescribeUsageReportSubscriptionsRequest: shared.DescribeUsageReportSubscriptionsRequest{
            MaxResults: sdk.Int64(131482),
            NextToken: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DescribeUsageReportSubscriptionsXAmzTargetEnumPhotonAdminProxyServiceDescribeUsageReportSubscriptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUsageReportSubscriptionsResult != nil {
        // handle response
    }
}
```

## DescribeUserStackAssociations

<p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>

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
    res, err := s.SDK.DescribeUserStackAssociations(ctx, operations.DescribeUserStackAssociationsRequest{
        DescribeUserStackAssociationsRequest: shared.DescribeUserStackAssociationsRequest{
            AuthenticationType: shared.AuthenticationTypeEnumUserpool.ToPointer(),
            MaxResults: sdk.Int64(683282),
            NextToken: sdk.String("reprehenderit"),
            StackName: sdk.String("quidem"),
            UserName: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.DescribeUserStackAssociationsXAmzTargetEnumPhotonAdminProxyServiceDescribeUserStackAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserStackAssociationsResult != nil {
        // handle response
    }
}
```

## DescribeUsers

Retrieves a list that describes one or more specified users in the user pool.

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
    res, err := s.SDK.DescribeUsers(ctx, operations.DescribeUsersRequest{
        DescribeUsersRequest: shared.DescribeUsersRequest{
            AuthenticationType: shared.AuthenticationTypeEnumAPI,
            MaxResults: sdk.Int64(56848),
            NextToken: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.DescribeUsersXAmzTargetEnumPhotonAdminProxyServiceDescribeUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUsersResult != nil {
        // handle response
    }
}
```

## DisableUser

Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 

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
    res, err := s.SDK.DisableUser(ctx, operations.DisableUserRequest{
        DisableUserRequest: shared.DisableUserRequest{
            AuthenticationType: shared.AuthenticationTypeEnumAPI,
            UserName: "voluptas",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DisableUserXAmzTargetEnumPhotonAdminProxyServiceDisableUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableUserResult != nil {
        // handle response
    }
}
```

## DisassociateApplicationFleet

Disassociates the specified application from the fleet.

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
    res, err := s.SDK.DisassociateApplicationFleet(ctx, operations.DisassociateApplicationFleetRequest{
        DisassociateApplicationFleetRequest: shared.DisassociateApplicationFleetRequest{
            ApplicationArn: "sequi",
            FleetName: "quo",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.DisassociateApplicationFleetXAmzTargetEnumPhotonAdminProxyServiceDisassociateApplicationFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateApplicationFleetResult != nil {
        // handle response
    }
}
```

## DisassociateApplicationFromEntitlement

Deletes the specified application from the specified entitlement.

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
    res, err := s.SDK.DisassociateApplicationFromEntitlement(ctx, operations.DisassociateApplicationFromEntitlementRequest{
        DisassociateApplicationFromEntitlementRequest: shared.DisassociateApplicationFromEntitlementRequest{
            ApplicationIdentifier: "nihil",
            EntitlementName: "totam",
            StackName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DisassociateApplicationFromEntitlementXAmzTargetEnumPhotonAdminProxyServiceDisassociateApplicationFromEntitlement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateApplicationFromEntitlementResult != nil {
        // handle response
    }
}
```

## DisassociateFleet

Disassociates the specified fleet from the specified stack.

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
    res, err := s.SDK.DisassociateFleet(ctx, operations.DisassociateFleetRequest{
        DisassociateFleetRequest: shared.DisassociateFleetRequest{
            FleetName: "molestiae",
            StackName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DisassociateFleetXAmzTargetEnumPhotonAdminProxyServiceDisassociateFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFleetResult != nil {
        // handle response
    }
}
```

## EnableUser

Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.

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
    res, err := s.SDK.EnableUser(ctx, operations.EnableUserRequest{
        EnableUserRequest: shared.EnableUserRequest{
            AuthenticationType: shared.AuthenticationTypeEnumUserpool,
            UserName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.EnableUserXAmzTargetEnumPhotonAdminProxyServiceEnableUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableUserResult != nil {
        // handle response
    }
}
```

## ExpireSession

Immediately stops the specified streaming session.

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
    res, err := s.SDK.ExpireSession(ctx, operations.ExpireSessionRequest{
        ExpireSessionRequest: shared.ExpireSessionRequest{
            SessionID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ExpireSessionXAmzTargetEnumPhotonAdminProxyServiceExpireSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpireSessionResult != nil {
        // handle response
    }
}
```

## ListAssociatedFleets

Retrieves the name of the fleet that is associated with the specified stack.

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
    res, err := s.SDK.ListAssociatedFleets(ctx, operations.ListAssociatedFleetsRequest{
        ListAssociatedFleetsRequest: shared.ListAssociatedFleetsRequest{
            NextToken: sdk.String("eveniet"),
            StackName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListAssociatedFleetsXAmzTargetEnumPhotonAdminProxyServiceListAssociatedFleets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedFleetsResult != nil {
        // handle response
    }
}
```

## ListAssociatedStacks

Retrieves the name of the stack with which the specified fleet is associated.

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
    res, err := s.SDK.ListAssociatedStacks(ctx, operations.ListAssociatedStacksRequest{
        ListAssociatedStacksRequest: shared.ListAssociatedStacksRequest{
            FleetName: "saepe",
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.ListAssociatedStacksXAmzTargetEnumPhotonAdminProxyServiceListAssociatedStacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociatedStacksResult != nil {
        // handle response
    }
}
```

## ListEntitledApplications

Retrieves a list of entitled applications.

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
    res, err := s.SDK.ListEntitledApplications(ctx, operations.ListEntitledApplicationsRequest{
        ListEntitledApplicationsRequest: shared.ListEntitledApplicationsRequest{
            EntitlementName: "sit",
            MaxResults: sdk.Int64(636061),
            NextToken: sdk.String("tempore"),
            StackName: "adipisci",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.ListEntitledApplicationsXAmzTargetEnumPhotonAdminProxyServiceListEntitledApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitledApplicationsResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
            ResourceArn: "esse",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumPhotonAdminProxyServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartFleet

Starts the specified fleet.

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
    res, err := s.SDK.StartFleet(ctx, operations.StartFleetRequest{
        StartFleetRequest: shared.StartFleetRequest{
            Name: "Jeremiah Mayer",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.StartFleetXAmzTargetEnumPhotonAdminProxyServiceStartFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFleetResult != nil {
        // handle response
    }
}
```

## StartImageBuilder

Starts the specified image builder.

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
    res, err := s.SDK.StartImageBuilder(ctx, operations.StartImageBuilderRequest{
        StartImageBuilderRequest: shared.StartImageBuilderRequest{
            AppstreamAgentVersion: sdk.String("similique"),
            Name: "Dr. Gene Wiegand",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.StartImageBuilderXAmzTargetEnumPhotonAdminProxyServiceStartImageBuilder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImageBuilderResult != nil {
        // handle response
    }
}
```

## StopFleet

Stops the specified fleet.

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
    res, err := s.SDK.StopFleet(ctx, operations.StopFleetRequest{
        StopFleetRequest: shared.StopFleetRequest{
            Name: "Samuel Hermiston",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.StopFleetXAmzTargetEnumPhotonAdminProxyServiceStopFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopFleetResult != nil {
        // handle response
    }
}
```

## StopImageBuilder

Stops the specified image builder.

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
    res, err := s.SDK.StopImageBuilder(ctx, operations.StopImageBuilderRequest{
        StopImageBuilderRequest: shared.StopImageBuilderRequest{
            Name: "Wilbur Bradtke",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.StopImageBuilderXAmzTargetEnumPhotonAdminProxyServiceStopImageBuilder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopImageBuilderResult != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
            ResourceArn: "consectetur",
            Tags: map[string]string{
                "iste": "temporibus",
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumPhotonAdminProxyServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
            ResourceArn: "corrupti",
            TagKeys: []string{
                "voluptatem",
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumPhotonAdminProxyServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApplication

Updates the specified application.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        UpdateApplicationRequest: shared.UpdateApplicationRequest{
            AppBlockArn: sdk.String("dicta"),
            AttributesToDelete: []shared.ApplicationAttributeEnum{
                shared.ApplicationAttributeEnumWorkingDirectory,
                shared.ApplicationAttributeEnumLaunchParameters,
                shared.ApplicationAttributeEnumWorkingDirectory,
                shared.ApplicationAttributeEnumLaunchParameters,
            },
            Description: sdk.String("asperiores"),
            DisplayName: sdk.String("aperiam"),
            IconS3Location: &shared.S3Location{
                S3Bucket: "ea",
                S3Key: "quaerat",
            },
            LaunchParameters: sdk.String("consequuntur"),
            LaunchPath: sdk.String("repellendus"),
            Name: "Simon Kuhn",
            WorkingDirectory: sdk.String("nemo"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumPhotonAdminProxyServiceUpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResult != nil {
        // handle response
    }
}
```

## UpdateDirectoryConfig

Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

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
    res, err := s.SDK.UpdateDirectoryConfig(ctx, operations.UpdateDirectoryConfigRequest{
        UpdateDirectoryConfigRequest: shared.UpdateDirectoryConfigRequest{
            CertificateBasedAuthProperties: &shared.CertificateBasedAuthProperties{
                CertificateAuthorityArn: sdk.String("fuga"),
                Status: shared.CertificateBasedAuthStatusEnumEnabled.ToPointer(),
            },
            DirectoryName: "suscipit",
            OrganizationalUnitDistinguishedNames: []string{
                "culpa",
            },
            ServiceAccountCredentials: &shared.ServiceAccountCredentials{
                AccountName: "est",
                AccountPassword: "recusandae",
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.UpdateDirectoryConfigXAmzTargetEnumPhotonAdminProxyServiceUpdateDirectoryConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDirectoryConfigResult != nil {
        // handle response
    }
}
```

## UpdateEntitlement

Updates the specified entitlement.

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
    res, err := s.SDK.UpdateEntitlement(ctx, operations.UpdateEntitlementRequest{
        UpdateEntitlementRequest: shared.UpdateEntitlementRequest{
            AppVisibility: shared.AppVisibilityEnumAssociated.ToPointer(),
            Attributes: []shared.EntitlementAttribute{
                shared.EntitlementAttribute{
                    Name: "Leslie King",
                    Value: "assumenda",
                },
                shared.EntitlementAttribute{
                    Name: "Miss Sophie Jacobi",
                    Value: "in",
                },
                shared.EntitlementAttribute{
                    Name: "Lila Schultz",
                    Value: "suscipit",
                },
            },
            Description: sdk.String("reiciendis"),
            Name: "Bert Treutel DVM",
            StackName: "adipisci",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.UpdateEntitlementXAmzTargetEnumPhotonAdminProxyServiceUpdateEntitlement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEntitlementResult != nil {
        // handle response
    }
}
```

## UpdateFleet

<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>

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
    res, err := s.SDK.UpdateFleet(ctx, operations.UpdateFleetRequest{
        UpdateFleetRequest: shared.UpdateFleetRequest{
            AttributesToDelete: []shared.FleetAttributeEnum{
                shared.FleetAttributeEnumUsbDeviceFilterStrings,
                shared.FleetAttributeEnumDomainJoinInfo,
            },
            ComputeCapacity: &shared.ComputeCapacity{
                DesiredInstances: 58356,
            },
            DeleteVpcConfig: sdk.Bool(false),
            Description: sdk.String("voluptates"),
            DisconnectTimeoutInSeconds: sdk.Int64(730709),
            DisplayName: sdk.String("vitae"),
            DomainJoinInfo: &shared.DomainJoinInfo{
                DirectoryName: sdk.String("accusamus"),
                OrganizationalUnitDistinguishedName: sdk.String("similique"),
            },
            EnableDefaultInternetAccess: sdk.Bool(false),
            IamRoleArn: sdk.String("tempora"),
            IdleDisconnectTimeoutInSeconds: sdk.Int64(132815),
            ImageArn: sdk.String("voluptas"),
            ImageName: sdk.String("voluptas"),
            InstanceType: sdk.String("voluptas"),
            MaxConcurrentSessions: sdk.Int64(324405),
            MaxUserDurationInSeconds: sdk.Int64(748789),
            Name: sdk.String("Travis Schinner"),
            Platform: shared.PlatformTypeEnumWindowsServer2016.ToPointer(),
            SessionScriptS3Location: &shared.S3Location{
                S3Bucket: "dolore",
                S3Key: "aliquam",
            },
            StreamView: shared.StreamViewEnumDesktop.ToPointer(),
            UsbDeviceFilterStrings: []string{
                "ullam",
                "adipisci",
                "cum",
                "blanditiis",
            },
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "hic",
                    "nesciunt",
                    "culpa",
                },
                SubnetIds: []string{
                    "pariatur",
                    "totam",
                    "hic",
                },
            },
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UpdateFleetXAmzTargetEnumPhotonAdminProxyServiceUpdateFleet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFleetResult != nil {
        // handle response
    }
}
```

## UpdateImagePermissions

Adds or updates permissions for the specified private image. 

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
    res, err := s.SDK.UpdateImagePermissions(ctx, operations.UpdateImagePermissionsRequest{
        UpdateImagePermissionsRequest: shared.UpdateImagePermissionsRequest{
            ImagePermissions: shared.ImagePermissions{
                AllowFleet: sdk.Bool(false),
                AllowImageBuilder: sdk.Bool(false),
            },
            Name: "Johnathan Klein V",
            SharedAccountID: "dolore",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.UpdateImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceUpdateImagePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImagePermissionsResult != nil {
        // handle response
    }
}
```

## UpdateStack

Updates the specified fields for the specified stack.

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
    res, err := s.SDK.UpdateStack(ctx, operations.UpdateStackRequest{
        UpdateStackRequest: shared.UpdateStackRequest{
            AccessEndpoints: []shared.AccessEndpoint{
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("architecto"),
                },
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("suscipit"),
                },
                shared.AccessEndpoint{
                    EndpointType: shared.AccessEndpointTypeEnumStreaming,
                    VpceID: sdk.String("sapiente"),
                },
            },
            ApplicationSettings: &shared.ApplicationSettings{
                Enabled: false,
                SettingsGroup: sdk.String("debitis"),
            },
            AttributesToDelete: []shared.StackAttributeEnum{
                shared.StackAttributeEnumStreamingExperienceSettings,
            },
            DeleteStorageConnectors: sdk.Bool(false),
            Description: sdk.String("perferendis"),
            DisplayName: sdk.String("corrupti"),
            EmbedHostDomains: []string{
                "incidunt",
                "sed",
                "provident",
                "eius",
            },
            FeedbackURL: sdk.String("necessitatibus"),
            Name: "Rosemary McClure",
            RedirectURL: sdk.String("tempora"),
            StorageConnectors: []shared.StorageConnector{
                shared.StorageConnector{
                    ConnectorType: shared.StorageConnectorTypeEnumGoogleDrive,
                    Domains: []string{
                        "ex",
                        "sit",
                        "non",
                        "officiis",
                    },
                    ResourceIdentifier: sdk.String("praesentium"),
                },
                shared.StorageConnector{
                    ConnectorType: shared.StorageConnectorTypeEnumOneDrive,
                    Domains: []string{
                        "incidunt",
                        "ipsam",
                    },
                    ResourceIdentifier: sdk.String("debitis"),
                },
            },
            StreamingExperienceSettings: &shared.StreamingExperienceSettings{
                PreferredProtocol: shared.PreferredProtocolEnumUDP.ToPointer(),
            },
            UserSettings: []shared.UserSetting{
                shared.UserSetting{
                    Action: shared.ActionEnumDomainPasswordSignin,
                    Permission: shared.PermissionEnumDisabled,
                },
            },
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.UpdateStackXAmzTargetEnumPhotonAdminProxyServiceUpdateStack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStackResult != nil {
        // handle response
    }
}
```

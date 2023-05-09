# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appstream/2016-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateApplicationFleet(ctx, operations.AssociateApplicationFleetRequest{
        AssociateApplicationFleetRequest: shared.AssociateApplicationFleetRequest{
            ApplicationArn: "corrupti",
            FleetName: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateApplicationFleet](docs/sdk/README.md#associateapplicationfleet) - Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
* [AssociateApplicationToEntitlement](docs/sdk/README.md#associateapplicationtoentitlement) - Associates an application to entitle.
* [AssociateFleet](docs/sdk/README.md#associatefleet) - Associates the specified fleet with the specified stack.
* [BatchAssociateUserStack](docs/sdk/README.md#batchassociateuserstack) - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* [BatchDisassociateUserStack](docs/sdk/README.md#batchdisassociateuserstack) - Disassociates the specified users from the specified stacks.
* [CopyImage](docs/sdk/README.md#copyimage) - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* [CreateAppBlock](docs/sdk/README.md#createappblock) - <p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
* [CreateApplication](docs/sdk/README.md#createapplication) - <p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>
* [CreateDirectoryConfig](docs/sdk/README.md#createdirectoryconfig) - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [CreateEntitlement](docs/sdk/README.md#createentitlement) - Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
* [CreateFleet](docs/sdk/README.md#createfleet) - Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
* [CreateImageBuilder](docs/sdk/README.md#createimagebuilder) - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* [CreateImageBuilderStreamingURL](docs/sdk/README.md#createimagebuilderstreamingurl) - Creates a URL to start an image builder streaming session.
* [CreateStack](docs/sdk/README.md#createstack) - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* [CreateStreamingURL](docs/sdk/README.md#createstreamingurl) - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* [CreateUpdatedImage](docs/sdk/README.md#createupdatedimage) - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [CreateUsageReportSubscription](docs/sdk/README.md#createusagereportsubscription) - Creates a usage report subscription. Usage reports are generated daily.
* [CreateUser](docs/sdk/README.md#createuser) - Creates a new user in the user pool.
* [DeleteAppBlock](docs/sdk/README.md#deleteappblock) - Deletes an app block.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application.
* [DeleteDirectoryConfig](docs/sdk/README.md#deletedirectoryconfig) - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* [DeleteEntitlement](docs/sdk/README.md#deleteentitlement) - Deletes the specified entitlement.
* [DeleteFleet](docs/sdk/README.md#deletefleet) - Deletes the specified fleet.
* [DeleteImage](docs/sdk/README.md#deleteimage) - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* [DeleteImageBuilder](docs/sdk/README.md#deleteimagebuilder) - Deletes the specified image builder and releases the capacity.
* [DeleteImagePermissions](docs/sdk/README.md#deleteimagepermissions) - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* [DeleteStack](docs/sdk/README.md#deletestack) - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* [DeleteUsageReportSubscription](docs/sdk/README.md#deleteusagereportsubscription) - Disables usage report generation.
* [DeleteUser](docs/sdk/README.md#deleteuser) - Deletes a user from the user pool.
* [DescribeAppBlocks](docs/sdk/README.md#describeappblocks) - Retrieves a list that describes one or more app blocks.
* [DescribeApplicationFleetAssociations](docs/sdk/README.md#describeapplicationfleetassociations) - Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
* [DescribeApplications](docs/sdk/README.md#describeapplications) - Retrieves a list that describes one or more applications.
* [DescribeDirectoryConfigs](docs/sdk/README.md#describedirectoryconfigs) - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* [DescribeEntitlements](docs/sdk/README.md#describeentitlements) - Retrieves a list that describes one of more entitlements.
* [DescribeFleets](docs/sdk/README.md#describefleets) - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* [DescribeImageBuilders](docs/sdk/README.md#describeimagebuilders) - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* [DescribeImagePermissions](docs/sdk/README.md#describeimagepermissions) - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* [DescribeImages](docs/sdk/README.md#describeimages) - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* [DescribeSessions](docs/sdk/README.md#describesessions) - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* [DescribeStacks](docs/sdk/README.md#describestacks) - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* [DescribeUsageReportSubscriptions](docs/sdk/README.md#describeusagereportsubscriptions) - Retrieves a list that describes one or more usage report subscriptions.
* [DescribeUserStackAssociations](docs/sdk/README.md#describeuserstackassociations) - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* [DescribeUsers](docs/sdk/README.md#describeusers) - Retrieves a list that describes one or more specified users in the user pool.
* [DisableUser](docs/sdk/README.md#disableuser) - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* [DisassociateApplicationFleet](docs/sdk/README.md#disassociateapplicationfleet) - Disassociates the specified application from the fleet.
* [DisassociateApplicationFromEntitlement](docs/sdk/README.md#disassociateapplicationfromentitlement) - Deletes the specified application from the specified entitlement.
* [DisassociateFleet](docs/sdk/README.md#disassociatefleet) - Disassociates the specified fleet from the specified stack.
* [EnableUser](docs/sdk/README.md#enableuser) - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* [ExpireSession](docs/sdk/README.md#expiresession) - Immediately stops the specified streaming session.
* [ListAssociatedFleets](docs/sdk/README.md#listassociatedfleets) - Retrieves the name of the fleet that is associated with the specified stack.
* [ListAssociatedStacks](docs/sdk/README.md#listassociatedstacks) - Retrieves the name of the stack with which the specified fleet is associated.
* [ListEntitledApplications](docs/sdk/README.md#listentitledapplications) - Retrieves a list of entitled applications.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [StartFleet](docs/sdk/README.md#startfleet) - Starts the specified fleet.
* [StartImageBuilder](docs/sdk/README.md#startimagebuilder) - Starts the specified image builder.
* [StopFleet](docs/sdk/README.md#stopfleet) - Stops the specified fleet.
* [StopImageBuilder](docs/sdk/README.md#stopimagebuilder) - Stops the specified image builder.
* [TagResource](docs/sdk/README.md#tagresource) - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates the specified application.
* [UpdateDirectoryConfig](docs/sdk/README.md#updatedirectoryconfig) - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [UpdateEntitlement](docs/sdk/README.md#updateentitlement) - Updates the specified entitlement.
* [UpdateFleet](docs/sdk/README.md#updatefleet) - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
* [UpdateImagePermissions](docs/sdk/README.md#updateimagepermissions) - Adds or updates permissions for the specified private image. 
* [UpdateStack](docs/sdk/README.md#updatestack) - Updates the specified fields for the specified stack.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

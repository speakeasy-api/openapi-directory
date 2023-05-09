# SDK

## Overview

<fullname>Amazon AppStream 2.0</fullname> <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p> <note> <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p> </note> <p>To learn more about AppStream 2.0, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appstream2/>
### Available Operations

* [associateApplicationFleet](#associateapplicationfleet) - Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
* [associateApplicationToEntitlement](#associateapplicationtoentitlement) - Associates an application to entitle.
* [associateFleet](#associatefleet) - Associates the specified fleet with the specified stack.
* [batchAssociateUserStack](#batchassociateuserstack) - Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
* [batchDisassociateUserStack](#batchdisassociateuserstack) - Disassociates the specified users from the specified stacks.
* [copyImage](#copyimage) - Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
* [createAppBlock](#createappblock) - <p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
* [createApplication](#createapplication) - <p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>
* [createDirectoryConfig](#createdirectoryconfig) - Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [createEntitlement](#createentitlement) - Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
* [createFleet](#createfleet) - Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
* [createImageBuilder](#createimagebuilder) - <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
* [createImageBuilderStreamingURL](#createimagebuilderstreamingurl) - Creates a URL to start an image builder streaming session.
* [createStack](#createstack) - Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 
* [createStreamingURL](#createstreamingurl) - Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 
* [createUpdatedImage](#createupdatedimage) - <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [createUsageReportSubscription](#createusagereportsubscription) - Creates a usage report subscription. Usage reports are generated daily.
* [createUser](#createuser) - Creates a new user in the user pool.
* [deleteAppBlock](#deleteappblock) - Deletes an app block.
* [deleteApplication](#deleteapplication) - Deletes an application.
* [deleteDirectoryConfig](#deletedirectoryconfig) - Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
* [deleteEntitlement](#deleteentitlement) - Deletes the specified entitlement.
* [deleteFleet](#deletefleet) - Deletes the specified fleet.
* [deleteImage](#deleteimage) - Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
* [deleteImageBuilder](#deleteimagebuilder) - Deletes the specified image builder and releases the capacity.
* [deleteImagePermissions](#deleteimagepermissions) - Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
* [deleteStack](#deletestack) - Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
* [deleteUsageReportSubscription](#deleteusagereportsubscription) - Disables usage report generation.
* [deleteUser](#deleteuser) - Deletes a user from the user pool.
* [describeAppBlocks](#describeappblocks) - Retrieves a list that describes one or more app blocks.
* [describeApplicationFleetAssociations](#describeapplicationfleetassociations) - Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
* [describeApplications](#describeapplications) - Retrieves a list that describes one or more applications.
* [describeDirectoryConfigs](#describedirectoryconfigs) - <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
* [describeEntitlements](#describeentitlements) - Retrieves a list that describes one of more entitlements.
* [describeFleets](#describefleets) - Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
* [describeImageBuilders](#describeimagebuilders) - Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
* [describeImagePermissions](#describeimagepermissions) - Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 
* [describeImages](#describeimages) - Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
* [describeSessions](#describesessions) - Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
* [describeStacks](#describestacks) - Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
* [describeUsageReportSubscriptions](#describeusagereportsubscriptions) - Retrieves a list that describes one or more usage report subscriptions.
* [describeUserStackAssociations](#describeuserstackassociations) - <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
* [describeUsers](#describeusers) - Retrieves a list that describes one or more specified users in the user pool.
* [disableUser](#disableuser) - Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 
* [disassociateApplicationFleet](#disassociateapplicationfleet) - Disassociates the specified application from the fleet.
* [disassociateApplicationFromEntitlement](#disassociateapplicationfromentitlement) - Deletes the specified application from the specified entitlement.
* [disassociateFleet](#disassociatefleet) - Disassociates the specified fleet from the specified stack.
* [enableUser](#enableuser) - Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
* [expireSession](#expiresession) - Immediately stops the specified streaming session.
* [listAssociatedFleets](#listassociatedfleets) - Retrieves the name of the fleet that is associated with the specified stack.
* [listAssociatedStacks](#listassociatedstacks) - Retrieves the name of the stack with which the specified fleet is associated.
* [listEntitledApplications](#listentitledapplications) - Retrieves a list of entitled applications.
* [listTagsForResource](#listtagsforresource) - <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [startFleet](#startfleet) - Starts the specified fleet.
* [startImageBuilder](#startimagebuilder) - Starts the specified image builder.
* [stopFleet](#stopfleet) - Stops the specified fleet.
* [stopImageBuilder](#stopimagebuilder) - Stops the specified image builder.
* [tagResource](#tagresource) - <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [untagResource](#untagresource) - <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
* [updateApplication](#updateapplication) - Updates the specified application.
* [updateDirectoryConfig](#updatedirectoryconfig) - Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
* [updateEntitlement](#updateentitlement) - Updates the specified entitlement.
* [updateFleet](#updatefleet) - <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
* [updateImagePermissions](#updateimagepermissions) - Adds or updates permissions for the specified private image. 
* [updateStack](#updatestack) - Updates the specified fields for the specified stack.

## associateApplicationFleet

Associates the specified application with the specified fleet. This is only supported for Elastic fleets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.operations.AssociateApplicationFleetResponse;
import org.openapis.openapi.models.operations.AssociateApplicationFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateApplicationFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApplicationFleetRequest req = new AssociateApplicationFleetRequest(                new AssociateApplicationFleetRequest("suscipit", "iure");, AssociateApplicationFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_FLEET) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateApplicationFleetResponse res = sdk.sdk.associateApplicationFleet(req);

            if (res.associateApplicationFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateApplicationToEntitlement

Associates an application to entitle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApplicationToEntitlementRequest;
import org.openapis.openapi.models.operations.AssociateApplicationToEntitlementResponse;
import org.openapis.openapi.models.operations.AssociateApplicationToEntitlementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateApplicationToEntitlementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApplicationToEntitlementRequest req = new AssociateApplicationToEntitlementRequest(                new AssociateApplicationToEntitlementRequest("placeat", "voluptatum", "iusto");, AssociateApplicationToEntitlementXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_TO_ENTITLEMENT) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AssociateApplicationToEntitlementResponse res = sdk.sdk.associateApplicationToEntitlement(req);

            if (res.associateApplicationToEntitlementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateFleet

Associates the specified fleet with the specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFleetRequest;
import org.openapis.openapi.models.operations.AssociateFleetResponse;
import org.openapis.openapi.models.operations.AssociateFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFleetRequest req = new AssociateFleetRequest(                new AssociateFleetRequest("perferendis", "ipsam");, AssociateFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_FLEET) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            AssociateFleetResponse res = sdk.sdk.associateFleet(req);

            if (res.associateFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateUserStack

Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateUserStackRequest;
import org.openapis.openapi.models.operations.BatchAssociateUserStackResponse;
import org.openapis.openapi.models.operations.BatchAssociateUserStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.BatchAssociateUserStackRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserStackAssociation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateUserStackRequest req = new BatchAssociateUserStackRequest(                new BatchAssociateUserStackRequest(                new org.openapis.openapi.models.shared.UserStackAssociation[]{{
                                                add(new UserStackAssociation(AuthenticationTypeEnum.AWS_AD, "dolorum", "dicta") {{
                                                    authenticationType = AuthenticationTypeEnum.AWS_AD;
                                                    sendEmailNotification = false;
                                                    stackName = "esse";
                                                    userName = "totam";
                                                }}),
                                                add(new UserStackAssociation(AuthenticationTypeEnum.API, "deleniti", "hic") {{
                                                    authenticationType = AuthenticationTypeEnum.USERPOOL;
                                                    sendEmailNotification = false;
                                                    stackName = "officia";
                                                    userName = "occaecati";
                                                }}),
                                                add(new UserStackAssociation(AuthenticationTypeEnum.SAML, "molestiae", "modi") {{
                                                    authenticationType = AuthenticationTypeEnum.AWS_AD;
                                                    sendEmailNotification = false;
                                                    stackName = "totam";
                                                    userName = "beatae";
                                                }}),
                                                add(new UserStackAssociation(AuthenticationTypeEnum.SAML, "ipsum", "excepturi") {{
                                                    authenticationType = AuthenticationTypeEnum.API;
                                                    sendEmailNotification = false;
                                                    stackName = "impedit";
                                                    userName = "cum";
                                                }}),
                                            }});, BatchAssociateUserStackXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_BATCH_ASSOCIATE_USER_STACK) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            BatchAssociateUserStackResponse res = sdk.sdk.batchAssociateUserStack(req);

            if (res.batchAssociateUserStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateUserStack

Disassociates the specified users from the specified stacks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateUserStackRequest;
import org.openapis.openapi.models.operations.BatchDisassociateUserStackResponse;
import org.openapis.openapi.models.operations.BatchDisassociateUserStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.BatchDisassociateUserStackRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserStackAssociation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateUserStackRequest req = new BatchDisassociateUserStackRequest(                new BatchDisassociateUserStackRequest(                new org.openapis.openapi.models.shared.UserStackAssociation[]{{
                                                add(new UserStackAssociation(AuthenticationTypeEnum.SAML, "corporis", "iste") {{
                                                    authenticationType = AuthenticationTypeEnum.AWS_AD;
                                                    sendEmailNotification = false;
                                                    stackName = "saepe";
                                                    userName = "fuga";
                                                }}),
                                                add(new UserStackAssociation(AuthenticationTypeEnum.API, "ipsa", "reiciendis") {{
                                                    authenticationType = AuthenticationTypeEnum.SAML;
                                                    sendEmailNotification = false;
                                                    stackName = "saepe";
                                                    userName = "quidem";
                                                }}),
                                            }});, BatchDisassociateUserStackXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_BATCH_DISASSOCIATE_USER_STACK) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            BatchDisassociateUserStackResponse res = sdk.sdk.batchDisassociateUserStack(req);

            if (res.batchDisassociateUserStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyImage

Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyImageRequest;
import org.openapis.openapi.models.operations.CopyImageResponse;
import org.openapis.openapi.models.operations.CopyImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyImageRequest req = new CopyImageRequest(                new CopyImageRequest("enim", "omnis", "nemo") {{
                                destinationImageDescription = "minima";
                            }};, CopyImageXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_COPY_IMAGE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            CopyImageResponse res = sdk.sdk.copyImage(req);

            if (res.copyImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAppBlock

<p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppBlockRequest;
import org.openapis.openapi.models.operations.CreateAppBlockResponse;
import org.openapis.openapi.models.operations.CreateAppBlockXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAppBlockRequest;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.ScriptDetails;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppBlockRequest req = new CreateAppBlockRequest(                new CreateAppBlockRequest("dolorem",                 new ScriptDetails("culpa",                 new S3Location("consequuntur", "repellat");, 653108L) {{
                                                executableParameters = "occaecati";
                                            }};,                 new S3Location("numquam", "commodi");) {{
                                description = "quam";
                                displayName = "molestiae";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("error", "quia");
                                }};
                            }};, CreateAppBlockXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_APP_BLOCK) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            CreateAppBlockResponse res = sdk.sdk.createAppBlock(req);

            if (res.createAppBlockResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

<p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.PlatformTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest("tenetur",                 new S3Location("ipsam", "id");,                 new String[]{{
                                                add("aut"),
                                                add("quasi"),
                                                add("error"),
                                                add("temporibus"),
                                            }}, "laborum", "quasi",                 new org.openapis.openapi.models.shared.PlatformTypeEnum[]{{
                                                add(PlatformTypeEnum.AMAZON_LINUX2),
                                                add(PlatformTypeEnum.AMAZON_LINUX2),
                                                add(PlatformTypeEnum.WINDOWS_SERVER2016),
                                                add(PlatformTypeEnum.WINDOWS_SERVER2019),
                                            }}) {{
                                description = "voluptatibus";
                                displayName = "ipsa";
                                launchParameters = "omnis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("cum", "perferendis");
                                    put("doloremque", "reprehenderit");
                                }};
                                workingDirectory = "ut";
                            }};, CreateApplicationXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_APPLICATION) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectoryConfig

Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectoryConfigRequest;
import org.openapis.openapi.models.operations.CreateDirectoryConfigResponse;
import org.openapis.openapi.models.operations.CreateDirectoryConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateBasedAuthProperties;
import org.openapis.openapi.models.shared.CertificateBasedAuthStatusEnum;
import org.openapis.openapi.models.shared.CreateDirectoryConfigRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceAccountCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectoryConfigRequest req = new CreateDirectoryConfigRequest(                new CreateDirectoryConfigRequest("accusamus",                 new String[]{{
                                                add("repudiandae"),
                                                add("quae"),
                                            }}) {{
                                certificateBasedAuthProperties = new CertificateBasedAuthProperties() {{
                                    certificateAuthorityArn = "ipsum";
                                    status = CertificateBasedAuthStatusEnum.ENABLED_NO_DIRECTORY_LOGIN_FALLBACK;
                                }};;
                                serviceAccountCredentials = new ServiceAccountCredentials("molestias", "excepturi");;
                            }};, CreateDirectoryConfigXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_DIRECTORY_CONFIG) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateDirectoryConfigResponse res = sdk.sdk.createDirectoryConfig(req);

            if (res.createDirectoryConfigResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEntitlement

Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEntitlementRequest;
import org.openapis.openapi.models.operations.CreateEntitlementResponse;
import org.openapis.openapi.models.operations.CreateEntitlementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppVisibilityEnum;
import org.openapis.openapi.models.shared.CreateEntitlementRequest;
import org.openapis.openapi.models.shared.EntitlementAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEntitlementRequest req = new CreateEntitlementRequest(                new CreateEntitlementRequest(AppVisibilityEnum.ALL,                 new org.openapis.openapi.models.shared.EntitlementAttribute[]{{
                                                add(new EntitlementAttribute("deserunt", "distinctio") {{
                                                    name = "Erin Altenwerth";
                                                    value = "explicabo";
                                                }}),
                                                add(new EntitlementAttribute("quos", "perferendis") {{
                                                    name = "Francisco Gleason";
                                                    value = "cupiditate";
                                                }}),
                                                add(new EntitlementAttribute("tempora", "facilis") {{
                                                    name = "Mr. Nadine Hills";
                                                    value = "excepturi";
                                                }}),
                                                add(new EntitlementAttribute("sint", "aliquid") {{
                                                    name = "Francisco Windler";
                                                    value = "eligendi";
                                                }}),
                                            }}, "provident", "necessitatibus") {{
                                description = "sint";
                            }};, CreateEntitlementXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_ENTITLEMENT) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            CreateEntitlementResponse res = sdk.sdk.createEntitlement(req);

            if (res.createEntitlementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFleet

Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetRequest;
import org.openapis.openapi.models.operations.CreateFleetResponse;
import org.openapis.openapi.models.operations.CreateFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeCapacity;
import org.openapis.openapi.models.shared.CreateFleetRequest;
import org.openapis.openapi.models.shared.DomainJoinInfo;
import org.openapis.openapi.models.shared.FleetTypeEnum;
import org.openapis.openapi.models.shared.PlatformTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StreamViewEnum;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetRequest req = new CreateFleetRequest(                new CreateFleetRequest("maiores", "rerum") {{
                                computeCapacity = new ComputeCapacity(116202L);;
                                description = "magnam";
                                disconnectTimeoutInSeconds = 767024L;
                                displayName = "facere";
                                domainJoinInfo = new DomainJoinInfo() {{
                                    directoryName = "ea";
                                    organizationalUnitDistinguishedName = "aliquid";
                                }};;
                                enableDefaultInternetAccess = false;
                                fleetType = FleetTypeEnum.ELASTIC;
                                iamRoleArn = "accusamus";
                                idleDisconnectTimeoutInSeconds = 249796L;
                                imageArn = "occaecati";
                                imageName = "enim";
                                maxConcurrentSessions = 881736L;
                                maxUserDurationInSeconds = 965417L;
                                platform = PlatformTypeEnum.WINDOWS_SERVER2019;
                                sessionScriptS3Location = new S3Location("provident", "nam");;
                                streamView = StreamViewEnum.DESKTOP;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "sapiente");
                                    put("amet", "deserunt");
                                    put("nisi", "vel");
                                }};
                                usbDeviceFilterStrings = new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("perferendis"),
                                }};
                                vpcConfig = new VpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("magnam"),
                                        add("distinctio"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("labore"),
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                }};;
                            }};, CreateFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_FLEET) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateFleetResponse res = sdk.sdk.createFleet(req);

            if (res.createFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageBuilder

<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageBuilderRequest;
import org.openapis.openapi.models.operations.CreateImageBuilderResponse;
import org.openapis.openapi.models.operations.CreateImageBuilderXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessEndpoint;
import org.openapis.openapi.models.shared.AccessEndpointTypeEnum;
import org.openapis.openapi.models.shared.CreateImageBuilderRequest;
import org.openapis.openapi.models.shared.DomainJoinInfo;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageBuilderRequest req = new CreateImageBuilderRequest(                new CreateImageBuilderRequest("excepturi", "ullam") {{
                                accessEndpoints = new org.openapis.openapi.models.shared.AccessEndpoint[]{{
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "quos";
                                    }}),
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "sint";
                                    }}),
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "accusantium";
                                    }}),
                                }};
                                appstreamAgentVersion = "mollitia";
                                description = "reiciendis";
                                displayName = "mollitia";
                                domainJoinInfo = new DomainJoinInfo() {{
                                    directoryName = "ad";
                                    organizationalUnitDistinguishedName = "eum";
                                }};;
                                enableDefaultInternetAccess = false;
                                iamRoleArn = "dolor";
                                imageArn = "necessitatibus";
                                imageName = "odit";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quasi", "iure");
                                    put("doloribus", "debitis");
                                }};
                                vpcConfig = new VpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("maxime"),
                                        add("deleniti"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("in"),
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                }};;
                            }};, CreateImageBuilderXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_IMAGE_BUILDER) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            CreateImageBuilderResponse res = sdk.sdk.createImageBuilder(req);

            if (res.createImageBuilderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImageBuilderStreamingURL

Creates a URL to start an image builder streaming session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImageBuilderStreamingURLRequest;
import org.openapis.openapi.models.operations.CreateImageBuilderStreamingURLResponse;
import org.openapis.openapi.models.operations.CreateImageBuilderStreamingURLXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateImageBuilderStreamingURLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImageBuilderStreamingURLRequest req = new CreateImageBuilderStreamingURLRequest(                new CreateImageBuilderStreamingURLRequest("pariatur") {{
                                validity = 37559L;
                            }};, CreateImageBuilderStreamingURLXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_IMAGE_BUILDER_STREAMING_URL) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            CreateImageBuilderStreamingURLResponse res = sdk.sdk.createImageBuilderStreamingURL(req);

            if (res.createImageBuilderStreamingURLResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStack

Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStackRequest;
import org.openapis.openapi.models.operations.CreateStackResponse;
import org.openapis.openapi.models.operations.CreateStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessEndpoint;
import org.openapis.openapi.models.shared.AccessEndpointTypeEnum;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.ApplicationSettings;
import org.openapis.openapi.models.shared.CreateStackRequest;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.PreferredProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StorageConnector;
import org.openapis.openapi.models.shared.StorageConnectorTypeEnum;
import org.openapis.openapi.models.shared.StreamingExperienceSettings;
import org.openapis.openapi.models.shared.UserSetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStackRequest req = new CreateStackRequest(                new CreateStackRequest("maxime") {{
                                accessEndpoints = new org.openapis.openapi.models.shared.AccessEndpoint[]{{
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "excepturi";
                                    }}),
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "odit";
                                    }}),
                                }};
                                applicationSettings = new ApplicationSettings(false) {{
                                    settingsGroup = "ea";
                                }};;
                                description = "accusantium";
                                displayName = "ab";
                                embedHostDomains = new String[]{{
                                    add("quidem"),
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                feedbackURL = "nam";
                                redirectURL = "eaque";
                                storageConnectors = new org.openapis.openapi.models.shared.StorageConnector[]{{
                                    add(new StorageConnector(StorageConnectorTypeEnum.GOOGLE_DRIVE) {{
                                        connectorType = StorageConnectorTypeEnum.GOOGLE_DRIVE;
                                        domains = new String[]{{
                                            add("perferendis"),
                                            add("fugiat"),
                                            add("amet"),
                                            add("aut"),
                                        }};
                                        resourceIdentifier = "cumque";
                                    }}),
                                    add(new StorageConnector(StorageConnectorTypeEnum.GOOGLE_DRIVE) {{
                                        connectorType = StorageConnectorTypeEnum.ONE_DRIVE;
                                        domains = new String[]{{
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                        resourceIdentifier = "totam";
                                    }}),
                                    add(new StorageConnector(StorageConnectorTypeEnum.HOMEFOLDERS) {{
                                        connectorType = StorageConnectorTypeEnum.HOMEFOLDERS;
                                        domains = new String[]{{
                                            add("nesciunt"),
                                            add("eos"),
                                        }};
                                        resourceIdentifier = "perferendis";
                                    }}),
                                    add(new StorageConnector(StorageConnectorTypeEnum.ONE_DRIVE) {{
                                        connectorType = StorageConnectorTypeEnum.ONE_DRIVE;
                                        domains = new String[]{{
                                            add("dolor"),
                                            add("vero"),
                                        }};
                                        resourceIdentifier = "nostrum";
                                    }}),
                                }};
                                streamingExperienceSettings = new StreamingExperienceSettings() {{
                                    preferredProtocol = PreferredProtocolEnum.UDP;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("facilis", "perspiciatis");
                                    put("voluptatem", "porro");
                                    put("consequuntur", "blanditiis");
                                }};
                                userSettings = new org.openapis.openapi.models.shared.UserSetting[]{{
                                    add(new UserSetting(ActionEnum.PRINTING_TO_LOCAL_DEVICE, PermissionEnum.ENABLED) {{
                                        action = ActionEnum.CLIPBOARD_COPY_FROM_LOCAL_DEVICE;
                                        permission = PermissionEnum.DISABLED;
                                    }}),
                                    add(new UserSetting(ActionEnum.CLIPBOARD_COPY_TO_LOCAL_DEVICE, PermissionEnum.DISABLED) {{
                                        action = ActionEnum.DOMAIN_SMART_CARD_SIGNIN;
                                        permission = PermissionEnum.DISABLED;
                                    }}),
                                    add(new UserSetting(ActionEnum.DOMAIN_SMART_CARD_SIGNIN, PermissionEnum.DISABLED) {{
                                        action = ActionEnum.PRINTING_TO_LOCAL_DEVICE;
                                        permission = PermissionEnum.DISABLED;
                                    }}),
                                }};
                            }};, CreateStackXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_STACK) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "libero";
                xAmzCredential = "delectus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "quos";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateStackResponse res = sdk.sdk.createStack(req);

            if (res.createStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStreamingURL

Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamingURLRequest;
import org.openapis.openapi.models.operations.CreateStreamingURLResponse;
import org.openapis.openapi.models.operations.CreateStreamingURLXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateStreamingURLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStreamingURLRequest req = new CreateStreamingURLRequest(                new CreateStreamingURLRequest("dolor", "qui", "ipsum") {{
                                applicationId = "hic";
                                sessionContext = "excepturi";
                                validity = 739551L;
                            }};, CreateStreamingURLXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_STREAMING_URL) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            CreateStreamingURLResponse res = sdk.sdk.createStreamingURL(req);

            if (res.createStreamingURLResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpdatedImage

<p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdatedImageRequest;
import org.openapis.openapi.models.operations.CreateUpdatedImageResponse;
import org.openapis.openapi.models.operations.CreateUpdatedImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUpdatedImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdatedImageRequest req = new CreateUpdatedImageRequest(                new CreateUpdatedImageRequest("ipsa", "iure") {{
                                dryRun = false;
                                newImageDescription = "odio";
                                newImageDisplayName = "quaerat";
                                newImageTags = new java.util.HashMap<String, String>() {{
                                    put("quidem", "voluptatibus");
                                    put("voluptas", "natus");
                                    put("eos", "atque");
                                    put("sit", "fugiat");
                                }};
                            }};, CreateUpdatedImageXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_UPDATED_IMAGE) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateUpdatedImageResponse res = sdk.sdk.createUpdatedImage(req);

            if (res.createUpdatedImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUsageReportSubscription

Creates a usage report subscription. Usage reports are generated daily.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsageReportSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateUsageReportSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateUsageReportSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUsageReportSubscriptionRequest req = new CreateUsageReportSubscriptionRequest(                new java.util.HashMap<String, Object>() {{
                                put("distinctio", "asperiores");
                                put("nihil", "ipsum");
                                put("voluptate", "id");
                                put("saepe", "eius");
                            }}, CreateUsageReportSubscriptionXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_USAGE_REPORT_SUBSCRIPTION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateUsageReportSubscriptionResponse res = sdk.sdk.createUsageReportSubscription(req);

            if (res.createUsageReportSubscriptionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Creates a new user in the user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.MessageActionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest(                new CreateUserRequest(AuthenticationTypeEnum.USERPOOL, "provident") {{
                                firstName = "minima";
                                lastName = "repellendus";
                                messageAction = MessageActionEnum.RESEND;
                            }};, CreateUserXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_CREATE_USER) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req);

            if (res.createUserResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppBlock

Deletes an app block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppBlockRequest;
import org.openapis.openapi.models.operations.DeleteAppBlockResponse;
import org.openapis.openapi.models.operations.DeleteAppBlockXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppBlockRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppBlockRequest req = new DeleteAppBlockRequest(                new DeleteAppBlockRequest("qui");, DeleteAppBlockXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_APP_BLOCK) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
            }};            

            DeleteAppBlockResponse res = sdk.sdk.deleteAppBlock(req);

            if (res.deleteAppBlockResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deletes an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationRequest("amet");, DeleteApplicationXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_APPLICATION) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectoryConfig

Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectoryConfigRequest;
import org.openapis.openapi.models.operations.DeleteDirectoryConfigResponse;
import org.openapis.openapi.models.operations.DeleteDirectoryConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDirectoryConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectoryConfigRequest req = new DeleteDirectoryConfigRequest(                new DeleteDirectoryConfigRequest("sit");, DeleteDirectoryConfigXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_DIRECTORY_CONFIG) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeleteDirectoryConfigResponse res = sdk.sdk.deleteDirectoryConfig(req);

            if (res.deleteDirectoryConfigResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEntitlement

Deletes the specified entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEntitlementRequest;
import org.openapis.openapi.models.operations.DeleteEntitlementResponse;
import org.openapis.openapi.models.operations.DeleteEntitlementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEntitlementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEntitlementRequest req = new DeleteEntitlementRequest(                new DeleteEntitlementRequest("ipsum", "incidunt");, DeleteEntitlementXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_ENTITLEMENT) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteEntitlementResponse res = sdk.sdk.deleteEntitlement(req);

            if (res.deleteEntitlementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFleet

Deletes the specified fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetRequest;
import org.openapis.openapi.models.operations.DeleteFleetResponse;
import org.openapis.openapi.models.operations.DeleteFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetRequest req = new DeleteFleetRequest(                new DeleteFleetRequest("incidunt");, DeleteFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_FLEET) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "distinctio";
                xAmzDate = "facilis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestias";
            }};            

            DeleteFleetResponse res = sdk.sdk.deleteFleet(req);

            if (res.deleteFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImage

Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageRequest;
import org.openapis.openapi.models.operations.DeleteImageResponse;
import org.openapis.openapi.models.operations.DeleteImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageRequest req = new DeleteImageRequest(                new DeleteImageRequest("qui");, DeleteImageXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteImageResponse res = sdk.sdk.deleteImage(req);

            if (res.deleteImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImageBuilder

Deletes the specified image builder and releases the capacity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImageBuilderRequest;
import org.openapis.openapi.models.operations.DeleteImageBuilderResponse;
import org.openapis.openapi.models.operations.DeleteImageBuilderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteImageBuilderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImageBuilderRequest req = new DeleteImageBuilderRequest(                new DeleteImageBuilderRequest("voluptatem");, DeleteImageBuilderXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE_BUILDER) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "nobis";
                xAmzDate = "et";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteImageBuilderResponse res = sdk.sdk.deleteImageBuilder(req);

            if (res.deleteImageBuilderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImagePermissions

Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImagePermissionsRequest;
import org.openapis.openapi.models.operations.DeleteImagePermissionsResponse;
import org.openapis.openapi.models.operations.DeleteImagePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteImagePermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImagePermissionsRequest req = new DeleteImagePermissionsRequest(                new DeleteImagePermissionsRequest("quos", "tempore");, DeleteImagePermissionsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE_PERMISSIONS) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
            }};            

            DeleteImagePermissionsResponse res = sdk.sdk.deleteImagePermissions(req);

            if (res.deleteImagePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStack

Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStackRequest;
import org.openapis.openapi.models.operations.DeleteStackResponse;
import org.openapis.openapi.models.operations.DeleteStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteStackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStackRequest req = new DeleteStackRequest(                new DeleteStackRequest("architecto");, DeleteStackXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_STACK) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
            }};            

            DeleteStackResponse res = sdk.sdk.deleteStack(req);

            if (res.deleteStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsageReportSubscription

Disables usage report generation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsageReportSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteUsageReportSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteUsageReportSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUsageReportSubscriptionRequest req = new DeleteUsageReportSubscriptionRequest(                new java.util.HashMap<String, Object>() {{
                                put("ut", "facilis");
                                put("cupiditate", "qui");
                                put("quae", "laudantium");
                                put("odio", "occaecati");
                            }}, DeleteUsageReportSubscriptionXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_USAGE_REPORT_SUBSCRIPTION) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteUsageReportSubscriptionResponse res = sdk.sdk.deleteUsageReportSubscription(req);

            if (res.deleteUsageReportSubscriptionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Deletes a user from the user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest(AuthenticationTypeEnum.API, "vero");, DeleteUserXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DELETE_USER) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.deleteUserResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAppBlocks

Retrieves a list that describes one or more app blocks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAppBlocksRequest;
import org.openapis.openapi.models.operations.DescribeAppBlocksResponse;
import org.openapis.openapi.models.operations.DescribeAppBlocksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAppBlocksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAppBlocksRequest req = new DescribeAppBlocksRequest(                new DescribeAppBlocksRequest() {{
                                arns = new String[]{{
                                    add("ducimus"),
                                    add("dolore"),
                                    add("quibusdam"),
                                    add("illum"),
                                }};
                                maxResults = 194342L;
                                nextToken = "natus";
                            }};, DescribeAppBlocksXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APP_BLOCKS) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            DescribeAppBlocksResponse res = sdk.sdk.describeAppBlocks(req);

            if (res.describeAppBlocksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplicationFleetAssociations

Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationFleetAssociationsRequest;
import org.openapis.openapi.models.operations.DescribeApplicationFleetAssociationsResponse;
import org.openapis.openapi.models.operations.DescribeApplicationFleetAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationFleetAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationFleetAssociationsRequest req = new DescribeApplicationFleetAssociationsRequest(                new DescribeApplicationFleetAssociationsRequest() {{
                                applicationArn = "doloribus";
                                fleetName = "iusto";
                                maxResults = 753570L;
                                nextToken = "ducimus";
                            }};, DescribeApplicationFleetAssociationsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APPLICATION_FLEET_ASSOCIATIONS) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeApplicationFleetAssociationsResponse res = sdk.sdk.describeApplicationFleetAssociations(req);

            if (res.describeApplicationFleetAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplications

Retrieves a list that describes one or more applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationsRequest;
import org.openapis.openapi.models.operations.DescribeApplicationsResponse;
import org.openapis.openapi.models.operations.DescribeApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationsRequest req = new DescribeApplicationsRequest(                new DescribeApplicationsRequest() {{
                                arns = new String[]{{
                                    add("ratione"),
                                    add("ex"),
                                }};
                                maxResults = 511319L;
                                nextToken = "dicta";
                            }};, DescribeApplicationsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APPLICATIONS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DescribeApplicationsResponse res = sdk.sdk.describeApplications(req);

            if (res.describeApplicationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectoryConfigs

<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectoryConfigsRequest;
import org.openapis.openapi.models.operations.DescribeDirectoryConfigsResponse;
import org.openapis.openapi.models.operations.DescribeDirectoryConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectoryConfigsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectoryConfigsRequest req = new DescribeDirectoryConfigsRequest(                new DescribeDirectoryConfigsRequest() {{
                                directoryNames = new String[]{{
                                    add("quisquam"),
                                    add("saepe"),
                                    add("ea"),
                                    add("impedit"),
                                }};
                                maxResults = 359271L;
                                nextToken = "veniam";
                            }};, DescribeDirectoryConfigsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_DIRECTORY_CONFIGS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeDirectoryConfigsResponse res = sdk.sdk.describeDirectoryConfigs(req);

            if (res.describeDirectoryConfigsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEntitlements

Retrieves a list that describes one of more entitlements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEntitlementsRequest;
import org.openapis.openapi.models.operations.DescribeEntitlementsResponse;
import org.openapis.openapi.models.operations.DescribeEntitlementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEntitlementsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitlementsRequest req = new DescribeEntitlementsRequest(                new DescribeEntitlementsRequest("minima") {{
                                maxResults = 53427L;
                                name = "Ms. Marco Ankunding";
                                nextToken = "aliquam";
                            }};, DescribeEntitlementsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_ENTITLEMENTS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "inventore";
                xAmzDate = "non";
                xAmzSecurityToken = "et";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeEntitlementsResponse res = sdk.sdk.describeEntitlements(req);

            if (res.describeEntitlementsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFleets

Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetsRequest;
import org.openapis.openapi.models.operations.DescribeFleetsResponse;
import org.openapis.openapi.models.operations.DescribeFleetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFleetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetsRequest req = new DescribeFleetsRequest(                new DescribeFleetsRequest() {{
                                names = new String[]{{
                                    add("eum"),
                                }};
                                nextToken = "autem";
                            }};, DescribeFleetsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_FLEETS) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeFleetsResponse res = sdk.sdk.describeFleets(req);

            if (res.describeFleetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImageBuilders

Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageBuildersRequest;
import org.openapis.openapi.models.operations.DescribeImageBuildersResponse;
import org.openapis.openapi.models.operations.DescribeImageBuildersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImageBuildersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageBuildersRequest req = new DescribeImageBuildersRequest(                new DescribeImageBuildersRequest() {{
                                maxResults = 256139L;
                                names = new String[]{{
                                    add("provident"),
                                }};
                                nextToken = "ipsa";
                            }};, DescribeImageBuildersXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGE_BUILDERS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "odio";
                xAmzDate = "eius";
                xAmzSecurityToken = "esse";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "rem";
            }};            

            DescribeImageBuildersResponse res = sdk.sdk.describeImageBuilders(req);

            if (res.describeImageBuildersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImagePermissions

Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImagePermissionsRequest;
import org.openapis.openapi.models.operations.DescribeImagePermissionsResponse;
import org.openapis.openapi.models.operations.DescribeImagePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImagePermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImagePermissionsRequest req = new DescribeImagePermissionsRequest(                new DescribeImagePermissionsRequest("reprehenderit") {{
                                maxResults = 695626L;
                                nextToken = "fugiat";
                                sharedAwsAccountIds = new String[]{{
                                    add("eum"),
                                    add("suscipit"),
                                }};
                            }};, DescribeImagePermissionsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGE_PERMISSIONS) {{
                maxResults = "assumenda";
                nextToken = "eos";
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
            }};            

            DescribeImagePermissionsResponse res = sdk.sdk.describeImagePermissions(req);

            if (res.describeImagePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImages

Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImagesRequest;
import org.openapis.openapi.models.operations.DescribeImagesResponse;
import org.openapis.openapi.models.operations.DescribeImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImagesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VisibilityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImagesRequest req = new DescribeImagesRequest(                new DescribeImagesRequest() {{
                                arns = new String[]{{
                                    add("quo"),
                                    add("fuga"),
                                    add("eius"),
                                    add("eos"),
                                }};
                                maxResults = 373813L;
                                names = new String[]{{
                                    add("cupiditate"),
                                }};
                                nextToken = "consequatur";
                                type = VisibilityTypeEnum.PUBLIC_;
                            }};, DescribeImagesXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGES) {{
                maxResults = "debitis";
                nextToken = "ipsam";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "quo";
                xAmzDate = "esse";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeImagesResponse res = sdk.sdk.describeImages(req);

            if (res.describeImagesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSessions

Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSessionsRequest;
import org.openapis.openapi.models.operations.DescribeSessionsResponse;
import org.openapis.openapi.models.operations.DescribeSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DescribeSessionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSessionsRequest req = new DescribeSessionsRequest(                new DescribeSessionsRequest("dignissimos", "inventore") {{
                                authenticationType = AuthenticationTypeEnum.SAML;
                                limit = 518835L;
                                nextToken = "accusamus";
                                userId = "aliquam";
                            }};, DescribeSessionsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_SESSIONS) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            DescribeSessionsResponse res = sdk.sdk.describeSessions(req);

            if (res.describeSessionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStacks

Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStacksRequest;
import org.openapis.openapi.models.operations.DescribeStacksResponse;
import org.openapis.openapi.models.operations.DescribeStacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStacksRequest req = new DescribeStacksRequest(                new DescribeStacksRequest() {{
                                names = new String[]{{
                                    add("eum"),
                                    add("quas"),
                                    add("praesentium"),
                                    add("consequuntur"),
                                }};
                                nextToken = "deleniti";
                            }};, DescribeStacksXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_STACKS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeStacksResponse res = sdk.sdk.describeStacks(req);

            if (res.describeStacksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUsageReportSubscriptions

Retrieves a list that describes one or more usage report subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUsageReportSubscriptionsRequest;
import org.openapis.openapi.models.operations.DescribeUsageReportSubscriptionsResponse;
import org.openapis.openapi.models.operations.DescribeUsageReportSubscriptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUsageReportSubscriptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUsageReportSubscriptionsRequest req = new DescribeUsageReportSubscriptionsRequest(                new DescribeUsageReportSubscriptionsRequest() {{
                                maxResults = 147014L;
                                nextToken = "sapiente";
                            }};, DescribeUsageReportSubscriptionsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USAGE_REPORT_SUBSCRIPTIONS) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "explicabo";
                xAmzDate = "saepe";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "et";
            }};            

            DescribeUsageReportSubscriptionsResponse res = sdk.sdk.describeUsageReportSubscriptions(req);

            if (res.describeUsageReportSubscriptionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserStackAssociations

<p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserStackAssociationsRequest;
import org.openapis.openapi.models.operations.DescribeUserStackAssociationsResponse;
import org.openapis.openapi.models.operations.DescribeUserStackAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DescribeUserStackAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserStackAssociationsRequest req = new DescribeUserStackAssociationsRequest(                new DescribeUserStackAssociationsRequest() {{
                                authenticationType = AuthenticationTypeEnum.AWS_AD;
                                maxResults = 882042L;
                                nextToken = "veritatis";
                                stackName = "esse";
                                userName = "quod";
                            }};, DescribeUserStackAssociationsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USER_STACK_ASSOCIATIONS) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
            }};            

            DescribeUserStackAssociationsResponse res = sdk.sdk.describeUserStackAssociations(req);

            if (res.describeUserStackAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUsers

Retrieves a list that describes one or more specified users in the user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUsersRequest;
import org.openapis.openapi.models.operations.DescribeUsersResponse;
import org.openapis.openapi.models.operations.DescribeUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DescribeUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUsersRequest req = new DescribeUsersRequest(                new DescribeUsersRequest(AuthenticationTypeEnum.USERPOOL) {{
                                maxResults = 580197L;
                                nextToken = "minima";
                            }};, DescribeUsersXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USERS) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sit";
                xAmzDate = "culpa";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "cumque";
            }};            

            DescribeUsersResponse res = sdk.sdk.describeUsers(req);

            if (res.describeUsersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableUser

Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableUserRequest;
import org.openapis.openapi.models.operations.DisableUserResponse;
import org.openapis.openapi.models.operations.DisableUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DisableUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableUserRequest req = new DisableUserRequest(                new DisableUserRequest(AuthenticationTypeEnum.API, "minus");, DisableUserXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DISABLE_USER) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "consectetur";
                xAmzDate = "esse";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "a";
            }};            

            DisableUserResponse res = sdk.sdk.disableUser(req);

            if (res.disableUserResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateApplicationFleet

Disassociates the specified application from the fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateApplicationFleetRequest;
import org.openapis.openapi.models.operations.DisassociateApplicationFleetResponse;
import org.openapis.openapi.models.operations.DisassociateApplicationFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateApplicationFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateApplicationFleetRequest req = new DisassociateApplicationFleetRequest(                new DisassociateApplicationFleetRequest("quas", "esse");, DisassociateApplicationFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_APPLICATION_FLEET) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "a";
                xAmzCredential = "error";
                xAmzDate = "sint";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "quia";
            }};            

            DisassociateApplicationFleetResponse res = sdk.sdk.disassociateApplicationFleet(req);

            if (res.disassociateApplicationFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateApplicationFromEntitlement

Deletes the specified application from the specified entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateApplicationFromEntitlementRequest;
import org.openapis.openapi.models.operations.DisassociateApplicationFromEntitlementResponse;
import org.openapis.openapi.models.operations.DisassociateApplicationFromEntitlementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateApplicationFromEntitlementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateApplicationFromEntitlementRequest req = new DisassociateApplicationFromEntitlementRequest(                new DisassociateApplicationFromEntitlementRequest("asperiores", "facere", "veritatis");, DisassociateApplicationFromEntitlementXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_APPLICATION_FROM_ENTITLEMENT) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            DisassociateApplicationFromEntitlementResponse res = sdk.sdk.disassociateApplicationFromEntitlement(req);

            if (res.disassociateApplicationFromEntitlementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFleet

Disassociates the specified fleet from the specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFleetRequest;
import org.openapis.openapi.models.operations.DisassociateFleetResponse;
import org.openapis.openapi.models.operations.DisassociateFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateFleetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFleetRequest req = new DisassociateFleetRequest(                new DisassociateFleetRequest("vel", "in");, DisassociateFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_FLEET) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
            }};            

            DisassociateFleetResponse res = sdk.sdk.disassociateFleet(req);

            if (res.disassociateFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableUser

Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableUserRequest;
import org.openapis.openapi.models.operations.EnableUserResponse;
import org.openapis.openapi.models.operations.EnableUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationTypeEnum;
import org.openapis.openapi.models.shared.EnableUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableUserRequest req = new EnableUserRequest(                new EnableUserRequest(AuthenticationTypeEnum.SAML, "reprehenderit");, EnableUserXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_ENABLE_USER) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            EnableUserResponse res = sdk.sdk.enableUser(req);

            if (res.enableUserResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## expireSession

Immediately stops the specified streaming session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExpireSessionRequest;
import org.openapis.openapi.models.operations.ExpireSessionResponse;
import org.openapis.openapi.models.operations.ExpireSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExpireSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExpireSessionRequest req = new ExpireSessionRequest(                new ExpireSessionRequest("itaque");, ExpireSessionXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_EXPIRE_SESSION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "omnis";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "et";
            }};            

            ExpireSessionResponse res = sdk.sdk.expireSession(req);

            if (res.expireSessionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedFleets

Retrieves the name of the fleet that is associated with the specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedFleetsRequest;
import org.openapis.openapi.models.operations.ListAssociatedFleetsResponse;
import org.openapis.openapi.models.operations.ListAssociatedFleetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAssociatedFleetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedFleetsRequest req = new ListAssociatedFleetsRequest(                new ListAssociatedFleetsRequest("ipsa") {{
                                nextToken = "minima";
                            }};, ListAssociatedFleetsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_FLEETS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "adipisci";
                xAmzDate = "iste";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "rem";
            }};            

            ListAssociatedFleetsResponse res = sdk.sdk.listAssociatedFleets(req);

            if (res.listAssociatedFleetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociatedStacks

Retrieves the name of the stack with which the specified fleet is associated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociatedStacksRequest;
import org.openapis.openapi.models.operations.ListAssociatedStacksResponse;
import org.openapis.openapi.models.operations.ListAssociatedStacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAssociatedStacksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociatedStacksRequest req = new ListAssociatedStacksRequest(                new ListAssociatedStacksRequest("laudantium") {{
                                nextToken = "eum";
                            }};, ListAssociatedStacksXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_STACKS) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListAssociatedStacksResponse res = sdk.sdk.listAssociatedStacks(req);

            if (res.listAssociatedStacksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntitledApplications

Retrieves a list of entitled applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntitledApplicationsRequest;
import org.openapis.openapi.models.operations.ListEntitledApplicationsResponse;
import org.openapis.openapi.models.operations.ListEntitledApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEntitledApplicationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntitledApplicationsRequest req = new ListEntitledApplicationsRequest(                new ListEntitledApplicationsRequest("impedit", "explicabo") {{
                                maxResults = 376226L;
                                nextToken = "aut";
                            }};, ListEntitledApplicationsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_LIST_ENTITLED_APPLICATIONS) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListEntitledApplicationsResponse res = sdk.sdk.listEntitledApplications(req);

            if (res.listEntitledApplicationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("aperiam");, ListTagsForResourceXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "officia";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "dignissimos";
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

## startFleet

Starts the specified fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFleetRequest;
import org.openapis.openapi.models.operations.StartFleetResponse;
import org.openapis.openapi.models.operations.StartFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFleetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFleetRequest req = new StartFleetRequest(                new StartFleetRequest("asperiores");, StartFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_START_FLEET) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quae";
                xAmzCredential = "quaerat";
                xAmzDate = "porro";
                xAmzSecurityToken = "quod";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "ab";
            }};            

            StartFleetResponse res = sdk.sdk.startFleet(req);

            if (res.startFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImageBuilder

Starts the specified image builder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImageBuilderRequest;
import org.openapis.openapi.models.operations.StartImageBuilderResponse;
import org.openapis.openapi.models.operations.StartImageBuilderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartImageBuilderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImageBuilderRequest req = new StartImageBuilderRequest(                new StartImageBuilderRequest("fuga") {{
                                appstreamAgentVersion = "id";
                            }};, StartImageBuilderXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_START_IMAGE_BUILDER) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "velit";
                xAmzCredential = "culpa";
                xAmzDate = "est";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "fugiat";
            }};            

            StartImageBuilderResponse res = sdk.sdk.startImageBuilder(req);

            if (res.startImageBuilderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopFleet

Stops the specified fleet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopFleetRequest;
import org.openapis.openapi.models.operations.StopFleetResponse;
import org.openapis.openapi.models.operations.StopFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopFleetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopFleetRequest req = new StopFleetRequest(                new StopFleetRequest("ducimus");, StopFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_STOP_FLEET) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "vel";
                xAmzCredential = "labore";
                xAmzDate = "possimus";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "commodi";
            }};            

            StopFleetResponse res = sdk.sdk.stopFleet(req);

            if (res.stopFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopImageBuilder

Stops the specified image builder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopImageBuilderRequest;
import org.openapis.openapi.models.operations.StopImageBuilderResponse;
import org.openapis.openapi.models.operations.StopImageBuilderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopImageBuilderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopImageBuilderRequest req = new StopImageBuilderRequest(                new StopImageBuilderRequest("corporis");, StopImageBuilderXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_STOP_IMAGE_BUILDER) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nemo";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "cum";
            }};            

            StopImageBuilderResponse res = sdk.sdk.stopImageBuilder(req);

            if (res.stopImageBuilderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("in",                 new java.util.HashMap<String, String>() {{
                                                put("earum", "facere");
                                                put("numquam", "doloribus");
                                            }});, TagResourceXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "quidem";
                xAmzDate = "saepe";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "sunt";
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

## untagResource

<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("adipisci",                 new String[]{{
                                                add("amet"),
                                            }});, UntagResourceXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "a";
                xAmzDate = "debitis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "harum";
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

## updateApplication

Updates the specified application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationAttributeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequest("ipsa") {{
                                appBlockArn = "voluptates";
                                attributesToDelete = new org.openapis.openapi.models.shared.ApplicationAttributeEnum[]{{
                                    add(ApplicationAttributeEnum.LAUNCH_PARAMETERS),
                                    add(ApplicationAttributeEnum.WORKING_DIRECTORY),
                                    add(ApplicationAttributeEnum.WORKING_DIRECTORY),
                                }};
                                description = "tempora";
                                displayName = "aspernatur";
                                iconS3Location = new S3Location("voluptas", "voluptas");;
                                launchParameters = "voluptas";
                                launchPath = "minima";
                                workingDirectory = "nobis";
                            }};, UpdateApplicationXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "minus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "dolore";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDirectoryConfig

Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDirectoryConfigRequest;
import org.openapis.openapi.models.operations.UpdateDirectoryConfigResponse;
import org.openapis.openapi.models.operations.UpdateDirectoryConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateBasedAuthProperties;
import org.openapis.openapi.models.shared.CertificateBasedAuthStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceAccountCredentials;
import org.openapis.openapi.models.shared.UpdateDirectoryConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDirectoryConfigRequest req = new UpdateDirectoryConfigRequest(                new UpdateDirectoryConfigRequest("officiis") {{
                                certificateBasedAuthProperties = new CertificateBasedAuthProperties() {{
                                    certificateAuthorityArn = "temporibus";
                                    status = CertificateBasedAuthStatusEnum.ENABLED;
                                }};;
                                organizationalUnitDistinguishedNames = new String[]{{
                                    add("cum"),
                                }};
                                serviceAccountCredentials = new ServiceAccountCredentials("blanditiis", "quas");;
                            }};, UpdateDirectoryConfigXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_DIRECTORY_CONFIG) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "culpa";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateDirectoryConfigResponse res = sdk.sdk.updateDirectoryConfig(req);

            if (res.updateDirectoryConfigResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEntitlement

Updates the specified entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEntitlementRequest;
import org.openapis.openapi.models.operations.UpdateEntitlementResponse;
import org.openapis.openapi.models.operations.UpdateEntitlementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AppVisibilityEnum;
import org.openapis.openapi.models.shared.EntitlementAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEntitlementRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEntitlementRequest req = new UpdateEntitlementRequest(                new UpdateEntitlementRequest("nobis", "sit") {{
                                appVisibility = AppVisibilityEnum.ASSOCIATED;
                                attributes = new org.openapis.openapi.models.shared.EntitlementAttribute[]{{
                                    add(new EntitlementAttribute("ab", "iste") {{
                                        name = "Benjamin Ziemann";
                                        value = "expedita";
                                    }}),
                                }};
                                description = "dolore";
                            }};, UpdateEntitlementXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_ENTITLEMENT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "in";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateEntitlementResponse res = sdk.sdk.updateEntitlement(req);

            if (res.updateEntitlementResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFleet

<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetRequest;
import org.openapis.openapi.models.operations.UpdateFleetResponse;
import org.openapis.openapi.models.operations.UpdateFleetXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeCapacity;
import org.openapis.openapi.models.shared.DomainJoinInfo;
import org.openapis.openapi.models.shared.FleetAttributeEnum;
import org.openapis.openapi.models.shared.PlatformTypeEnum;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StreamViewEnum;
import org.openapis.openapi.models.shared.UpdateFleetRequest;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFleetRequest req = new UpdateFleetRequest(                new UpdateFleetRequest() {{
                                attributesToDelete = new org.openapis.openapi.models.shared.FleetAttributeEnum[]{{
                                    add(FleetAttributeEnum.DOMAIN_JOIN_INFO),
                                }};
                                computeCapacity = new ComputeCapacity(960257L);;
                                deleteVpcConfig = false;
                                description = "debitis";
                                disconnectTimeoutInSeconds = 72434L;
                                displayName = "reiciendis";
                                domainJoinInfo = new DomainJoinInfo() {{
                                    directoryName = "perferendis";
                                    organizationalUnitDistinguishedName = "corrupti";
                                }};;
                                enableDefaultInternetAccess = false;
                                iamRoleArn = "maiores";
                                idleDisconnectTimeoutInSeconds = 274823L;
                                imageArn = "sed";
                                imageName = "provident";
                                instanceType = "eius";
                                maxConcurrentSessions = 896762L;
                                maxUserDurationInSeconds = 215529L;
                                name = "Kristina Lueilwitz";
                                platform = PlatformTypeEnum.WINDOWS_SERVER2016;
                                sessionScriptS3Location = new S3Location("voluptate", "reiciendis");;
                                streamView = StreamViewEnum.APP;
                                usbDeviceFilterStrings = new String[]{{
                                    add("non"),
                                }};
                                vpcConfig = new VpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("praesentium"),
                                        add("facilis"),
                                        add("quaerat"),
                                        add("incidunt"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("debitis"),
                                        add("rem"),
                                    }};
                                }};;
                            }};, UpdateFleetXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_FLEET) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "error";
                xAmzDate = "veniam";
                xAmzSecurityToken = "minima";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateFleetResponse res = sdk.sdk.updateFleet(req);

            if (res.updateFleetResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateImagePermissions

Adds or updates permissions for the specified private image. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateImagePermissionsRequest;
import org.openapis.openapi.models.operations.UpdateImagePermissionsResponse;
import org.openapis.openapi.models.operations.UpdateImagePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImagePermissions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateImagePermissionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateImagePermissionsRequest req = new UpdateImagePermissionsRequest(                new UpdateImagePermissionsRequest(                new ImagePermissions() {{
                                                allowFleet = false;
                                                allowImageBuilder = false;
                                            }};, "magni", "aperiam");, UpdateImagePermissionsXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_IMAGE_PERMISSIONS) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veniam";
                xAmzDate = "in";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "laudantium";
            }};            

            UpdateImagePermissionsResponse res = sdk.sdk.updateImagePermissions(req);

            if (res.updateImagePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStack

Updates the specified fields for the specified stack.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStackRequest;
import org.openapis.openapi.models.operations.UpdateStackResponse;
import org.openapis.openapi.models.operations.UpdateStackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessEndpoint;
import org.openapis.openapi.models.shared.AccessEndpointTypeEnum;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.ApplicationSettings;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.PreferredProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StackAttributeEnum;
import org.openapis.openapi.models.shared.StorageConnector;
import org.openapis.openapi.models.shared.StorageConnectorTypeEnum;
import org.openapis.openapi.models.shared.StreamingExperienceSettings;
import org.openapis.openapi.models.shared.UpdateStackRequest;
import org.openapis.openapi.models.shared.UserSetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStackRequest req = new UpdateStackRequest(                new UpdateStackRequest("praesentium") {{
                                accessEndpoints = new org.openapis.openapi.models.shared.AccessEndpoint[]{{
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "laboriosam";
                                    }}),
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "dolorum";
                                    }}),
                                    add(new AccessEndpoint(AccessEndpointTypeEnum.STREAMING) {{
                                        endpointType = AccessEndpointTypeEnum.STREAMING;
                                        vpceId = "voluptatum";
                                    }}),
                                }};
                                applicationSettings = new ApplicationSettings(false) {{
                                    settingsGroup = "error";
                                }};;
                                attributesToDelete = new org.openapis.openapi.models.shared.StackAttributeEnum[]{{
                                    add(StackAttributeEnum.EMBED_HOST_DOMAINS),
                                    add(StackAttributeEnum.ACCESS_ENDPOINTS),
                                    add(StackAttributeEnum.STORAGE_CONNECTOR_GOOGLE_DRIVE),
                                    add(StackAttributeEnum.EMBED_HOST_DOMAINS),
                                }};
                                deleteStorageConnectors = false;
                                description = "nostrum";
                                displayName = "officia";
                                embedHostDomains = new String[]{{
                                    add("corrupti"),
                                    add("accusamus"),
                                    add("tempora"),
                                }};
                                feedbackURL = "atque";
                                redirectURL = "fugit";
                                storageConnectors = new org.openapis.openapi.models.shared.StorageConnector[]{{
                                    add(new StorageConnector(StorageConnectorTypeEnum.HOMEFOLDERS) {{
                                        connectorType = StorageConnectorTypeEnum.ONE_DRIVE;
                                        domains = new String[]{{
                                            add("culpa"),
                                        }};
                                        resourceIdentifier = "expedita";
                                    }}),
                                    add(new StorageConnector(StorageConnectorTypeEnum.GOOGLE_DRIVE) {{
                                        connectorType = StorageConnectorTypeEnum.HOMEFOLDERS;
                                        domains = new String[]{{
                                            add("ipsam"),
                                            add("sit"),
                                        }};
                                        resourceIdentifier = "voluptatum";
                                    }}),
                                }};
                                streamingExperienceSettings = new StreamingExperienceSettings() {{
                                    preferredProtocol = PreferredProtocolEnum.UDP;
                                }};;
                                userSettings = new org.openapis.openapi.models.shared.UserSetting[]{{
                                    add(new UserSetting(ActionEnum.FILE_UPLOAD, PermissionEnum.ENABLED) {{
                                        action = ActionEnum.CLIPBOARD_COPY_FROM_LOCAL_DEVICE;
                                        permission = PermissionEnum.DISABLED;
                                    }}),
                                    add(new UserSetting(ActionEnum.FILE_UPLOAD, PermissionEnum.DISABLED) {{
                                        action = ActionEnum.CLIPBOARD_COPY_FROM_LOCAL_DEVICE;
                                        permission = PermissionEnum.ENABLED;
                                    }}),
                                }};
                            }};, UpdateStackXAmzTargetEnum.PHOTON_ADMIN_PROXY_SERVICE_UPDATE_STACK) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "incidunt";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateStackResponse res = sdk.sdk.updateStack(req);

            if (res.updateStackResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

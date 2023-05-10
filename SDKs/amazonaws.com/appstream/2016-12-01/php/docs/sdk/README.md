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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApplicationFleetRequest();
    $request->associateApplicationFleetRequest = new AssociateApplicationFleetRequest();
    $request->associateApplicationFleetRequest->applicationArn = 'error';
    $request->associateApplicationFleetRequest->fleetName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateApplicationFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_FLEET;

    $response = $sdk->sdk->associateApplicationFleet($request);

    if ($response->associateApplicationFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateApplicationToEntitlement

Associates an application to entitle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationToEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateApplicationToEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApplicationToEntitlementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApplicationToEntitlementRequest();
    $request->associateApplicationToEntitlementRequest = new AssociateApplicationToEntitlementRequest();
    $request->associateApplicationToEntitlementRequest->applicationIdentifier = 'suscipit';
    $request->associateApplicationToEntitlementRequest->entitlementName = 'molestiae';
    $request->associateApplicationToEntitlementRequest->stackName = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = AssociateApplicationToEntitlementXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_APPLICATION_TO_ENTITLEMENT;

    $response = $sdk->sdk->associateApplicationToEntitlement($request);

    if ($response->associateApplicationToEntitlementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateFleet

Associates the specified fleet with the specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFleetRequest();
    $request->associateFleetRequest = new AssociateFleetRequest();
    $request->associateFleetRequest->fleetName = 'ab';
    $request->associateFleetRequest->stackName = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = AssociateFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_ASSOCIATE_FLEET;

    $response = $sdk->sdk->associateFleet($request);

    if ($response->associateFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateUserStack

Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateUserStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchAssociateUserStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserStackAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateUserStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateUserStackRequest();
    $request->batchAssociateUserStackRequest = new BatchAssociateUserStackRequest();
    $request->batchAssociateUserStackRequest->userStackAssociations = [
        new UserStackAssociation(),
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = BatchAssociateUserStackXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_BATCH_ASSOCIATE_USER_STACK;

    $response = $sdk->sdk->batchAssociateUserStack($request);

    if ($response->batchAssociateUserStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateUserStack

Disassociates the specified users from the specified stacks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateUserStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDisassociateUserStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserStackAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateUserStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateUserStackRequest();
    $request->batchDisassociateUserStackRequest = new BatchDisassociateUserStackRequest();
    $request->batchDisassociateUserStackRequest->userStackAssociations = [
        new UserStackAssociation(),
        new UserStackAssociation(),
        new UserStackAssociation(),
    ];
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = BatchDisassociateUserStackXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_BATCH_DISASSOCIATE_USER_STACK;

    $response = $sdk->sdk->batchDisassociateUserStack($request);

    if ($response->batchDisassociateUserStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyImage

Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CopyImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyImageRequest();
    $request->copyImageRequest = new CopyImageRequest();
    $request->copyImageRequest->destinationImageDescription = 'deleniti';
    $request->copyImageRequest->destinationImageName = 'hic';
    $request->copyImageRequest->destinationRegion = 'optio';
    $request->copyImageRequest->sourceImageName = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CopyImageXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_COPY_IMAGE;

    $response = $sdk->sdk->copyImage($request);

    if ($response->copyImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAppBlock

<p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScriptDetails;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppBlockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppBlockRequest();
    $request->createAppBlockRequest = new CreateAppBlockRequest();
    $request->createAppBlockRequest->description = 'esse';
    $request->createAppBlockRequest->displayName = 'ipsum';
    $request->createAppBlockRequest->name = 'Brandon Auer';
    $request->createAppBlockRequest->setupScriptDetails = new ScriptDetails();
    $request->createAppBlockRequest->setupScriptDetails->executableParameters = 'sed';
    $request->createAppBlockRequest->setupScriptDetails->executablePath = 'iste';
    $request->createAppBlockRequest->setupScriptDetails->scriptS3Location = new S3Location();
    $request->createAppBlockRequest->setupScriptDetails->scriptS3Location->s3Bucket = 'dolor';
    $request->createAppBlockRequest->setupScriptDetails->scriptS3Location->s3Key = 'natus';
    $request->createAppBlockRequest->setupScriptDetails->timeoutInSeconds = 386489;
    $request->createAppBlockRequest->sourceS3Location = new S3Location();
    $request->createAppBlockRequest->sourceS3Location->s3Bucket = 'hic';
    $request->createAppBlockRequest->sourceS3Location->s3Key = 'saepe';
    $request->createAppBlockRequest->tags = [
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CreateAppBlockXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_APP_BLOCK;

    $response = $sdk->sdk->createAppBlock($request);

    if ($response->createAppBlockResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

<p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\PlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->appBlockArn = 'dolorem';
    $request->createApplicationRequest->description = 'corporis';
    $request->createApplicationRequest->displayName = 'explicabo';
    $request->createApplicationRequest->iconS3Location = new S3Location();
    $request->createApplicationRequest->iconS3Location->s3Bucket = 'nobis';
    $request->createApplicationRequest->iconS3Location->s3Key = 'enim';
    $request->createApplicationRequest->instanceFamilies = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->createApplicationRequest->launchParameters = 'accusantium';
    $request->createApplicationRequest->launchPath = 'iure';
    $request->createApplicationRequest->name = 'Miss Aubrey Williamson';
    $request->createApplicationRequest->platforms = [
        PlatformTypeEnum::WINDOWS,
        PlatformTypeEnum::AMAZON_LINUX2,
        PlatformTypeEnum::WINDOWS_SERVER2019,
    ];
    $request->createApplicationRequest->tags = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->createApplicationRequest->workingDirectory = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectoryConfig

Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthProperties;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountCredentials;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectoryConfigRequest();
    $request->createDirectoryConfigRequest = new CreateDirectoryConfigRequest();
    $request->createDirectoryConfigRequest->certificateBasedAuthProperties = new CertificateBasedAuthProperties();
    $request->createDirectoryConfigRequest->certificateBasedAuthProperties->certificateAuthorityArn = 'sequi';
    $request->createDirectoryConfigRequest->certificateBasedAuthProperties->status = CertificateBasedAuthStatusEnum::ENABLED_NO_DIRECTORY_LOGIN_FALLBACK;
    $request->createDirectoryConfigRequest->directoryName = 'ipsam';
    $request->createDirectoryConfigRequest->organizationalUnitDistinguishedNames = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->createDirectoryConfigRequest->serviceAccountCredentials = new ServiceAccountCredentials();
    $request->createDirectoryConfigRequest->serviceAccountCredentials->accountName = 'error';
    $request->createDirectoryConfigRequest->serviceAccountCredentials->accountPassword = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = CreateDirectoryConfigXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_DIRECTORY_CONFIG;

    $response = $sdk->sdk->createDirectoryConfig($request);

    if ($response->createDirectoryConfigResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEntitlement

Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementAttribute;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntitlementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEntitlementRequest();
    $request->createEntitlementRequest = new CreateEntitlementRequest();
    $request->createEntitlementRequest->appVisibility = AppVisibilityEnum::ASSOCIATED;
    $request->createEntitlementRequest->attributes = [
        new EntitlementAttribute(),
    ];
    $request->createEntitlementRequest->description = 'omnis';
    $request->createEntitlementRequest->name = 'Ms. Karla Aufderhar';
    $request->createEntitlementRequest->stackName = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateEntitlementXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_ENTITLEMENT;

    $response = $sdk->sdk->createEntitlement($request);

    if ($response->createEntitlementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleet

Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComputeCapacity;
use \OpenAPI\OpenAPI\Models\Shared\DomainJoinInfo;
use \OpenAPI\OpenAPI\Models\Shared\FleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\StreamViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetRequest();
    $request->createFleetRequest = new CreateFleetRequest();
    $request->createFleetRequest->computeCapacity = new ComputeCapacity();
    $request->createFleetRequest->computeCapacity->desiredInstances = 880476;
    $request->createFleetRequest->description = 'commodi';
    $request->createFleetRequest->disconnectTimeoutInSeconds = 918236;
    $request->createFleetRequest->displayName = 'quae';
    $request->createFleetRequest->domainJoinInfo = new DomainJoinInfo();
    $request->createFleetRequest->domainJoinInfo->directoryName = 'ipsum';
    $request->createFleetRequest->domainJoinInfo->organizationalUnitDistinguishedName = 'quidem';
    $request->createFleetRequest->enableDefaultInternetAccess = false;
    $request->createFleetRequest->fleetType = FleetTypeEnum::ON_DEMAND;
    $request->createFleetRequest->iamRoleArn = 'excepturi';
    $request->createFleetRequest->idleDisconnectTimeoutInSeconds = 865103;
    $request->createFleetRequest->imageArn = 'modi';
    $request->createFleetRequest->imageName = 'praesentium';
    $request->createFleetRequest->instanceType = 'rem';
    $request->createFleetRequest->maxConcurrentSessions = 916723;
    $request->createFleetRequest->maxUserDurationInSeconds = 93940;
    $request->createFleetRequest->name = 'Kirk Boehm';
    $request->createFleetRequest->platform = PlatformTypeEnum::WINDOWS_SERVER2016;
    $request->createFleetRequest->sessionScriptS3Location = new S3Location();
    $request->createFleetRequest->sessionScriptS3Location->s3Bucket = 'consequatur';
    $request->createFleetRequest->sessionScriptS3Location->s3Key = 'est';
    $request->createFleetRequest->streamView = StreamViewEnum::DESKTOP;
    $request->createFleetRequest->tags = [
        'deserunt' => 'distinctio',
    ];
    $request->createFleetRequest->usbDeviceFilterStrings = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->createFleetRequest->vpcConfig = new VpcConfig();
    $request->createFleetRequest->vpcConfig->securityGroupIds = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->createFleetRequest->vpcConfig->subnetIds = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = CreateFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_FLEET;

    $response = $sdk->sdk->createFleet($request);

    if ($response->createFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageBuilder

<p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainJoinInfo;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageBuilderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageBuilderRequest();
    $request->createImageBuilderRequest = new CreateImageBuilderRequest();
    $request->createImageBuilderRequest->accessEndpoints = [
        new AccessEndpoint(),
    ];
    $request->createImageBuilderRequest->appstreamAgentVersion = 'eligendi';
    $request->createImageBuilderRequest->description = 'sint';
    $request->createImageBuilderRequest->displayName = 'aliquid';
    $request->createImageBuilderRequest->domainJoinInfo = new DomainJoinInfo();
    $request->createImageBuilderRequest->domainJoinInfo->directoryName = 'provident';
    $request->createImageBuilderRequest->domainJoinInfo->organizationalUnitDistinguishedName = 'necessitatibus';
    $request->createImageBuilderRequest->enableDefaultInternetAccess = false;
    $request->createImageBuilderRequest->iamRoleArn = 'sint';
    $request->createImageBuilderRequest->imageArn = 'officia';
    $request->createImageBuilderRequest->imageName = 'dolor';
    $request->createImageBuilderRequest->instanceType = 'debitis';
    $request->createImageBuilderRequest->name = 'Wilbur King';
    $request->createImageBuilderRequest->tags = [
        'rerum' => 'dicta',
        'magnam' => 'cumque',
        'facere' => 'ea',
        'aliquid' => 'laborum',
    ];
    $request->createImageBuilderRequest->vpcConfig = new VpcConfig();
    $request->createImageBuilderRequest->vpcConfig->securityGroupIds = [
        'non',
        'occaecati',
        'enim',
        'accusamus',
    ];
    $request->createImageBuilderRequest->vpcConfig->subnetIds = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = CreateImageBuilderXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_IMAGE_BUILDER;

    $response = $sdk->sdk->createImageBuilder($request);

    if ($response->createImageBuilderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImageBuilderStreamingURL

Creates a URL to start an image builder streaming session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageBuilderStreamingURLRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateImageBuilderStreamingURLRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateImageBuilderStreamingURLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateImageBuilderStreamingURLRequest();
    $request->createImageBuilderStreamingURLRequest = new CreateImageBuilderStreamingURLRequest();
    $request->createImageBuilderStreamingURLRequest->name = 'Ms. Arturo Krajcik';
    $request->createImageBuilderStreamingURLRequest->validity = 716075;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = CreateImageBuilderStreamingURLXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_IMAGE_BUILDER_STREAMING_URL;

    $response = $sdk->sdk->createImageBuilderStreamingURL($request);

    if ($response->createImageBuilderStreamingURLResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStack

Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSettings;
use \OpenAPI\OpenAPI\Models\Shared\StorageConnector;
use \OpenAPI\OpenAPI\Models\Shared\StorageConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingExperienceSettings;
use \OpenAPI\OpenAPI\Models\Shared\PreferredProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSetting;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStackRequest();
    $request->createStackRequest = new CreateStackRequest();
    $request->createStackRequest->accessEndpoints = [
        new AccessEndpoint(),
        new AccessEndpoint(),
        new AccessEndpoint(),
        new AccessEndpoint(),
    ];
    $request->createStackRequest->applicationSettings = new ApplicationSettings();
    $request->createStackRequest->applicationSettings->enabled = false;
    $request->createStackRequest->applicationSettings->settingsGroup = 'aspernatur';
    $request->createStackRequest->description = 'architecto';
    $request->createStackRequest->displayName = 'magnam';
    $request->createStackRequest->embedHostDomains = [
        'excepturi',
    ];
    $request->createStackRequest->feedbackURL = 'ullam';
    $request->createStackRequest->name = 'Miss Julian Marvin';
    $request->createStackRequest->redirectURL = 'mollitia';
    $request->createStackRequest->storageConnectors = [
        new StorageConnector(),
        new StorageConnector(),
    ];
    $request->createStackRequest->streamingExperienceSettings = new StreamingExperienceSettings();
    $request->createStackRequest->streamingExperienceSettings->preferredProtocol = PreferredProtocolEnum::TCP;
    $request->createStackRequest->tags = [
        'necessitatibus' => 'odit',
    ];
    $request->createStackRequest->userSettings = [
        new UserSetting(),
        new UserSetting(),
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateStackXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_STACK;

    $response = $sdk->sdk->createStack($request);

    if ($response->createStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamingURL

Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingURLRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStreamingURLRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingURLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamingURLRequest();
    $request->createStreamingURLRequest = new CreateStreamingURLRequest();
    $request->createStreamingURLRequest->applicationId = 'facilis';
    $request->createStreamingURLRequest->fleetName = 'in';
    $request->createStreamingURLRequest->sessionContext = 'architecto';
    $request->createStreamingURLRequest->stackName = 'architecto';
    $request->createStreamingURLRequest->userId = 'repudiandae';
    $request->createStreamingURLRequest->validity = 352312;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = CreateStreamingURLXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_STREAMING_URL;

    $response = $sdk->sdk->createStreamingURL($request);

    if ($response->createStreamingURLResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpdatedImage

<p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatedImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatedImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatedImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatedImageRequest();
    $request->createUpdatedImageRequest = new CreateUpdatedImageRequest();
    $request->createUpdatedImageRequest->dryRun = false;
    $request->createUpdatedImageRequest->existingImageName = 'accusantium';
    $request->createUpdatedImageRequest->newImageDescription = 'consequuntur';
    $request->createUpdatedImageRequest->newImageDisplayName = 'praesentium';
    $request->createUpdatedImageRequest->newImageName = 'natus';
    $request->createUpdatedImageRequest->newImageTags = [
        'sunt' => 'quo',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = CreateUpdatedImageXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_UPDATED_IMAGE;

    $response = $sdk->sdk->createUpdatedImage($request);

    if ($response->createUpdatedImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUsageReportSubscription

Creates a usage report subscription. Usage reports are generated daily.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageReportSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageReportSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsageReportSubscriptionRequest();
    $request->requestBody = [
        'ab' => 'maiores',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = CreateUsageReportSubscriptionXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_USAGE_REPORT_SUBSCRIPTION;

    $response = $sdk->sdk->createUsageReportSubscription($request);

    if ($response->createUsageReportSubscriptionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Creates a new user in the user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->createUserRequest = new CreateUserRequest();
    $request->createUserRequest->authenticationType = AuthenticationTypeEnum::SAML;
    $request->createUserRequest->firstName = 'voluptatibus';
    $request->createUserRequest->lastName = 'perferendis';
    $request->createUserRequest->messageAction = MessageActionEnum::RESEND;
    $request->createUserRequest->userName = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CreateUserXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_CREATE_USER;

    $response = $sdk->sdk->createUser($request);

    if ($response->createUserResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppBlock

Deletes an app block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppBlockRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppBlockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppBlockRequest();
    $request->deleteAppBlockRequest = new DeleteAppBlockRequest();
    $request->deleteAppBlockRequest->name = 'Mrs. Deanna Kuhn';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteAppBlockXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_APP_BLOCK;

    $response = $sdk->sdk->deleteAppBlock($request);

    if ($response->deleteAppBlockResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deletes an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->deleteApplicationRequest = new DeleteApplicationRequest();
    $request->deleteApplicationRequest->name = 'Mindy Walter';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = DeleteApplicationXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_APPLICATION;

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectoryConfig

Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectoryConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectoryConfigRequest();
    $request->deleteDirectoryConfigRequest = new DeleteDirectoryConfigRequest();
    $request->deleteDirectoryConfigRequest->directoryName = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DeleteDirectoryConfigXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_DIRECTORY_CONFIG;

    $response = $sdk->sdk->deleteDirectoryConfig($request);

    if ($response->deleteDirectoryConfigResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEntitlement

Deletes the specified entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntitlementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEntitlementRequest();
    $request->deleteEntitlementRequest = new DeleteEntitlementRequest();
    $request->deleteEntitlementRequest->name = 'Ervin McLaughlin';
    $request->deleteEntitlementRequest->stackName = 'delectus';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteEntitlementXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_ENTITLEMENT;

    $response = $sdk->sdk->deleteEntitlement($request);

    if ($response->deleteEntitlementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleet

Deletes the specified fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetRequest();
    $request->deleteFleetRequest = new DeleteFleetRequest();
    $request->deleteFleetRequest->name = 'Mindy Marks';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_FLEET;

    $response = $sdk->sdk->deleteFleet($request);

    if ($response->deleteFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImage

Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageRequest();
    $request->deleteImageRequest = new DeleteImageRequest();
    $request->deleteImageRequest->name = 'Vera Kuhlman';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = DeleteImageXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE;

    $response = $sdk->sdk->deleteImage($request);

    if ($response->deleteImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImageBuilder

Deletes the specified image builder and releases the capacity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImageBuilderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImageBuilderRequest();
    $request->deleteImageBuilderRequest = new DeleteImageBuilderRequest();
    $request->deleteImageBuilderRequest->name = 'Stephen Roberts';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DeleteImageBuilderXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE_BUILDER;

    $response = $sdk->sdk->deleteImageBuilder($request);

    if ($response->deleteImageBuilderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImagePermissions

Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagePermissionsRequest();
    $request->deleteImagePermissionsRequest = new DeleteImagePermissionsRequest();
    $request->deleteImagePermissionsRequest->name = 'Edna Klocko';
    $request->deleteImagePermissionsRequest->sharedAccountId = 'eius';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DeleteImagePermissionsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE_PERMISSIONS;

    $response = $sdk->sdk->deleteImagePermissions($request);

    if ($response->deleteImagePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStack

Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStackRequest();
    $request->deleteStackRequest = new DeleteStackRequest();
    $request->deleteStackRequest->name = 'Rosie McKenzie';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteStackXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_STACK;

    $response = $sdk->sdk->deleteStack($request);

    if ($response->deleteStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsageReportSubscription

Disables usage report generation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageReportSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageReportSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsageReportSubscriptionRequest();
    $request->requestBody = [
        'officiis' => 'qui',
        'dolorum' => 'a',
        'esse' => 'harum',
        'iusto' => 'ipsum',
    ];
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteUsageReportSubscriptionXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_USAGE_REPORT_SUBSCRIPTION;

    $response = $sdk->sdk->deleteUsageReportSubscription($request);

    if ($response->deleteUsageReportSubscriptionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Deletes a user from the user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->authenticationType = AuthenticationTypeEnum::API;
    $request->deleteUserRequest->userName = 'sapiente';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->deleteUserResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppBlocks

Retrieves a list that describes one or more app blocks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppBlocksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAppBlocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppBlocksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppBlocksRequest();
    $request->describeAppBlocksRequest = new DescribeAppBlocksRequest();
    $request->describeAppBlocksRequest->arns = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->describeAppBlocksRequest->maxResults = 214880;
    $request->describeAppBlocksRequest->nextToken = 'incidunt';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DescribeAppBlocksXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APP_BLOCKS;

    $response = $sdk->sdk->describeAppBlocks($request);

    if ($response->describeAppBlocksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplicationFleetAssociations

Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationFleetAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationFleetAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationFleetAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationFleetAssociationsRequest();
    $request->describeApplicationFleetAssociationsRequest = new DescribeApplicationFleetAssociationsRequest();
    $request->describeApplicationFleetAssociationsRequest->applicationArn = 'totam';
    $request->describeApplicationFleetAssociationsRequest->fleetName = 'incidunt';
    $request->describeApplicationFleetAssociationsRequest->maxResults = 132068;
    $request->describeApplicationFleetAssociationsRequest->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeApplicationFleetAssociationsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APPLICATION_FLEET_ASSOCIATIONS;

    $response = $sdk->sdk->describeApplicationFleetAssociations($request);

    if ($response->describeApplicationFleetAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplications

Retrieves a list that describes one or more applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationsRequest();
    $request->describeApplicationsRequest = new DescribeApplicationsRequest();
    $request->describeApplicationsRequest->arns = [
        'fugit',
    ];
    $request->describeApplicationsRequest->maxResults = 164959;
    $request->describeApplicationsRequest->nextToken = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = DescribeApplicationsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_APPLICATIONS;

    $response = $sdk->sdk->describeApplications($request);

    if ($response->describeApplicationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectoryConfigs

<p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectoryConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectoryConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectoryConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectoryConfigsRequest();
    $request->describeDirectoryConfigsRequest = new DescribeDirectoryConfigsRequest();
    $request->describeDirectoryConfigsRequest->directoryNames = [
        'et',
        'saepe',
        'ipsum',
    ];
    $request->describeDirectoryConfigsRequest->maxResults = 83422;
    $request->describeDirectoryConfigsRequest->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = DescribeDirectoryConfigsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_DIRECTORY_CONFIGS;

    $response = $sdk->sdk->describeDirectoryConfigs($request);

    if ($response->describeDirectoryConfigsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEntitlements

Retrieves a list that describes one of more entitlements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitlementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntitlementsRequest();
    $request->describeEntitlementsRequest = new DescribeEntitlementsRequest();
    $request->describeEntitlementsRequest->maxResults = 286915;
    $request->describeEntitlementsRequest->name = 'Mr. Sonya Bradtke';
    $request->describeEntitlementsRequest->nextToken = 'itaque';
    $request->describeEntitlementsRequest->stackName = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeEntitlementsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_ENTITLEMENTS;

    $response = $sdk->sdk->describeEntitlements($request);

    if ($response->describeEntitlementsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleets

Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFleetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetsRequest();
    $request->describeFleetsRequest = new DescribeFleetsRequest();
    $request->describeFleetsRequest->names = [
        'quae',
    ];
    $request->describeFleetsRequest->nextToken = 'laudantium';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeFleetsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_FLEETS;

    $response = $sdk->sdk->describeFleets($request);

    if ($response->describeFleetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageBuilders

Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageBuildersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageBuildersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageBuildersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageBuildersRequest();
    $request->describeImageBuildersRequest = new DescribeImageBuildersRequest();
    $request->describeImageBuildersRequest->maxResults = 218403;
    $request->describeImageBuildersRequest->names = [
        'voluptate',
        'consectetur',
        'vero',
        'tenetur',
    ];
    $request->describeImageBuildersRequest->nextToken = 'dignissimos';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeImageBuildersXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGE_BUILDERS;

    $response = $sdk->sdk->describeImageBuilders($request);

    if ($response->describeImageBuildersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImagePermissions

Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImagePermissionsRequest();
    $request->describeImagePermissionsRequest = new DescribeImagePermissionsRequest();
    $request->describeImagePermissionsRequest->maxResults = 498140;
    $request->describeImagePermissionsRequest->name = 'Rosemarie Stanton';
    $request->describeImagePermissionsRequest->nextToken = 'impedit';
    $request->describeImagePermissionsRequest->sharedAwsAccountIds = [
        'voluptatibus',
    ];
    $request->maxResults = 'exercitationem';
    $request->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = DescribeImagePermissionsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGE_PERMISSIONS;

    $response = $sdk->sdk->describeImagePermissions($request);

    if ($response->describeImagePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImages

Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\VisibilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImagesRequest();
    $request->describeImagesRequest = new DescribeImagesRequest();
    $request->describeImagesRequest->arns = [
        'officia',
    ];
    $request->describeImagesRequest->maxResults = 269479;
    $request->describeImagesRequest->names = [
        'ea',
        'aspernatur',
    ];
    $request->describeImagesRequest->nextToken = 'vel';
    $request->describeImagesRequest->type = VisibilityTypeEnum::SHARED;
    $request->maxResults = 'magnam';
    $request->nextToken = 'ratione';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = DescribeImagesXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGES;

    $response = $sdk->sdk->describeImages($request);

    if ($response->describeImagesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSessions

Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSessionsRequest();
    $request->describeSessionsRequest = new DescribeSessionsRequest();
    $request->describeSessionsRequest->authenticationType = AuthenticationTypeEnum::AWS_AD;
    $request->describeSessionsRequest->fleetName = 'excepturi';
    $request->describeSessionsRequest->limit = 972920;
    $request->describeSessionsRequest->nextToken = 'nostrum';
    $request->describeSessionsRequest->stackName = 'sapiente';
    $request->describeSessionsRequest->userId = 'quisquam';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = DescribeSessionsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_SESSIONS;

    $response = $sdk->sdk->describeSessions($request);

    if ($response->describeSessionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStacks

Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStacksRequest();
    $request->describeStacksRequest = new DescribeStacksRequest();
    $request->describeStacksRequest->names = [
        'ea',
        'quo',
    ];
    $request->describeStacksRequest->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeStacksXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_STACKS;

    $response = $sdk->sdk->describeStacks($request);

    if ($response->describeStacksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUsageReportSubscriptions

Retrieves a list that describes one or more usage report subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsageReportSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUsageReportSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsageReportSubscriptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUsageReportSubscriptionsRequest();
    $request->describeUsageReportSubscriptionsRequest = new DescribeUsageReportSubscriptionsRequest();
    $request->describeUsageReportSubscriptionsRequest->maxResults = 11427;
    $request->describeUsageReportSubscriptionsRequest->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = DescribeUsageReportSubscriptionsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USAGE_REPORT_SUBSCRIPTIONS;

    $response = $sdk->sdk->describeUsageReportSubscriptions($request);

    if ($response->describeUsageReportSubscriptionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserStackAssociations

<p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserStackAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserStackAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserStackAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserStackAssociationsRequest();
    $request->describeUserStackAssociationsRequest = new DescribeUserStackAssociationsRequest();
    $request->describeUserStackAssociationsRequest->authenticationType = AuthenticationTypeEnum::USERPOOL;
    $request->describeUserStackAssociationsRequest->maxResults = 672048;
    $request->describeUserStackAssociationsRequest->nextToken = 'placeat';
    $request->describeUserStackAssociationsRequest->stackName = 'velit';
    $request->describeUserStackAssociationsRequest->userName = 'eum';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = DescribeUserStackAssociationsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USER_STACK_ASSOCIATIONS;

    $response = $sdk->sdk->describeUserStackAssociations($request);

    if ($response->describeUserStackAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUsers

Retrieves a list that describes one or more specified users in the user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUsersRequest();
    $request->describeUsersRequest = new DescribeUsersRequest();
    $request->describeUsersRequest->authenticationType = AuthenticationTypeEnum::API;
    $request->describeUsersRequest->maxResults = 270328;
    $request->describeUsersRequest->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DescribeUsersXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USERS;

    $response = $sdk->sdk->describeUsers($request);

    if ($response->describeUsersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableUser

Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisableUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableUserRequest();
    $request->disableUserRequest = new DisableUserRequest();
    $request->disableUserRequest->authenticationType = AuthenticationTypeEnum::SAML;
    $request->disableUserRequest->userName = 'esse';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DisableUserXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DISABLE_USER;

    $response = $sdk->sdk->disableUser($request);

    if ($response->disableUserResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateApplicationFleet

Disassociates the specified application from the fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateApplicationFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateApplicationFleetRequest();
    $request->disassociateApplicationFleetRequest = new DisassociateApplicationFleetRequest();
    $request->disassociateApplicationFleetRequest->applicationArn = 'suscipit';
    $request->disassociateApplicationFleetRequest->fleetName = 'assumenda';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DisassociateApplicationFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_APPLICATION_FLEET;

    $response = $sdk->sdk->disassociateApplicationFleet($request);

    if ($response->disassociateApplicationFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateApplicationFromEntitlement

Deletes the specified application from the specified entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationFromEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateApplicationFromEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateApplicationFromEntitlementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateApplicationFromEntitlementRequest();
    $request->disassociateApplicationFromEntitlementRequest = new DisassociateApplicationFromEntitlementRequest();
    $request->disassociateApplicationFromEntitlementRequest->applicationIdentifier = 'neque';
    $request->disassociateApplicationFromEntitlementRequest->entitlementName = 'quo';
    $request->disassociateApplicationFromEntitlementRequest->stackName = 'illum';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DisassociateApplicationFromEntitlementXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_APPLICATION_FROM_ENTITLEMENT;

    $response = $sdk->sdk->disassociateApplicationFromEntitlement($request);

    if ($response->disassociateApplicationFromEntitlementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFleet

Disassociates the specified fleet from the specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFleetRequest();
    $request->disassociateFleetRequest = new DisassociateFleetRequest();
    $request->disassociateFleetRequest->fleetName = 'consequatur';
    $request->disassociateFleetRequest->stackName = 'tempora';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DisassociateFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_DISASSOCIATE_FLEET;

    $response = $sdk->sdk->disassociateFleet($request);

    if ($response->disassociateFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableUser

Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableUserRequest();
    $request->enableUserRequest = new EnableUserRequest();
    $request->enableUserRequest->authenticationType = AuthenticationTypeEnum::API;
    $request->enableUserRequest->userName = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = EnableUserXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_ENABLE_USER;

    $response = $sdk->sdk->enableUser($request);

    if ($response->enableUserResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## expireSession

Immediately stops the specified streaming session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExpireSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExpireSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExpireSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExpireSessionRequest();
    $request->expireSessionRequest = new ExpireSessionRequest();
    $request->expireSessionRequest->sessionId = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ExpireSessionXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_EXPIRE_SESSION;

    $response = $sdk->sdk->expireSession($request);

    if ($response->expireSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedFleets

Retrieves the name of the fleet that is associated with the specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedFleetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociatedFleetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedFleetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedFleetsRequest();
    $request->listAssociatedFleetsRequest = new ListAssociatedFleetsRequest();
    $request->listAssociatedFleetsRequest->nextToken = 'porro';
    $request->listAssociatedFleetsRequest->stackName = 'eum';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = ListAssociatedFleetsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_FLEETS;

    $response = $sdk->sdk->listAssociatedFleets($request);

    if ($response->listAssociatedFleetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociatedStacks

Retrieves the name of the stack with which the specified fleet is associated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedStacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociatedStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociatedStacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociatedStacksRequest();
    $request->listAssociatedStacksRequest = new ListAssociatedStacksRequest();
    $request->listAssociatedStacksRequest->fleetName = 'incidunt';
    $request->listAssociatedStacksRequest->nextToken = 'atque';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = ListAssociatedStacksXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_STACKS;

    $response = $sdk->sdk->listAssociatedStacks($request);

    if ($response->listAssociatedStacksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntitledApplications

Retrieves a list of entitled applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitledApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntitledApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitledApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntitledApplicationsRequest();
    $request->listEntitledApplicationsRequest = new ListEntitledApplicationsRequest();
    $request->listEntitledApplicationsRequest->entitlementName = 'explicabo';
    $request->listEntitledApplicationsRequest->maxResults = 903984;
    $request->listEntitledApplicationsRequest->nextToken = 'occaecati';
    $request->listEntitledApplicationsRequest->stackName = 'atque';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ListEntitledApplicationsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_LIST_ENTITLED_APPLICATIONS;

    $response = $sdk->sdk->listEntitledApplications($request);

    if ($response->listEntitledApplicationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
    $request->listTagsForResourceRequest->resourceArn = 'nam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFleet

Starts the specified fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFleetRequest();
    $request->startFleetRequest = new StartFleetRequest();
    $request->startFleetRequest->name = 'Tracy Harber';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = StartFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_START_FLEET;

    $response = $sdk->sdk->startFleet($request);

    if ($response->startFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImageBuilder

Starts the specified image builder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImageBuilderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImageBuilderRequest();
    $request->startImageBuilderRequest = new StartImageBuilderRequest();
    $request->startImageBuilderRequest->appstreamAgentVersion = 'minus';
    $request->startImageBuilderRequest->name = 'Miranda Feest';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = StartImageBuilderXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_START_IMAGE_BUILDER;

    $response = $sdk->sdk->startImageBuilder($request);

    if ($response->startImageBuilderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopFleet

Stops the specified fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopFleetRequest();
    $request->stopFleetRequest = new StopFleetRequest();
    $request->stopFleetRequest->name = 'Kirk Stracke';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = StopFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_STOP_FLEET;

    $response = $sdk->sdk->stopFleet($request);

    if ($response->stopFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopImageBuilder

Stops the specified image builder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopImageBuilderRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopImageBuilderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopImageBuilderRequest();
    $request->stopImageBuilderRequest = new StopImageBuilderRequest();
    $request->stopImageBuilderRequest->name = 'Dr. Gene Wiegand';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = StopImageBuilderXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_STOP_IMAGE_BUILDER;

    $response = $sdk->sdk->stopImageBuilder($request);

    if ($response->stopImageBuilderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'sapiente';
    $request->tagResourceRequest->tags = [
        'ullam' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>

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
    $request->untagResourceRequest->resourceArn = 'deleniti';
    $request->untagResourceRequest->tagKeys = [
        'dolorum',
        'architecto',
        'omnis',
        'tenetur',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Updates the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationRequest = new UpdateApplicationRequest();
    $request->updateApplicationRequest->appBlockArn = 'consectetur';
    $request->updateApplicationRequest->attributesToDelete = [
        ApplicationAttributeEnum::WORKING_DIRECTORY,
    ];
    $request->updateApplicationRequest->description = 'temporibus';
    $request->updateApplicationRequest->displayName = 'accusantium';
    $request->updateApplicationRequest->iconS3Location = new S3Location();
    $request->updateApplicationRequest->iconS3Location->s3Bucket = 'rem';
    $request->updateApplicationRequest->iconS3Location->s3Key = 'aut';
    $request->updateApplicationRequest->launchParameters = 'laudantium';
    $request->updateApplicationRequest->launchPath = 'eum';
    $request->updateApplicationRequest->name = 'Andrew Little I';
    $request->updateApplicationRequest->workingDirectory = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDirectoryConfig

Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDirectoryConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthProperties;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectoryConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDirectoryConfigRequest();
    $request->updateDirectoryConfigRequest = new UpdateDirectoryConfigRequest();
    $request->updateDirectoryConfigRequest->certificateBasedAuthProperties = new CertificateBasedAuthProperties();
    $request->updateDirectoryConfigRequest->certificateBasedAuthProperties->certificateAuthorityArn = 'maiores';
    $request->updateDirectoryConfigRequest->certificateBasedAuthProperties->status = CertificateBasedAuthStatusEnum::ENABLED;
    $request->updateDirectoryConfigRequest->directoryName = 'velit';
    $request->updateDirectoryConfigRequest->organizationalUnitDistinguishedNames = [
        'voluptas',
        'asperiores',
        'aperiam',
        'ea',
    ];
    $request->updateDirectoryConfigRequest->serviceAccountCredentials = new ServiceAccountCredentials();
    $request->updateDirectoryConfigRequest->serviceAccountCredentials->accountName = 'quaerat';
    $request->updateDirectoryConfigRequest->serviceAccountCredentials->accountPassword = 'consequuntur';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = UpdateDirectoryConfigXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_DIRECTORY_CONFIG;

    $response = $sdk->sdk->updateDirectoryConfig($request);

    if ($response->updateDirectoryConfigResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEntitlement

Updates the specified entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementAttribute;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEntitlementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEntitlementRequest();
    $request->updateEntitlementRequest = new UpdateEntitlementRequest();
    $request->updateEntitlementRequest->appVisibility = AppVisibilityEnum::ALL;
    $request->updateEntitlementRequest->attributes = [
        new EntitlementAttribute(),
        new EntitlementAttribute(),
    ];
    $request->updateEntitlementRequest->description = 'porro';
    $request->updateEntitlementRequest->name = 'Francisco Bernier';
    $request->updateEntitlementRequest->stackName = 'id';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = UpdateEntitlementXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_ENTITLEMENT;

    $response = $sdk->sdk->updateEntitlement($request);

    if ($response->updateEntitlementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFleet

<p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\FleetAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeCapacity;
use \OpenAPI\OpenAPI\Models\Shared\DomainJoinInfo;
use \OpenAPI\OpenAPI\Models\Shared\PlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\StreamViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetRequest();
    $request->updateFleetRequest = new UpdateFleetRequest();
    $request->updateFleetRequest->attributesToDelete = [
        FleetAttributeEnum::DOMAIN_JOIN_INFO,
        FleetAttributeEnum::IAM_ROLE_ARN,
    ];
    $request->updateFleetRequest->computeCapacity = new ComputeCapacity();
    $request->updateFleetRequest->computeCapacity->desiredInstances = 427834;
    $request->updateFleetRequest->deleteVpcConfig = false;
    $request->updateFleetRequest->description = 'labore';
    $request->updateFleetRequest->disconnectTimeoutInSeconds = 822560;
    $request->updateFleetRequest->displayName = 'facilis';
    $request->updateFleetRequest->domainJoinInfo = new DomainJoinInfo();
    $request->updateFleetRequest->domainJoinInfo->directoryName = 'cum';
    $request->updateFleetRequest->domainJoinInfo->organizationalUnitDistinguishedName = 'commodi';
    $request->updateFleetRequest->enableDefaultInternetAccess = false;
    $request->updateFleetRequest->iamRoleArn = 'in';
    $request->updateFleetRequest->idleDisconnectTimeoutInSeconds = 360545;
    $request->updateFleetRequest->imageArn = 'reiciendis';
    $request->updateFleetRequest->imageName = 'assumenda';
    $request->updateFleetRequest->instanceType = 'nemo';
    $request->updateFleetRequest->maxConcurrentSessions = 924967;
    $request->updateFleetRequest->maxUserDurationInSeconds = 397533;
    $request->updateFleetRequest->name = 'Karla Feest';
    $request->updateFleetRequest->platform = PlatformTypeEnum::AMAZON_LINUX2;
    $request->updateFleetRequest->sessionScriptS3Location = new S3Location();
    $request->updateFleetRequest->sessionScriptS3Location->s3Bucket = 'facere';
    $request->updateFleetRequest->sessionScriptS3Location->s3Key = 'numquam';
    $request->updateFleetRequest->streamView = StreamViewEnum::DESKTOP;
    $request->updateFleetRequest->usbDeviceFilterStrings = [
        'reiciendis',
        'quidem',
    ];
    $request->updateFleetRequest->vpcConfig = new VpcConfig();
    $request->updateFleetRequest->vpcConfig->securityGroupIds = [
        'necessitatibus',
        'dolore',
        'sunt',
        'asperiores',
    ];
    $request->updateFleetRequest->vpcConfig->subnetIds = [
        'non',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = UpdateFleetXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_FLEET;

    $response = $sdk->sdk->updateFleet($request);

    if ($response->updateFleetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImagePermissions

Adds or updates permissions for the specified private image. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImagePermissions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImagePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImagePermissionsRequest();
    $request->updateImagePermissionsRequest = new UpdateImagePermissionsRequest();
    $request->updateImagePermissionsRequest->imagePermissions = new ImagePermissions();
    $request->updateImagePermissionsRequest->imagePermissions->allowFleet = false;
    $request->updateImagePermissionsRequest->imagePermissions->allowImageBuilder = false;
    $request->updateImagePermissionsRequest->name = 'Rick Beer';
    $request->updateImagePermissionsRequest->sharedAccountId = 'vitae';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = UpdateImagePermissionsXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_IMAGE_PERMISSIONS;

    $response = $sdk->sdk->updateImagePermissions($request);

    if ($response->updateImagePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStack

Updates the specified fields for the specified stack.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateStackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AccessEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSettings;
use \OpenAPI\OpenAPI\Models\Shared\StackAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StorageConnector;
use \OpenAPI\OpenAPI\Models\Shared\StorageConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingExperienceSettings;
use \OpenAPI\OpenAPI\Models\Shared\PreferredProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSetting;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStackRequest();
    $request->updateStackRequest = new UpdateStackRequest();
    $request->updateStackRequest->accessEndpoints = [
        new AccessEndpoint(),
        new AccessEndpoint(),
    ];
    $request->updateStackRequest->applicationSettings = new ApplicationSettings();
    $request->updateStackRequest->applicationSettings->enabled = false;
    $request->updateStackRequest->applicationSettings->settingsGroup = 'nobis';
    $request->updateStackRequest->attributesToDelete = [
        StackAttributeEnum::STORAGE_CONNECTOR_GOOGLE_DRIVE,
        StackAttributeEnum::IAM_ROLE_ARN,
        StackAttributeEnum::STORAGE_CONNECTOR_GOOGLE_DRIVE,
    ];
    $request->updateStackRequest->deleteStorageConnectors = false;
    $request->updateStackRequest->description = 'blanditiis';
    $request->updateStackRequest->displayName = 'in';
    $request->updateStackRequest->embedHostDomains = [
        'aliquam',
        'officiis',
    ];
    $request->updateStackRequest->feedbackURL = 'temporibus';
    $request->updateStackRequest->name = 'Sherry Ritchie';
    $request->updateStackRequest->redirectURL = 'hic';
    $request->updateStackRequest->storageConnectors = [
        new StorageConnector(),
    ];
    $request->updateStackRequest->streamingExperienceSettings = new StreamingExperienceSettings();
    $request->updateStackRequest->streamingExperienceSettings->preferredProtocol = PreferredProtocolEnum::UDP;
    $request->updateStackRequest->userSettings = [
        new UserSetting(),
        new UserSetting(),
        new UserSetting(),
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = UpdateStackXAmzTargetEnum::PHOTON_ADMIN_PROXY_SERVICE_UPDATE_STACK;

    $response = $sdk->sdk->updateStack($request);

    if ($response->updateStackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

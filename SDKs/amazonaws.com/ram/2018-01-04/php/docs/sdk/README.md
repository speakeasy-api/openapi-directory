# SDK

## Overview

<p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users. </p> <p>To learn more about RAM, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ram/>
### Available Operations

* [acceptResourceShareInvitation](#acceptresourceshareinvitation) - Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
* [associateResourceShare](#associateresourceshare) - Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
* [associateResourceSharePermission](#associateresourcesharepermission) - Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
* [createPermission](#createpermission) - Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.
* [createPermissionVersion](#createpermissionversion) - <p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>
* [createResourceShare](#createresourceshare) - <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
* [deletePermission](#deletepermission) - Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.
* [deletePermissionVersion](#deletepermissionversion) - <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>
* [deleteResourceShare](#deleteresourceshare) - <p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>
* [disassociateResourceShare](#disassociateresourceshare) - Removes the specified principals or resources from participating in the specified resource share.
* [disassociateResourceSharePermission](#disassociateresourcesharepermission) - Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
* [enableSharingWithAwsOrganization](#enablesharingwithawsorganization) - <p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>
* [getPermission](#getpermission) - Retrieves the contents of a managed permission in JSON format.
* [getResourcePolicies](#getresourcepolicies) - Retrieves the resource policies for the specified resources that you own and have shared.
* [getResourceShareAssociations](#getresourceshareassociations) - Retrieves the lists of resources and principals that associated for resource shares that you own.
* [getResourceShareInvitations](#getresourceshareinvitations) - Retrieves details about invitations that you have received for resource shares.
* [getResourceShares](#getresourceshares) - Retrieves details about the resource shares that you own or that are shared with you.
* [listPendingInvitationResources](#listpendinginvitationresources) - Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
* [listPermissionAssociations](#listpermissionassociations) - Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
* [listPermissionVersions](#listpermissionversions) - Lists the available versions of the specified RAM permission.
* [listPermissions](#listpermissions) - Retrieves a list of available RAM permissions that you can use for the supported resource types. 
* [listPrincipals](#listprincipals) - Lists the principals that you are sharing resources with or that are sharing resources with you.
* [listReplacePermissionAssociationsWork](#listreplacepermissionassociationswork) - Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.
* [listResourceSharePermissions](#listresourcesharepermissions) - Lists the RAM permissions that are associated with a resource share.
* [listResourceTypes](#listresourcetypes) - Lists the resource types that can be shared by RAM.
* [listResources](#listresources) - Lists the resources that you added to a resource share or the resources that are shared with you.
* [promotePermissionCreatedFromPolicy](#promotepermissioncreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>
* [promoteResourceShareCreatedFromPolicy](#promoteresourcesharecreatedfrompolicy) - <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>
* [rejectResourceShareInvitation](#rejectresourceshareinvitation) - Rejects an invitation to a resource share from another Amazon Web Services account.
* [replacePermissionAssociations](#replacepermissionassociations) - <p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>
* [setDefaultPermissionVersion](#setdefaultpermissionversion) - Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.
* [tagResource](#tagresource) - <p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>
* [untagResource](#untagresource) - Removes the specified tag key and value pairs from the specified resource share or managed permission.
* [updateResourceShare](#updateresourceshare) - Modifies some of the properties of the specified resource share.

## acceptResourceShareInvitation

Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptResourceShareInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptResourceShareInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptResourceShareInvitationRequest();
    $request->requestBody = new AcceptResourceShareInvitationRequestBody();
    $request->requestBody->clientToken = 'error';
    $request->requestBody->resourceShareInvitationArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->acceptResourceShareInvitation($request);

    if ($response->acceptResourceShareInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateResourceShare

Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResourceShareRequest();
    $request->requestBody = new AssociateResourceShareRequestBody();
    $request->requestBody->clientToken = 'suscipit';
    $request->requestBody->principals = [
        'minus',
        'placeat',
    ];
    $request->requestBody->resourceArns = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->requestBody->resourceShareArn = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->associateResourceShare($request);

    if ($response->associateResourceShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateResourceSharePermission

Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceSharePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceSharePermissionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResourceSharePermissionRequest();
    $request->requestBody = new AssociateResourceSharePermissionRequestBody();
    $request->requestBody->clientToken = 'repellendus';
    $request->requestBody->permissionArn = 'sapiente';
    $request->requestBody->permissionVersion = 778157;
    $request->requestBody->replace = false;
    $request->requestBody->resourceShareArn = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->associateResourceSharePermission($request);

    if ($response->associateResourceSharePermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPermission

Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermissionRequest();
    $request->requestBody = new CreatePermissionRequestBody();
    $request->requestBody->clientToken = 'totam';
    $request->requestBody->name = 'Omar Carroll';
    $request->requestBody->policyTemplate = 'occaecati';
    $request->requestBody->resourceType = 'fugit';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->createPermission($request);

    if ($response->createPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPermissionVersion

<p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermissionVersionRequest();
    $request->requestBody = new CreatePermissionVersionRequestBody();
    $request->requestBody->clientToken = 'qui';
    $request->requestBody->permissionArn = 'impedit';
    $request->requestBody->policyTemplate = 'cum';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->createPermissionVersion($request);

    if ($response->createPermissionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourceShare

<p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceShareRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceShareRequest();
    $request->requestBody = new CreateResourceShareRequestBody();
    $request->requestBody->allowExternalPrincipals = false;
    $request->requestBody->clientToken = 'sed';
    $request->requestBody->name = 'Curtis Morissette';
    $request->requestBody->permissionArns = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->requestBody->principals = [
        'saepe',
        'quidem',
    ];
    $request->requestBody->resourceArns = [
        'ipsa',
    ];
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->createResourceShare($request);

    if ($response->createResourceShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermission

Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->clientToken = 'iure';
    $request->permissionArn = 'culpa';

    $response = $sdk->sdk->deletePermission($request);

    if ($response->deletePermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermissionVersion

<p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionVersionRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->clientToken = 'repellat';
    $request->permissionArn = 'mollitia';
    $request->permissionVersion = 581850;

    $response = $sdk->sdk->deletePermissionVersion($request);

    if ($response->deletePermissionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceShare

<p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceShareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceShareRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->clientToken = 'quis';
    $request->resourceShareArn = 'vitae';

    $response = $sdk->sdk->deleteResourceShare($request);

    if ($response->deleteResourceShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResourceShare

Removes the specified principals or resources from participating in the specified resource share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResourceShareRequest();
    $request->requestBody = new DisassociateResourceShareRequestBody();
    $request->requestBody->clientToken = 'laborum';
    $request->requestBody->principals = [
        'enim',
        'odit',
        'quo',
    ];
    $request->requestBody->resourceArns = [
        'tenetur',
    ];
    $request->requestBody->resourceShareArn = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->disassociateResourceShare($request);

    if ($response->disassociateResourceShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResourceSharePermission

Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceSharePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResourceSharePermissionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResourceSharePermissionRequest();
    $request->requestBody = new DisassociateResourceSharePermissionRequestBody();
    $request->requestBody->clientToken = 'quasi';
    $request->requestBody->permissionArn = 'reiciendis';
    $request->requestBody->resourceShareArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->disassociateResourceSharePermission($request);

    if ($response->disassociateResourceSharePermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableSharingWithAwsOrganization

<p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableSharingWithAwsOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableSharingWithAwsOrganizationRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->enableSharingWithAwsOrganization($request);

    if ($response->enableSharingWithAwsOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermission

Retrieves the contents of a managed permission in JSON format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionRequest();
    $request->requestBody = new GetPermissionRequestBody();
    $request->requestBody->permissionArn = 'corporis';
    $request->requestBody->permissionVersion = 296140;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getPermission($request);

    if ($response->getPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicies

Retrieves the resource policies for the specified resources that you own and have shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePoliciesRequest();
    $request->requestBody = new GetResourcePoliciesRequestBody();
    $request->requestBody->maxResults = 64147;
    $request->requestBody->nextToken = 'ipsum';
    $request->requestBody->principal = 'quidem';
    $request->requestBody->resourceArns = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->maxResults = 'itaque';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->getResourcePolicies($request);

    if ($response->getResourcePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceShareAssociations

Retrieves the lists of resources and principals that associated for resource shares that you own.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareAssociationsRequestBodyAssociationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareAssociationsRequestBodyAssociationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceShareAssociationsRequest();
    $request->requestBody = new GetResourceShareAssociationsRequestBody();
    $request->requestBody->associationStatus = GetResourceShareAssociationsRequestBodyAssociationStatusEnum::ASSOCIATED;
    $request->requestBody->associationType = GetResourceShareAssociationsRequestBodyAssociationTypeEnum::PRINCIPAL;
    $request->requestBody->maxResults = 667411;
    $request->requestBody->nextToken = 'quibusdam';
    $request->requestBody->principal = 'explicabo';
    $request->requestBody->resourceArn = 'deserunt';
    $request->requestBody->resourceShareArns = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->maxResults = 'ipsam';
    $request->nextToken = 'alias';

    $response = $sdk->sdk->getResourceShareAssociations($request);

    if ($response->getResourceShareAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceShareInvitations

Retrieves details about invitations that you have received for resource shares.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceShareInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceShareInvitationsRequest();
    $request->requestBody = new GetResourceShareInvitationsRequestBody();
    $request->requestBody->maxResults = 146441;
    $request->requestBody->nextToken = 'dolorum';
    $request->requestBody->resourceShareArns = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->requestBody->resourceShareInvitationArns = [
        'delectus',
        'eum',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->maxResults = 'officia';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->getResourceShareInvitations($request);

    if ($response->getResourceShareInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceShares

Retrieves details about the resource shares that you own or that are shared with you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSharesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSharesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSharesRequestBodyResourceOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceSharesRequestBodyResourceShareStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceSharesRequest();
    $request->requestBody = new GetResourceSharesRequestBody();
    $request->requestBody->maxResults = 891555;
    $request->requestBody->name = 'Wilbur King';
    $request->requestBody->nextToken = 'maiores';
    $request->requestBody->permissionArn = 'rerum';
    $request->requestBody->permissionVersion = 116202;
    $request->requestBody->resourceOwner = GetResourceSharesRequestBodyResourceOwnerEnum::SELF;
    $request->requestBody->resourceShareArns = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->requestBody->resourceShareStatus = GetResourceSharesRequestBodyResourceShareStatusEnum::DELETED;
    $request->requestBody->tagFilters = [
        new TagFilter(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->maxResults = 'id';
    $request->nextToken = 'blanditiis';

    $response = $sdk->sdk->getResourceShares($request);

    if ($response->getResourceSharesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPendingInvitationResources

Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPendingInvitationResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPendingInvitationResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPendingInvitationResourcesRequestBodyResourceRegionScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPendingInvitationResourcesRequest();
    $request->requestBody = new ListPendingInvitationResourcesRequestBody();
    $request->requestBody->maxResults = 533206;
    $request->requestBody->nextToken = 'sapiente';
    $request->requestBody->resourceRegionScope = ListPendingInvitationResourcesRequestBodyResourceRegionScopeEnum::ALL;
    $request->requestBody->resourceShareInvitationArn = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 'magnam';
    $request->nextToken = 'distinctio';

    $response = $sdk->sdk->listPendingInvitationResources($request);

    if ($response->listPendingInvitationResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissionAssociations

Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionAssociationsRequestBodyAssociationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionAssociationsRequestBodyFeatureSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionAssociationsRequest();
    $request->requestBody = new ListPermissionAssociationsRequestBody();
    $request->requestBody->associationStatus = ListPermissionAssociationsRequestBodyAssociationStatusEnum::DISASSOCIATING;
    $request->requestBody->defaultVersion = false;
    $request->requestBody->featureSet = ListPermissionAssociationsRequestBodyFeatureSetEnum::CREATED_FROM_POLICY;
    $request->requestBody->maxResults = 290077;
    $request->requestBody->nextToken = 'suscipit';
    $request->requestBody->permissionArn = 'natus';
    $request->requestBody->permissionVersion = 749170;
    $request->requestBody->resourceType = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->maxResults = 'provident';
    $request->nextToken = 'quos';

    $response = $sdk->sdk->listPermissionAssociations($request);

    if ($response->listPermissionAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissionVersions

Lists the available versions of the specified RAM permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionVersionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionVersionsRequest();
    $request->requestBody = new ListPermissionVersionsRequestBody();
    $request->requestBody->maxResults = 574325;
    $request->requestBody->nextToken = 'accusantium';
    $request->requestBody->permissionArn = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->maxResults = 'nemo';
    $request->nextToken = 'quasi';

    $response = $sdk->sdk->listPermissionVersions($request);

    if ($response->listPermissionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissions

Retrieves a list of available RAM permissions that you can use for the supported resource types. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBodyPermissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionsRequest();
    $request->requestBody = new ListPermissionsRequestBody();
    $request->requestBody->maxResults = 435865;
    $request->requestBody->nextToken = 'doloribus';
    $request->requestBody->permissionType = ListPermissionsRequestBodyPermissionTypeEnum::CUSTOMER_MANAGED;
    $request->requestBody->resourceType = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->maxResults = 'ullam';
    $request->nextToken = 'expedita';

    $response = $sdk->sdk->listPermissions($request);

    if ($response->listPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrincipals

Lists the principals that you are sharing resources with or that are sharing resources with you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalsRequestBodyResourceOwnerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPrincipalsRequest();
    $request->requestBody = new ListPrincipalsRequestBody();
    $request->requestBody->maxResults = 469249;
    $request->requestBody->nextToken = 'repellat';
    $request->requestBody->principals = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];
    $request->requestBody->resourceArn = 'consequuntur';
    $request->requestBody->resourceOwner = ListPrincipalsRequestBodyResourceOwnerEnum::OTHER_ACCOUNTS;
    $request->requestBody->resourceShareArns = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->requestBody->resourceType = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->maxResults = 'ab';
    $request->nextToken = 'maiores';

    $response = $sdk->sdk->listPrincipals($request);

    if ($response->listPrincipalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReplacePermissionAssociationsWork

Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReplacePermissionAssociationsWorkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReplacePermissionAssociationsWorkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReplacePermissionAssociationsWorkRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReplacePermissionAssociationsWorkRequest();
    $request->requestBody = new ListReplacePermissionAssociationsWorkRequestBody();
    $request->requestBody->maxResults = 697429;
    $request->requestBody->nextToken = 'ipsam';
    $request->requestBody->status = ListReplacePermissionAssociationsWorkRequestBodyStatusEnum::COMPLETED;
    $request->requestBody->workIds = [
        'nam',
        'eaque',
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 'cumque';
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listReplacePermissionAssociationsWork($request);

    if ($response->listReplacePermissionAssociationsWorkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceSharePermissions

Lists the RAM permissions that are associated with a resource share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSharePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceSharePermissionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceSharePermissionsRequest();
    $request->requestBody = new ListResourceSharePermissionsRequestBody();
    $request->requestBody->maxResults = 944124;
    $request->requestBody->nextToken = 'libero';
    $request->requestBody->resourceShareArn = 'nobis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->maxResults = 'eos';
    $request->nextToken = 'perferendis';

    $response = $sdk->sdk->listResourceSharePermissions($request);

    if ($response->listResourceSharePermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceTypes

Lists the resource types that can be shared by RAM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceTypesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceTypesRequestBodyResourceRegionScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceTypesRequest();
    $request->requestBody = new ListResourceTypesRequestBody();
    $request->requestBody->maxResults = 170986;
    $request->requestBody->nextToken = 'minus';
    $request->requestBody->resourceRegionScope = ListResourceTypesRequestBodyResourceRegionScopeEnum::REGIONAL;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->maxResults = 'perspiciatis';
    $request->nextToken = 'voluptatem';

    $response = $sdk->sdk->listResourceTypes($request);

    if ($response->listResourceTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResources

Lists the resources that you added to a resource share or the resources that are shared with you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequestBodyResourceOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequestBodyResourceRegionScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesRequest();
    $request->requestBody = new ListResourcesRequestBody();
    $request->requestBody->maxResults = 783645;
    $request->requestBody->nextToken = 'consequuntur';
    $request->requestBody->principal = 'blanditiis';
    $request->requestBody->resourceArns = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->requestBody->resourceOwner = ListResourcesRequestBodyResourceOwnerEnum::SELF;
    $request->requestBody->resourceRegionScope = ListResourcesRequestBodyResourceRegionScopeEnum::GLOBAL;
    $request->requestBody->resourceShareArns = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->requestBody->resourceType = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 'dolorem';
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->listResources($request);

    if ($response->listResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## promotePermissionCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PromotePermissionCreatedFromPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PromotePermissionCreatedFromPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PromotePermissionCreatedFromPolicyRequest();
    $request->requestBody = new PromotePermissionCreatedFromPolicyRequestBody();
    $request->requestBody->clientToken = 'dolor';
    $request->requestBody->name = 'Tiffany Welch';
    $request->requestBody->permissionArn = 'voluptate';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->promotePermissionCreatedFromPolicy($request);

    if ($response->promotePermissionCreatedFromPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## promoteResourceShareCreatedFromPolicy

<p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PromoteResourceShareCreatedFromPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PromoteResourceShareCreatedFromPolicyRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->resourceShareArn = 'voluptas';

    $response = $sdk->sdk->promoteResourceShareCreatedFromPolicy($request);

    if ($response->promoteResourceShareCreatedFromPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectResourceShareInvitation

Rejects an invitation to a resource share from another Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectResourceShareInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectResourceShareInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectResourceShareInvitationRequest();
    $request->requestBody = new RejectResourceShareInvitationRequestBody();
    $request->requestBody->clientToken = 'natus';
    $request->requestBody->resourceShareInvitationArn = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->rejectResourceShareInvitation($request);

    if ($response->rejectResourceShareInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replacePermissionAssociations

<p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplacePermissionAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReplacePermissionAssociationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplacePermissionAssociationsRequest();
    $request->requestBody = new ReplacePermissionAssociationsRequestBody();
    $request->requestBody->clientToken = 'voluptate';
    $request->requestBody->fromPermissionArn = 'dolorum';
    $request->requestBody->fromPermissionVersion = 536579;
    $request->requestBody->toPermissionArn = 'omnis';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->replacePermissionAssociations($request);

    if ($response->replacePermissionAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDefaultPermissionVersion

Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultPermissionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultPermissionVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDefaultPermissionVersionRequest();
    $request->requestBody = new SetDefaultPermissionVersionRequestBody();
    $request->requestBody->clientToken = 'saepe';
    $request->requestBody->permissionArn = 'eius';
    $request->requestBody->permissionVersion = 137220;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->setDefaultPermissionVersion($request);

    if ($response->setDefaultPermissionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceArn = 'deserunt';
    $request->requestBody->resourceShareArn = 'provident';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tag key and value pairs from the specified resource share or managed permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'vel';
    $request->requestBody->resourceShareArn = 'quod';
    $request->requestBody->tagKeys = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceShare

Modifies some of the properties of the specified resource share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceShareRequest();
    $request->requestBody = new UpdateResourceShareRequestBody();
    $request->requestBody->allowExternalPrincipals = false;
    $request->requestBody->clientToken = 'accusamus';
    $request->requestBody->name = 'Darlene Effertz';
    $request->requestBody->resourceShareArn = 'nihil';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->updateResourceShare($request);

    if ($response->updateResourceShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

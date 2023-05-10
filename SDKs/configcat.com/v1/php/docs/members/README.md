# members

## Overview

With these endpoints you can manage your Members.

<a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.

### Available Operations

* [addMemberToGroup](#addmembertogroup) - Update Member Permissions
* [deleteOrganizationMember](#deleteorganizationmember) - Delete Member from Organization
* [deleteProductMember](#deleteproductmember) - Delete Member from Product
* [getOrganizationMembers](#getorganizationmembers) - List Organization Members
* [getProductMembers](#getproductmembers) - List Product Members
* [inviteMember](#invitemember) - Invite Member

## addMemberToGroup

This endpoint adds a Member identified by the `userId` to one or more Permission Groups. 
This endpoint can also be used to move a Member between Permission Groups within a Product.
Only a single Permission Group can be set per Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddMemberToGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddUserToGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMemberToGroupRequest();
    $request->addUserToGroupRequest = new AddUserToGroupRequest();
    $request->addUserToGroupRequest->permissionGroupIds = [
        970222,
        174658,
        663866,
        327988,
    ];
    $request->organizationId = '4a31e947-64a3-4e86-9e79-56f9251a5a9d';
    $request->userId = 'animi';

    $response = $sdk->members->addMemberToGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationMember

This endpoint removes a Member identified by the `userId` from the 
given Organization identified by the `organizationId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationMemberRequest();
    $request->organizationId = '660ff57b-faad-44f9-afc1-b4512c103264';
    $request->userId = 'rem';

    $response = $sdk->members->deleteOrganizationMember($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProductMember

This endpoint removes a Member identified by the `userId` from the 
given Product identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductMemberRequest();
    $request->productId = 'dc2f6151-99eb-4fd0-a9fe-6c632ca3aed0';
    $request->userId = 'quasi';

    $response = $sdk->members->deleteProductMember($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationMembers

This endpoint returns the list of Members that belongs 
to the given Organization, identified by the `organizationId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationMembersRequest();
    $request->organizationId = '17996312-fde0-4477-9778-ff61d0174763';

    $response = $sdk->members->getOrganizationMembers($request);

    if ($response->userModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductMembers

This endpoint returns the list of Members that belongs 
to the given Product, identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductMembersRequest();
    $request->productId = '60a15db6-a660-4659-a1ad-eaab5851d6c6';

    $response = $sdk->members->getProductMembers($request);

    if ($response->memberModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inviteMember

This endpoint invites a Member into the given Product identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InviteMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\InviteMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InviteMemberRequest();
    $request->inviteMembersRequest = new InviteMembersRequest();
    $request->inviteMembersRequest->emails = [
        'ad',
        'expedita',
    ];
    $request->inviteMembersRequest->permissionGroupId = 29950;
    $request->productId = '8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d';

    $response = $sdk->members->inviteMember($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# SDK

## Overview

<p>The Identity Store service used by AWS IAM Identity Center (successor to AWS Single Sign-On) provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <pre><code> &lt;note&gt; &lt;p&gt;Although AWS Single Sign-On was renamed, the &lt;code&gt;sso&lt;/code&gt; and &lt;code&gt;identitystore&lt;/code&gt; API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed&quot;&gt;IAM Identity Center rename&lt;/a&gt;.&lt;/p&gt; &lt;/note&gt; &lt;p&gt;This reference guide describes the identity store operations that you can call programatically and includes detailed information about data types and errors.&lt;/p&gt; </code></pre>

Amazon Web Services documentation
<https://docs.aws.amazon.com/identitystore/>
### Available Operations

* [createGroup](#creategroup) - Creates a group within the specified identity store.
* [createGroupMembership](#creategroupmembership) - Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
* [createUser](#createuser) - Creates a user within the specified identity store.
* [deleteGroup](#deletegroup) - Delete a group within an identity store given <code>GroupId</code>.
* [deleteGroupMembership](#deletegroupmembership) - Delete a membership within a group given <code>MembershipId</code>.
* [deleteUser](#deleteuser) - Deletes a user within an identity store given <code>UserId</code>.
* [describeGroup](#describegroup) - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
* [describeGroupMembership](#describegroupmembership) - Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
* [describeUser](#describeuser) - Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
* [getGroupId](#getgroupid) - Retrieves <code>GroupId</code> in an identity store.
* [getGroupMembershipId](#getgroupmembershipid) - Retrieves the <code>MembershipId</code> in an identity store.
* [getUserId](#getuserid) - Retrieves the <code>UserId</code> in an identity store.
* [isMemberInGroups](#ismemberingroups) - Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
* [listGroupMemberships](#listgroupmemberships) - For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroupMembershipsForMember](#listgroupmembershipsformember) - For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
* [listGroups](#listgroups) - Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
* [listUsers](#listusers) - Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
* [updateGroup](#updategroup) - For the specified group in the specified identity store, updates the group metadata and attributes.
* [updateUser](#updateuser) - For the specified user in the specified identity store, updates the user metadata and attributes.

## createGroup

Creates a group within the specified identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->createGroupRequest = new CreateGroupRequest();
    $request->createGroupRequest->description = 'deserunt';
    $request->createGroupRequest->displayName = 'suscipit';
    $request->createGroupRequest->identityStoreId = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateGroupXAmzTargetEnum::AWS_IDENTITY_STORE_CREATE_GROUP;

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupMembership

Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberId;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupMembershipRequest();
    $request->createGroupMembershipRequest = new CreateGroupMembershipRequest();
    $request->createGroupMembershipRequest->groupId = 'minus';
    $request->createGroupMembershipRequest->identityStoreId = 'placeat';
    $request->createGroupMembershipRequest->memberId = new MemberId();
    $request->createGroupMembershipRequest->memberId->userId = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateGroupMembershipXAmzTargetEnum::AWS_IDENTITY_STORE_CREATE_GROUP_MEMBERSHIP;

    $response = $sdk->sdk->createGroupMembership($request);

    if ($response->createGroupMembershipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Creates a user within the specified identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->createUserRequest = new CreateUserRequest();
    $request->createUserRequest->addresses = [
        new Address(),
    ];
    $request->createUserRequest->displayName = 'deserunt';
    $request->createUserRequest->emails = [
        new Email(),
    ];
    $request->createUserRequest->identityStoreId = 'ipsam';
    $request->createUserRequest->locale = 'repellendus';
    $request->createUserRequest->name = new Name();
    $request->createUserRequest->name->familyName = 'sapiente';
    $request->createUserRequest->name->formatted = 'quo';
    $request->createUserRequest->name->givenName = 'odit';
    $request->createUserRequest->name->honorificPrefix = 'at';
    $request->createUserRequest->name->honorificSuffix = 'at';
    $request->createUserRequest->name->middleName = 'maiores';
    $request->createUserRequest->nickName = 'molestiae';
    $request->createUserRequest->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->createUserRequest->preferredLanguage = 'quod';
    $request->createUserRequest->profileUrl = 'esse';
    $request->createUserRequest->timezone = 'totam';
    $request->createUserRequest->title = 'porro';
    $request->createUserRequest->userName = 'dolorum';
    $request->createUserRequest->userType = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = CreateUserXAmzTargetEnum::AWS_IDENTITY_STORE_CREATE_USER;

    $response = $sdk->sdk->createUser($request);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

Delete a group within an identity store given <code>GroupId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->deleteGroupRequest = new DeleteGroupRequest();
    $request->deleteGroupRequest->groupId = 'totam';
    $request->deleteGroupRequest->identityStoreId = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = DeleteGroupXAmzTargetEnum::AWS_IDENTITY_STORE_DELETE_GROUP;

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->deleteGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroupMembership

Delete a membership within a group given <code>MembershipId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupMembershipRequest();
    $request->deleteGroupMembershipRequest = new DeleteGroupMembershipRequest();
    $request->deleteGroupMembershipRequest->identityStoreId = 'ipsum';
    $request->deleteGroupMembershipRequest->membershipId = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteGroupMembershipXAmzTargetEnum::AWS_IDENTITY_STORE_DELETE_GROUP_MEMBERSHIP;

    $response = $sdk->sdk->deleteGroupMembership($request);

    if ($response->deleteGroupMembershipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Deletes a user within an identity store given <code>UserId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->identityStoreId = 'natus';
    $request->deleteUserRequest->userId = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::AWS_IDENTITY_STORE_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->deleteUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGroup

Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGroupRequest();
    $request->describeGroupRequest = new DescribeGroupRequest();
    $request->describeGroupRequest->groupId = 'saepe';
    $request->describeGroupRequest->identityStoreId = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = DescribeGroupXAmzTargetEnum::AWS_IDENTITY_STORE_DESCRIBE_GROUP;

    $response = $sdk->sdk->describeGroup($request);

    if ($response->describeGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGroupMembership

Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGroupMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGroupMembershipRequest();
    $request->describeGroupMembershipRequest = new DescribeGroupMembershipRequest();
    $request->describeGroupMembershipRequest->identityStoreId = 'dolorem';
    $request->describeGroupMembershipRequest->membershipId = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeGroupMembershipXAmzTargetEnum::AWS_IDENTITY_STORE_DESCRIBE_GROUP_MEMBERSHIP;

    $response = $sdk->sdk->describeGroupMembership($request);

    if ($response->describeGroupMembershipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUser

Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserRequest();
    $request->describeUserRequest = new DescribeUserRequest();
    $request->describeUserRequest->identityStoreId = 'accusantium';
    $request->describeUserRequest->userId = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DescribeUserXAmzTargetEnum::AWS_IDENTITY_STORE_DESCRIBE_USER;

    $response = $sdk->sdk->describeUser($request);

    if ($response->describeUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupId

Retrieves <code>GroupId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGroupIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlternateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ExternalId;
use \OpenAPI\OpenAPI\Models\Shared\UniqueAttribute;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupIdRequest();
    $request->getGroupIdRequest = new GetGroupIdRequest();
    $request->getGroupIdRequest->alternateIdentifier = new AlternateIdentifier();
    $request->getGroupIdRequest->alternateIdentifier->externalId = new ExternalId();
    $request->getGroupIdRequest->alternateIdentifier->externalId->id = 'consequuntur';
    $request->getGroupIdRequest->alternateIdentifier->externalId->issuer = 'repellat';
    $request->getGroupIdRequest->alternateIdentifier->uniqueAttribute = new UniqueAttribute();
    $request->getGroupIdRequest->alternateIdentifier->uniqueAttribute->attributePath = 'mollitia';
    $request->getGroupIdRequest->alternateIdentifier->uniqueAttribute->attributeValue = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->getGroupIdRequest->identityStoreId = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = GetGroupIdXAmzTargetEnum::AWS_IDENTITY_STORE_GET_GROUP_ID;

    $response = $sdk->sdk->getGroupId($request);

    if ($response->getGroupIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupMembershipId

Retrieves the <code>MembershipId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupMembershipIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGroupMembershipIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberId;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupMembershipIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupMembershipIdRequest();
    $request->getGroupMembershipIdRequest = new GetGroupMembershipIdRequest();
    $request->getGroupMembershipIdRequest->groupId = 'sequi';
    $request->getGroupMembershipIdRequest->identityStoreId = 'tenetur';
    $request->getGroupMembershipIdRequest->memberId = new MemberId();
    $request->getGroupMembershipIdRequest->memberId->userId = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = GetGroupMembershipIdXAmzTargetEnum::AWS_IDENTITY_STORE_GET_GROUP_MEMBERSHIP_ID;

    $response = $sdk->sdk->getGroupMembershipId($request);

    if ($response->getGroupMembershipIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserId

Retrieves the <code>UserId</code> in an identity store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlternateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\ExternalId;
use \OpenAPI\OpenAPI\Models\Shared\UniqueAttribute;
use \OpenAPI\OpenAPI\Models\Operations\GetUserIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserIdRequest();
    $request->getUserIdRequest = new GetUserIdRequest();
    $request->getUserIdRequest->alternateIdentifier = new AlternateIdentifier();
    $request->getUserIdRequest->alternateIdentifier->externalId = new ExternalId();
    $request->getUserIdRequest->alternateIdentifier->externalId->id = 'quasi';
    $request->getUserIdRequest->alternateIdentifier->externalId->issuer = 'reiciendis';
    $request->getUserIdRequest->alternateIdentifier->uniqueAttribute = new UniqueAttribute();
    $request->getUserIdRequest->alternateIdentifier->uniqueAttribute->attributePath = 'voluptatibus';
    $request->getUserIdRequest->alternateIdentifier->uniqueAttribute->attributeValue = [
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->getUserIdRequest->identityStoreId = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = GetUserIdXAmzTargetEnum::AWS_IDENTITY_STORE_GET_USER_ID;

    $response = $sdk->sdk->getUserId($request);

    if ($response->getUserIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## isMemberInGroups

Checks the user's membership in all requested groups and returns if the member exists in all queried groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IsMemberInGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\IsMemberInGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberId;
use \OpenAPI\OpenAPI\Models\Operations\IsMemberInGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IsMemberInGroupsRequest();
    $request->isMemberInGroupsRequest = new IsMemberInGroupsRequest();
    $request->isMemberInGroupsRequest->groupIds = [
        'harum',
    ];
    $request->isMemberInGroupsRequest->identityStoreId = 'enim';
    $request->isMemberInGroupsRequest->memberId = new MemberId();
    $request->isMemberInGroupsRequest->memberId->userId = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = IsMemberInGroupsXAmzTargetEnum::AWS_IDENTITY_STORE_IS_MEMBER_IN_GROUPS;

    $response = $sdk->sdk->isMemberInGroups($request);

    if ($response->isMemberInGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupMemberships

For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembershipsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupMembershipsRequest();
    $request->listGroupMembershipsRequest = new ListGroupMembershipsRequest();
    $request->listGroupMembershipsRequest->groupId = 'pariatur';
    $request->listGroupMembershipsRequest->identityStoreId = 'modi';
    $request->listGroupMembershipsRequest->maxResults = 508969;
    $request->listGroupMembershipsRequest->nextToken = 'rem';
    $request->maxResults = 'voluptates';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = ListGroupMembershipsXAmzTargetEnum::AWS_IDENTITY_STORE_LIST_GROUP_MEMBERSHIPS;

    $response = $sdk->sdk->listGroupMemberships($request);

    if ($response->listGroupMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupMembershipsForMember

For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembershipsForMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupMembershipsForMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberId;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupMembershipsForMemberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupMembershipsForMemberRequest();
    $request->listGroupMembershipsForMemberRequest = new ListGroupMembershipsForMemberRequest();
    $request->listGroupMembershipsForMemberRequest->identityStoreId = 'est';
    $request->listGroupMembershipsForMemberRequest->maxResults = 842342;
    $request->listGroupMembershipsForMemberRequest->memberId = new MemberId();
    $request->listGroupMembershipsForMemberRequest->memberId->userId = 'explicabo';
    $request->listGroupMembershipsForMemberRequest->nextToken = 'deserunt';
    $request->maxResults = 'distinctio';
    $request->nextToken = 'quibusdam';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListGroupMembershipsForMemberXAmzTargetEnum::AWS_IDENTITY_STORE_LIST_GROUP_MEMBERSHIPS_FOR_MEMBER;

    $response = $sdk->sdk->listGroupMembershipsForMember($request);

    if ($response->listGroupMembershipsForMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->listGroupsRequest = new ListGroupsRequest();
    $request->listGroupsRequest->filters = [
        new Filter(),
    ];
    $request->listGroupsRequest->identityStoreId = 'assumenda';
    $request->listGroupsRequest->maxResults = 369808;
    $request->listGroupsRequest->nextToken = 'alias';
    $request->maxResults = 'fugit';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListGroupsXAmzTargetEnum::AWS_IDENTITY_STORE_LIST_GROUPS;

    $response = $sdk->sdk->listGroups($request);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsers

Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersRequest();
    $request->listUsersRequest = new ListUsersRequest();
    $request->listUsersRequest->filters = [
        new Filter(),
    ];
    $request->listUsersRequest->identityStoreId = 'eligendi';
    $request->listUsersRequest->maxResults = 576157;
    $request->listUsersRequest->nextToken = 'aliquid';
    $request->maxResults = 'provident';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListUsersXAmzTargetEnum::AWS_IDENTITY_STORE_LIST_USERS;

    $response = $sdk->sdk->listUsers($request);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroup

For the specified group in the specified identity store, updates the group metadata and attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeOperation;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupRequest();
    $request->updateGroupRequest = new UpdateGroupRequest();
    $request->updateGroupRequest->groupId = 'in';
    $request->updateGroupRequest->identityStoreId = 'illum';
    $request->updateGroupRequest->operations = [
        new AttributeOperation(),
        new AttributeOperation(),
        new AttributeOperation(),
        new AttributeOperation(),
    ];
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = UpdateGroupXAmzTargetEnum::AWS_IDENTITY_STORE_UPDATE_GROUP;

    $response = $sdk->sdk->updateGroup($request);

    if ($response->updateGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

For the specified user in the specified identity store, updates the user metadata and attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeOperation;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->updateUserRequest = new UpdateUserRequest();
    $request->updateUserRequest->identityStoreId = 'laborum';
    $request->updateUserRequest->operations = [
        new AttributeOperation(),
        new AttributeOperation(),
        new AttributeOperation(),
        new AttributeOperation(),
    ];
    $request->updateUserRequest->userId = 'non';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = UpdateUserXAmzTargetEnum::AWS_IDENTITY_STORE_UPDATE_USER;

    $response = $sdk->sdk->updateUser($request);

    if ($response->updateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# groups

## Overview

Operations about groups

### Available Operations

* [deleteGroupsGroupIdMembershipsUserId](#deletegroupsgroupidmembershipsuserid) - Delete Group User
* [deleteGroupsId](#deletegroupsid) - Delete Group
* [getGroups](#getgroups) - List Groups
* [getGroupsGroupIdPermissions](#getgroupsgroupidpermissions) - List Permissions
* [getGroupsGroupIdUsers](#getgroupsgroupidusers) - List Group Users
* [getGroupsId](#getgroupsid) - Show Group
* [patchGroupsGroupIdMembershipsUserId](#patchgroupsgroupidmembershipsuserid) - Update Group User
* [patchGroupsId](#patchgroupsid) - Update Group
* [postGroups](#postgroups) - Create Group
* [postGroupsGroupIdUsers](#postgroupsgroupidusers) - Create User

## deleteGroupsGroupIdMembershipsUserId

Delete Group User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupsGroupIdMembershipsUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupsGroupIdMembershipsUserIdRequest();
    $request->groupId = 882042;
    $request->userId = 82971;

    $response = $sdk->groups->deleteGroupsGroupIdMembershipsUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroupsId

Delete Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupsIdRequest();
    $request->id = 458604;

    $response = $sdk->groups->deleteGroupsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroups

List Groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsRequest();
    $request->cursor = 'quod';
    $request->filter = [
        'vero' => 'aliquid',
        'quasi' => 'saepe',
        'vel' => 'harum',
    ];
    $request->filterPrefix = [
        'rerum' => 'occaecati',
        'minima' => 'distinctio',
    ];
    $request->ids = 'eligendi';
    $request->perPage = 27069;
    $request->sortBy = [
        'tempore' => 'adipisci',
        'cumque' => 'consequuntur',
        'consequatur' => 'minus',
    ];

    $response = $sdk->groups->getGroups($request);

    if ($response->groupEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsGroupIdPermissions

List Permissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsGroupIdPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsGroupIdPermissionsRequest();
    $request->cursor = 'quaerat';
    $request->filter = [
        'consectetur' => 'esse',
        'blanditiis' => 'provident',
        'a' => 'nulla',
        'quas' => 'esse',
    ];
    $request->filterPrefix = [
        'a' => 'error',
    ];
    $request->groupId = 'sint';
    $request->includeGroups = false;
    $request->path = 'pariatur';
    $request->perPage = 820767;
    $request->sortBy = [
        'eveniet' => 'asperiores',
    ];
    $request->userId = 'facere';

    $response = $sdk->groups->getGroupsGroupIdPermissions($request);

    if ($response->permissionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsGroupIdUsers

List Group Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsGroupIdUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsGroupIdUsersRequest();
    $request->cursor = 'veritatis';
    $request->groupId = 159414;
    $request->perPage = 94458;
    $request->userId = 628899;

    $response = $sdk->groups->getGroupsGroupIdUsers($request);

    if ($response->groupUserEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsId

Show Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsIdRequest();
    $request->id = 633608;

    $response = $sdk->groups->getGroupsId($request);

    if ($response->groupEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGroupsGroupIdMembershipsUserId

Update Group User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupsGroupIdMembershipsUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupsGroupIdMembershipsUserIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGroupsGroupIdMembershipsUserIdRequest();
    $request->requestBody = new PatchGroupsGroupIdMembershipsUserIdRequestBody();
    $request->requestBody->admin = false;
    $request->groupId = 398434;
    $request->userId = 949298;

    $response = $sdk->groups->patchGroupsGroupIdMembershipsUserId($request);

    if ($response->groupUserEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGroupsId

Update Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGroupsIdRequest();
    $request->requestBody = new PatchGroupsIdRequestBody();
    $request->requestBody->adminIds = 'quae';
    $request->requestBody->name = 'Chester King';
    $request->requestBody->notes = 'illum';
    $request->requestBody->userIds = 'soluta';
    $request->id = 33304;

    $response = $sdk->groups->patchGroupsId($request);

    if ($response->groupEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGroups

Create Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostGroupsRequestBody();
    $request->adminIds = 'aliquam';
    $request->name = 'Samuel Hermiston';
    $request->notes = 'nisi';
    $request->userIds = 'aut';

    $response = $sdk->groups->postGroups($request);

    if ($response->groupEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGroupsGroupIdUsers

Create User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequestBodyAvatarFile;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequestBodyRequire2faEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupsGroupIdUsersRequestBodySslRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostGroupsGroupIdUsersRequest();
    $request->requestBody = new PostGroupsGroupIdUsersRequestBody();
    $request->requestBody->allowedIps = '127.0.0.1';
    $request->requestBody->announcementsRead = false;
    $request->requestBody->attachmentsPermission = true;
    $request->requestBody->authenticateUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->requestBody->authenticationMethod = PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum::PASSWORD;
    $request->requestBody->avatarDelete = false;
    $request->requestBody->avatarFile = new PostGroupsGroupIdUsersRequestBodyAvatarFile();
    $request->requestBody->avatarFile->avatarFile = 'voluptatum';
    $request->requestBody->avatarFile->content = 'qui';
    $request->requestBody->billingPermission = false;
    $request->requestBody->bypassInactiveDisable = false;
    $request->requestBody->bypassSiteAllowedIps = false;
    $request->requestBody->changePassword = 'quibusdam';
    $request->requestBody->changePasswordConfirmation = 'ex';
    $request->requestBody->company = 'ACME Corp.';
    $request->requestBody->davPermission = true;
    $request->requestBody->disabled = true;
    $request->requestBody->email = 'Tobin60@yahoo.com';
    $request->requestBody->ftpPermission = true;
    $request->requestBody->grantPermission = 'tenetur';
    $request->requestBody->groupIds = 'quasi';
    $request->requestBody->headerText = 'User-specific message.';
    $request->requestBody->importedPasswordHash = 'at';
    $request->requestBody->language = 'en';
    $request->requestBody->name = 'John Doe';
    $request->requestBody->notes = 'Internal notes on this user.';
    $request->requestBody->notificationDailySendTime = 18;
    $request->requestBody->officeIntegrationEnabled = true;
    $request->requestBody->password = 'et';
    $request->requestBody->passwordConfirmation = 'voluptate';
    $request->requestBody->passwordValidityDays = 1;
    $request->requestBody->receiveAdminAlerts = true;
    $request->requestBody->require2fa = PostGroupsGroupIdUsersRequestBodyRequire2faEnum::ALWAYS_REQUIRE;
    $request->requestBody->requirePasswordChange = true;
    $request->requestBody->restapiPermission = true;
    $request->requestBody->selfManaged = true;
    $request->requestBody->sftpPermission = true;
    $request->requestBody->siteAdmin = true;
    $request->requestBody->skipWelcomeScreen = true;
    $request->requestBody->sslRequired = PostGroupsGroupIdUsersRequestBodySslRequiredEnum::ALWAYS_REQUIRE;
    $request->requestBody->ssoStrategyId = 1;
    $request->requestBody->subscribeToNewsletter = true;
    $request->requestBody->timeZone = 'Pacific Time (US & Canada)';
    $request->requestBody->userRoot = 'example';
    $request->requestBody->username = 'user';
    $request->groupId = 55965;

    $response = $sdk->groups->postGroupsGroupIdUsers($request);

    if ($response->userEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

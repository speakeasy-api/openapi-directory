# user

## Overview

Operations about users

### Available Operations

* [getUserApiKeys](#getuserapikeys) - List Api Keys
* [getUserGroups](#getusergroups) - List Group Users
* [getUserPublicKeys](#getuserpublickeys) - List Public Keys
* [patchUser](#patchuser) - Update User
* [postUserApiKeys](#postuserapikeys) - Create Api Key
* [postUserPublicKeys](#postuserpublickeys) - Create Public Key

## getUserApiKeys

List Api Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserApiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserApiKeysRequest();
    $request->cursor = 'rem';
    $request->filter = [
        'dicta' => 'nisi',
        'consequuntur' => 'consectetur',
        'aperiam' => 'cupiditate',
        'reiciendis' => 'soluta',
    ];
    $request->filterGt = [
        'omnis' => 'eos',
    ];
    $request->filterGteq = [
        'iste' => 'magni',
        'inventore' => 'fuga',
        'accusamus' => 'voluptatibus',
    ];
    $request->filterLt = [
        'omnis' => 'delectus',
        'minima' => 'praesentium',
        'maxime' => 'magnam',
    ];
    $request->filterLteq = [
        'quos' => 'commodi',
        'itaque' => 'commodi',
        'totam' => 'earum',
        'modi' => 'nam',
    ];
    $request->perPage = 877399;
    $request->sortBy = [
        'ipsam' => 'vel',
    ];
    $request->userId = 1383;

    $response = $sdk->user->getUserApiKeys($request);

    if ($response->apiKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserGroups

List Group Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserGroupsRequest();
    $request->cursor = 'quasi';
    $request->groupId = 247685;
    $request->perPage = 978548;
    $request->userId = 318233;

    $response = $sdk->user->getUserGroups($request);

    if ($response->groupUserEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPublicKeys

List Public Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPublicKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPublicKeysRequest();
    $request->cursor = 'sint';
    $request->perPage = 858778;
    $request->userId = 643678;

    $response = $sdk->user->getUserPublicKeys($request);

    if ($response->publicKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUser

Update User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequestBodyAvatarFile;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequestBodyRequire2faEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserRequestBodySslRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUserRequestBody();
    $request->allowedIps = '127.0.0.1';
    $request->announcementsRead = false;
    $request->attachmentsPermission = true;
    $request->authenticateUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->authenticationMethod = PatchUserRequestBodyAuthenticationMethodEnum::PASSWORD;
    $request->avatarDelete = false;
    $request->avatarFile = new PatchUserRequestBodyAvatarFile();
    $request->avatarFile->avatarFile = 'esse';
    $request->avatarFile->content = 'nemo';
    $request->billingPermission = false;
    $request->bypassInactiveDisable = false;
    $request->bypassSiteAllowedIps = false;
    $request->changePassword = 'reprehenderit';
    $request->changePasswordConfirmation = 'est';
    $request->company = 'ACME Corp.';
    $request->davPermission = true;
    $request->disabled = true;
    $request->email = 'Kiana_Thompson90@yahoo.com';
    $request->ftpPermission = true;
    $request->grantPermission = 'asperiores';
    $request->groupId = 404306;
    $request->groupIds = 'voluptas';
    $request->headerText = 'User-specific message.';
    $request->importedPasswordHash = 'debitis';
    $request->language = 'en';
    $request->name = 'John Doe';
    $request->notes = 'Internal notes on this user.';
    $request->notificationDailySendTime = 18;
    $request->officeIntegrationEnabled = true;
    $request->password = 'delectus';
    $request->passwordConfirmation = 'quae';
    $request->passwordValidityDays = 1;
    $request->receiveAdminAlerts = true;
    $request->require2fa = PatchUserRequestBodyRequire2faEnum::ALWAYS_REQUIRE;
    $request->requirePasswordChange = true;
    $request->restapiPermission = true;
    $request->selfManaged = true;
    $request->sftpPermission = true;
    $request->siteAdmin = true;
    $request->skipWelcomeScreen = true;
    $request->sslRequired = PatchUserRequestBodySslRequiredEnum::ALWAYS_REQUIRE;
    $request->ssoStrategyId = 1;
    $request->subscribeToNewsletter = true;
    $request->timeZone = 'Pacific Time (US & Canada)';
    $request->userRoot = 'example';
    $request->username = 'user';

    $response = $sdk->user->patchUser($request);

    if ($response->userEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserApiKeys

Create Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUserApiKeysRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUserApiKeysRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserApiKeysRequestBody();
    $request->description = 'example';
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->name = 'My Main API Key';
    $request->path = 'shared/docs';
    $request->permissionSet = PostUserApiKeysRequestBodyPermissionSetEnum::FULL;
    $request->userId = 791880;

    $response = $sdk->user->postUserApiKeys($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserPublicKeys

Create Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUserPublicKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserPublicKeysRequestBody();
    $request->publicKey = 'fuga';
    $request->title = 'My Main Key';
    $request->userId = 675689;

    $response = $sdk->user->postUserPublicKeys($request);

    if ($response->publicKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

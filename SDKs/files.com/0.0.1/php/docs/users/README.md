# users

## Overview

Operations about users

### Available Operations

* [deleteUsersId](#deleteusersid) - Delete User
* [getUsers](#getusers) - List Users
* [getUsersId](#getusersid) - Show User
* [getUsersUserIdApiKeys](#getusersuseridapikeys) - List Api Keys
* [getUsersUserIdCipherUses](#getusersuseridcipheruses) - List User Cipher Uses
* [getUsersUserIdGroups](#getusersuseridgroups) - List Group Users
* [getUsersUserIdPermissions](#getusersuseridpermissions) - List Permissions
* [getUsersUserIdPublicKeys](#getusersuseridpublickeys) - List Public Keys
* [patchUsersId](#patchusersid) - Update User
* [postUsers](#postusers) - Create User
* [postUsersId2faReset](#postusersid2fareset) - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* [postUsersIdResendWelcomeEmail](#postusersidresendwelcomeemail) - Resend user welcome email
* [postUsersIdUnlock](#postusersidunlock) - Unlock user who has been locked out due to failed logins.
* [postUsersUserIdApiKeys](#postusersuseridapikeys) - Create Api Key
* [postUsersUserIdPublicKeys](#postusersuseridpublickeys) - Create Public Key

## deleteUsersId

Delete User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdRequest();
    $request->id = 437814;

    $response = $sdk->users->deleteUsersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

List Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->cursor = 'odit';
    $request->filter = [
        'vel' => 'magnam',
        'quibusdam' => 'inventore',
        'facere' => 'libero',
        'architecto' => 'voluptatibus',
    ];
    $request->filterGt = [
        'porro' => 'aliquam',
    ];
    $request->filterGteq = [
        'illo' => 'accusantium',
    ];
    $request->filterLt = [
        'ea' => 'beatae',
        'vero' => 'excepturi',
    ];
    $request->filterLteq = [
        'velit' => 'ut',
        'perspiciatis' => 'earum',
    ];
    $request->filterPrefix = [
        'impedit' => 'voluptatibus',
    ];
    $request->ids = 'iste';
    $request->perPage = 932562;
    $request->qAdmin = 'alias';
    $request->qAllowedIps = 'nisi';
    $request->qEmail = 'itaque';
    $request->qNotes = 'velit';
    $request->qPasswordValidityDays = 'laborum';
    $request->qSslRequired = 'non';
    $request->qUsername = 'dolor';
    $request->search = 'iusto';
    $request->sortBy = [
        'doloremque' => 'consequatur',
    ];

    $response = $sdk->users->getUsers($request);

    if ($response->userEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersId

Show User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdRequest();
    $request->id = 639705;

    $response = $sdk->users->getUsersId($request);

    if ($response->userEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdApiKeys

List Api Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdApiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdApiKeysRequest();
    $request->cursor = 'recusandae';
    $request->filter = [
        'quidem' => 'voluptas',
        'facilis' => 'placeat',
    ];
    $request->filterGt = [
        'expedita' => 'deleniti',
        'a' => 'voluptate',
        'ullam' => 'unde',
    ];
    $request->filterGteq = [
        'animi' => 'impedit',
        'ipsam' => 'corporis',
        'est' => 'error',
        'esse' => 'labore',
    ];
    $request->filterLt = [
        'vero' => 'consectetur',
    ];
    $request->filterLteq = [
        'inventore' => 'dolorem',
    ];
    $request->perPage = 322017;
    $request->sortBy = [
        'iste' => 'ex',
    ];
    $request->userId = 367626;

    $response = $sdk->users->getUsersUserIdApiKeys($request);

    if ($response->apiKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdCipherUses

List User Cipher Uses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdCipherUsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdCipherUsesRequest();
    $request->cursor = 'soluta';
    $request->perPage = 726227;
    $request->userId = 526907;

    $response = $sdk->users->getUsersUserIdCipherUses($request);

    if ($response->userCipherUseEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdGroups

List Group Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdGroupsRequest();
    $request->cursor = 'dolorum';
    $request->groupId = 487676;
    $request->perPage = 144691;
    $request->userId = 545;

    $response = $sdk->users->getUsersUserIdGroups($request);

    if ($response->groupUserEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdPermissions

List Permissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdPermissionsRequest();
    $request->cursor = 'magni';
    $request->filter = [
        'quae' => 'quae',
        'modi' => 'neque',
    ];
    $request->filterPrefix = [
        'itaque' => 'et',
        'ipsum' => 'unde',
    ];
    $request->groupId = 'nulla';
    $request->includeGroups = false;
    $request->path = 'distinctio';
    $request->perPage = 802894;
    $request->sortBy = [
        'quia' => 'nostrum',
    ];
    $request->userId = 'omnis';

    $response = $sdk->users->getUsersUserIdPermissions($request);

    if ($response->permissionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserIdPublicKeys

List Public Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserIdPublicKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserIdPublicKeysRequest();
    $request->cursor = 'libero';
    $request->perPage = 115661;
    $request->userId = 663318;

    $response = $sdk->users->getUsersUserIdPublicKeys($request);

    if ($response->publicKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUsersId

Update User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequestBodyAvatarFile;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequestBodyRequire2faEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersIdRequestBodySslRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUsersIdRequest();
    $request->requestBody = new PatchUsersIdRequestBody();
    $request->requestBody->allowedIps = '127.0.0.1';
    $request->requestBody->announcementsRead = false;
    $request->requestBody->attachmentsPermission = true;
    $request->requestBody->authenticateUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->requestBody->authenticationMethod = PatchUsersIdRequestBodyAuthenticationMethodEnum::PASSWORD;
    $request->requestBody->avatarDelete = false;
    $request->requestBody->avatarFile = new PatchUsersIdRequestBodyAvatarFile();
    $request->requestBody->avatarFile->avatarFile = 'libero';
    $request->requestBody->avatarFile->content = 'fugiat';
    $request->requestBody->billingPermission = false;
    $request->requestBody->bypassInactiveDisable = false;
    $request->requestBody->bypassSiteAllowedIps = false;
    $request->requestBody->changePassword = 'officia';
    $request->requestBody->changePasswordConfirmation = 'quos';
    $request->requestBody->company = 'ACME Corp.';
    $request->requestBody->davPermission = true;
    $request->requestBody->disabled = true;
    $request->requestBody->email = 'Alden91@hotmail.com';
    $request->requestBody->ftpPermission = true;
    $request->requestBody->grantPermission = 'inventore';
    $request->requestBody->groupId = 49348;
    $request->requestBody->groupIds = 'totam';
    $request->requestBody->headerText = 'User-specific message.';
    $request->requestBody->importedPasswordHash = 'dolore';
    $request->requestBody->language = 'en';
    $request->requestBody->name = 'John Doe';
    $request->requestBody->notes = 'Internal notes on this user.';
    $request->requestBody->notificationDailySendTime = 18;
    $request->requestBody->officeIntegrationEnabled = true;
    $request->requestBody->password = 'eligendi';
    $request->requestBody->passwordConfirmation = 'distinctio';
    $request->requestBody->passwordValidityDays = 1;
    $request->requestBody->receiveAdminAlerts = true;
    $request->requestBody->require2fa = PatchUsersIdRequestBodyRequire2faEnum::ALWAYS_REQUIRE;
    $request->requestBody->requirePasswordChange = true;
    $request->requestBody->restapiPermission = true;
    $request->requestBody->selfManaged = true;
    $request->requestBody->sftpPermission = true;
    $request->requestBody->siteAdmin = true;
    $request->requestBody->skipWelcomeScreen = true;
    $request->requestBody->sslRequired = PatchUsersIdRequestBodySslRequiredEnum::ALWAYS_REQUIRE;
    $request->requestBody->ssoStrategyId = 1;
    $request->requestBody->subscribeToNewsletter = true;
    $request->requestBody->timeZone = 'Pacific Time (US & Canada)';
    $request->requestBody->userRoot = 'example';
    $request->requestBody->username = 'user';
    $request->id = 32273;

    $response = $sdk->users->patchUsersId($request);

    if ($response->userEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsers

Create User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersRequestBodyAvatarFile;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersRequestBodyRequire2faEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersRequestBodySslRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersRequestBody();
    $request->allowedIps = '127.0.0.1';
    $request->announcementsRead = false;
    $request->attachmentsPermission = true;
    $request->authenticateUntil = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->authenticationMethod = PostUsersRequestBodyAuthenticationMethodEnum::PASSWORD;
    $request->avatarDelete = false;
    $request->avatarFile = new PostUsersRequestBodyAvatarFile();
    $request->avatarFile->avatarFile = 'autem';
    $request->avatarFile->content = 'esse';
    $request->billingPermission = false;
    $request->bypassInactiveDisable = false;
    $request->bypassSiteAllowedIps = false;
    $request->changePassword = 'dolores';
    $request->changePasswordConfirmation = 'assumenda';
    $request->company = 'ACME Corp.';
    $request->davPermission = true;
    $request->disabled = true;
    $request->email = 'Marcella.Schumm@gmail.com';
    $request->ftpPermission = true;
    $request->grantPermission = 'provident';
    $request->groupId = 882284;
    $request->groupIds = 'necessitatibus';
    $request->headerText = 'User-specific message.';
    $request->importedPasswordHash = 'tempore';
    $request->language = 'en';
    $request->name = 'John Doe';
    $request->notes = 'Internal notes on this user.';
    $request->notificationDailySendTime = 18;
    $request->officeIntegrationEnabled = true;
    $request->password = 'sint';
    $request->passwordConfirmation = 'ea';
    $request->passwordValidityDays = 1;
    $request->receiveAdminAlerts = true;
    $request->require2fa = PostUsersRequestBodyRequire2faEnum::ALWAYS_REQUIRE;
    $request->requirePasswordChange = true;
    $request->restapiPermission = true;
    $request->selfManaged = true;
    $request->sftpPermission = true;
    $request->siteAdmin = true;
    $request->skipWelcomeScreen = true;
    $request->sslRequired = PostUsersRequestBodySslRequiredEnum::ALWAYS_REQUIRE;
    $request->ssoStrategyId = 1;
    $request->subscribeToNewsletter = true;
    $request->timeZone = 'Pacific Time (US & Canada)';
    $request->userRoot = 'example';
    $request->username = 'user';

    $response = $sdk->users->postUsers($request);

    if ($response->userEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersId2faReset

Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersId2faResetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersId2faResetRequest();
    $request->id = 421819;

    $response = $sdk->users->postUsersId2faReset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdResendWelcomeEmail

Resend user welcome email

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdResendWelcomeEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdResendWelcomeEmailRequest();
    $request->id = 373511;

    $response = $sdk->users->postUsersIdResendWelcomeEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdUnlock

Unlock user who has been locked out due to failed logins.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdUnlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdUnlockRequest();
    $request->id = 702952;

    $response = $sdk->users->postUsersIdUnlock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserIdApiKeys

Create Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdApiKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdApiKeysRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserIdApiKeysRequest();
    $request->requestBody = new PostUsersUserIdApiKeysRequestBody();
    $request->requestBody->description = 'example';
    $request->requestBody->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->requestBody->name = 'My Main API Key';
    $request->requestBody->path = 'shared/docs';
    $request->requestBody->permissionSet = PostUsersUserIdApiKeysRequestBodyPermissionSetEnum::FULL;
    $request->userId = 515638;

    $response = $sdk->users->postUsersUserIdApiKeys($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersUserIdPublicKeys

Create Public Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersUserIdPublicKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersUserIdPublicKeysRequest();
    $request->requestBody = new PostUsersUserIdPublicKeysRequestBody();
    $request->requestBody->publicKey = 'corporis';
    $request->requestBody->title = 'My Main Key';
    $request->userId = 889060;

    $response = $sdk->users->postUsersUserIdPublicKeys($request);

    if ($response->publicKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

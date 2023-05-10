# user

## Overview

user

### Available Operations

* [userGetAvailableThemes](#usergetavailablethemes) - Returns a list of all available user themes.
* [userGetBungieNetUserById](#usergetbungienetuserbyid) - Loads a bungienet user by membership id.
* [userGetCredentialTypesForTargetAccount](#usergetcredentialtypesfortargetaccount) - Returns a list of credential types attached to the requested account
* [userGetMembershipDataById](#usergetmembershipdatabyid) - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* [userGetMembershipDataForCurrentUser](#usergetmembershipdataforcurrentuser) - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* [userGetMembershipFromHardLinkedCredential](#usergetmembershipfromhardlinkedcredential) - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* [userGetSanitizedPlatformDisplayNames](#usergetsanitizedplatformdisplaynames) - Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
* [userSearchByGlobalNamePost](#usersearchbyglobalnamepost) - Given the prefix of a global display name, returns all users who share that name.
* [userSearchByGlobalNamePrefix](#usersearchbyglobalnameprefix) - [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

## userGetAvailableThemes

Returns a list of all available user themes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->userGetAvailableThemes();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetBungieNetUserById

Loads a bungienet user by membership id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetBungieNetUserByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGetBungieNetUserByIdRequest();
    $request->id = 537023;

    $response = $sdk->user->userGetBungieNetUserById($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetCredentialTypesForTargetAccount

Returns a list of credential types attached to the requested account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetCredentialTypesForTargetAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGetCredentialTypesForTargetAccountRequest();
    $request->membershipId = 703889;

    $response = $sdk->user->userGetCredentialTypesForTargetAccount($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetMembershipDataById

Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetMembershipDataByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGetMembershipDataByIdRequest();
    $request->membershipId = 447926;
    $request->membershipType = 100226;

    $response = $sdk->user->userGetMembershipDataById($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetMembershipDataForCurrentUser

Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetMembershipDataForCurrentUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new UserGetMembershipDataForCurrentUserSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->userGetMembershipDataForCurrentUser($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetMembershipFromHardLinkedCredential

Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetMembershipFromHardLinkedCredentialRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGetMembershipFromHardLinkedCredentialRequest();
    $request->crType = 99569;
    $request->credential = 'repudiandae';

    $response = $sdk->user->userGetMembershipFromHardLinkedCredential($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGetSanitizedPlatformDisplayNames

Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGetSanitizedPlatformDisplayNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGetSanitizedPlatformDisplayNamesRequest();
    $request->membershipId = 352312;

    $response = $sdk->user->userGetSanitizedPlatformDisplayNames($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userSearchByGlobalNamePost

Given the prefix of a global display name, returns all users who share that name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserSearchByGlobalNamePostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserSearchByGlobalNamePostRequest();
    $request->page = 714242;

    $response = $sdk->user->userSearchByGlobalNamePost($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userSearchByGlobalNamePrefix

[OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserSearchByGlobalNamePrefixRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserSearchByGlobalNamePrefixRequest();
    $request->displayNamePrefix = 'nihil';
    $request->page = 998848;

    $response = $sdk->user->userSearchByGlobalNamePrefix($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

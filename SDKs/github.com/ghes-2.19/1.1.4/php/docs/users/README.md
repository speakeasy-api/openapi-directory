# users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [usersAddEmailForAuthenticated](#usersaddemailforauthenticated) - Add an email address for the authenticated user
* [usersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [usersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [usersCreateGpgKeyForAuthenticated](#userscreategpgkeyforauthenticated) - Create a GPG key for the authenticated user
* [usersCreatePublicSshKeyForAuthenticated](#userscreatepublicsshkeyforauthenticated) - Create a public SSH key for the authenticated user
* [usersDeleteEmailForAuthenticated](#usersdeleteemailforauthenticated) - Delete an email address for the authenticated user
* [usersDeleteGpgKeyForAuthenticated](#usersdeletegpgkeyforauthenticated) - Delete a GPG key for the authenticated user
* [usersDeletePublicSshKeyForAuthenticated](#usersdeletepublicsshkeyforauthenticated) - Delete a public SSH key for the authenticated user
* [usersFollow](#usersfollow) - Follow a user
* [usersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [usersGetByUsername](#usersgetbyusername) - Get a user
* [usersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [usersGetGpgKeyForAuthenticated](#usersgetgpgkeyforauthenticated) - Get a GPG key for the authenticated user
* [usersGetPublicSshKeyForAuthenticated](#usersgetpublicsshkeyforauthenticated) - Get a public SSH key for the authenticated user
* [usersList](#userslist) - List users
* [usersListEmailsForAuthenticated](#userslistemailsforauthenticated) - List email addresses for the authenticated user
* [usersListFollowedByAuthenticated](#userslistfollowedbyauthenticated) - List the people the authenticated user follows
* [usersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [usersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [usersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [usersListGpgKeysForAuthenticated](#userslistgpgkeysforauthenticated) - List GPG keys for the authenticated user
* [usersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [usersListPublicEmailsForAuthenticated](#userslistpublicemailsforauthenticated) - List public email addresses for the authenticated user
* [usersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [usersListPublicSshKeysForAuthenticated](#userslistpublicsshkeysforauthenticated) - List public SSH keys for the authenticated user
* [usersUnfollow](#usersunfollow) - Unfollow a user
* [usersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## usersAddEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#add-an-email-address-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'username@example.com',
        'username@example.com',
    ]

    $response = $sdk->users->usersAddEmailForAuthenticated($request);

    if ($response->emails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCheckFollowingForUser

Check if a user follows another user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#check-if-a-user-follows-another-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCheckFollowingForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCheckFollowingForUserRequest();
    $request->targetUser = 'odio';
    $request->username = 'Colton.Tremblay';

    $response = $sdk->users->usersCheckFollowingForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCheckPersonIsFollowedByAuthenticated

Check if a person is followed by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCheckPersonIsFollowedByAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCheckPersonIsFollowedByAuthenticatedRequest();
    $request->username = 'Florencio64';

    $response = $sdk->users->usersCheckPersonIsFollowedByAuthenticated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCreateGpgKeyForAuthenticated

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreateGpgKeyForAuthenticatedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCreateGpgKeyForAuthenticatedRequestBody();
    $request->armoredPublicKey = 'reprehenderit';

    $response = $sdk->users->usersCreateGpgKeyForAuthenticated($request);

    if ($response->gpgKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCreatePublicSshKeyForAuthenticated

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreatePublicSshKeyForAuthenticatedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCreatePublicSshKeyForAuthenticatedRequestBody();
    $request->key = 'distinctio';
    $request->title = 'Personal MacBook Air';

    $response = $sdk->users->usersCreatePublicSshKeyForAuthenticated($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteEmailForAuthenticated

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteEmailForAuthenticatedRequestBody1();
    $request->emails = [
        'username@example.com',
    ];

    $response = $sdk->users->usersDeleteEmailForAuthenticated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteGpgKeyForAuthenticated

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteGpgKeyForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteGpgKeyForAuthenticatedRequest();
    $request->gpgKeyId = 522062;

    $response = $sdk->users->usersDeleteGpgKeyForAuthenticated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeletePublicSshKeyForAuthenticated

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeletePublicSshKeyForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeletePublicSshKeyForAuthenticatedRequest();
    $request->keyId = 978154;

    $response = $sdk->users->usersDeletePublicSshKeyForAuthenticated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersFollow

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#follow-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersFollowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersFollowRequest();
    $request->username = 'Alfonso.Harris81';

    $response = $sdk->users->usersFollow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetAuthenticated

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->users->usersGetAuthenticated();

    if ($response->usersGetAuthenticated200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetByUsername

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.19/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetByUsernameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetByUsernameRequest();
    $request->username = 'Elody_Lueilwitz66';

    $response = $sdk->users->usersGetByUsername($request);

    if ($response->usersGetByUsername200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetContextForUser

Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-contextual-information-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetContextForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetContextForUserSubjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetContextForUserRequest();
    $request->subjectId = 'delectus';
    $request->subjectType = UsersGetContextForUserSubjectTypeEnum::ORGANIZATION;
    $request->username = 'Berniece.Douglas';

    $response = $sdk->users->usersGetContextForUser($request);

    if ($response->hovercard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetGpgKeyForAuthenticated

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetGpgKeyForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetGpgKeyForAuthenticatedRequest();
    $request->gpgKeyId = 997995;

    $response = $sdk->users->usersGetGpgKeyForAuthenticated($request);

    if ($response->gpgKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetPublicSshKeyForAuthenticated

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetPublicSshKeyForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetPublicSshKeyForAuthenticatedRequest();
    $request->keyId = 363214;

    $response = $sdk->users->usersGetPublicSshKeyForAuthenticated($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersList

Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-users>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListRequest();
    $request->perPage = 987890;
    $request->since = 823753;

    $response = $sdk->users->usersList($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListEmailsForAuthenticated

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-email-addresses-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListEmailsForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListEmailsForAuthenticatedRequest();
    $request->page = 603323;
    $request->perPage = 275425;

    $response = $sdk->users->usersListEmailsForAuthenticated($request);

    if ($response->emails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListFollowedByAuthenticated

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-the-people-the-authenticated-user-follows>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListFollowedByAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListFollowedByAuthenticatedRequest();
    $request->page = 128021;
    $request->perPage = 368491;

    $response = $sdk->users->usersListFollowedByAuthenticated($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListFollowersForAuthenticatedUser

Lists the people following the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-followers-of-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListFollowersForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListFollowersForAuthenticatedUserRequest();
    $request->page = 583193;
    $request->perPage = 761437;

    $response = $sdk->users->usersListFollowersForAuthenticatedUser($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListFollowersForUser

Lists the people following the specified user.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-followers-of-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListFollowersForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListFollowersForUserRequest();
    $request->page = 2064;
    $request->perPage = 695947;
    $request->username = 'Cloyd.Jerde33';

    $response = $sdk->users->usersListFollowersForUser($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListFollowingForUser

Lists the people who the specified user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-the-people-a-user-follows>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListFollowingForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListFollowingForUserRequest();
    $request->page = 893773;
    $request->perPage = 638390;
    $request->username = 'King94';

    $response = $sdk->users->usersListFollowingForUser($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListGpgKeysForAuthenticated

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListGpgKeysForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListGpgKeysForAuthenticatedRequest();
    $request->page = 236790;
    $request->perPage = 728559;

    $response = $sdk->users->usersListGpgKeysForAuthenticated($request);

    if ($response->gpgKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListGpgKeysForUser

Lists the GPG keys for a user. This information is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-gpg-keys-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListGpgKeysForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListGpgKeysForUserRequest();
    $request->page = 448386;
    $request->perPage = 329651;
    $request->username = 'Gudrun10';

    $response = $sdk->users->usersListGpgKeysForUser($request);

    if ($response->gpgKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListPublicEmailsForAuthenticated

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.19/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListPublicEmailsForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListPublicEmailsForAuthenticatedRequest();
    $request->page = 943143;
    $request->perPage = 392319;

    $response = $sdk->users->usersListPublicEmailsForAuthenticated($request);

    if ($response->emails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListPublicKeysForUser

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-keys-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListPublicKeysForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListPublicKeysForUserRequest();
    $request->page = 786954;
    $request->perPage = 221218;
    $request->username = 'Jerrold10';

    $response = $sdk->users->usersListPublicKeysForUser($request);

    if ($response->keySimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListPublicSshKeysForAuthenticated

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListPublicSshKeysForAuthenticatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListPublicSshKeysForAuthenticatedRequest();
    $request->page = 181476;
    $request->perPage = 397026;

    $response = $sdk->users->usersListPublicSshKeysForAuthenticated($request);

    if ($response->keys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUnfollow

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users#unfollow-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUnfollowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUnfollowRequest();
    $request->username = 'Cassidy50';

    $response = $sdk->users->usersUnfollow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdateAuthenticated

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/users/#update-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateAuthenticatedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateAuthenticatedRequestBody();
    $request->bio = 'dolor';
    $request->blog = 'blog.example.com';
    $request->company = 'Acme corporation';
    $request->email = 'omar@example.com';
    $request->hireable = false;
    $request->location = 'Berlin, Germany';
    $request->name = 'Omar Jahandar';
    $request->twitterUsername = 'therealomarj';

    $response = $sdk->users->usersUpdateAuthenticated($request);

    if ($response->privateUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

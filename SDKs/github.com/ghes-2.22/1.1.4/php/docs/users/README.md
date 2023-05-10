# users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [usersAddEmailForAuthenticatedUser](#usersaddemailforauthenticateduser) - Add an email address for the authenticated user
* [usersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [usersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [usersCreateGpgKeyForAuthenticatedUser](#userscreategpgkeyforauthenticateduser) - Create a GPG key for the authenticated user
* [usersCreatePublicSshKeyForAuthenticatedUser](#userscreatepublicsshkeyforauthenticateduser) - Create a public SSH key for the authenticated user
* [usersDeleteEmailForAuthenticatedUser](#usersdeleteemailforauthenticateduser) - Delete an email address for the authenticated user
* [usersDeleteGpgKeyForAuthenticatedUser](#usersdeletegpgkeyforauthenticateduser) - Delete a GPG key for the authenticated user
* [usersDeletePublicSshKeyForAuthenticatedUser](#usersdeletepublicsshkeyforauthenticateduser) - Delete a public SSH key for the authenticated user
* [usersFollow](#usersfollow) - Follow a user
* [usersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [usersGetByUsername](#usersgetbyusername) - Get a user
* [usersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [usersGetGpgKeyForAuthenticatedUser](#usersgetgpgkeyforauthenticateduser) - Get a GPG key for the authenticated user
* [usersGetPublicSshKeyForAuthenticatedUser](#usersgetpublicsshkeyforauthenticateduser) - Get a public SSH key for the authenticated user
* [usersList](#userslist) - List users
* [usersListEmailsForAuthenticatedUser](#userslistemailsforauthenticateduser) - List email addresses for the authenticated user
* [usersListFollowedByAuthenticatedUser](#userslistfollowedbyauthenticateduser) - List the people the authenticated user follows
* [usersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [usersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [usersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [usersListGpgKeysForAuthenticatedUser](#userslistgpgkeysforauthenticateduser) - List GPG keys for the authenticated user
* [usersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [usersListPublicEmailsForAuthenticatedUser](#userslistpublicemailsforauthenticateduser) - List public email addresses for the authenticated user
* [usersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [usersListPublicSshKeysForAuthenticatedUser](#userslistpublicsshkeysforauthenticateduser) - List public SSH keys for the authenticated user
* [usersUnfollow](#usersunfollow) - Unfollow a user
* [usersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## usersAddEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#add-an-email-address-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersAddEmailForAuthenticatedUserRequestBody1();
    $request->emails = [
        'username@example.com',
        'username@example.com',
        'username@example.com',
        'username@example.com',
    ];

    $response = $sdk->users->usersAddEmailForAuthenticatedUser($request);

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#check-if-a-user-follows-another-user>

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
    $request->targetUser = 'minus';
    $request->username = 'Oswald_Olson';

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

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
    $request->username = 'Mona_Ryan';

    $response = $sdk->users->usersCheckPersonIsFollowedByAuthenticated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCreateGpgKeyForAuthenticatedUser

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreateGpgKeyForAuthenticatedUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCreateGpgKeyForAuthenticatedUserRequestBody();
    $request->armoredPublicKey = 'maxime';

    $response = $sdk->users->usersCreateGpgKeyForAuthenticatedUser($request);

    if ($response->gpgKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersCreatePublicSshKeyForAuthenticatedUser

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreatePublicSshKeyForAuthenticatedUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCreatePublicSshKeyForAuthenticatedUserRequestBody();
    $request->key = 'accusantium';
    $request->title = 'Personal MacBook Air';

    $response = $sdk->users->usersCreatePublicSshKeyForAuthenticatedUser($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'fugit'

    $response = $sdk->users->usersDeleteEmailForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteGpgKeyForAuthenticatedUser

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteGpgKeyForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteGpgKeyForAuthenticatedUserRequest();
    $request->gpgKeyId = 866292;

    $response = $sdk->users->usersDeleteGpgKeyForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeletePublicSshKeyForAuthenticatedUser

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeletePublicSshKeyForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeletePublicSshKeyForAuthenticatedUserRequest();
    $request->keyId = 756287;

    $response = $sdk->users->usersDeletePublicSshKeyForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersFollow

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#follow-a-user>

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
    $request->username = 'Timmy51';

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#get-the-authenticated-user>

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

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.22/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#get-a-user>

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
    $request->username = 'Jayda.Erdman16';

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#get-contextual-information-for-a-user>

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
    $request->subjectId = 'rerum';
    $request->subjectType = UsersGetContextForUserSubjectTypeEnum::ORGANIZATION;
    $request->username = 'Alexa.Keeling44';

    $response = $sdk->users->usersGetContextForUser($request);

    if ($response->hovercard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetGpgKeyForAuthenticatedUser

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetGpgKeyForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetGpgKeyForAuthenticatedUserRequest();
    $request->gpgKeyId = 531195;

    $response = $sdk->users->usersGetGpgKeyForAuthenticatedUser($request);

    if ($response->gpgKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetPublicSshKeyForAuthenticatedUser

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetPublicSshKeyForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetPublicSshKeyForAuthenticatedUserRequest();
    $request->keyId = 502393;

    $response = $sdk->users->usersGetPublicSshKeyForAuthenticatedUser($request);

    if ($response->key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersList

Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-users>

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
    $request->perPage = 470647;
    $request->since = 540048;

    $response = $sdk->users->usersList($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListEmailsForAuthenticatedUser

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-email-addresses-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListEmailsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListEmailsForAuthenticatedUserRequest();
    $request->page = 697994;
    $request->perPage = 645544;

    $response = $sdk->users->usersListEmailsForAuthenticatedUser($request);

    if ($response->emails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListFollowedByAuthenticatedUser

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-the-people-the-authenticated-user-follows>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListFollowedByAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListFollowedByAuthenticatedUserRequest();
    $request->page = 541822;
    $request->perPage = 344856;

    $response = $sdk->users->usersListFollowedByAuthenticatedUser($request);

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-followers-of-the-authenticated-user>

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
    $request->page = 542340;
    $request->perPage = 101107;

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-followers-of-a-user>

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
    $request->page = 667213;
    $request->perPage = 318379;
    $request->username = 'Joyce55';

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-the-people-a-user-follows>

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
    $request->page = 811259;
    $request->perPage = 318028;
    $request->username = 'Edison_Williamson64';

    $response = $sdk->users->usersListFollowingForUser($request);

    if ($response->simpleUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListGpgKeysForAuthenticatedUser

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListGpgKeysForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListGpgKeysForAuthenticatedUserRequest();
    $request->page = 620126;
    $request->perPage = 763869;

    $response = $sdk->users->usersListGpgKeysForAuthenticatedUser($request);

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-gpg-keys-for-a-user>

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
    $request->page = 617497;
    $request->perPage = 312511;
    $request->username = 'Winona_Crist76';

    $response = $sdk->users->usersListGpgKeysForUser($request);

    if ($response->gpgKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListPublicEmailsForAuthenticatedUser

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.22/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListPublicEmailsForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListPublicEmailsForAuthenticatedUserRequest();
    $request->page = 337081;
    $request->perPage = 313590;

    $response = $sdk->users->usersListPublicEmailsForAuthenticatedUser($request);

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-public-keys-for-a-user>

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
    $request->page = 430235;
    $request->perPage = 365539;
    $request->username = 'Roslyn48';

    $response = $sdk->users->usersListPublicKeysForUser($request);

    if ($response->keySimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersListPublicSshKeysForAuthenticatedUser

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListPublicSshKeysForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListPublicSshKeysForAuthenticatedUserRequest();
    $request->page = 794306;
    $request->perPage = 990369;

    $response = $sdk->users->usersListPublicSshKeysForAuthenticatedUser($request);

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users#unfollow-a-user>

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
    $request->username = 'Thora.Veum';

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/users/#update-the-authenticated-user>

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
    $request->bio = 'fugit';
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

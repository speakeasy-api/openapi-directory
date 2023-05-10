# users

### Available Operations

* [getOrgUsers](#getorgusers) - Organization's users
* [getUser](#getuser) - A User
* [getUserAllArticles](#getuserallarticles) - User's all articles
* [getUserArticles](#getuserarticles) - User's articles
* [getUserMe](#getuserme) - The authenticated user
* [getUserPublishedArticles](#getuserpublishedarticles) - User's published articles
* [getUserUnpublishedArticles](#getuserunpublishedarticles) - User's unpublished articles
* [postAdminUsersCreate](#postadminuserscreate) - Invite a User
* [suspendUser](#suspenduser) - Suspend a User
* [unpublishUser](#unpublishuser) - Unpublish a User's Articles and Comments

## getOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrgUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrgUsersRequest();
    $request->page = 837945;
    $request->perPage = 673660;
    $request->username = 'Austyn_Witting46';

    $response = $sdk->users->getOrgUsers($request);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

This endpoint allows the client to retrieve a single user, either by id
or by the user's username.

For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->id = '8f097b00-74f1-4547-9b5e-6e13b99d488e';

    $response = $sdk->users->getUser($request);

    if ($response->getUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAllArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAllArticlesRequest();
    $request->page = 93940;
    $request->perPage = 921158;

    $response = $sdk->users->getUserAllArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserArticlesRequest();
    $request->page = 575947;
    $request->perPage = 83112;

    $response = $sdk->users->getUserArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserMe

This endpoint allows the client to retrieve information about the authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->users->getUserMe();

    if ($response->getUserMe200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPublishedArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPublishedArticlesRequest();
    $request->page = 929297;
    $request->perPage = 277718;

    $response = $sdk->users->getUserPublishedArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUnpublishedArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserUnpublishedArticlesRequest();
    $request->page = 318569;
    $request->perPage = 9356;

    $response = $sdk->users->getUserUnpublishedArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAdminUsersCreate

This endpoint allows the client to trigger an invitation to the provided email address.

        It requires a token from a user with `super_admin` privileges.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserInviteParam;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserInviteParam();
    $request->email = 'Roosevelt_Cole@hotmail.com';
    $request->name = 'Francisco Gleason';

    $response = $sdk->users->postAdminUsersCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suspendUser

This endpoint allows the client to suspend a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'suspended' role. Suspending a user will stop the
user from posting new posts and comments. It doesn't delete any of the user's content, just
prevents them from creating new content while suspended. Users are not notified of their suspension
in the UI, so if you want them to know about this, you must notify them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuspendUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuspendUserRequest();
    $request->id = 586513;

    $response = $sdk->users->suspendUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpublishUser

This endpoint allows the client to unpublish all of the articles and
comments created by a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user's articles and comments will be unpublished and will no longer be
visible to the public. They will remain in the database and will set back to draft status
on the specified user's  dashboard. Any notifications associated with the specified user's
articles and comments will be deleted.

Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
status code immediately, but the articles and comments will not be unpublished until the
request is completed on the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishUserRequest();
    $request->id = 552822;

    $response = $sdk->users->unpublishUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# users

## Overview

A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.

Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier `me` can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, `GET /users/me`).

### Available Operations

* [getFavoritesForUser](#getfavoritesforuser) - Get a user's favorites
* [getUser](#getuser) - Get a user
* [getUsers](#getusers) - Get multiple users
* [getUsersForTeam](#getusersforteam) - Get users in a team
* [getUsersForWorkspace](#getusersforworkspace) - Get users in a workspace or organization

## getFavoritesForUser

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFavoritesForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFavoritesForUserResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFavoritesForUserRequest();
    $request->optFields = [
        'beatae',
        'laudantium',
        'exercitationem',
        'praesentium',
    ];
    $request->optPretty = false;
    $request->resourceType = GetFavoritesForUserResourceTypeEnum::USER;
    $request->userGid = 'laboriosam';
    $request->workspace = 'dolorum';

    $response = $sdk->users->getFavoritesForUser($request);

    if ($response->getFavoritesForUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Returns the full user record for the single user with the provided ID.

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
    $request->optFields = [
        'error',
        'hic',
        'expedita',
    ];
    $request->optPretty = false;
    $request->userGid = 'debitis';

    $response = $sdk->users->getUser($request);

    if ($response->getUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->limit = 204923;
    $request->offset = 'dolorum';
    $request->optFields = [
        'officia',
        'dolorum',
    ];
    $request->optPretty = false;
    $request->team = 'corrupti';
    $request->workspace = 'accusamus';

    $response = $sdk->users->getUsers($request);

    if ($response->getUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersForTeam

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersForTeamRequest();
    $request->offset = 'tempora';
    $request->optFields = [
        'fugit',
        'ut',
        'fugiat',
    ];
    $request->optPretty = false;
    $request->teamGid = 'voluptatem';

    $response = $sdk->users->getUsersForTeam($request);

    if ($response->getUsersForTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersForWorkspace

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersForWorkspaceRequest();
    $request->offset = 'culpa';
    $request->optFields = [
        'magnam',
        'consequatur',
        'esse',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'ipsam';

    $response = $sdk->users->getUsersForWorkspace($request);

    if ($response->getUsersForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

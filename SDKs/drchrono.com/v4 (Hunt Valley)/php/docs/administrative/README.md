# administrative

## Overview

Create and manage administrative resources

### Available Operations

* [doctorsList](#doctorslist) - Retrieve or search doctors within practice group
* [doctorsRead](#doctorsread) - Retrieve an existing dcotor
* [userGroupsList](#usergroupslist) - Retrieve or search user groups
* [userGroupsRead](#usergroupsread) - Retrieve an existing user group
* [usersList](#userslist) - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
* [usersRead](#usersread) - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

## doctorsList

Retrieve or search doctors within practice group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoctorsListRequest();
    $request->cursor = 'quibusdam';
    $request->doctor = 602763;
    $request->pageSize = 857946;

    $requestSecurity = new DoctorsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->doctorsList($request, $requestSecurity);

    if ($response->doctorsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doctorsRead

Retrieve an existing dcotor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\DoctorsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoctorsReadRequest();
    $request->doctor = 544883;
    $request->id = 'd69a674e-0f46-47cc-8796-ed151a05dfc2';

    $requestSecurity = new DoctorsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->doctorsRead($request, $requestSecurity);

    if ($response->doctor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGroupsList

Retrieve or search user groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGroupsListRequest();
    $request->cursor = 'at';
    $request->doctor = 870088;
    $request->pageSize = 978619;

    $requestSecurity = new UserGroupsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->userGroupsList($request, $requestSecurity);

    if ($response->userGroupsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## userGroupsRead

Retrieve an existing user group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UserGroupsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\UserGroupsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserGroupsReadRequest();
    $request->doctor = 473608;
    $request->id = 'cc78ca1b-a928-4fc8-9674-2cb739205929';

    $requestSecurity = new UserGroupsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->userGroupsRead($request, $requestSecurity);

    if ($response->userProfilesGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersList

Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersListRequest();
    $request->cursor = 'dolor';
    $request->doctor = 616934;
    $request->pageSize = 386489;

    $requestSecurity = new UsersListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->usersList($request, $requestSecurity);

    if ($response->usersList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersRead

Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersReadRequest();
    $request->doctor = 943749;
    $request->id = 'ea7596eb-10fa-4aa2-b52c-5955907aff1a';

    $requestSecurity = new UsersReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->administrative->usersRead($request, $requestSecurity);

    if ($response->userProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

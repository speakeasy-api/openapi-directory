# users

## Overview

The Users service allows you to manage your project users.

### Available Operations

* [usersCreate](#userscreate) - Create User
* [usersDelete](#usersdelete) - Delete User
* [usersDeleteSession](#usersdeletesession) - Delete User Session
* [usersDeleteSessions](#usersdeletesessions) - Delete User Sessions
* [usersGet](#usersget) - Get User
* [usersGetLogs](#usersgetlogs) - Get User Logs
* [usersGetPrefs](#usersgetprefs) - Get User Preferences
* [usersGetSessions](#usersgetsessions) - Get User Sessions
* [usersList](#userslist) - List Users
* [usersUpdatePrefs](#usersupdateprefs) - Update User Preferences
* [usersUpdateStatus](#usersupdatestatus) - Update User Status
* [usersUpdateVerification](#usersupdateverification) - Update Email Verification

## usersCreate

Create a new user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersCreateRequestBody();
    $request->email = 'Catalina_Casper86@yahoo.com';
    $request->name = 'Nathaniel Marks';
    $request->password = 'accusantium';

    $requestSecurity = new UsersCreateSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersCreate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDelete

Delete a user by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteRequest();
    $request->userId = 'ab';

    $requestSecurity = new UsersDeleteSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteSession

Delete a user sessions by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteSessionRequest();
    $request->sessionId = 'maiores';
    $request->userId = 'quidem';

    $requestSecurity = new UsersDeleteSessionSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersDeleteSession($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDeleteSessions

Delete all user's sessions by using the user's unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSessionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteSessionsRequest();
    $request->userId = 'ipsam';

    $requestSecurity = new UsersDeleteSessionsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersDeleteSessions($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGet

Get a user by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetRequest();
    $request->userId = 'voluptate';

    $requestSecurity = new UsersGetSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetLogs

Get a user activity logs list by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetLogsRequest();
    $request->userId = 'autem';

    $requestSecurity = new UsersGetLogsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersGetLogs($request, $requestSecurity);

    if ($response->logList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetPrefs

Get the user preferences by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetPrefsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetPrefsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetPrefsRequest();
    $request->userId = 'nam';

    $requestSecurity = new UsersGetPrefsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersGetPrefs($request, $requestSecurity);

    if ($response->preferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersGetSessions

Get the user sessions list by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersGetSessionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersGetSessionsRequest();
    $request->userId = 'eaque';

    $requestSecurity = new UsersGetSessionsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersGetSessions($request, $requestSecurity);

    if ($response->sessionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersList

Get a list of all the project's users. You can use the query params to filter your results.

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
    $request->limit = 866383;
    $request->offset = 365496;
    $request->orderType = 'voluptatibus';
    $request->search = 'perferendis';

    $requestSecurity = new UsersListSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersList($request, $requestSecurity);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdatePrefs

Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdatePrefsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdatePrefsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdatePrefsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdatePrefsRequest();
    $request->requestBody = new UsersUpdatePrefsRequestBody();
    $request->requestBody->prefs = [
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
        'nobis' => 'dolores',
    ];
    $request->userId = 'quis';

    $requestSecurity = new UsersUpdatePrefsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersUpdatePrefs($request, $requestSecurity);

    if ($response->preferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdateStatus

Update the user status by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateStatusRequest();
    $request->requestBody = new UsersUpdateStatusRequestBody();
    $request->requestBody->status = 521037;
    $request->userId = 'dignissimos';

    $requestSecurity = new UsersUpdateStatusSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersUpdateStatus($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdateVerification

Update the user email verification status by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateVerificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateVerificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateVerificationRequest();
    $request->requestBody = new UsersUpdateVerificationRequestBody();
    $request->requestBody->emailVerification = false;
    $request->userId = 'eaque';

    $requestSecurity = new UsersUpdateVerificationSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersUpdateVerification($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# mySqlDatabases

## Overview

Manage your MySql databases.

### Available Operations

* [changeDatabaseUserPassword](#changedatabaseuserpassword) - Change password for mysql user
* [changeDatabaseUserStatus](#changedatabaseuserstatus) - Enable/disable mysql user
* [createMySqlDatabase](#createmysqldatabase) - Create a new mysql database
* [createMySqlUser](#createmysqluser) - Create a new mysql user
* [deleteDatabase](#deletedatabase) - Delete a mysql database
* [deleteDatabaseUser](#deletedatabaseuser) - Delete a mysql user
* [getDatabaseUsers](#getdatabaseusers) - Overview of mysql users
* [getMySqlDatabase](#getmysqldatabase) - Get a specific database
* [getMySqlDatabases](#getmysqldatabases) - Overview of mysql databases

## changeDatabaseUserPassword

Change password for mysql user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeDatabaseUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeDatabaseUserPasswordRequest();
    $request->updateUserPasswordRequest = new UpdateUserPasswordRequest();
    $request->updateUserPasswordRequest->password = 'saepe';
    $request->databaseNamePathParameter = 'eius';
    $request->databaseNameQueryParameter = 'aspernatur';
    $request->userNamePathParameter = 'perferendis';
    $request->userNameQueryParameter = 'amet';

    $response = $sdk->mySqlDatabases->changeDatabaseUserPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeDatabaseUserStatus

Enable/disable mysql user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeDatabaseUserStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeDatabaseUserStatusRequest();
    $request->updateUserStatusRequest = new UpdateUserStatusRequest();
    $request->updateUserStatusRequest->enabled = false;
    $request->databaseNamePathParameter = 'optio';
    $request->databaseNameQueryParameter = 'accusamus';
    $request->userNamePathParameter = 'ad';
    $request->userNameQueryParameter = 'saepe';

    $response = $sdk->mySqlDatabases->changeDatabaseUserStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMySqlDatabase

Create a new mysql database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateMySqlDatabase;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMySqlDatabase();
    $request->accountId = 383464;
    $request->databaseName = 'deserunt';
    $request->password = 'provident';

    $response = $sdk->mySqlDatabases->createMySqlDatabase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMySqlUser

The creation of a new mysql user will result in a user with read_only rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMySqlUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMySqlUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMySqlUserRequest();
    $request->createMySqlUser = new CreateMySqlUser();
    $request->createMySqlUser->name = 'Kari Leannon PhD';
    $request->createMySqlUser->password = 'quaerat';
    $request->databaseNamePathParameter = 'tempora';
    $request->databaseNameQueryParameter = 'vel';

    $response = $sdk->mySqlDatabases->createMySqlUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatabase

Delete a mysql database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatabaseRequest();
    $request->databaseNamePathParameter = 'quod';
    $request->databaseNameQueryParameter = 'officiis';

    $response = $sdk->mySqlDatabases->deleteDatabase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatabaseUser

The deletion of a mysql user is allowed for users with read_only rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatabaseUserRequest();
    $request->databaseNamePathParameter = 'qui';
    $request->databaseNameQueryParameter = 'dolorum';
    $request->userNamePathParameter = 'a';
    $request->userNameQueryParameter = 'esse';

    $response = $sdk->mySqlDatabases->deleteDatabaseUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatabaseUsers

Overview of mysql users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatabaseUsersRequest();
    $request->databaseNamePathParameter = 'harum';
    $request->databaseNameQueryParameter = 'iusto';

    $response = $sdk->mySqlDatabases->getDatabaseUsers($request);

    if ($response->mySqlUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMySqlDatabase

Get a specific database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMySqlDatabaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMySqlDatabaseRequest();
    $request->databaseNamePathParameter = 'ipsum';
    $request->databaseNameQueryParameter = 'quisquam';

    $response = $sdk->mySqlDatabases->getMySqlDatabase($request);

    if ($response->mySqlDatabase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMySqlDatabases

Overview of mysql databases

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMySqlDatabasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMySqlDatabasesRequest();
    $request->skip = 947371;
    $request->take = 229442;

    $response = $sdk->mySqlDatabases->getMySqlDatabases($request);

    if ($response->mySqlDatabases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

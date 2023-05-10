# teamMembers

## Overview

Endpoints related to team member user accounts

### Available Operations

* [deleteUserUserId](#deleteuseruserid) - Delete a team member's user record
* [getUserUserId](#getuseruserid) - Retrieve the information associated with a team member's user record
* [getUsers](#getusers) - Retrieve the information associated with all team members' user records
* [postUser](#postuser) - Create a user

## deleteUserUserId

To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserUserIdRequest();
    $request->userId = 1;

    $response = $sdk->teamMembers->deleteUserUserId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserUserId

Retrieve the information associated with a user's account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserUserIdRequest();
    $request->userId = 1;

    $response = $sdk->teamMembers->getUserUserId($request);

    if ($response->userRecord !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Retrieve the information associated with all team members' user records


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
    $response = $sdk->teamMembers->getUsers();

    if ($response->userRecords !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUser

Use this endpoint to create a team member (user) record

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUserSample;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUserSample();
    $request->admin = true;
    $request->email = 'user@example.com';
    $request->name = 'Jane Doe';
    $request->readOnly = false;

    $response = $sdk->teamMembers->postUser($request);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# users

### Available Operations

* [getUser](#getuser) - Returns details of a specific fire.com user.
* [getUsers](#getusers) - Returns list of all users on your fire.com account

## getUser

You can retrieve the details of a specific fire.com user

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
    $request->userId = 14059;

    $response = $sdk->users->getUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

You can retrieve the details of all fire.com users on your acount.

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
    $response = $sdk->users->getUsers();

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

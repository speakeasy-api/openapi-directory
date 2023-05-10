# authentication

### Available Operations

* [postUsers2FALogin](#postusers2falogin) - Second factor authentication.
* [postUsersLogin](#postuserslogin) - Create an authentication token

## postUsers2FALogin

When a user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Users2FALoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Users2FALoginRequest();
    $request->code = '123456';
    $request->login2faToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    $response = $sdk->authentication->postUsers2FALogin($request);

    if ($response->postUsersLoginSuccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersLogin

Creates and returns a bearer token in JWT format that you can use to
authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UsersLoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersLoginRequest();
    $request->password = 'hunter2';
    $request->username = 'myusername';

    $response = $sdk->authentication->postUsersLogin($request);

    if ($response->postUsersLoginSuccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

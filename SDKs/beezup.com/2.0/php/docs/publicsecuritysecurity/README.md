# publicSecuritySecurity

### Available Operations

* [login](#login) - Login
* [lostPassword](#lostpassword) - Lost password
* [register](#register) - User Registration

## login

User Login - The login will give your tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LoginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LoginRequest();
    $request->login = 'paulsimon@mysupercompany.com';
    $request->password = 'I@mW0nder$Full';

    $response = $sdk->publicSecuritySecurity->login($request);

    if ($response->apiCredentials !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lostPassword

Lost password - Your password will be regenerated and sent to your email

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'paulsimon@mysupercompany.com'

    $response = $sdk->publicSecuritySecurity->lostPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## register

User Registration - Create a new user on BeezUP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRequest();
    $request->commercialOwnerUserId = '47ea14ab-195d-4f9a-a24e-32c329ee40f6';
    $request->cultureName = 'en-GB';
    $request->email = 'myemail@mycompany.com';
    $request->password = 'I@mW0nder$Full';

    $response = $sdk->publicSecuritySecurity->register($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

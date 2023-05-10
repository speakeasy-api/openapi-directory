# users

### Available Operations

* [getUsersMe](#getusersme) - About Me

## getUsersMe

Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersMeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUsersMeSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->getUsersMe($requestSecurity);

    if ($response->userContactV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# profile

### Available Operations

* [getProfile](#getprofile) - Get profile

## getProfile

Returns information about your user profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->profile->getProfile($requestSecurity);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

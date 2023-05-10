# tokens

### Available Operations

* [getMe](#getme) - Get token details

## getMe

Get token details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetMeSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->tokens->getMe($requestSecurity);

    if ($response->me !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# auth

### Available Operations

* [~~getAuthIntrospect~~](#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [getAuthIntrospectV2](#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token

## ~~getAuthIntrospect~~

Performs introspection of the provided Bearer JWT token

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthIntrospectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAuthIntrospectSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->auth->getAuthIntrospect($requestSecurity);

    if ($response->introspection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthIntrospectV2

Performs introspection of the provided Bearer JWT token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthIntrospectV2Security;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAuthIntrospectV2Security();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->auth->getAuthIntrospectV2($requestSecurity);

    if ($response->introspectionV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

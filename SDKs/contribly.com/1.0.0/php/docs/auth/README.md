# auth

## Overview

Authentication related

### Available Operations

* [getCredentials](#getcredentials) - List the credentials associated with the authenticated user.
* [getScopes](#getscopes) - Scopes
* [postVerify](#postverify) - Verify token and return details of the owning user

## getCredentials

List the credentials associated with the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->auth->getCredentials();

    if ($response->credentials !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScopes

List available token scopes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->auth->getScopes();

    if ($response->getScopes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerify

Verify token and return details of the owning user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVerifySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostVerifySecurity();
    $requestSecurity->oauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->auth->postVerify($requestSecurity);

    if ($response->authority !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

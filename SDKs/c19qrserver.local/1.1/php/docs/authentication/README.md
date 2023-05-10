# authentication

## Overview

Authentication-related endpoints

### Available Operations

* [postLogin](#postlogin) - Log in to get an API token
* [postLogout](#postlogout) - Log out

## postLogin

Submit your email and password to get an API token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostLoginSample;
use \OpenAPI\OpenAPI\Models\Operations\PostLoginSampleSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLoginSample();
    $request->email = 'aijaz@example.org';
    $request->password = 'hunter2';
    $request->source = PostLoginSampleSourceEnum::WEB;

    $response = $sdk->authentication->postLogin($request);

    if ($response->loginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLogout

Log out by deleting your token off the server.

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
    $response = $sdk->authentication->postLogout();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

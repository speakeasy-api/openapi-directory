# sessions

## Overview

Operations about sessions

### Available Operations

* [deleteSessions](#deletesessions) - Delete user session (log out)
* [postSessions](#postsessions) - Create user session (log in)

## deleteSessions

Delete user session (log out)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sessions->deleteSessions();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSessions

Create user session (log in)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSessionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSessionsRequestBody();
    $request->otp = '123456';
    $request->partialSessionId = 'provident';
    $request->password = 'password';
    $request->username = 'username';

    $response = $sdk->sessions->postSessions($request);

    if ($response->sessionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

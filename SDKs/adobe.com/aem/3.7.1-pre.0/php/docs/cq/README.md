# cq

### Available Operations

* [getLoginPage](#getloginpage)
* [postCqActions](#postcqactions)

## getLoginPage

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
    $response = $sdk->cq->getLoginPage();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCqActions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCqActionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCqActionsRequest();
    $request->authorizableId = 'totam';
    $request->changelog = 'porro';

    $response = $sdk->cq->postCqActions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

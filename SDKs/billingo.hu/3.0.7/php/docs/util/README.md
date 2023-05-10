# util

### Available Operations

* [getId](#getid) - Convert legacy ID to v3 ID.

## getId

Retrieves the API v3 ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdRequest();
    $request->id = 896039;

    $response = $sdk->util->getId($request);

    if ($response->id !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

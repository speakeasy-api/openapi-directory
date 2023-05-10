<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyKeyRequest();
    $request->key = 'corrupti';

    $response = $sdk->deleteKeyKey($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
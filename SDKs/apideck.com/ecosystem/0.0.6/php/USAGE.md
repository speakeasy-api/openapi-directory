<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CategoriesAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CategoriesAllRequest();
    $request->cursor = 'corrupti';
    $request->ecosystemId = 'provident';
    $request->limit = 715190;

    $response = $sdk->category->categoriesAll($request);

    if ($response->getCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
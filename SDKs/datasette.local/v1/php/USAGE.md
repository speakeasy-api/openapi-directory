<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryShapeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->shape = QueryShapeEnum::ARRAY;
    $request->sql = 'corrupti';

    $response = $sdk->query($request);

    if ($response->query200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
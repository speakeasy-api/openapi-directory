<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoryRatedAreasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoryRatedAreasRequest();
    $request->latitude = 5488.14;
    $request->longitude = 5928.45;

    $response = $sdk->categoryRatedAreas->getCategoryRatedAreas($request);

    if ($response->getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
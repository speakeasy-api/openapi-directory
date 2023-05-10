# categoryRatedAreas

### Available Operations

* [getCategoryRatedAreas](#getcategoryratedareas) - GET category rated areas

## getCategoryRatedAreas

GET category rated areas

### Example Usage

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
    $request->latitude = 7151.9;
    $request->longitude = 8442.66;

    $response = $sdk->categoryRatedAreas->getCategoryRatedAreas($request);

    if ($response->getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody();
    $request->content = 'corrupti';

    $response = $sdk->similarity->srcSearchlyApiV1ControllersSimilarityByContent($request);

    if ($response->apiResponseSimilarity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
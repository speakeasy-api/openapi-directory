<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeywordSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeywordSearchRequest();
    $request->domainCode = 'corrupti';
    $request->keyword = 'provident';
    $request->numberOfProducts = 715190;
    $request->sortBy = 'quibusdam';

    $response = $sdk->amz->keywordSearch($request);

    if ($response->keywordSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
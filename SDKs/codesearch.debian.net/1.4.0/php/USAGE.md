<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->matchMode = SearchMatchModeEnum::REGEXP;
    $request->query = 'provident';

    $requestSecurity = new SearchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->search($request, $requestSecurity);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionsSort;
use \OpenAPI\OpenAPI\Models\Shared\CollectionsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'provident';
    $request->limit = 715190;
    $request->raw = false;
    $request->sort = new CollectionsSort();
    $request->sort->by = CollectionsSortByEnum::NAME;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'unde';
    $request->xApideckConsumerId = 'nulla';
    $request->xApideckServiceId = 'corrupti';

    $requestSecurity = new CollectionsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->collections->collectionsAll($request, $requestSecurity);

    if ($response->getCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
# collections

### Available Operations

* [collectionsAll](#collectionsall) - List Collections
* [collectionsOne](#collectionsone) - Get Collection

## collectionsAll

List Collections

### Example Usage

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
    $request->cursor = 'illum';
    $request->fields = 'vel';
    $request->limit = 623564;
    $request->raw = false;
    $request->sort = new CollectionsSort();
    $request->sort->by = CollectionsSortByEnum::NAME;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'suscipit';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'magnam';

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

## collectionsOne

Get Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsOneRequest();
    $request->collectionId = 'apideck-io';
    $request->fields = 'debitis';
    $request->raw = false;
    $request->xApideckAppId = 'ipsa';
    $request->xApideckConsumerId = 'delectus';
    $request->xApideckServiceId = 'tempora';

    $requestSecurity = new CollectionsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->collections->collectionsOne($request, $requestSecurity);

    if ($response->getCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# collection

### Available Operations

* [collectionListingsAll](#collectionlistingsall) - List collection listings
* [collectionsAll](#collectionsall) - List collections
* [collectionsOne](#collectionsone) - Get collection

## collectionListingsAll

List collection listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionListingsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionListingsAllRequest();
    $request->cursor = 'iste';
    $request->ecosystemId = 'dolor';
    $request->id = '96fea759-6eb1-40fa-aa23-52c5955907af';
    $request->limit = 958950;

    $response = $sdk->collection->collectionListingsAll($request);

    if ($response->getListingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsAll

List collections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsAllRequest();
    $request->cursor = 'architecto';
    $request->ecosystemId = 'mollitia';
    $request->limit = 208876;

    $response = $sdk->collection->collectionsAll($request);

    if ($response->getCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsOne

Get collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsOneRequest();
    $request->ecosystemId = 'culpa';
    $request->id = '2fa94677-3925-41aa-92c3-f5ad019da1ff';

    $response = $sdk->collection->collectionsOne($request);

    if ($response->getCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

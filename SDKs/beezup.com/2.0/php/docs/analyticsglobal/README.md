# analyticsGlobal

### Available Operations

* [analyticsIndex](#analyticsindex) - Get the Analytics API operation index
* [analyticsStoreIndex](#analyticsstoreindex) - Get the Analytics API operation index for one store

## analyticsIndex

Get the Analytics API operation index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->analyticsGlobal->analyticsIndex();

    if ($response->analyticsIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsStoreIndex

Get the Analytics API operation index for one store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsStoreIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsStoreIndexRequest();
    $request->storeId = 'corrupti';

    $response = $sdk->analyticsGlobal->analyticsStoreIndex($request);

    if ($response->analyticsStoreIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

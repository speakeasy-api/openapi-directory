# customerShares

### Available Operations

* [deleteStoreShare](#deletestoreshare) - Delete a share of a store to another user
* [getStoreShares](#getstoreshares) - Get shares related to this store
* [shareStore](#sharestore) - Share a store to another user

## deleteStoreShare

Delete a share of a store to another user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStoreShareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStoreShareRequest();
    $request->storeId = 'excepturi';
    $request->userId = 'cum';

    $response = $sdk->customerShares->deleteStoreShare($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreShares

Get shares related to this store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreSharesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreSharesRequest();
    $request->ifNoneMatch = 'voluptate';
    $request->storeId = 'dignissimos';

    $response = $sdk->customerShares->getStoreShares($request);

    if ($response->storeShares !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shareStore

Share a store to another user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ShareStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShareStoreRequest();
    $request->requestBody = 'humphray.bogart@yahoo.ma';
    $request->storeId = 'reiciendis';

    $response = $sdk->customerShares->shareStore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

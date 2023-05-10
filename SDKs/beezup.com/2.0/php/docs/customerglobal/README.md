# customerGlobal

### Available Operations

* [getCustomerIndex](#getcustomerindex) - The index of all operations and LOV

## getCustomerIndex

The index of all operations and LOV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerIndexRequest();
    $request->ifNoneMatch = 'qui';

    $response = $sdk->customerGlobal->getCustomerIndex($request);

    if ($response->customerIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

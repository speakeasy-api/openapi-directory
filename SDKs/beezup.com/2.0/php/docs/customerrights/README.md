# customerRights

### Available Operations

* [getRights](#getrights) - Get store's rights

## getRights

Get store's rights

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRightsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRightsRequest();
    $request->storeId = 'hic';

    $response = $sdk->customerRights->getRights($request);

    if ($response->functionalityRightInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

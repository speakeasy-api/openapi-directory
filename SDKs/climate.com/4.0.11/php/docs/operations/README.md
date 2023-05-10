# operations

## Overview

Operation data endpoints.

### Available Operations

* [fetchOperations](#fetchoperations) - Retrieve the operations accessible to a a given user.

## fetchOperations

Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchOperationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchOperationsRequest();
    $request->resourceOwnerId = 'fuga';

    $requestSecurity = new FetchOperationsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->operations->fetchOperations($request, $requestSecurity);

    if ($response->operations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

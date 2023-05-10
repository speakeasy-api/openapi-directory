# resourceOwners

## Overview

Resource Owner data endpoints.

### Available Operations

* [getResourceOwner](#getresourceowner) - Retrieve a resource owner by ID

## getResourceOwner

Retrieve a resource owner for the given `resourceOwnerId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceOwnerRequest();
    $request->resourceOwnerId = '7bd466d2-8c10-4ab3-8dca-4251904e523c';

    $requestSecurity = new GetResourceOwnerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->resourceOwners->getResourceOwner($request, $requestSecurity);

    if ($response->resourceOwner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

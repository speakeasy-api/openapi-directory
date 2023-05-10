# privilege

### Available Operations

* [getPrivileges](#getprivileges) - This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

## getPrivileges

This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrivilegesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetPrivilegesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->privilege->getPrivileges($requestSecurity);

    if ($response->sellingPrivileges !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

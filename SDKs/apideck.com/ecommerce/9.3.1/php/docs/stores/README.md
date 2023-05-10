# stores

### Available Operations

* [storesOne](#storesone) - Get Store

## storesOne

Get Store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoresOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresOneRequest();
    $request->fields = 'tenetur';
    $request->raw = false;
    $request->xApideckAppId = 'ipsam';
    $request->xApideckConsumerId = 'id';
    $request->xApideckServiceId = 'possimus';

    $requestSecurity = new StoresOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->stores->storesOne($request, $requestSecurity);

    if ($response->getStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyRevokeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyRevokeRequest();
    $request->pk = 'corrupti';
    $request->secret = 'provident';

    $response = $sdk->delete->keyRevoke($request);

    if ($response->keyRevoke200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
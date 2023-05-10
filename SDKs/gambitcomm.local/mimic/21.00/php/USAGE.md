<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessAddRequest();
    $request->agents = 'corrupti';
    $request->mask = 'provident';
    $request->user = 'distinctio';

    $response = $sdk->access->accessAdd($request);

    if ($response->accessAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
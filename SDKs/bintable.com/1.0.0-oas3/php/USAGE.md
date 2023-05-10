<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BalanceLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceLookupRequest();
    $request->apiKey = 'corrupti';

    $response = $sdk->balance->balanceLookup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
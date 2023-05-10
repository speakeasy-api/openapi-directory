<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestBaseCurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestBaseCurrencyRequest();
    $request->baseCurrency = 'corrupti';

    $response = $sdk->getLatestBaseCurrency($request);

    if ($response->getLatestBaseCurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
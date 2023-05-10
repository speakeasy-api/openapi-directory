<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAPIRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAPIRequest();
    $request->api = '2.1.0';
    $request->provider = 'apis.guru';

    $response = $sdk->apIs->getAPI($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
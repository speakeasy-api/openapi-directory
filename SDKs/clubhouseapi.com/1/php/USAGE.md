<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckForUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckForUpdateRequest();
    $request->isTestflight = 548814;

    $response = $sdk->getCheckForUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
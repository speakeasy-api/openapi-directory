<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigConfigGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigConfigGetRequest();
    $request->authorization = 'corrupti';

    $response = $sdk->configConfigGet($request);

    if ($response->config !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
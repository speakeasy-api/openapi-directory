<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAboutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAboutRequest();
    $request->outputFormat = 'corrupti';

    $response = $sdk->getAbout($request);

    if ($response->about !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
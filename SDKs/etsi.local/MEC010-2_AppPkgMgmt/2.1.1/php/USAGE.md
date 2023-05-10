<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppDGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDGETRequest();
    $request->allFields = 'corrupti';
    $request->appDId = 'provident';
    $request->excludeDefault = 'distinctio';
    $request->excludeFields = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';

    $response = $sdk->appPkgm->appDGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
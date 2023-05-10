<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppendTextUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppendTextUsingGETRequest();
    $request->padID = 'corrupti';
    $request->text = 'provident';

    $response = $sdk->appendTextUsingGET($request);

    if ($response->appendTextUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUuidRequest();
    $request->count = 548814;

    $requestSecurity = new GetUuidSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->uuidGeneration->getUuid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
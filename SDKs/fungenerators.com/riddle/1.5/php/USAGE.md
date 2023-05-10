<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRiddleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRiddleRequest();
    $request->id = 'corrupti';

    $requestSecurity = new DeleteRiddleSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->privateRiddles->deleteRiddle($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateGenerateInsultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateGenerateInsultRequest();
    $request->limit = 548814;

    $requestSecurity = new GetPirateGenerateInsultSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getPirateGenerateInsult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
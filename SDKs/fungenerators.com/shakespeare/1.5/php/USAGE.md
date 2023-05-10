<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateInsultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareGenerateInsultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShakespeareGenerateInsultRequest();
    $request->limit = 548814;

    $requestSecurity = new GetShakespeareGenerateInsultSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->generation->getShakespeareGenerateInsult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
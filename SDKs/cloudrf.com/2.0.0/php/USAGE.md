<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InterferenceRequest();
    $request->name = 'Terrence Rau';
    $request->network = 'nulla';

    $requestSecurity = new InterferenceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->analyse->interference($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
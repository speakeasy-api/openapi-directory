<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AssignTerminalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAssignTerminalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignTerminalsRequest();
    $request->companyAccount = 'corrupti';
    $request->merchantAccount = 'provident';
    $request->merchantInventory = false;
    $request->store = 'distinctio';
    $request->terminals = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];

    $requestSecurity = new PostAssignTerminalsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAssignTerminals($request, $requestSecurity);

    if ($response->assignTerminalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
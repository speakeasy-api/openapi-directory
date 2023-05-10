<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRecoveryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRecoverySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreateRecoveryRequestBody();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->url = 'corrupti';

    $requestSecurity = new AccountCreateRecoverySecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountCreateRecovery($request, $requestSecurity);

    if ($response->token !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
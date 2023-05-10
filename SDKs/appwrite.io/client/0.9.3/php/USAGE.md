<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreateRequestBody();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->name = 'Dallas Kassulke';
    $request->password = 'suscipit';

    $requestSecurity = new AccountCreateSecurity();
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountCreate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
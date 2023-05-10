<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderBalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountHolderBalanceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountHolderBalanceRequest();
    $request->accountHolderCode = 'corrupti';

    $requestSecurity = new PostAccountHolderBalanceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAccountHolderBalance($request, $requestSecurity);

    if ($response->accountHolderBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
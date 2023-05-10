<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CloseAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCloseAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseAccountHolderRequest();
    $request->accountHolderCode = 'corrupti';

    $requestSecurity = new PostCloseAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->accountHolders->postCloseAccountHolder($request, $requestSecurity);

    if ($response->closeAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
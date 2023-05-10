<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Permit;
use \OpenAPI\OpenAPI\Models\Shared\PermitRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePermitSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermitRequest();
    $request->merchantAccount = 'corrupti';
    $request->permits = [
        new Permit(),
        new Permit(),
        new Permit(),
    ];
    $request->recurringDetailReference = 'distinctio';
    $request->shopperReference = 'quibusdam';

    $requestSecurity = new PostCreatePermitSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreatePermit($request, $requestSecurity);

    if ($response->createPermitResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
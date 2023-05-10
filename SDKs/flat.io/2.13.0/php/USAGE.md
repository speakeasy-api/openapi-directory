<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthenticatedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthenticatedUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthenticatedUserRequest();
    $request->onlyId = false;

    $requestSecurity = new GetAuthenticatedUserSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getAuthenticatedUser($request, $requestSecurity);

    if ($response->userDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
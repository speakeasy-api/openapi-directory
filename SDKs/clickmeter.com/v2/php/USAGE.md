<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteDomainWhitelistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteDomainWhitelistRequest();
    $request->whitelistId = 'corrupti';

    $response = $sdk->account->accountDeleteDomainWhitelist($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
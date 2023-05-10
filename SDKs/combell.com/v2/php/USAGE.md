<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccount();
    $request->ftpPassword = 'corrupti';
    $request->identifier = 'provident';
    $request->servicepackId = 715190;

    $response = $sdk->accounts->createAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
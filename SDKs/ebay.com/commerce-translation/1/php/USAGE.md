<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TranslateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TranslateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateRequest();
    $request->from = 'corrupti';
    $request->text = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->to = 'nulla';
    $request->translationContext = 'corrupti';

    $requestSecurity = new TranslateSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->language->translate($request, $requestSecurity);

    if ($response->translateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
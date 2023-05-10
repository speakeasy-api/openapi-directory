<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->browserSettingsArn = 'illum';
    $request->portalArn = 'vel';

    $response = $sdk->associateBrowserSettings($request);

    if ($response->associateBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
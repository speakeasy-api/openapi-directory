<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->botAlias = 'illum';
    $request->botName = 'vel';
    $request->userId = 'error';

    $response = $sdk->deleteSession($request);

    if ($response->deleteSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
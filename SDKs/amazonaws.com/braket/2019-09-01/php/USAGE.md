<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->jobArn = 'illum';

    $response = $sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
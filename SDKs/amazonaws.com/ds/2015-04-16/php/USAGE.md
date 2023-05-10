<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptSharedDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptSharedDirectoryRequest();
    $request->acceptSharedDirectoryRequest = new AcceptSharedDirectoryRequest();
    $request->acceptSharedDirectoryRequest->sharedDirectoryId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AcceptSharedDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_ACCEPT_SHARED_DIRECTORY;

    $response = $sdk->acceptSharedDirectory($request);

    if ($response->acceptSharedDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
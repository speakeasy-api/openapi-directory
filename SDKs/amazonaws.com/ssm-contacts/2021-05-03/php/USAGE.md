<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptCodeValidationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcceptTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptPageRequest();
    $request->acceptPageRequest = new AcceptPageRequest();
    $request->acceptPageRequest->acceptCode = 'corrupti';
    $request->acceptPageRequest->acceptCodeValidation = AcceptCodeValidationEnum::ENFORCE;
    $request->acceptPageRequest->acceptType = AcceptTypeEnum::READ;
    $request->acceptPageRequest->contactChannelId = 'quibusdam';
    $request->acceptPageRequest->note = 'unde';
    $request->acceptPageRequest->pageId = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AcceptPageXAmzTargetEnum::SSM_CONTACTS_ACCEPT_PAGE;

    $response = $sdk->acceptPage($request);

    if ($response->acceptPageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
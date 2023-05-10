<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequestBodyAlternateContactTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlternateContactRequest();
    $request->requestBody = new DeleteAlternateContactRequestBody();
    $request->requestBody->accountId = 'corrupti';
    $request->requestBody->alternateContactType = DeleteAlternateContactRequestBodyAlternateContactTypeEnum::OPERATIONS;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->deleteAlternateContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
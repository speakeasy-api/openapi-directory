<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFieldRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FieldIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetFieldRequest();
    $request->requestBody = new BatchGetFieldRequestBody();
    $request->requestBody->fields = [
        new FieldIdentifier(),
        new FieldIdentifier(),
        new FieldIdentifier(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->domainId = 'vel';

    $response = $sdk->batchGetField($request);

    if ($response->batchGetFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
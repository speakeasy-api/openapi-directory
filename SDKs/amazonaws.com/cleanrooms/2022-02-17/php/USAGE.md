<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetSchemaRequest();
    $request->requestBody = new BatchGetSchemaRequestBody();
    $request->requestBody->names = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->collaborationIdentifier = 'suscipit';

    $response = $sdk->batchGetSchema($request);

    if ($response->batchGetSchemaOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
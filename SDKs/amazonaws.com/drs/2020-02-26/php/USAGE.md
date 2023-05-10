<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExtendedSourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExtendedSourceServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExtendedSourceServerRequest();
    $request->requestBody = new CreateExtendedSourceServerRequestBody();
    $request->requestBody->sourceServerArn = 'corrupti';
    $request->requestBody->tags = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->createExtendedSourceServer($request);

    if ($response->createExtendedSourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
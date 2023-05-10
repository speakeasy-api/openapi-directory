<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddEventSourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddEventSourceRequest();
    $request->requestBody = new AddEventSourceRequestBody();
    $request->requestBody->batchSize = 548814;
    $request->requestBody->eventSource = 'provident';
    $request->requestBody->functionName = 'distinctio';
    $request->requestBody->parameters = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->requestBody->role = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->addEventSource($request);

    if ($response->eventSourceConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
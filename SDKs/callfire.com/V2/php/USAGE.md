<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCallBroadcastBatchRequest();
    $request->batchRequest = new BatchRequest();
    $request->batchRequest->contactListId = 548814;
    $request->batchRequest->name = 'Kelvin Sporer';
    $request->batchRequest->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->batchRequest->scrubDuplicates = false;
    $request->id = 847252;
    $request->strictValidation = false;

    $requestSecurity = new AddCallBroadcastBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->addCallBroadcastBatch($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
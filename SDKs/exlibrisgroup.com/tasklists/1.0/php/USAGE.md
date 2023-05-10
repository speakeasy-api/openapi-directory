<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlmawsV1TaskListsRsLendingRequestsRequest();
    $request->library = 'corrupti';
    $request->partner = 'provident';
    $request->printed = 'distinctio';
    $request->reported = 'quibusdam';
    $request->requestedFormat = 'unde';
    $request->status = 'nulla';
    $request->suppliedFormat = 'corrupti';

    $response = $sdk->lendingRequests->getAlmawsV1TaskListsRsLendingRequests($request);

    if ($response->getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
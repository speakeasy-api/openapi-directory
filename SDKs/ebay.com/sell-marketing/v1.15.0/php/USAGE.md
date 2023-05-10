<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateAdsByInventoryReferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\BulkCreateAdsByInventoryReferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAdsByInventoryReferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateAdsByInventoryReferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCreateAdsByInventoryReferenceRequest();
    $request->bulkCreateAdsByInventoryReferenceRequest = new BulkCreateAdsByInventoryReferenceRequest();
    $request->bulkCreateAdsByInventoryReferenceRequest->requests = [
        new CreateAdsByInventoryReferenceRequest(),
        new CreateAdsByInventoryReferenceRequest(),
        new CreateAdsByInventoryReferenceRequest(),
    ];
    $request->campaignId = 'provident';

    $requestSecurity = new BulkCreateAdsByInventoryReferenceSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ad->bulkCreateAdsByInventoryReference($request, $requestSecurity);

    if ($response->bulkCreateAdsByInventoryReferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
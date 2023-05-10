<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionNotificationExportResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionNotificationExportResultsRequest();
    $request->actionNotificationExportId = 548814;
    $request->cursor = 'provident';
    $request->perPage = 715190;
    $request->userId = 844266;

    $response = $sdk->actionNotificationExportResults->getActionNotificationExportResults($request);

    if ($response->actionNotificationExportResultEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
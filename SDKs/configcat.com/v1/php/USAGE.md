<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditlogsAuditLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditlogsRequest();
    $request->auditLogType = GetAuditlogsAuditLogTypeEnum::INTEGRATION_LINK_ADDED;
    $request->configId = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->environmentId = '05dfc2dd-f7cc-478c-a1ba-928fc816742c';
    $request->fromUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T00:14:45.467Z');
    $request->productId = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->toUtcDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');

    $response = $sdk->auditLogs->getAuditlogs($request);

    if ($response->auditLogItemModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountArticleReportRequest();
    $request->groupId = 548814;

    $requestSecurity = new AccountArticleReportSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->accountArticleReport($request, $requestSecurity);

    if ($response->accountReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->
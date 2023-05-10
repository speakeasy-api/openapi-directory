# promotionReport

### Available Operations

* [getPromotionReports](#getpromotionreports) - This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

## getPromotionReports

This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPromotionReportsRequest();
    $request->limit = 'nam';
    $request->marketplaceId = 'eaque';
    $request->offset = 'pariatur';
    $request->promotionStatus = 'nemo';
    $request->promotionType = 'voluptatibus';
    $request->q = 'perferendis';

    $requestSecurity = new GetPromotionReportsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promotionReport->getPromotionReports($request, $requestSecurity);

    if ($response->promotionsReportPagedCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

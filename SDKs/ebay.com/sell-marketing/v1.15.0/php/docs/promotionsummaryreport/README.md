# promotionSummaryReport

### Available Operations

* [getPromotionSummaryReport](#getpromotionsummaryreport) - This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.

## getPromotionSummaryReport

This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionSummaryReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionSummaryReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPromotionSummaryReportRequest();
    $request->marketplaceId = 'fugiat';

    $requestSecurity = new GetPromotionSummaryReportSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promotionSummaryReport->getPromotionSummaryReport($request, $requestSecurity);

    if ($response->summaryReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

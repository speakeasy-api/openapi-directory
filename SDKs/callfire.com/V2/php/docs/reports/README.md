# reports

### Available Operations

* [getDeliveryReports](#getdeliveryreports) - Get delivery reports by ad hoc criteria

## getDeliveryReports

Get delivery reports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliveryReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliveryReportsDeliveryCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliveryReportsDeliveryStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDeliveryReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeliveryReportsRequest();
    $request->campaignId = 788873;
    $request->carrier = 'saepe';
    $request->deliveryCategory = GetDeliveryReportsDeliveryCategoryEnum::BOUNCED;
    $request->deliveryState = GetDeliveryReportsDeliveryStateEnum::DUPE;
    $request->endDate = 'corporis';
    $request->fromNumber = 'veniam';
    $request->limit = 399499;
    $request->messageText = 'inventore';
    $request->offset = 301831;
    $request->startDate = 'ea';
    $request->toNumber = 'quo';

    $requestSecurity = new GetDeliveryReportsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->reports->getDeliveryReports($request, $requestSecurity);

    if ($response->pageDeliveryReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

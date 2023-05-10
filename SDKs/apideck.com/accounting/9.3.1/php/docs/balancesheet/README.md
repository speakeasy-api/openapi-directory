# balanceSheet

### Available Operations

* [balanceSheetOne](#balancesheetone) - Get BalanceSheet

## balanceSheetOne

Get BalanceSheet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BalanceSheetOneRequest;
use \OpenAPI\OpenAPI\Models\Shared\BalanceSheetFilter;
use \OpenAPI\OpenAPI\Models\Operations\BalanceSheetOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceSheetOneRequest();
    $request->filter = new BalanceSheetFilter();
    $request->filter->endDate = '2021-12-31';
    $request->filter->startDate = '2021-01-01';
    $request->passThrough = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'tempora';
    $request->xApideckConsumerId = 'suscipit';
    $request->xApideckServiceId = 'molestiae';

    $requestSecurity = new BalanceSheetOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->balanceSheet->balanceSheetOne($request, $requestSecurity);

    if ($response->getBalanceSheetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

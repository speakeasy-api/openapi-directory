# profitAndLoss

### Available Operations

* [profitAndLossOne](#profitandlossone) - Get Profit and Loss

## profitAndLossOne

Get Profit and Loss

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProfitAndLossOneRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfitAndLossFilter;
use \OpenAPI\OpenAPI\Models\Operations\ProfitAndLossOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProfitAndLossOneRequest();
    $request->fields = 'nulla';
    $request->filter = new ProfitAndLossFilter();
    $request->filter->customerId = '123abc';
    $request->filter->endDate = '2021-12-31';
    $request->filter->startDate = '2021-01-01';
    $request->passThrough = [
        'aperiam' => 'saepe',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'numquam';
    $request->xApideckConsumerId = 'veniam';
    $request->xApideckServiceId = 'in';

    $requestSecurity = new ProfitAndLossOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->profitAndLoss->profitAndLossOne($request, $requestSecurity);

    if ($response->getProfitAndLossResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# payrolls

### Available Operations

* [payrollsAll](#payrollsall) - List Payroll
* [payrollsOne](#payrollsone) - Get Payroll

## payrollsAll

List Payroll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayrollsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayrollsFilter;
use \OpenAPI\OpenAPI\Models\Operations\PayrollsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayrollsAllRequest();
    $request->fields = 'voluptate';
    $request->filter = new PayrollsFilter();
    $request->filter->endDate = '2022-04-21';
    $request->filter->startDate = '2022-04-08';
    $request->raw = false;
    $request->xApideckAppId = 'id';
    $request->xApideckConsumerId = 'saepe';
    $request->xApideckServiceId = 'eius';

    $requestSecurity = new PayrollsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payrolls->payrollsAll($request, $requestSecurity);

    if ($response->getPayrollsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payrollsOne

Get Payroll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PayrollsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\PayrollsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayrollsOneRequest();
    $request->fields = 'aspernatur';
    $request->payrollId = 'perferendis';
    $request->raw = false;
    $request->xApideckAppId = 'amet';
    $request->xApideckConsumerId = 'optio';
    $request->xApideckServiceId = 'accusamus';

    $requestSecurity = new PayrollsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payrolls->payrollsOne($request, $requestSecurity);

    if ($response->getPayrollResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

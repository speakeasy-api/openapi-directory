# employeePayrolls

### Available Operations

* [employeePayrollsAll](#employeepayrollsall) - List Employee Payrolls
* [employeePayrollsOne](#employeepayrollsone) - Get Employee Payroll

## employeePayrollsAll

List payrolls for employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeePayrollsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayrollsFilter;
use \OpenAPI\OpenAPI\Models\Operations\EmployeePayrollsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeePayrollsAllRequest();
    $request->employeeId = 'provident';
    $request->fields = 'nam';
    $request->filter = new PayrollsFilter();
    $request->filter->endDate = '2022-04-21';
    $request->filter->startDate = '2022-04-08';
    $request->raw = false;
    $request->xApideckAppId = 'id';
    $request->xApideckConsumerId = 'blanditiis';
    $request->xApideckServiceId = 'deleniti';

    $requestSecurity = new EmployeePayrollsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employeePayrolls->employeePayrollsAll($request, $requestSecurity);

    if ($response->getEmployeePayrollsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employeePayrollsOne

Get payroll for employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeePayrollsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\EmployeePayrollsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeePayrollsOneRequest();
    $request->employeeId = 'sapiente';
    $request->fields = 'amet';
    $request->payrollId = 'deserunt';
    $request->raw = false;
    $request->xApideckAppId = 'nisi';
    $request->xApideckConsumerId = 'vel';
    $request->xApideckServiceId = 'natus';

    $requestSecurity = new EmployeePayrollsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employeePayrolls->employeePayrollsOne($request, $requestSecurity);

    if ($response->getEmployeePayrollResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

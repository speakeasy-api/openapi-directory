# employeeSchedules

### Available Operations

* [employeeSchedulesAll](#employeeschedulesall) - List Employee Schedules

## employeeSchedulesAll

List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeeSchedulesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\EmployeeSchedulesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeeSchedulesAllRequest();
    $request->employeeId = 'omnis';
    $request->fields = 'molestiae';
    $request->raw = false;
    $request->xApideckAppId = 'perferendis';
    $request->xApideckConsumerId = 'nihil';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new EmployeeSchedulesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employeeSchedules->employeeSchedulesAll($request, $requestSecurity);

    if ($response->getEmployeeSchedulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# jobs

### Available Operations

* [jobsAll](#jobsall) - List Jobs
* [jobsOne](#jobsone) - One Job

## jobsAll

List Jobs for employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JobsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\JobsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsAllRequest();
    $request->employeeId = 'dolorum';
    $request->fields = 'iusto';
    $request->raw = false;
    $request->xApideckAppId = 'voluptate';
    $request->xApideckConsumerId = 'dolorum';
    $request->xApideckServiceId = 'deleniti';

    $requestSecurity = new JobsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->jobs->jobsAll($request, $requestSecurity);

    if ($response->getHrisJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsOne

A Job for employee.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JobsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\JobsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsOneRequest();
    $request->employeeId = 'omnis';
    $request->fields = 'necessitatibus';
    $request->jobId = 'distinctio';
    $request->raw = false;
    $request->xApideckAppId = 'asperiores';
    $request->xApideckConsumerId = 'nihil';
    $request->xApideckServiceId = 'ipsum';

    $requestSecurity = new JobsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->jobs->jobsOne($request, $requestSecurity);

    if ($response->getHrisJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

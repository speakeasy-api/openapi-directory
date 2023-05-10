# jobs

### Available Operations

* [jobsAll](#jobsall) - List Jobs
* [jobsOne](#jobsone) - Get Job

## jobsAll

List Jobs

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
    $request->cursor = 'dolorem';
    $request->fields = 'corporis';
    $request->limit = 128926;
    $request->raw = false;
    $request->xApideckAppId = 'nobis';
    $request->xApideckConsumerId = 'enim';
    $request->xApideckServiceId = 'omnis';

    $requestSecurity = new JobsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->jobs->jobsAll($request, $requestSecurity);

    if ($response->getJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsOne

Get Job

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
    $request->fields = 'nemo';
    $request->id = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';
    $request->raw = false;
    $request->xApideckAppId = 'ipsam';
    $request->xApideckConsumerId = 'id';
    $request->xApideckServiceId = 'possimus';

    $requestSecurity = new JobsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->jobs->jobsOne($request, $requestSecurity);

    if ($response->getJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

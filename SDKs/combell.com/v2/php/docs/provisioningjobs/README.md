# provisioningJobs

### Available Operations

* [getProvisioningjobsJobId](#getprovisioningjobsjobid) - Detail of a provisioning job

## getProvisioningjobsJobId

Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
Do NOT retry provisioning until the job reports finished or cancelled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProvisioningjobsJobIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvisioningjobsJobIdRequest();
    $request->jobIdPathParameter = 'tempore';
    $request->jobIdQueryParameter = 'e453f870-b326-4b5a-b342-9cdb1a8422bb';

    $response = $sdk->provisioningJobs->getProvisioningjobsJobId($request);

    if ($response->provisioningJobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

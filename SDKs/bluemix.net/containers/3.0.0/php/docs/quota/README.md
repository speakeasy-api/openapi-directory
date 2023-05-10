# quota

### Available Operations

* [getContainersQuota](#getcontainersquota) - Retrieve organization and space specific quota
* [getContainersUsage](#getcontainersusage) - List container sizes and quota limits
* [putContainersQuota](#putcontainersquota) - Update space quota

## getContainersQuota

Retrieve the quota that is assigned to the organization and space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersQuotaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersQuotaRequest();
    $request->xAuthProjectId = 'ut';
    $request->xAuthToken = 'maiores';

    $response = $sdk->quota->getContainersQuota($request);

    if ($response->containersQuotaInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersUsage

This endpoint returns a list of available container sizes and the quota limit and usage for the space. 

- Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
- Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
- Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersUsageRequest();
    $request->xAuthProjectId = 'dicta';
    $request->xAuthToken = 'corporis';

    $response = $sdk->quota->getContainersUsage($request);

    if ($response->containersUsageInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putContainersQuota

This endpoint updates the quota that is allocated to a Bluemix space. 

 **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutContainersQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainersQuotaList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutContainersQuotaRequest();
    $request->containersQuotaList = new ContainersQuotaList();
    $request->containersQuotaList->floatingIps = 296140;
    $request->containersQuotaList->ram = 480894;
    $request->xAuthProjectId = 'dicta';
    $request->xAuthToken = 'harum';

    $response = $sdk->quota->putContainersQuota($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

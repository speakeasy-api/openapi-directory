# jobs

### Available Operations

* [cancelJob](#canceljob) - Cancels a job
* [getAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [getJobDebugInfo](#getjobdebuginfo) - Gets all information needed to debug this job
* [getJobInfo](#getjobinfo) - Get information about a job
* [getJobInfoLight](#getjobinfolight) - Get information about a job excluding attempt info and logs
* [getLastReplicationJob](#getlastreplicationjob)
* [listJobsFor](#listjobsfor) - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

## cancelJob

Cancels a job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 13508;

    $response = $sdk->jobs->cancelJob($request);

    if ($response->jobInfoRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 911657;

    $response = $sdk->jobs->getAttemptNormalizationStatusesForJob($request);

    if ($response->attemptNormalizationStatusReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobDebugInfo

Gets all information needed to debug this job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 483753;

    $response = $sdk->jobs->getJobDebugInfo($request);

    if ($response->jobDebugInfoRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobInfo

Get information about a job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 413758;

    $response = $sdk->jobs->getJobInfo($request);

    if ($response->jobInfoRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobInfoLight

Get information about a job excluding attempt info and logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobIdRequestBody();
    $request->id = 256114;

    $response = $sdk->jobs->getJobInfoLight($request);

    if ($response->jobInfoLightRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLastReplicationJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionIdRequestBody();
    $request->connectionId = 'ad7334ec-1b78-41b3-aa08-088d100efada';

    $response = $sdk->jobs->getLastReplicationJob($request);

    if ($response->jobOptionalRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobsFor

Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\JobListRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\JobConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Pagination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobListRequestBody();
    $request->configId = 'sed';
    $request->configTypes = [
        JobConfigTypeEnum::CHECK_CONNECTION_SOURCE,
    ];
    $request->includingJobId = 910073;
    $request->pagination = new Pagination();
    $request->pagination->pageSize = 941668;
    $request->pagination->rowOffset = 27982;

    $response = $sdk->jobs->listJobsFor($request);

    if ($response->jobReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# stats

### Available Operations

* [getStats](#getstats) - Retrieve usage statistics for an application
* [getTime](#gettime) - Get the service time

## getStats

The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetStatsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetStatsUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatsRequest();
    $request->xAblyVersion = 'deserunt';
    $request->direction = FilterDirectionEnum::FORWARDS;
    $request->end = 'ipsum';
    $request->format = ResponseFormatEnum::JSONP;
    $request->limit = 186458;
    $request->start = 'cupiditate';
    $request->unit = GetStatsUnitEnum::MONTH;

    $response = $sdk->stats->getStats($request);

    if ($response->getStats2XXApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTime

This returns the service time in milliseconds since the epoch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetTimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimeRequest();
    $request->xAblyVersion = 'pariatur';
    $request->format = ResponseFormatEnum::MSGPACK;

    $response = $sdk->stats->getTime($request);

    if ($response->getTime2XXApplicationJSONIntegers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

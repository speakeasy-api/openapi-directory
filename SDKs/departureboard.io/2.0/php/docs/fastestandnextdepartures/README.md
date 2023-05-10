# fastestAndNextDepartures

### Available Operations

* [getFastestDeparturesByCRS](#getfastestdeparturesbycrs) - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
* [getNextDeparturesByCRS](#getnextdeparturesbycrs) - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

## getFastestDeparturesByCRS

getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFastestDeparturesByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFastestDeparturesByCRSRequest();
    $request->crs = 'recusandae';
    $request->apiKey = 'temporibus';
    $request->filterList = 'ab';
    $request->serviceDetails = false;
    $request->timeOffset = 337396;
    $request->timeWindow = 87129;

    $response = $sdk->fastestAndNextDepartures->getFastestDeparturesByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNextDeparturesByCRS

getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNextDeparturesByCRSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNextDeparturesByCRSRequest();
    $request->crs = 'deserunt';
    $request->apiKey = 'perferendis';
    $request->filterList = 'ipsam';
    $request->serviceDetails = false;
    $request->timeOffset = 832620;
    $request->timeWindow = 957156;

    $response = $sdk->fastestAndNextDepartures->getNextDeparturesByCRS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

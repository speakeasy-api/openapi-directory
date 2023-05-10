# analyticsTracking

### Available Operations

* [getStoreTrackedClicks](#getstoretrackedclicks) - Get the latest tracked clicks
* [getStoreTrackedExternalOrders](#getstoretrackedexternalorders) - Get the latest tracked external orders
* [getStoreTrackedOrders](#getstoretrackedorders) - Get the latest tracked orders
* [getStoreTrackingStatus](#getstoretrackingstatus) - Get the synchronization status of clicks and orders of a store
* [getTrackingStatus](#gettrackingstatus) - Get the global synchronization status of clicks and orders

## getStoreTrackedClicks

Get the latest tracked clicks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreTrackedClicksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreTrackedClicksRequest();
    $request->count = 581850;
    $request->storeId = 'numquam';

    $response = $sdk->analyticsTracking->getStoreTrackedClicks($request);

    if ($response->trackedClicks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreTrackedExternalOrders

Get the latest tracked external orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreTrackedExternalOrdersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreTrackedExternalOrdersRequest();
    $request->count = 414369;
    $request->storeId = 'quam';

    $response = $sdk->analyticsTracking->getStoreTrackedExternalOrders($request);

    if ($response->trackedExternalOrders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreTrackedOrders

Get the latest tracked orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreTrackedOrdersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreTrackedOrdersRequest();
    $request->count = 474697;
    $request->storeId = 'velit';

    $response = $sdk->analyticsTracking->getStoreTrackedOrders($request);

    if ($response->trackedOrders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoreTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current state of projections for a store.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreTrackingStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreTrackingStatusRequest();
    $request->storeId = 'error';

    $response = $sdk->analyticsTracking->getStoreTrackingStatus($request);

    if ($response->storeTrackingStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current global state of projections.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->analyticsTracking->getTrackingStatus();

    if ($response->trackingStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

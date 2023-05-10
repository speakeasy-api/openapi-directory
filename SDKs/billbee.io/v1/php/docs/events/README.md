# events

### Available Operations

* [eventApiGetList](#eventapigetlist) - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

## eventApiGetList

Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EventApiGetListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EventApiGetListRequest();
    $request->maxDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-27T19:53:42.787Z');
    $request->minDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-17T11:25:30.782Z');
    $request->orderId = 304582;
    $request->page = 146946;
    $request->pageSize = 882860;
    $request->typeId = [
        250622,
    ];

    $response = $sdk->events->eventApiGetList($request);

    if ($response->eventApiGetList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

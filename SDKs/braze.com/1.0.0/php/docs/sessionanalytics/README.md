# sessionAnalytics

### Available Operations

* [appSessionsByTime](#appsessionsbytime) - App Sessions by Time

## appSessionsByTime

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.

### Components Used
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "sessions" : (int)
        },
        ...
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppSessionsByTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppSessionsByTimeRequest();
    $request->appId = '{{app_identifier}}';
    $request->endingAt = '2018-06-28T23:59:59-5:00';
    $request->length = '14';
    $request->segmentId = '{{segment_identifier}}';
    $request->unit = 'day';

    $response = $sdk->sessionAnalytics->appSessionsByTime($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

# segment

### Available Operations

* [segmentAnalytics](#segmentanalytics) - Segment Analytics
* [segmentDetails](#segmentdetails) - Segment Details
* [segmentList](#segmentlist) - Segment List

## segmentAnalytics

This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "size" : (int) size of the segment on that date
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
use \OpenAPI\OpenAPI\Models\Operations\SegmentAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SegmentAnalyticsRequest();
    $request->endingAt = '2018-06-27T23:59:59-5:00';
    $request->length = '14';
    $request->segmentId = '{{segment_identifier}}';

    $response = $sdk->segment->segmentAnalytics($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## segmentDetails

This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
      "message": (required, string) the status of the export, returns 'success' when completed without errors,
      "created_at" : (string) date created as ISO 8601 date,
      "updated_at" : (string) date last updated as ISO 8601 date,
      "name" : (string) segment name,
      "description" : (string) human-readable description of filters,
      "text_description" : (string) segment description, 
      "tags" : (array) tag names associated with the segment
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SegmentDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SegmentDetailsRequest();
    $request->segmentId = '{{segment_identifier}}';

    $response = $sdk->segment->segmentDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## segmentList

This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "segments" : [
        {
            "id" : (string) Segment API Identifier,
            "name" : (string) segment name,
            "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
            "tags" : (array) tag names associated with the segment
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
use \OpenAPI\OpenAPI\Models\Operations\SegmentListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SegmentListRequest();
    $request->page = '1';
    $request->sortDirection = 'desc';

    $response = $sdk->segment->segmentList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentAnalyticsRequest;
import org.openapis.openapi.models.operations.SegmentAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentAnalyticsRequest req = new SegmentAnalyticsRequest() {{
                endingAt = "2018-06-27T23:59:59-5:00";
                length = "14";
                segmentId = "{{segment_identifier}}";
            }};            

            SegmentAnalyticsResponse res = sdk.segment.segmentAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentDetailsRequest;
import org.openapis.openapi.models.operations.SegmentDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentDetailsRequest req = new SegmentDetailsRequest() {{
                segmentId = "{{segment_identifier}}";
            }};            

            SegmentDetailsResponse res = sdk.segment.segmentDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SegmentListRequest;
import org.openapis.openapi.models.operations.SegmentListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SegmentListRequest req = new SegmentListRequest() {{
                page = "1";
                sortDirection = "desc";
            }};            

            SegmentListResponse res = sdk.segment.segmentList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

# customEvents

### Available Operations

* [customEventsAnalytics](#customeventsanalytics) - Custom Events Analytics
* [customEventsList](#customeventslist) - Custom Events List

## customEventsAnalytics

This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.

### Components Used
-[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "count" : (int)
        },
        ...
    ]
}
```

### Fatal Error Response Codes
The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomEventsAnalyticsRequest;
import org.openapis.openapi.models.operations.CustomEventsAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomEventsAnalyticsRequest req = new CustomEventsAnalyticsRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2014-12-10T23:59:59-05:00";
                event = "event_name";
                length = "24";
                segmentId = "{{segment_identifier}}";
                unit = "hour";
            }};            

            CustomEventsAnalyticsResponse res = sdk.customEvents.customEventsAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customEventsList

This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "events" : [
        "Event A",
        "Event B",
        "Event C",
        ...
    ]
}
```

### Fatal Error Response Codes

The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomEventsListRequest;
import org.openapis.openapi.models.operations.CustomEventsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomEventsListRequest req = new CustomEventsListRequest() {{
                page = "3";
            }};            

            CustomEventsListResponse res = sdk.customEvents.customEventsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

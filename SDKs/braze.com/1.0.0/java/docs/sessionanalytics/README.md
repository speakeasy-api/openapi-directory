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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppSessionsByTimeRequest;
import org.openapis.openapi.models.operations.AppSessionsByTimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppSessionsByTimeRequest req = new AppSessionsByTimeRequest() {{
                appId = "{{app_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
                segmentId = "{{segment_identifier}}";
                unit = "day";
            }};            

            AppSessionsByTimeResponse res = sdk.sessionAnalytics.appSessionsByTime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

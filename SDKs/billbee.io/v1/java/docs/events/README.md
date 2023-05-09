# events

### Available Operations

* [eventApiGetList](#eventapigetlist) - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

## eventApiGetList

Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventApiGetListRequest;
import org.openapis.openapi.models.operations.EventApiGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventApiGetListRequest req = new EventApiGetListRequest() {{
                maxDate = OffsetDateTime.parse("2020-09-01T17:43:45.536Z");
                minDate = OffsetDateTime.parse("2022-06-25T14:54:59.204Z");
                orderId = 178367L;
                page = 373813;
                pageSize = 69859;
                typeId = new Integer[]{{
                    add(9688),
                    add(272822),
                    add(892050),
                }};
            }};            

            EventApiGetListResponse res = sdk.events.eventApiGetList(req);

            if (res.eventApiGetList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

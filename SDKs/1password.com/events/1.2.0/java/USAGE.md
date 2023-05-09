<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuditEventsResponse;
import org.openapis.openapi.models.operations.GetAuditEventsSecurity;
import org.openapis.openapi.models.shared.Cursor;
import org.openapis.openapi.models.shared.ResetCursor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ResetCursor() {{
                endTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
                limit = 5928.45;
                startTime = OffsetDateTime.parse("2020-06-11T16:32:50-03:00");
            }}            

            GetAuditEventsResponse res = sdk.apiV1.getAuditEvents(req, new GetAuditEventsSecurity("distinctio") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getAuditEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
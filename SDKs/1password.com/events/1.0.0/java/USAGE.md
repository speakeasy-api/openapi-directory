<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetItemUsagesSecurity;
import org.openapis.openapi.models.operations.GetItemUsagesResponse;
import org.openapis.openapi.models.shared.Cursor;
import org.openapis.openapi.models.shared.ResetCursor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ResetCursor() {{
                endTime = "2020-06-11T16:32:50-03:00";
                limit = 5928.45;
                startTime = "2020-06-11T16:32:50-03:00";
            }}            

            GetItemUsagesResponse res = sdk.apiV1.getItemUsages(req, new GetItemUsagesSecurity() {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getItemUsages200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
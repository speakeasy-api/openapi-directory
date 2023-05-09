<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HolidayOptionalEnum;
import org.openapis.openapi.models.operations.HolidayRequest;
import org.openapis.openapi.models.operations.HolidayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HolidayRequest req = new HolidayRequest(2L) {{
                optional = HolidayOptionalEnum.TRUE;
                year = 592845L;
            }};            

            HolidayResponse res = sdk.holidays.holiday(req);

            if (res.holiday200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoctorsListRequest;
import org.openapis.openapi.models.operations.DoctorsListResponse;
import org.openapis.openapi.models.operations.DoctorsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                cursor = "corrupti";
                doctor = 592845L;
                pageSize = 715190L;
            }};            

            DoctorsListResponse res = sdk.administrative.doctorsList(req, new DoctorsListSecurity("quibusdam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoctorsListSecurity;
import org.openapis.openapi.models.operations.DoctorsListRequest;
import org.openapis.openapi.models.operations.DoctorsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                cursor = "corrupti";
                doctor = 592845;
                pageSize = 715190;
            }}            

            DoctorsListResponse res = sdk.administrative.doctorsList(req, new DoctorsListSecurity() {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorsList200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
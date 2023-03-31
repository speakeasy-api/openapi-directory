<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoctorsListSecurity;
import org.openapis.openapi.models.operations.DoctorsListQueryParams;
import org.openapis.openapi.models.operations.DoctorsListRequest;
import org.openapis.openapi.models.operations.DoctorsListResponse;
import org.openapis.openapi.models.shared.SchemeDrchronoOauth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                security = new DoctorsListSecurity() {{
                    drchronoOauth2 = new SchemeDrchronoOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DoctorsListQueryParams() {{
                    cursor = "corrupti";
                    doctor = 592845;
                    pageSize = 715190;
                }};
            }};            

            DoctorsListResponse res = sdk.administrative.doctorsList(req);

            if (res.doctorsList200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
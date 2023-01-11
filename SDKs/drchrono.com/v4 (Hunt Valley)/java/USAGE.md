<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DoctorsListRequest req = new DoctorsListRequest() {{
                security = new DoctorsListSecurity() {{
                    drchronoOauth2 = new SchemeDrchronoOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DoctorsListQueryParams() {{
                    cursor = "sit";
                    doctor = 2259404117704393152;
                    pageSize = 6050128673802995827;
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
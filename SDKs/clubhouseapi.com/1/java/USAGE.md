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

            GetCheckForUpdateRequest req = new GetCheckForUpdateRequest() {{
                queryParams = new GetCheckForUpdateQueryParams() {{
                    isTestflight = 8717895732742165505;
                }};
            }};

            GetCheckForUpdateResponse res = sdk.getCheckForUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
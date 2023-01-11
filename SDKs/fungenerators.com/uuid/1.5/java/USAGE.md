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

            GetUuidRequest req = new GetUuidRequest() {{
                security = new GetUuidSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetUuidQueryParams() {{
                    count = 5052822941369420116;
                }};
            }};

            GetUuidResponse res = sdk.uuidGeneration.getUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
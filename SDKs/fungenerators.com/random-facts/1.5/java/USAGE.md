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

            GetFactFodRequest req = new GetFactFodRequest() {{
                security = new GetFactFodSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetFactFodQueryParams() {{
                    category = "vero";
                }};
            }};

            GetFactFodResponse res = sdk.factOfTheDay.getFactFod(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
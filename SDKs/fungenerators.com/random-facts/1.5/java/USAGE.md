<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFactFodSecurity;
import org.openapis.openapi.models.operations.GetFactFodQueryParams;
import org.openapis.openapi.models.operations.GetFactFodRequest;
import org.openapis.openapi.models.operations.GetFactFodResponse;
import org.openapis.openapi.models.shared.SchemeXFungeneratorsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactFodRequest req = new GetFactFodRequest() {{
                security = new GetFactFodSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetFactFodQueryParams() {{
                    category = "corrupti";
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
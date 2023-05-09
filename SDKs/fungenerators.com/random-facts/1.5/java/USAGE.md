<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactFodRequest;
import org.openapis.openapi.models.operations.GetFactFodResponse;
import org.openapis.openapi.models.operations.GetFactFodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactFodRequest req = new GetFactFodRequest() {{
                category = "corrupti";
            }};            

            GetFactFodResponse res = sdk.factOfTheDay.getFactFod(req, new GetFactFodSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
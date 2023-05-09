<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppendTextUsingGETRequest;
import org.openapis.openapi.models.operations.AppendTextUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppendTextUsingGETRequest req = new AppendTextUsingGETRequest() {{
                padID = "provident";
                text = "distinctio";
            }};            

            AppendTextUsingGETResponse res = sdk.appendTextUsingGET(req);

            if (res.appendTextUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
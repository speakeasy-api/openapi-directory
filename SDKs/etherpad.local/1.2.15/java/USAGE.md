<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AppendTextUsingGETQueryParams;
import org.openapis.openapi.models.operations.AppendTextUsingGETRequest;
import org.openapis.openapi.models.operations.AppendTextUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AppendTextUsingGETRequest req = new AppendTextUsingGETRequest() {{
                queryParams = new AppendTextUsingGETQueryParams() {{
                    padID = "corrupti";
                    text = "provident";
                }};
            }};            

            AppendTextUsingGETResponse res = sdk.appendTextUsingGET(req);

            if (res.appendTextUsingGET200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
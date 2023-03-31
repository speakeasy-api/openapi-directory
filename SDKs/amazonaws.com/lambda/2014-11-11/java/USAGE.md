<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddEventSourceHeaders;
import org.openapis.openapi.models.operations.AddEventSourceRequestBody;
import org.openapis.openapi.models.operations.AddEventSourceRequest;
import org.openapis.openapi.models.operations.AddEventSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddEventSourceRequest req = new AddEventSourceRequest() {{
                headers = new AddEventSourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AddEventSourceRequestBody() {{
                    batchSize = 847252;
                    eventSource = "vel";
                    functionName = "error";
                    parameters = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    role = "tempora";
                }};
            }};            

            AddEventSourceResponse res = sdk.addEventSource(req);

            if (res.eventSourceConfiguration.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
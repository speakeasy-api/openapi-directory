<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateMonitorHeaders;
import org.openapis.openapi.models.operations.CreateMonitorRequestBody;
import org.openapis.openapi.models.operations.CreateMonitorRequest;
import org.openapis.openapi.models.operations.CreateMonitorResponse;

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

            CreateMonitorRequest req = new CreateMonitorRequest() {{
                headers = new CreateMonitorHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateMonitorRequestBody() {{
                    clientToken = "illum";
                    maxCityNetworksToMonitor = 423655;
                    monitorName = "error";
                    resources = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                }};
            }};            

            CreateMonitorResponse res = sdk.createMonitor(req);

            if (res.createMonitorOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
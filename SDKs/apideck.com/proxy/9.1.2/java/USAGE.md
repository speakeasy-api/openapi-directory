<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteProxySecurity;
import org.openapis.openapi.models.operations.DeleteProxyHeaders;
import org.openapis.openapi.models.operations.DeleteProxyRequest;
import org.openapis.openapi.models.operations.DeleteProxyResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProxyRequest req = new DeleteProxyRequest() {{
                security = new DeleteProxySecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new DeleteProxyHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckDownstreamAuthorization = "distinctio";
                    xApideckDownstreamUrl = "quibusdam";
                    xApideckServiceId = "unde";
                }};
            }};            

            DeleteProxyResponse res = sdk.execute.deleteProxy(req);

            if (res.deleteProxy200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
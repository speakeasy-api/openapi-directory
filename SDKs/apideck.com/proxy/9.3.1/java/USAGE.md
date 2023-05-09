<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProxyRequest;
import org.openapis.openapi.models.operations.DeleteProxyResponse;
import org.openapis.openapi.models.operations.DeleteProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProxyRequest req = new DeleteProxyRequest("corrupti", "provident", "distinctio", "quibusdam") {{
                xApideckDownstreamAuthorization = "unde";
            }};            

            DeleteProxyResponse res = sdk.execute.deleteProxy(req, new DeleteProxySecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
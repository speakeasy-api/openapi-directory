<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    applicationId = new SchemeApplicationId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteProxyRequest req = new DeleteProxyRequest() {{
                security = new DeleteProxySecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new DeleteProxyHeaders() {{
                    xApideckAppId = "ullam";
                    xApideckConsumerId = "id";
                    xApideckDownstreamAuthorization = "temporibus";
                    xApideckDownstreamUrl = "ipsam";
                    xApideckServiceId = "eum";
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
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

            ConnectionSettingsAllRequest req = new ConnectionSettingsAllRequest() {{
                security = new ConnectionSettingsAllSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new ConnectionSettingsAllPathParams() {{
                    resource = "sit";
                    serviceId = "voluptas";
                    unifiedApi = "culpa";
                }};
                headers = new ConnectionSettingsAllHeaders() {{
                    xApideckAppId = "expedita";
                    xApideckConsumerId = "consequuntur";
                }};
            }};

            ConnectionSettingsAllResponse res = sdk.connections.connectionSettingsAll(req);

            if (res.getConnectionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
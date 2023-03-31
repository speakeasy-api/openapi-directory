<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ConnectionSettingsAllSecurity;
import org.openapis.openapi.models.operations.ConnectionSettingsAllPathParams;
import org.openapis.openapi.models.operations.ConnectionSettingsAllHeaders;
import org.openapis.openapi.models.operations.ConnectionSettingsAllRequest;
import org.openapis.openapi.models.operations.ConnectionSettingsAllResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionSettingsAllRequest req = new ConnectionSettingsAllRequest() {{
                security = new ConnectionSettingsAllSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new ConnectionSettingsAllPathParams() {{
                    resource = "corrupti";
                    serviceId = "provident";
                    unifiedApi = "distinctio";
                }};
                headers = new ConnectionSettingsAllHeaders() {{
                    xApideckAppId = "quibusdam";
                    xApideckConsumerId = "unde";
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
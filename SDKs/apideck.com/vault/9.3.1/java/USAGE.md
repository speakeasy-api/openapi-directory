<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionSettingsAllRequest;
import org.openapis.openapi.models.operations.ConnectionSettingsAllResponse;
import org.openapis.openapi.models.operations.ConnectionSettingsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionSettingsAllRequest req = new ConnectionSettingsAllRequest("corrupti", "provident", "distinctio", "quibusdam", "unde");            

            ConnectionSettingsAllResponse res = sdk.connections.connectionSettingsAll(req, new ConnectionSettingsAllSecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
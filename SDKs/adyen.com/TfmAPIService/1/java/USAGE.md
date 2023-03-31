<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.operations.PostAssignTerminalsRequest;
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAssignTerminalsRequest req = new PostAssignTerminalsRequest() {{
                security = new PostAssignTerminalsSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AssignTerminalsRequest() {{
                    companyAccount = "corrupti";
                    merchantAccount = "provident";
                    merchantInventory = false;
                    store = "distinctio";
                    terminals = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};
            }};            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req);

            if (res.assignTerminalsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
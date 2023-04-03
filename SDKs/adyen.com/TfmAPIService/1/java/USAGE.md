<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssignTerminalsRequest req = new AssignTerminalsRequest() {{
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
            }}            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req, new PostAssignTerminalsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.assignTerminalsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
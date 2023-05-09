<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssignTerminalsRequest req = new AssignTerminalsRequest("corrupti",                 new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }}) {{
                merchantAccount = "nulla";
                merchantInventory = false;
                store = "corrupti";
            }};            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req, new PostAssignTerminalsSecurity("illum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.assignTerminalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
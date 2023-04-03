<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostDisableResponse;
import org.openapis.openapi.models.shared.DisableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DisableRequest req = new DisableRequest() {{
                contract = "corrupti";
                merchantAccount = "provident";
                recurringDetailReference = "distinctio";
                shopperReference = "quibusdam";
            }}            

            PostDisableResponse res = sdk.postDisable(req);

            if (res.disableResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
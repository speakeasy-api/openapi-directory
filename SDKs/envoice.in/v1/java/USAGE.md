<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiAllRequest;
import org.openapis.openapi.models.operations.ClientApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiAllRequest req = new ClientApiAllRequest("corrupti", "provident");            

            ClientApiAllResponse res = sdk.client.clientApiAll(req);

            if (res.clientDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
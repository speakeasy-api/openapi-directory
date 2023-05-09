<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRiddleRequest;
import org.openapis.openapi.models.operations.DeleteRiddleResponse;
import org.openapis.openapi.models.operations.DeleteRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRiddleRequest req = new DeleteRiddleRequest("corrupti");            

            DeleteRiddleResponse res = sdk.privateRiddles.deleteRiddle(req, new DeleteRiddleSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChildrenRequest;
import org.openapis.openapi.models.operations.GetChildrenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChildrenRequest req = new GetChildrenRequest(548814L, "provident", "distinctio");            

            GetChildrenResponse res = sdk.default_.getChildren(req);

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
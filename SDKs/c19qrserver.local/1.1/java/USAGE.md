<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdRequest;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSigninSigninIdRequest req = new DeleteSigninSigninIdRequest(1L);            

            DeleteSigninSigninIdResponse res = sdk.attendeesSignins.deleteSigninSigninId(req);

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
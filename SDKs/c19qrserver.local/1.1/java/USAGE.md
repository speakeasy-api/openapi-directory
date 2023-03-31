<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdPathParams;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdRequest;
import org.openapis.openapi.models.operations.DeleteSigninSigninIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    tokenHeader = new SchemeTokenHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteSigninSigninIdRequest req = new DeleteSigninSigninIdRequest() {{
                pathParams = new DeleteSigninSigninIdPathParams() {{
                    signinId = 1;
                }};
            }};            

            DeleteSigninSigninIdResponse res = sdk.attendeesSignins.deleteSigninSigninId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
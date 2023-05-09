<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitypubPersonRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivitypubPersonRequest req = new ActivitypubPersonRequest(548814L);            

            ActivitypubPersonResponse res = sdk.activitypub.activitypubPerson(req);

            if (res.activityPub != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
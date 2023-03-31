<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivitypubPersonPathParams;
import org.openapis.openapi.models.operations.ActivitypubPersonRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = new SchemeAccessToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            ActivitypubPersonRequest req = new ActivitypubPersonRequest() {{
                pathParams = new ActivitypubPersonPathParams() {{
                    username = "Katharina_Medhurst60";
                }};
            }};            

            ActivitypubPersonResponse res = sdk.activitypub.activitypubPerson(req);

            if (res.activityPub.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
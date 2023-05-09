<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemFeedRequest;
import org.openapis.openapi.models.operations.GetItemFeedResponse;
import org.openapis.openapi.models.operations.GetItemFeedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemFeedRequest req = new GetItemFeedRequest("corrupti", "provident", "distinctio", "quibusdam", "unde") {{
                date = "nulla";
            }};            

            GetItemFeedResponse res = sdk.item.getItemFeed(req, new GetItemFeedSecurity("corrupti") {{
                clientCredentials = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
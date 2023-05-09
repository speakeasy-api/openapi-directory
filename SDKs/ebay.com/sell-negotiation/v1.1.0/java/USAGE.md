<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindEligibleItemsRequest;
import org.openapis.openapi.models.operations.FindEligibleItemsResponse;
import org.openapis.openapi.models.operations.FindEligibleItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindEligibleItemsRequest req = new FindEligibleItemsRequest("corrupti") {{
                limit = "provident";
                offset = "distinctio";
            }};            

            FindEligibleItemsResponse res = sdk.offer.findEligibleItems(req, new FindEligibleItemsSecurity("quibusdam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagedEligibleItemCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
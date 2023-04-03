<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetItemFeedSecurity;
import org.openapis.openapi.models.operations.GetItemFeedRequest;
import org.openapis.openapi.models.operations.GetItemFeedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemFeedRequest req = new GetItemFeedRequest() {{
                accept = "corrupti";
                range = "provident";
                xEbayCMarketplaceId = "distinctio";
                categoryId = "quibusdam";
                date = "unde";
                feedScope = "nulla";
            }}            

            GetItemFeedResponse res = sdk.item.getItemFeed(req, new GetItemFeedSecurity() {{
                clientCredentials = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetItemFeedSecurity;
import org.openapis.openapi.models.operations.GetItemFeedQueryParams;
import org.openapis.openapi.models.operations.GetItemFeedHeaders;
import org.openapis.openapi.models.operations.GetItemFeedRequest;
import org.openapis.openapi.models.operations.GetItemFeedResponse;
import org.openapis.openapi.models.shared.SchemeClientCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemFeedRequest req = new GetItemFeedRequest() {{
                security = new GetItemFeedSecurity() {{
                    clientCredentials = new SchemeClientCredentials() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetItemFeedQueryParams() {{
                    categoryId = "corrupti";
                    date = "provident";
                    feedScope = "distinctio";
                }};
                headers = new GetItemFeedHeaders() {{
                    accept = "quibusdam";
                    range = "unde";
                    xEbayCMarketplaceId = "nulla";
                }};
            }};            

            GetItemFeedResponse res = sdk.item.getItemFeed(req);

            if (res.itemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
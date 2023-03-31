<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CollectionsAllSecurity;
import org.openapis.openapi.models.operations.CollectionsAllQueryParams;
import org.openapis.openapi.models.operations.CollectionsAllHeaders;
import org.openapis.openapi.models.operations.CollectionsAllRequest;
import org.openapis.openapi.models.operations.CollectionsAllResponse;
import org.openapis.openapi.models.shared.CollectionsSortByEnum;
import org.openapis.openapi.models.shared.CollectionsSort;
import org.openapis.openapi.models.shared.SortDirectionEnum;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAllRequest req = new CollectionsAllRequest() {{
                security = new CollectionsAllSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CollectionsAllQueryParams() {{
                    cursor = "corrupti";
                    fields = "provident";
                    limit = 715190;
                    raw = false;
                    sort = new CollectionsSort() {{
                        by = "name";
                        direction = "desc";
                    }};
                }};
                headers = new CollectionsAllHeaders() {{
                    xApideckAppId = "unde";
                    xApideckConsumerId = "nulla";
                    xApideckServiceId = "corrupti";
                }};
            }};            

            CollectionsAllResponse res = sdk.collections.collectionsAll(req);

            if (res.getCollectionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
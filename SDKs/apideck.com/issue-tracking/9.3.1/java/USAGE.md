<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsAllRequest;
import org.openapis.openapi.models.operations.CollectionsAllResponse;
import org.openapis.openapi.models.operations.CollectionsAllSecurity;
import org.openapis.openapi.models.shared.CollectionsSort;
import org.openapis.openapi.models.shared.CollectionsSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAllRequest req = new CollectionsAllRequest("corrupti", "provident") {{
                cursor = "distinctio";
                fields = "quibusdam";
                limit = 602763L;
                raw = false;
                sort = new CollectionsSort() {{
                    by = CollectionsSortByEnum.NAME;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "corrupti";
            }};            

            CollectionsAllResponse res = sdk.collections.collectionsAll(req, new CollectionsAllSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
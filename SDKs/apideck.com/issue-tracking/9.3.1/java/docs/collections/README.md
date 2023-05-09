# collections

### Available Operations

* [collectionsAll](#collectionsall) - List Collections
* [collectionsOne](#collectionsone) - Get Collection

## collectionsAll

List Collections

### Example Usage

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

            CollectionsAllRequest req = new CollectionsAllRequest("vel", "error") {{
                cursor = "deserunt";
                fields = "suscipit";
                limit = 437587L;
                raw = false;
                sort = new CollectionsSort() {{
                    by = CollectionsSortByEnum.NAME;
                    direction = SortDirectionEnum.ASC;
                }};;
                xApideckServiceId = "debitis";
            }};            

            CollectionsAllResponse res = sdk.collections.collectionsAll(req, new CollectionsAllSecurity("ipsa") {{
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

## collectionsOne

Get Collection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsOneRequest;
import org.openapis.openapi.models.operations.CollectionsOneResponse;
import org.openapis.openapi.models.operations.CollectionsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsOneRequest req = new CollectionsOneRequest("apideck-io", "delectus", "tempora") {{
                fields = "suscipit";
                raw = false;
                xApideckServiceId = "molestiae";
            }};            

            CollectionsOneResponse res = sdk.collections.collectionsOne(req, new CollectionsOneSecurity("minus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

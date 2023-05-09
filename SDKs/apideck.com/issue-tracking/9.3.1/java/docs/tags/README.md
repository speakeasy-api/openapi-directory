# tags

### Available Operations

* [collectionTagsAll](#collectiontagsall) - List Tags

## collectionTagsAll

List Tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTagsAllRequest;
import org.openapis.openapi.models.operations.CollectionTagsAllResponse;
import org.openapis.openapi.models.operations.CollectionTagsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTagsAllRequest req = new CollectionTagsAllRequest("apideck-io", "totam", "beatae") {{
                cursor = "commodi";
                fields = "molestiae";
                limit = 264555L;
                raw = false;
                xApideckServiceId = "qui";
            }};            

            CollectionTagsAllResponse res = sdk.tags.collectionTagsAll(req, new CollectionTagsAllSecurity("impedit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

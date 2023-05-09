# categoryRatedAreas

### Available Operations

* [getCategoryRatedAreas](#getcategoryratedareas) - GET category rated areas

## getCategoryRatedAreas

GET category rated areas

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoryRatedAreasRequest;
import org.openapis.openapi.models.operations.GetCategoryRatedAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoryRatedAreasRequest req = new GetCategoryRatedAreasRequest(7151.9, 8442.66);            

            GetCategoryRatedAreasResponse res = sdk.categoryRatedAreas.getCategoryRatedAreas(req);

            if (res.getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

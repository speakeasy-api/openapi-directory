# search

### Available Operations

* [getSearchAspectIdFullsearch](#getsearchaspectidfullsearch) - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

## getSearchAspectIdFullsearch

A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchAspectIDFullsearchAspectIDEnum;
import org.openapis.openapi.models.operations.GetSearchAspectIdFullsearchRequest;
import org.openapis.openapi.models.operations.GetSearchAspectIdFullsearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchAspectIdFullsearchRequest req = new GetSearchAspectIdFullsearchRequest(GetSearchAspectIDFullsearchAspectIDEnum.BCGAZ2, 477665L, 791725L, 812169L, "voluptatum", "iusto");            

            GetSearchAspectIdFullsearchResponse res = sdk.search.getSearchAspectIdFullsearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

# search

### Available Operations

* [getSearch](#getsearch) - Send search terms to receive the most relevant companies along with text snippets.

## getSearch

Send search terms to receive the most relevant companies along with text snippets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchRequest;
import org.openapis.openapi.models.operations.GetSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchRequest req = new GetSearchRequest("quibusdam") {{
                page = "unde";
            }};            

            GetSearchResponse res = sdk.search.getSearch(req);

            if (res.getSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

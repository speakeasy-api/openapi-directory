# contentproSearch

### Available Operations

* [getContentproSearch](#getcontentprosearch) - Send search terms to receive the most relevant articles and companies.

## getContentproSearch

Send search terms to receive the most relevant articles and companies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentproSearchRequest;
import org.openapis.openapi.models.operations.GetContentproSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentproSearchRequest req = new GetContentproSearchRequest("provident");            

            GetContentproSearchResponse res = sdk.contentproSearch.getContentproSearch(req);

            if (res.getContentproSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

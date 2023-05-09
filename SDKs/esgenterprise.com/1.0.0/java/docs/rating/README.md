# rating

### Available Operations

* [getSearch](#getsearch) - List all company ESG Ratings

## getSearch

List all company ESG Ratings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchRequest;
import org.openapis.openapi.models.operations.GetSearchResponse;
import org.openapis.openapi.models.operations.GetSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchRequest req = new GetSearchRequest("distinctio");            

            GetSearchResponse res = sdk.rating.getSearch(req, new GetSearchSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

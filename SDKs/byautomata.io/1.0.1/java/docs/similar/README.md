# similar

### Available Operations

* [getSimilar](#getsimilar) - Send a company website to receive a list of companies related to them.

## getSimilar

Send a company website to receive a list of companies related to them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimilarRequest;
import org.openapis.openapi.models.operations.GetSimilarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimilarRequest req = new GetSimilarRequest("nulla") {{
                page = "corrupti";
            }};            

            GetSimilarResponse res = sdk.similar.getSimilar(req);

            if (res.getSimilar200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

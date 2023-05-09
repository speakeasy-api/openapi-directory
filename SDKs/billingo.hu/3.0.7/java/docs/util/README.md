# util

### Available Operations

* [getId](#getid) - Convert legacy ID to v3 ID.

## getId

Retrieves the API v3 ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdRequest;
import org.openapis.openapi.models.operations.GetIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdRequest req = new GetIdRequest(881104L);            

            GetIdResponse res = sdk.util.getId(req);

            if (res.id != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

# stores

### Available Operations

* [storesOne](#storesone) - Get Store

## storesOne

Get Store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoresOneRequest;
import org.openapis.openapi.models.operations.StoresOneResponse;
import org.openapis.openapi.models.operations.StoresOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoresOneRequest req = new StoresOneRequest("porro", "dolorum") {{
                fields = "dicta";
                raw = false;
                xApideckServiceId = "nam";
            }};            

            StoresOneResponse res = sdk.stores.storesOne(req, new StoresOneSecurity("officia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

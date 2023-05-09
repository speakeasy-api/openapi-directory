# customerGlobal

### Available Operations

* [getCustomerIndex](#getcustomerindex) - The index of all operations and LOV

## getCustomerIndex

The index of all operations and LOV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerIndexRequest;
import org.openapis.openapi.models.operations.GetCustomerIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerIndexRequest req = new GetCustomerIndexRequest() {{
                ifNoneMatch = "veritatis";
            }};            

            GetCustomerIndexResponse res = sdk.customerGlobal.getCustomerIndex(req);

            if (res.customerIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

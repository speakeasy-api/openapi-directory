# productTypes

### Available Operations

* [productTypesGet](#producttypesget) - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## productTypesGet

Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductTypesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductTypesGetResponse res = sdk.productTypes.productTypesGet();

            if (res.pageResultOwnerTypeDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

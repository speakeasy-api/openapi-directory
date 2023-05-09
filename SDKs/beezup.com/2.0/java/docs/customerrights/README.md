# customerRights

### Available Operations

* [getRights](#getrights) - Get store's rights

## getRights

Get store's rights

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRightsRequest;
import org.openapis.openapi.models.operations.GetRightsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRightsRequest req = new GetRightsRequest("quasi");            

            GetRightsResponse res = sdk.customerRights.getRights(req);

            if (res.functionalityRightInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

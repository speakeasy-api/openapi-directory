<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRequest;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.operations.QueryShapeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryRequest req = new QueryRequest(QueryShapeEnum.ARRAY, "corrupti");            

            QueryResponse res = sdk.query(req);

            if (res.query200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
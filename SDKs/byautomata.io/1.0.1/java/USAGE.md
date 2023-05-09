<!-- Start SDK Example Usage -->
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

            GetContentproSearchRequest req = new GetContentproSearchRequest("corrupti");            

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
<!-- End SDK Example Usage -->
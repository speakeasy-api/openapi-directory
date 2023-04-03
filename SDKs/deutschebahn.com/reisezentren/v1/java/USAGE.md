<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetReisezentrenRequest;
import org.openapis.openapi.models.operations.GetReisezentrenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReisezentrenRequest req = new GetReisezentrenRequest() {{
                name = "corrupti";
            }}            

            GetReisezentrenResponse res = sdk.getReisezentren(req);

            if (res.travelCenterList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
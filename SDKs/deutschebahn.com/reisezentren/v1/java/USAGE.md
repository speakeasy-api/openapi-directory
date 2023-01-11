<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetReisezentrenRequest req = new GetReisezentrenRequest() {{
                queryParams = new GetReisezentrenQueryParams() {{
                    name = "sit";
                }};
            }};

            GetReisezentrenResponse res = sdk.getReisezentren(req);

            if (res.travelCenterList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
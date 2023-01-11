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

            StatusCallApiV1StatusCallGetRequest req = new StatusCallApiV1StatusCallGetRequest() {{
                queryParams = new StatusCallApiV1StatusCallGetQueryParams() {{
                    query = "provident";
                }};
            }};

            StatusCallApiV1StatusCallGetResponse res = sdk.statusCallApiV1StatusCallGet(req);

            if (res.statusCall.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
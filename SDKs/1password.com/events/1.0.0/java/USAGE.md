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

            GetItemUsagesRequest req = new GetItemUsagesRequest() {{
                security = new GetItemUsagesSecurity() {{
                    jwtsa = new SchemeJwtsa() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                request = "sit";
            }};

            GetItemUsagesResponse res = sdk.apiV1.getItemUsages(req);

            if (res.getItemUsages200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
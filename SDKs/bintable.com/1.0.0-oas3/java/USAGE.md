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

            BalanceLookupRequest req = new BalanceLookupRequest() {{
                queryParams = new BalanceLookupQueryParams() {{
                    apiKey = "asperiores";
                }};
            }};

            BalanceLookupResponse res = sdk.balance.balanceLookup(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
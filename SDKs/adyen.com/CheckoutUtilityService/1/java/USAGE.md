<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostOriginKeysRequest;
import org.openapis.openapi.models.operations.PostOriginKeysResponse;
import org.openapis.openapi.models.shared.CheckoutUtilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOriginKeysRequest req = new PostOriginKeysRequest() {{
                request = new CheckoutUtilityRequest() {{
                    originDomains = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
            }};            

            PostOriginKeysResponse res = sdk.postOriginKeys(req);

            if (res.checkoutUtilityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
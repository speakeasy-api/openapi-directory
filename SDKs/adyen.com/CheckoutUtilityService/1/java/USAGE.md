<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOriginKeysResponse;
import org.openapis.openapi.models.shared.CheckoutUtilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CheckoutUtilityRequest req = new CheckoutUtilityRequest(                new String[]{{
                                add("provident"),
                                add("distinctio"),
                                add("quibusdam"),
                            }});            

            PostOriginKeysResponse res = sdk.postOriginKeys(req);

            if (res.checkoutUtilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
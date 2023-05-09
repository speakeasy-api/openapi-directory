<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
import org.openapis.openapi.models.shared.DeleteAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddressRequest req = new DeleteAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new DeleteAddressRequest("corrupti", "provident"););            

            DeleteAddressResponse res = sdk.addressRequests.deleteAddress(req);

            if (res.deleteAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
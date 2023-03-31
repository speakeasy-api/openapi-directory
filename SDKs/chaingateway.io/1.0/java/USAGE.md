<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAddressHeaders;
import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
import org.openapis.openapi.models.shared.DeleteAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddressRequest req = new DeleteAddressRequest() {{
                headers = new DeleteAddressHeaders() {{
                    authorization = "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m";
                }};
                request = new DeleteAddressRequest() {{
                    ethereumaddress = "corrupti";
                    password = "provident";
                }};
            }};            

            DeleteAddressResponse res = sdk.addressRequests.deleteAddress(req);

            if (res.deleteAddress.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
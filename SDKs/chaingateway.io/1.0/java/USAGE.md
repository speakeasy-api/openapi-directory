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

            DeleteAddressRequest req = new DeleteAddressRequest() {{
                headers = new DeleteAddressHeaders() {{
                    authorization = "dolores";
                }};
                request = new DeleteAddressRequest() {{
                    ethereumaddress = "sit";
                    password = "id";
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
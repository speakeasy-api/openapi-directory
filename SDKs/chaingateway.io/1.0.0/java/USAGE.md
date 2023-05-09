<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteaddressRequest;
import org.openapis.openapi.models.operations.DeleteaddressRequestBody;
import org.openapis.openapi.models.operations.DeleteaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteaddressRequest req = new DeleteaddressRequest("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0") {{
                requestBody = new DeleteaddressRequestBody() {{
                    ethereumaddress = "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0";
                    password = "test123";
                }};;
            }};            

            DeleteaddressResponse res = sdk.addressRequests.deleteaddress(req);

            if (res.deleteaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
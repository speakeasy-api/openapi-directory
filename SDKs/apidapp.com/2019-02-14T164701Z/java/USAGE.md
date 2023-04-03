<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteKeyKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteKeyKeyRequest req = new DeleteKeyKeyRequest() {{
                key = "corrupti";
            }}            

            DeleteKeyKeyResponse res = sdk.deleteKeyKey(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
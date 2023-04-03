<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConnectRequestBody;
import org.openapis.openapi.models.operations.ConnectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectRequestBody req = new ConnectRequestBody() {{
                endpoint = "corrupti";
            }}            

            ConnectResponse res = sdk.connect(req);

            if (res.connect200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
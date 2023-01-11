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

            ConnectRequest req = new ConnectRequest() {{
                request = new ConnectRequestBody() {{
                    endpoint = "repudiandae";
                }};
            }};

            ConnectResponse res = sdk.connect(req);

            if (res.connect200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
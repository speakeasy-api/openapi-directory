<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1Request;
import org.openapis.openapi.models.operations.GetV1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1Request req = new GetV1Request("corrupti") {{
                fields = "country,city,timezone";
                ipAddress = "195.154.25.40";
            }};            

            GetV1Response res = sdk.getV1(req);

            if (res.inlineResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
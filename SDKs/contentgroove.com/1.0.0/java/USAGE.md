<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClipRequestBody;
import org.openapis.openapi.models.operations.CreateClipRequestBodyData;
import org.openapis.openapi.models.operations.CreateClipRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.CreateClipResponse;
import org.openapis.openapi.models.operations.CreateClipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateClipRequestBody req = new CreateClipRequestBody(                new CreateClipRequestBodyData(                new CreateClipRequestBodyDataAttributes(12.3, "9b9a2e82-5b47-4f59-831d-4c239824b983", "Example New Clip", 10.1);););            

            CreateClipResponse res = sdk.createClip(req, new CreateClipSecurity("corrupti") {{
                bearerHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.clipResponseObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdultContentDetectionRequestBody;
import org.openapis.openapi.models.operations.AdultContentDetectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdultContentDetectionRequestBody req = new AdultContentDetectionRequestBody("corrupti") {{
                text = "provident";
            }};            

            AdultContentDetectionResponse res = sdk.documentClassification.adultContentDetection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationResponse;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest(                new ImageOcrImageLinesWithLocationRequestBody(                new ImageOcrImageLinesWithLocationRequestBodyImageFile("corrupti".getBytes(), "provident"););) {{
                language = "distinctio";
                preprocessing = "quibusdam";
            }};            

            ImageOcrImageLinesWithLocationResponse res = sdk.imageOcr.imageOcrImageLinesWithLocation(req, new ImageOcrImageLinesWithLocationSecurity("unde") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToLinesWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
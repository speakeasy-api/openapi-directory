<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationSecurity;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationHeaders;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationResponse;
import org.openapis.openapi.models.shared.SchemeApikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest() {{
                security = new ImageOcrImageLinesWithLocationSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new ImageOcrImageLinesWithLocationHeaders() {{
                    language = "corrupti";
                    preprocessing = "provident";
                }};
                request = new ImageOcrImageLinesWithLocationRequestBody() {{
                    imageFile = new ImageOcrImageLinesWithLocationRequestBodyImageFile() {{
                        content = "distinctio".getBytes();
                        imageFile = "quibusdam";
                    }};
                }};
            }};            

            ImageOcrImageLinesWithLocationResponse res = sdk.imageOcr.imageOcrImageLinesWithLocation(req);

            if (res.imageToLinesWithLocationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
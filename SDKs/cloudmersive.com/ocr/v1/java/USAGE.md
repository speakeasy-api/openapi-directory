<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationSecurity;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest() {{
                requestBody = new ImageOcrImageLinesWithLocationRequestBody() {{
                    imageFile = new ImageOcrImageLinesWithLocationRequestBodyImageFile() {{
                        content = "corrupti".getBytes();
                        imageFile = "provident";
                    }};
                }};
                language = "distinctio";
                preprocessing = "quibusdam";
            }}            

            ImageOcrImageLinesWithLocationResponse res = sdk.imageOcr.imageOcrImageLinesWithLocation(req, new ImageOcrImageLinesWithLocationSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToLinesWithLocationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
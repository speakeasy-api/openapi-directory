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

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest() {{
                security = new ImageOcrImageLinesWithLocationSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new ImageOcrImageLinesWithLocationHeaders() {{
                    language = "sit";
                    preprocessing = "voluptas";
                }};
                request = new ImageOcrImageLinesWithLocationRequestBody() {{
                    imageFile = new ImageOcrImageLinesWithLocationRequestBodyImageFile() {{
                        content = "culpa".getBytes();
                        imageFile = "expedita";
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
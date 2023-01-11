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
                    language = "quasi";
                    preprocessing = "tempore";
                }};
                request = new ImageOcrImageLinesWithLocationRequestBody() {{
                    imageFile = new ImageOcrImageLinesWithLocationRequestBodyImageFile() {{
                        content = "consequatur".getBytes();
                        imageFile = "quos";
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
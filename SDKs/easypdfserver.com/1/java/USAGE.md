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

            PostMakePdfRequest req = new PostMakePdfRequest() {{
                request = new PostMakePdfRequestBody() {{
                    html = "expedita";
                    key = "consequuntur";
                    url = "dolor";
                }};
            }};

            PostMakePdfResponse res = sdk.postMakePdf(req);

            if (res.postMakePdf200ApplicationPdfBinaryString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
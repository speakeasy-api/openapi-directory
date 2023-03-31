<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostMakePdfRequestBody;
import org.openapis.openapi.models.operations.PostMakePdfRequest;
import org.openapis.openapi.models.operations.PostMakePdfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMakePdfRequest req = new PostMakePdfRequest() {{
                request = new PostMakePdfRequestBody() {{
                    html = "corrupti";
                    key = "provident";
                    url = "distinctio";
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
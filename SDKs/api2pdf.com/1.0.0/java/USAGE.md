<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromeFromHtmlPostResponse;
import org.openapis.openapi.models.shared.ChromeAdvancedOptions;
import org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest req = new ChromeHtmlToPdfRequest("<p>Hello World</p>") {{
                fileName = "test.pdf";
                inlinePdf = true;
                options = new ChromeAdvancedOptions() {{
                    landscape = "true";
                    printBackground = false;
                }};;
            }};            

            ChromeFromHtmlPostResponse res = sdk.headlessChrome.chromeFromHtmlPost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
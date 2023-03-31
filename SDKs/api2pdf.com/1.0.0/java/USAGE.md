<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ChromeFromHtmlPostRequest;
import org.openapis.openapi.models.operations.ChromeFromHtmlPostResponse;
import org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest;
import org.openapis.openapi.models.shared.ChromeAdvancedOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    headerApiKey = new SchemeHeaderAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            ChromeFromHtmlPostRequest req = new ChromeFromHtmlPostRequest() {{
                request = new ChromeHtmlToPdfRequest() {{
                    fileName = "test.pdf";
                    html = "<p>Hello World</p>";
                    inlinePdf = true;
                    options = new ChromeAdvancedOptions() {{
                        landscape = "true";
                        printBackground = false;
                    }};
                }};
            }};            

            ChromeFromHtmlPostResponse res = sdk.headlessChrome.chromeFromHtmlPost(req);

            if (res.apiResponseSuccess.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
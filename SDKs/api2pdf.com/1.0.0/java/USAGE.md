<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    headerApiKey = new SchemeHeaderApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ChromeFromHtmlPostRequest req = new ChromeFromHtmlPostRequest() {{
                request = new ChromeHtmlToPdfRequest() {{
                    fileName = "in";
                    html = "quia";
                    inlinePdf = false;
                    options = new ChromeAdvancedOptions() {{
                        landscape = "quia";
                        printBackground = true;
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
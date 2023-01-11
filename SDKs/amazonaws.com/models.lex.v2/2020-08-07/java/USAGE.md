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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BuildBotLocaleRequest req = new BuildBotLocaleRequest() {{
                pathParams = new BuildBotLocalePathParams() {{
                    botId = "dolor";
                    botVersion = "voluptatibus";
                    localeId = "aut";
                }};
                headers = new BuildBotLocaleHeaders() {{
                    xAmzAlgorithm = "repellendus";
                    xAmzContentSha256 = "et";
                    xAmzCredential = "sunt";
                    xAmzDate = "exercitationem";
                    xAmzSecurityToken = "voluptatem";
                    xAmzSignature = "natus";
                    xAmzSignedHeaders = "ea";
                }};
            }};

            BuildBotLocaleResponse res = sdk.buildBotLocale(req);

            if (res.buildBotLocaleResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
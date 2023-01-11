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

            BatchDetectDominantLanguageRequest req = new BatchDetectDominantLanguageRequest() {{
                headers = new BatchDetectDominantLanguageHeaders() {{
                    xAmzAlgorithm = "id";
                    xAmzContentSha256 = "reprehenderit";
                    xAmzCredential = "sit";
                    xAmzDate = "at";
                    xAmzSecurityToken = "ex";
                    xAmzSignature = "doloribus";
                    xAmzSignedHeaders = "qui";
                    xAmzTarget = "Comprehend_20171127.BatchDetectDominantLanguage";
                }};
                request = new BatchDetectDominantLanguageRequest() {{
                    textList = new String[]() {{
                        add("ea"),
                    }};
                }};
            }};

            BatchDetectDominantLanguageResponse res = sdk.batchDetectDominantLanguage(req);

            if (res.batchDetectDominantLanguageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
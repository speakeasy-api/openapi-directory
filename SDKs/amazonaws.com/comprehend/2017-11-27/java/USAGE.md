<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageHeaders;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageResponse;
import org.openapis.openapi.models.shared.BatchDetectDominantLanguageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchDetectDominantLanguageRequest req = new BatchDetectDominantLanguageRequest() {{
                headers = new BatchDetectDominantLanguageHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Comprehend_20171127.BatchDetectDominantLanguage";
                }};
                request = new BatchDetectDominantLanguageRequest() {{
                    textList = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
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
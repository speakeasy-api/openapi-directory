<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageResponse;
import org.openapis.openapi.models.shared.BatchDetectDominantLanguageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectDominantLanguageRequest req = new BatchDetectDominantLanguageRequest() {{
                batchDetectDominantLanguageRequest = new BatchDetectDominantLanguageRequest() {{
                    textList = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "Comprehend_20171127.BatchDetectDominantLanguage";
            }}            

            BatchDetectDominantLanguageResponse res = sdk.batchDetectDominantLanguage(req);

            if (res.batchDetectDominantLanguageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageResponse;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectDominantLanguageRequest req = new BatchDetectDominantLanguageRequest(                new BatchDetectDominantLanguageRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});, BatchDetectDominantLanguageXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_DOMINANT_LANGUAGE) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchDetectDominantLanguageResponse res = sdk.batchDetectDominantLanguage(req);

            if (res.batchDetectDominantLanguageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
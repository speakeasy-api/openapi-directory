<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequest;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequestBody;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemResponse;
import org.openapis.openapi.models.shared.NewCustomVocabularyItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateCustomVocabularyItemRequest req = new BatchCreateCustomVocabularyItemRequest(                new BatchCreateCustomVocabularyItemRequestBody(                new org.openapis.openapi.models.shared.NewCustomVocabularyItem[]{{
                                                add(new NewCustomVocabularyItem("nulla") {{
                                                    displayAs = "distinctio";
                                                    phrase = "quibusdam";
                                                    weight = 602763L;
                                                }}),
                                                add(new NewCustomVocabularyItem("error") {{
                                                    displayAs = "corrupti";
                                                    phrase = "illum";
                                                    weight = 423655L;
                                                }}),
                                                add(new NewCustomVocabularyItem("magnam") {{
                                                    displayAs = "deserunt";
                                                    phrase = "suscipit";
                                                    weight = 437587L;
                                                }}),
                                            }});, "debitis", "ipsa", "delectus") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            BatchCreateCustomVocabularyItemResponse res = sdk.batchCreateCustomVocabularyItem(req);

            if (res.batchCreateCustomVocabularyItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
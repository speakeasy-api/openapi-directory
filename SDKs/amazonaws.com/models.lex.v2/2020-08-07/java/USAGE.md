<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequestBody;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequest;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemResponse;
import org.openapis.openapi.models.shared.NewCustomVocabularyItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateCustomVocabularyItemRequest req = new BatchCreateCustomVocabularyItemRequest() {{
                requestBody = new BatchCreateCustomVocabularyItemRequestBody() {{
                    customVocabularyItemList = new org.openapis.openapi.models.shared.NewCustomVocabularyItem[]{{
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "provident";
                            phrase = "distinctio";
                            weight = 844266;
                        }}),
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "unde";
                            phrase = "nulla";
                            weight = 544883;
                        }}),
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "illum";
                            phrase = "vel";
                            weight = 623564;
                        }}),
                    }};
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
                botId = "tempora";
                botVersion = "suscipit";
                localeId = "molestiae";
            }}            

            BatchCreateCustomVocabularyItemResponse res = sdk.batchCreateCustomVocabularyItem(req);

            if (res.batchCreateCustomVocabularyItemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
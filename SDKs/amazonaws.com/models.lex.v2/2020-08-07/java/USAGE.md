<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemPathParams;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemHeaders;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequestBody;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemRequest;
import org.openapis.openapi.models.operations.BatchCreateCustomVocabularyItemResponse;
import org.openapis.openapi.models.shared.NewCustomVocabularyItem;

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

            BatchCreateCustomVocabularyItemRequest req = new BatchCreateCustomVocabularyItemRequest() {{
                pathParams = new BatchCreateCustomVocabularyItemPathParams() {{
                    botId = "corrupti";
                    botVersion = "provident";
                    localeId = "distinctio";
                }};
                headers = new BatchCreateCustomVocabularyItemHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new BatchCreateCustomVocabularyItemRequestBody() {{
                    customVocabularyItemList = new org.openapis.openapi.models.shared.NewCustomVocabularyItem[]{{
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "suscipit";
                            phrase = "iure";
                            weight = 297534;
                        }}),
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "debitis";
                            phrase = "ipsa";
                            weight = 963663;
                        }}),
                        add(new NewCustomVocabularyItem() {{
                            displayAs = "tempora";
                            phrase = "suscipit";
                            weight = 477665;
                        }}),
                    }};
                }};
            }};            

            BatchCreateCustomVocabularyItemResponse res = sdk.batchCreateCustomVocabularyItem(req);

            if (res.batchCreateCustomVocabularyItemResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
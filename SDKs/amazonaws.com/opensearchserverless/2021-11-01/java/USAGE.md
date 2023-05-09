<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetCollectionRequest;
import org.openapis.openapi.models.operations.BatchGetCollectionResponse;
import org.openapis.openapi.models.operations.BatchGetCollectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetCollectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCollectionRequest req = new BatchGetCollectionRequest(                new BatchGetCollectionRequest() {{
                                ids = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("unde"),
                                }};
                                names = new String[]{{
                                    add("corrupti"),
                                    add("illum"),
                                    add("vel"),
                                    add("error"),
                                }};
                            }};, BatchGetCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_BATCH_GET_COLLECTION) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
            }};            

            BatchGetCollectionResponse res = sdk.batchGetCollection(req);

            if (res.batchGetCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
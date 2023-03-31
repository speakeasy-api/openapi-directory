<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetCollectionXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetCollectionHeaders;
import org.openapis.openapi.models.operations.BatchGetCollectionRequest;
import org.openapis.openapi.models.operations.BatchGetCollectionResponse;
import org.openapis.openapi.models.shared.BatchGetCollectionRequest;

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

            BatchGetCollectionRequest req = new BatchGetCollectionRequest() {{
                headers = new BatchGetCollectionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "OpenSearchServerless.BatchGetCollection";
                }};
                request = new BatchGetCollectionRequest() {{
                    ids = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    names = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                }};
            }};            

            BatchGetCollectionResponse res = sdk.batchGetCollection(req);

            if (res.batchGetCollectionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
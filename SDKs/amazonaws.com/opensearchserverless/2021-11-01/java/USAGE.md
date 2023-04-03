<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetCollectionXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetCollectionRequest;
import org.openapis.openapi.models.operations.BatchGetCollectionResponse;
import org.openapis.openapi.models.shared.BatchGetCollectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCollectionRequest req = new BatchGetCollectionRequest() {{
                batchGetCollectionRequest = new BatchGetCollectionRequest() {{
                    ids = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    names = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
                xAmzTarget = "OpenSearchServerless.BatchGetCollection";
            }}            

            BatchGetCollectionResponse res = sdk.batchGetCollection(req);

            if (res.batchGetCollectionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
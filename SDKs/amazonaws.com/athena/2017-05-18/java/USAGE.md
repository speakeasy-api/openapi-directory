<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetNamedQueryRequest;
import org.openapis.openapi.models.operations.BatchGetNamedQueryResponse;
import org.openapis.openapi.models.operations.BatchGetNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetNamedQueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetNamedQueryRequest req = new BatchGetNamedQueryRequest(                new BatchGetNamedQueryInput(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }});, BatchGetNamedQueryXAmzTargetEnum.AMAZON_ATHENA_BATCH_GET_NAMED_QUERY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchGetNamedQueryResponse res = sdk.batchGetNamedQuery(req);

            if (res.batchGetNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
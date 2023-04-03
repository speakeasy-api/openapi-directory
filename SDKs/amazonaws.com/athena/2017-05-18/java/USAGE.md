<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetNamedQueryRequest;
import org.openapis.openapi.models.operations.BatchGetNamedQueryResponse;
import org.openapis.openapi.models.shared.BatchGetNamedQueryInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetNamedQueryRequest req = new BatchGetNamedQueryRequest() {{
                batchGetNamedQueryInput = new BatchGetNamedQueryInput() {{
                    namedQueryIds = new String[]{{
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
                xAmzTarget = "AmazonAthena.BatchGetNamedQuery";
            }}            

            BatchGetNamedQueryResponse res = sdk.batchGetNamedQuery(req);

            if (res.batchGetNamedQueryOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetNamedQueryHeaders;
import org.openapis.openapi.models.operations.BatchGetNamedQueryRequest;
import org.openapis.openapi.models.operations.BatchGetNamedQueryResponse;
import org.openapis.openapi.models.shared.BatchGetNamedQueryInput;

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

            BatchGetNamedQueryRequest req = new BatchGetNamedQueryRequest() {{
                headers = new BatchGetNamedQueryHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonAthena.BatchGetNamedQuery";
                }};
                request = new BatchGetNamedQueryInput() {{
                    namedQueryIds = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};
            }};            

            BatchGetNamedQueryResponse res = sdk.batchGetNamedQuery(req);

            if (res.batchGetNamedQueryOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
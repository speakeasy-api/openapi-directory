<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchExecuteStatementXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchExecuteStatementHeaders;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.BatchExecuteStatementInput;

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

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                headers = new BatchExecuteStatementHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "RedshiftData.BatchExecuteStatement";
                }};
                request = new BatchExecuteStatementInput() {{
                    clientToken = "illum";
                    clusterIdentifier = "vel";
                    database = "error";
                    dbUser = "deserunt";
                    secretArn = "suscipit";
                    sqls = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    statementName = "ipsa";
                    withEvent = false;
                    workgroupName = "delectus";
                }};
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
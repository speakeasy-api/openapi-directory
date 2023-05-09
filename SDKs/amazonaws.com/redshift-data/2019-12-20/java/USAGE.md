<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.operations.BatchExecuteStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchExecuteStatementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest(                new BatchExecuteStatementInput("provident",                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }}) {{
                                clientToken = "corrupti";
                                clusterIdentifier = "illum";
                                dbUser = "vel";
                                secretArn = "error";
                                statementName = "deserunt";
                                withEvent = false;
                                workgroupName = "suscipit";
                            }};, BatchExecuteStatementXAmzTargetEnum.REDSHIFT_DATA_BATCH_EXECUTE_STATEMENT) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
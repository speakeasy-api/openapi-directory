<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                headers = new BatchExecuteStatementHeaders() {{
                    xAmzAlgorithm = "inventore";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "dolor";
                    xAmzDate = "animi";
                    xAmzSecurityToken = "rerum";
                    xAmzSignature = "sit";
                    xAmzSignedHeaders = "et";
                    xAmzTarget = "RedshiftData.BatchExecuteStatement";
                }};
                request = new BatchExecuteStatementInput() {{
                    clusterIdentifier = "eos";
                    database = "accusantium";
                    dbUser = "minima";
                    secretArn = "qui";
                    sqls = new String[]() {{
                        add("est"),
                    }};
                    statementName = "tempora";
                    withEvent = false;
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
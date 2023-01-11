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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "RedshiftData.BatchExecuteStatement";
                }};
                request = new BatchExecuteStatementInput() {{
                    clusterIdentifier = "fugit";
                    database = "et";
                    dbUser = "nihil";
                    secretArn = "rerum";
                    sqls = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
                    }};
                    statementName = "ut";
                    withEvent = true;
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
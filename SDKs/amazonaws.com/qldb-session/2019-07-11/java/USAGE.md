<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SendCommandXAmzTargetEnum;
import org.openapis.openapi.models.operations.SendCommandHeaders;
import org.openapis.openapi.models.operations.SendCommandRequest;
import org.openapis.openapi.models.operations.SendCommandResponse;
import org.openapis.openapi.models.shared.SendCommandRequest;
import org.openapis.openapi.models.shared.StartSessionRequest;
import org.openapis.openapi.models.shared.FetchPageRequest;
import org.openapis.openapi.models.shared.ExecuteStatementRequest;
import org.openapis.openapi.models.shared.ValueHolder;
import org.openapis.openapi.models.shared.CommitTransactionRequest;

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

            SendCommandRequest req = new SendCommandRequest() {{
                headers = new SendCommandHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "QLDBSession.SendCommand";
                }};
                request = new SendCommandRequest() {{
                    abortTransaction = new java.util.HashMap<String, Object>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    commitTransaction = new CommitTransactionRequest() {{
                        commitDigest = "delectus";
                        transactionId = "tempora";
                    }};
                    endSession = new java.util.HashMap<String, Object>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    executeStatement = new ExecuteStatementRequest() {{
                        parameters = new org.openapis.openapi.models.shared.ValueHolder[]{{
                            add(new ValueHolder() {{
                                ionBinary = "excepturi";
                                ionText = "nisi";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "recusandae";
                                ionText = "temporibus";
                            }}),
                        }};
                        statement = "ab";
                        transactionId = "quis";
                    }};
                    fetchPage = new FetchPageRequest() {{
                        nextPageToken = "veritatis";
                        transactionId = "deserunt";
                    }};
                    sessionToken = "perferendis";
                    startSession = new StartSessionRequest() {{
                        ledgerName = "ipsam";
                    }};
                    startTransaction = new java.util.HashMap<String, Object>() {{
                        put("sapiente", "quo");
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                    }};
                }};
            }};            

            SendCommandResponse res = sdk.sendCommand(req);

            if (res.sendCommandResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
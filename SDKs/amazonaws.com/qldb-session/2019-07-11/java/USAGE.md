<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.SendCommandXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendCommandRequest req = new SendCommandRequest() {{
                sendCommandRequest = new SendCommandRequest() {{
                    abortTransaction = new java.util.HashMap<String, Object>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    commitTransaction = new CommitTransactionRequest() {{
                        commitDigest = "illum";
                        transactionId = "vel";
                    }};
                    endSession = new java.util.HashMap<String, Object>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    executeStatement = new ExecuteStatementRequest() {{
                        parameters = new org.openapis.openapi.models.shared.ValueHolder[]{{
                            add(new ValueHolder() {{
                                ionBinary = "tempora";
                                ionText = "suscipit";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "molestiae";
                                ionText = "minus";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "placeat";
                                ionText = "voluptatum";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "iusto";
                                ionText = "excepturi";
                            }}),
                        }};
                        statement = "nisi";
                        transactionId = "recusandae";
                    }};
                    fetchPage = new FetchPageRequest() {{
                        nextPageToken = "temporibus";
                        transactionId = "ab";
                    }};
                    sessionToken = "quis";
                    startSession = new StartSessionRequest() {{
                        ledgerName = "veritatis";
                    }};
                    startTransaction = new java.util.HashMap<String, Object>() {{
                        put("perferendis", "ipsam");
                        put("repellendus", "sapiente");
                        put("quo", "odit");
                    }};
                }};
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
                xAmzTarget = "QLDBSession.SendCommand";
            }}            

            SendCommandResponse res = sdk.sendCommand(req);

            if (res.sendCommandResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
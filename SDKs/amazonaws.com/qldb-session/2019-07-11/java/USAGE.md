<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendCommandRequest;
import org.openapis.openapi.models.operations.SendCommandResponse;
import org.openapis.openapi.models.operations.SendCommandXAmzTargetEnum;
import org.openapis.openapi.models.shared.CommitTransactionRequest;
import org.openapis.openapi.models.shared.ExecuteStatementRequest;
import org.openapis.openapi.models.shared.FetchPageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendCommandRequest;
import org.openapis.openapi.models.shared.StartSessionRequest;
import org.openapis.openapi.models.shared.ValueHolder;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendCommandRequest req = new SendCommandRequest(                new SendCommandRequest() {{
                                abortTransaction = new java.util.HashMap<String, Object>() {{
                                    put("distinctio", "quibusdam");
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                }};
                                commitTransaction = new CommitTransactionRequest("vel", "error");;
                                endSession = new java.util.HashMap<String, Object>() {{
                                    put("suscipit", "iure");
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }};
                                executeStatement = new ExecuteStatementRequest("tempora", "suscipit") {{
                                    parameters = new org.openapis.openapi.models.shared.ValueHolder[]{{
                                        add(new ValueHolder() {{
                                            ionBinary = "minus";
                                            ionText = "placeat";
                                        }}),
                                        add(new ValueHolder() {{
                                            ionBinary = "voluptatum";
                                            ionText = "iusto";
                                        }}),
                                    }};
                                }};;
                                fetchPage = new FetchPageRequest("excepturi", "nisi");;
                                sessionToken = "recusandae";
                                startSession = new StartSessionRequest("temporibus");;
                                startTransaction = new java.util.HashMap<String, Object>() {{
                                    put("quis", "veritatis");
                                }};
                            }};, SendCommandXAmzTargetEnum.QLDB_SESSION_SEND_COMMAND) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            SendCommandResponse res = sdk.sendCommand(req);

            if (res.sendCommandResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
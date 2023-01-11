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

            SendCommandRequest req = new SendCommandRequest() {{
                headers = new SendCommandHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "QLDBSession.SendCommand";
                }};
                request = new SendCommandRequest() {{
                    abortTransaction = new java.util.HashMap<String, Object>() {{
                        put("et", "nihil");
                    }};
                    commitTransaction = new CommitTransactionRequest() {{
                        commitDigest = "rerum";
                        transactionId = "dicta";
                    }};
                    endSession = new java.util.HashMap<String, Object>() {{
                        put("voluptatum", "et");
                    }};
                    executeStatement = new ExecuteStatementRequest() {{
                        parameters = new openapisdk.models.shared.ValueHolder[]() {{
                            add(new ValueHolder() {{
                                ionBinary = "dolorem";
                                ionText = "et";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "voluptate";
                                ionText = "iste";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "vitae";
                                ionText = "totam";
                            }}),
                        }};
                        statement = "dolores";
                        transactionId = "illum";
                    }};
                    fetchPage = new FetchPageRequest() {{
                        nextPageToken = "debitis";
                        transactionId = "vel";
                    }};
                    sessionToken = "odio";
                    startSession = new StartSessionRequest() {{
                        ledgerName = "dolore";
                    }};
                    startTransaction = new java.util.HashMap<String, Object>() {{
                        put("aspernatur", "accusantium");
                        put("totam", "commodi");
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
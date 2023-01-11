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
                    xAmzAlgorithm = "cum";
                    xAmzContentSha256 = "repellat";
                    xAmzCredential = "quaerat";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "magni";
                    xAmzSignature = "delectus";
                    xAmzSignedHeaders = "vel";
                    xAmzTarget = "QLDBSession.SendCommand";
                }};
                request = new SendCommandRequest() {{
                    abortTransaction = new java.util.HashMap<String, Object>() {{
                        put("nihil", "laudantium");
                        put("magni", "vel");
                    }};
                    commitTransaction = new CommitTransactionRequest() {{
                        commitDigest = "eaque";
                        transactionId = "incidunt";
                    }};
                    endSession = new java.util.HashMap<String, Object>() {{
                        put("magnam", "accusamus");
                        put("occaecati", "rerum");
                    }};
                    executeStatement = new ExecuteStatementRequest() {{
                        parameters = new openapisdk.models.shared.ValueHolder[]() {{
                            add(new ValueHolder() {{
                                ionBinary = "ut";
                                ionText = "consequatur";
                            }}),
                            add(new ValueHolder() {{
                                ionBinary = "sequi";
                                ionText = "omnis";
                            }}),
                        }};
                        statement = "quis";
                        transactionId = "labore";
                    }};
                    fetchPage = new FetchPageRequest() {{
                        nextPageToken = "sapiente";
                        transactionId = "accusamus";
                    }};
                    sessionToken = "velit";
                    startSession = new StartSessionRequest() {{
                        ledgerName = "amet";
                    }};
                    startTransaction = new java.util.HashMap<String, Object>() {{
                        put("sunt", "molestias");
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
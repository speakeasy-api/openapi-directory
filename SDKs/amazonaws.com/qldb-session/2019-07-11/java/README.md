# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `sendCommand` - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

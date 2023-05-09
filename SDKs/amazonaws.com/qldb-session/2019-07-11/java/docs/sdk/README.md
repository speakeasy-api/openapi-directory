# SDK

## Overview

<p>The transactional data APIs for Amazon QLDB</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/qldb/>
### Available Operations

* [sendCommand](#sendcommand) - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

## sendCommand

<p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

### Example Usage

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
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendCommandRequest req = new SendCommandRequest(                new SendCommandRequest() {{
                                abortTransaction = new java.util.HashMap<String, Object>() {{
                                    put("maiores", "molestiae");
                                    put("quod", "quod");
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                }};
                                commitTransaction = new CommitTransactionRequest("dicta", "nam");;
                                endSession = new java.util.HashMap<String, Object>() {{
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                    put("optio", "totam");
                                }};
                                executeStatement = new ExecuteStatementRequest("beatae", "commodi") {{
                                    parameters = new org.openapis.openapi.models.shared.ValueHolder[]{{
                                        add(new ValueHolder() {{
                                            ionBinary = "modi";
                                            ionText = "qui";
                                        }}),
                                        add(new ValueHolder() {{
                                            ionBinary = "impedit";
                                            ionText = "cum";
                                        }}),
                                    }};
                                }};;
                                fetchPage = new FetchPageRequest("esse", "ipsum");;
                                sessionToken = "excepturi";
                                startSession = new StartSessionRequest("aspernatur");;
                                startTransaction = new java.util.HashMap<String, Object>() {{
                                    put("ad", "natus");
                                }};
                            }};, SendCommandXAmzTargetEnum.QLDB_SESSION_SEND_COMMAND) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            SendCommandResponse res = sdk.sdk.sendCommand(req);

            if (res.sendCommandResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [sendCommand](docs/sdk/README.md#sendcommand) - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

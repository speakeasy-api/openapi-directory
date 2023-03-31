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
import org.openapis.openapi.models.operations.DeleteHumanLoopPathParams;
import org.openapis.openapi.models.operations.DeleteHumanLoopHeaders;
import org.openapis.openapi.models.operations.DeleteHumanLoopRequest;
import org.openapis.openapi.models.operations.DeleteHumanLoopResponse;

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

            DeleteHumanLoopRequest req = new DeleteHumanLoopRequest() {{
                pathParams = new DeleteHumanLoopPathParams() {{
                    humanLoopName = "corrupti";
                }};
                headers = new DeleteHumanLoopHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            DeleteHumanLoopResponse res = sdk.deleteHumanLoop(req);

            if (res.deleteHumanLoopResponse.isPresent()) {
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

* `deleteHumanLoop` - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
* `describeHumanLoop` - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 
* `listHumanLoops` - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
* `startHumanLoop` - Starts a human loop, provided that at least one activation condition is met.
* `stopHumanLoop` - Stops the specified human loop.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

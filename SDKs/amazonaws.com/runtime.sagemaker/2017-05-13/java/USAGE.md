<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeEndpointRequest;
import org.openapis.openapi.models.operations.InvokeEndpointRequestBody;
import org.openapis.openapi.models.operations.InvokeEndpointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeEndpointRequest req = new InvokeEndpointRequest("provident",                 new InvokeEndpointRequestBody("distinctio");) {{
                accept = "quibusdam";
                contentType = "unde";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
                xAmznSageMakerCustomAttributes = "iure";
                xAmznSageMakerEnableExplanations = "magnam";
                xAmznSageMakerInferenceId = "debitis";
                xAmznSageMakerTargetContainerHostname = "ipsa";
                xAmznSageMakerTargetModel = "delectus";
                xAmznSageMakerTargetVariant = "tempora";
            }};            

            InvokeEndpointResponse res = sdk.invokeEndpoint(req);

            if (res.invokeEndpointOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
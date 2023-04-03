<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.InvokeEndpointRequestBody;
import org.openapis.openapi.models.operations.InvokeEndpointRequest;
import org.openapis.openapi.models.operations.InvokeEndpointResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeEndpointRequest req = new InvokeEndpointRequest() {{
                accept = "corrupti";
                contentType = "provident";
                endpointName = "distinctio";
                requestBody = new InvokeEndpointRequestBody() {{
                    body = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmznSageMakerCustomAttributes = "suscipit";
                xAmznSageMakerEnableExplanations = "iure";
                xAmznSageMakerInferenceId = "magnam";
                xAmznSageMakerTargetContainerHostname = "debitis";
                xAmznSageMakerTargetModel = "ipsa";
                xAmznSageMakerTargetVariant = "delectus";
            }}            

            InvokeEndpointResponse res = sdk.invokeEndpoint(req);

            if (res.invokeEndpointOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
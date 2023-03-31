<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.InvokeEndpointPathParams;
import org.openapis.openapi.models.operations.InvokeEndpointHeaders;
import org.openapis.openapi.models.operations.InvokeEndpointRequestBody;
import org.openapis.openapi.models.operations.InvokeEndpointRequest;
import org.openapis.openapi.models.operations.InvokeEndpointResponse;

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

            InvokeEndpointRequest req = new InvokeEndpointRequest() {{
                pathParams = new InvokeEndpointPathParams() {{
                    endpointName = "corrupti";
                }};
                headers = new InvokeEndpointHeaders() {{
                    accept = "provident";
                    contentType = "distinctio";
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                    xAmznSageMakerCustomAttributes = "deserunt";
                    xAmznSageMakerEnableExplanations = "suscipit";
                    xAmznSageMakerInferenceId = "iure";
                    xAmznSageMakerTargetContainerHostname = "magnam";
                    xAmznSageMakerTargetModel = "debitis";
                    xAmznSageMakerTargetVariant = "ipsa";
                }};
                request = new InvokeEndpointRequestBody() {{
                    body = "delectus";
                }};
            }};            

            InvokeEndpointResponse res = sdk.invokeEndpoint(req);

            if (res.invokeEndpointOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
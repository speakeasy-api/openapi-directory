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

            InvokeEndpointRequest req = new InvokeEndpointRequest() {{
                pathParams = new InvokeEndpointPathParams() {{
                    endpointName = "dolores";
                }};
                headers = new InvokeEndpointHeaders() {{
                    accept = "quasi";
                    contentType = "recusandae";
                    xAmzAlgorithm = "numquam";
                    xAmzContentSha256 = "numquam";
                    xAmzCredential = "occaecati";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "est";
                    xAmzSignature = "occaecati";
                    xAmzSignedHeaders = "et";
                    xAmznSageMakerCustomAttributes = "et";
                    xAmznSageMakerInferenceId = "non";
                    xAmznSageMakerTargetContainerHostname = "molestias";
                    xAmznSageMakerTargetModel = "aut";
                    xAmznSageMakerTargetVariant = "qui";
                }};
                request = new InvokeEndpointRequestBody() {{
                    body = "consequuntur";
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
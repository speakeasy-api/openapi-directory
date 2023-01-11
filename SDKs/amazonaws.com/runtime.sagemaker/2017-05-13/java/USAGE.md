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
                    endpointName = "sit";
                }};
                headers = new InvokeEndpointHeaders() {{
                    accept = "voluptas";
                    contentType = "culpa";
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "consequuntur";
                    xAmzCredential = "dolor";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "et";
                    xAmznSageMakerCustomAttributes = "nihil";
                    xAmznSageMakerInferenceId = "rerum";
                    xAmznSageMakerTargetContainerHostname = "dicta";
                    xAmznSageMakerTargetModel = "debitis";
                    xAmznSageMakerTargetVariant = "voluptatum";
                }};
                request = new InvokeEndpointRequestBody() {{
                    body = "et";
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
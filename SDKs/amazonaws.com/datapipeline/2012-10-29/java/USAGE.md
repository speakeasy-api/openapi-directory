<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.operations.ActivatePipelineHeaders;
import org.openapis.openapi.models.operations.ActivatePipelineRequest;
import org.openapis.openapi.models.operations.ActivatePipelineResponse;
import org.openapis.openapi.models.shared.ActivatePipelineInput;
import org.openapis.openapi.models.shared.ParameterValue;

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

            ActivatePipelineRequest req = new ActivatePipelineRequest() {{
                headers = new ActivatePipelineHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DataPipeline.ActivatePipeline";
                }};
                request = new ActivatePipelineInput() {{
                    parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                        add(new ParameterValue() {{
                            id = "vel";
                            stringValue = "error";
                        }}),
                        add(new ParameterValue() {{
                            id = "deserunt";
                            stringValue = "suscipit";
                        }}),
                        add(new ParameterValue() {{
                            id = "iure";
                            stringValue = "magnam";
                        }}),
                        add(new ParameterValue() {{
                            id = "debitis";
                            stringValue = "ipsa";
                        }}),
                    }};
                    pipelineId = "delectus";
                    startTimestamp = "2022-08-14T01:03:07.567Z";
                }};
            }};            

            ActivatePipelineResponse res = sdk.activatePipeline(req);

            if (res.activatePipelineOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
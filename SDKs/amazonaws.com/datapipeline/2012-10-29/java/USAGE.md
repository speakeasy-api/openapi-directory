<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActivatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.operations.ActivatePipelineRequest;
import org.openapis.openapi.models.operations.ActivatePipelineResponse;
import org.openapis.openapi.models.shared.ActivatePipelineInput;
import org.openapis.openapi.models.shared.ParameterValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivatePipelineRequest req = new ActivatePipelineRequest() {{
                activatePipelineInput = new ActivatePipelineInput() {{
                    parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                        add(new ParameterValue() {{
                            id = "provident";
                            stringValue = "distinctio";
                        }}),
                        add(new ParameterValue() {{
                            id = "quibusdam";
                            stringValue = "unde";
                        }}),
                        add(new ParameterValue() {{
                            id = "nulla";
                            stringValue = "corrupti";
                        }}),
                    }};
                    pipelineId = "illum";
                    startTimestamp = "2022-05-18T09:34:54.894Z";
                }};
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
                xAmzTarget = "DataPipeline.ActivatePipeline";
            }}            

            ActivatePipelineResponse res = sdk.activatePipeline(req);

            if (res.activatePipelineOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
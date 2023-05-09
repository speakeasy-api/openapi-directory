<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivatePipelineRequest;
import org.openapis.openapi.models.operations.ActivatePipelineResponse;
import org.openapis.openapi.models.operations.ActivatePipelineXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivatePipelineInput;
import org.openapis.openapi.models.shared.ParameterValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivatePipelineRequest req = new ActivatePipelineRequest(                new ActivatePipelineInput("provident") {{
                                parameterValues = new org.openapis.openapi.models.shared.ParameterValue[]{{
                                    add(new ParameterValue("sapiente", "quo") {{
                                        id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                                        stringValue = "repellendus";
                                    }}),
                                    add(new ParameterValue("ad", "natus") {{
                                        id = "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392";
                                        stringValue = "perferendis";
                                    }}),
                                    add(new ParameterValue("culpa", "doloribus") {{
                                        id = "29396fea-7596-4eb1-8faa-a2352c595590";
                                        stringValue = "iure";
                                    }}),
                                }};
                                startTimestamp = OffsetDateTime.parse("2022-09-11T06:15:44.019Z");
                            }};, ActivatePipelineXAmzTargetEnum.DATA_PIPELINE_ACTIVATE_PIPELINE) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            ActivatePipelineResponse res = sdk.activatePipeline(req);

            if (res.activatePipelineOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
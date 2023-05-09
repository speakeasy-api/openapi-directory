<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanResponse;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityUnitsConfiguration;
import org.openapis.openapi.models.shared.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRescoreExecutionPlanRequest req = new CreateRescoreExecutionPlanRequest(                new CreateRescoreExecutionPlanRequest("provident") {{
                                capacityUnits = new CapacityUnitsConfiguration(715190L);;
                                clientToken = "quibusdam";
                                description = "unde";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "error") {{
                                        key = "corrupti";
                                        value = "illum";
                                    }}),
                                    add(new Tag("iure", "magnam") {{
                                        key = "deserunt";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("delectus", "tempora") {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("minus", "placeat") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateRescoreExecutionPlanXAmzTargetEnum.AWS_KENDRA_RERANKING_FRONTEND_SERVICE_CREATE_RESCORE_EXECUTION_PLAN) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CreateRescoreExecutionPlanResponse res = sdk.createRescoreExecutionPlan(req);

            if (res.createRescoreExecutionPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
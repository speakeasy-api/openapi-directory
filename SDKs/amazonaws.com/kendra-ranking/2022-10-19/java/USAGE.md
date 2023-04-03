<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanResponse;
import org.openapis.openapi.models.shared.CreateRescoreExecutionPlanRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.CapacityUnitsConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRescoreExecutionPlanRequest req = new CreateRescoreExecutionPlanRequest() {{
                createRescoreExecutionPlanRequest = new CreateRescoreExecutionPlanRequest() {{
                    capacityUnits = new CapacityUnitsConfiguration() {{
                        rescoreCapacityUnits = 548814;
                    }};
                    clientToken = "provident";
                    description = "distinctio";
                    name = "quibusdam";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
                xAmzTarget = "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan";
            }}            

            CreateRescoreExecutionPlanResponse res = sdk.createRescoreExecutionPlan(req);

            if (res.createRescoreExecutionPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateRescoreExecutionPlanHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateRescoreExecutionPlanRequest req = new CreateRescoreExecutionPlanRequest() {{
                headers = new CreateRescoreExecutionPlanHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan";
                }};
                request = new CreateRescoreExecutionPlanRequest() {{
                    capacityUnits = new CapacityUnitsConfiguration() {{
                        rescoreCapacityUnits = 847252;
                    }};
                    clientToken = "vel";
                    description = "error";
                    name = "deserunt";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            CreateRescoreExecutionPlanResponse res = sdk.createRescoreExecutionPlan(req);

            if (res.createRescoreExecutionPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
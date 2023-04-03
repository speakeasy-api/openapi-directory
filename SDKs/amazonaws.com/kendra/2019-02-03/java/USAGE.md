<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceResponse;
import org.openapis.openapi.models.shared.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.shared.EntityConfiguration;
import org.openapis.openapi.models.shared.EntityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntitiesToExperienceRequest req = new AssociateEntitiesToExperienceRequest() {{
                associateEntitiesToExperienceRequest = new AssociateEntitiesToExperienceRequest() {{
                    entityList = new org.openapis.openapi.models.shared.EntityConfiguration[]{{
                        add(new EntityConfiguration() {{
                            entityId = "provident";
                            entityType = "GROUP";
                        }}),
                        add(new EntityConfiguration() {{
                            entityId = "quibusdam";
                            entityType = "GROUP";
                        }}),
                        add(new EntityConfiguration() {{
                            entityId = "nulla";
                            entityType = "GROUP";
                        }}),
                    }};
                    id = "illum";
                    indexId = "vel";
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "AWSKendraFrontendService.AssociateEntitiesToExperience";
            }}            

            AssociateEntitiesToExperienceResponse res = sdk.associateEntitiesToExperience(req);

            if (res.associateEntitiesToExperienceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
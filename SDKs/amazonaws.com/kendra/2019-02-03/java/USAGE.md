<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceResponse;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateEntitiesToExperienceRequest;
import org.openapis.openapi.models.shared.EntityConfiguration;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntitiesToExperienceRequest req = new AssociateEntitiesToExperienceRequest(                new AssociateEntitiesToExperienceRequest(                new org.openapis.openapi.models.shared.EntityConfiguration[]{{
                                                add(new EntityConfiguration("unde", EntityTypeEnum.GROUP) {{
                                                    entityId = "distinctio";
                                                    entityType = EntityTypeEnum.GROUP;
                                                }}),
                                                add(new EntityConfiguration("vel", EntityTypeEnum.GROUP) {{
                                                    entityId = "corrupti";
                                                    entityType = EntityTypeEnum.GROUP;
                                                }}),
                                                add(new EntityConfiguration("iure", EntityTypeEnum.USER) {{
                                                    entityId = "deserunt";
                                                    entityType = EntityTypeEnum.USER;
                                                }}),
                                            }}, "debitis", "ipsa");, AssociateEntitiesToExperienceXAmzTargetEnum.AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_ENTITIES_TO_EXPERIENCE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            AssociateEntitiesToExperienceResponse res = sdk.associateEntitiesToExperience(req);

            if (res.associateEntitiesToExperienceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
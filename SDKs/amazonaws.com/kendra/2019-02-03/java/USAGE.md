<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateEntitiesToExperienceHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateEntitiesToExperienceRequest req = new AssociateEntitiesToExperienceRequest() {{
                headers = new AssociateEntitiesToExperienceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSKendraFrontendService.AssociateEntitiesToExperience";
                }};
                request = new AssociateEntitiesToExperienceRequest() {{
                    entityList = new org.openapis.openapi.models.shared.EntityConfiguration[]{{
                        add(new EntityConfiguration() {{
                            entityId = "vel";
                            entityType = "GROUP";
                        }}),
                        add(new EntityConfiguration() {{
                            entityId = "deserunt";
                            entityType = "USER";
                        }}),
                        add(new EntityConfiguration() {{
                            entityId = "iure";
                            entityType = "USER";
                        }}),
                        add(new EntityConfiguration() {{
                            entityId = "debitis";
                            entityType = "USER";
                        }}),
                    }};
                    id = "delectus";
                    indexId = "tempora";
                }};
            }};            

            AssociateEntitiesToExperienceResponse res = sdk.associateEntitiesToExperience(req);

            if (res.associateEntitiesToExperienceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactResponse;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.shared.CreatedArtifact;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCreatedArtifactRequest req = new AssociateCreatedArtifactRequest(                new AssociateCreatedArtifactRequest(                new CreatedArtifact("provident") {{
                                                description = "distinctio";
                                            }};, "quibusdam", "unde") {{
                                dryRun = false;
                            }};, AssociateCreatedArtifactXAmzTargetEnum.AWS_MIGRATION_HUB_ASSOCIATE_CREATED_ARTIFACT) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateCreatedArtifactResponse res = sdk.associateCreatedArtifact(req);

            if (res.associateCreatedArtifactResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
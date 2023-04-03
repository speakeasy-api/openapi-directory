<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactResponse;
import org.openapis.openapi.models.shared.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.shared.CreatedArtifact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateCreatedArtifactRequest req = new AssociateCreatedArtifactRequest() {{
                associateCreatedArtifactRequest = new AssociateCreatedArtifactRequest() {{
                    createdArtifact = new CreatedArtifact() {{
                        description = "corrupti";
                        name = "provident";
                    }};
                    dryRun = false;
                    migrationTaskName = "distinctio";
                    progressUpdateStream = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "AWSMigrationHub.AssociateCreatedArtifact";
            }}            

            AssociateCreatedArtifactResponse res = sdk.associateCreatedArtifact(req);

            if (res.associateCreatedArtifactResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
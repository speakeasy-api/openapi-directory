<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactHeaders;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.operations.AssociateCreatedArtifactResponse;
import org.openapis.openapi.models.shared.AssociateCreatedArtifactRequest;
import org.openapis.openapi.models.shared.CreatedArtifact;

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

            AssociateCreatedArtifactRequest req = new AssociateCreatedArtifactRequest() {{
                headers = new AssociateCreatedArtifactHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMigrationHub.AssociateCreatedArtifact";
                }};
                request = new AssociateCreatedArtifactRequest() {{
                    createdArtifact = new CreatedArtifact() {{
                        description = "illum";
                        name = "vel";
                    }};
                    dryRun = false;
                    migrationTaskName = "error";
                    progressUpdateStream = "deserunt";
                }};
            }};            

            AssociateCreatedArtifactResponse res = sdk.associateCreatedArtifact(req);

            if (res.associateCreatedArtifactResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
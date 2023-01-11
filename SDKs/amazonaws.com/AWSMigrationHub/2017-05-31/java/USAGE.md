<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateCreatedArtifactRequest req = new AssociateCreatedArtifactRequest() {{
                headers = new AssociateCreatedArtifactHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSMigrationHub.AssociateCreatedArtifact";
                }};
                request = new AssociateCreatedArtifactRequest() {{
                    createdArtifact = new CreatedArtifact() {{
                        description = "fugit";
                        name = "et";
                    }};
                    dryRun = true;
                    migrationTaskName = "rerum";
                    progressUpdateStream = "dicta";
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
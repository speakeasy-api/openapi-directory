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
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "vel";
                    xAmzCredential = "placeat";
                    xAmzDate = "qui";
                    xAmzSecurityToken = "nisi";
                    xAmzSignature = "quis";
                    xAmzSignedHeaders = "adipisci";
                    xAmzTarget = "AWSMigrationHub.AssociateCreatedArtifact";
                }};
                request = new AssociateCreatedArtifactRequest() {{
                    createdArtifact = new CreatedArtifact() {{
                        description = "rerum";
                        name = "et";
                    }};
                    dryRun = true;
                    migrationTaskName = "numquam";
                    progressUpdateStream = "laborum";
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
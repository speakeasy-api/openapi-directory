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

            AssociateConnectionAliasRequest req = new AssociateConnectionAliasRequest() {{
                headers = new AssociateConnectionAliasHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "WorkspacesService.AssociateConnectionAlias";
                }};
                request = new AssociateConnectionAliasRequest() {{
                    aliasId = "fugit";
                    resourceId = "et";
                }};
            }};

            AssociateConnectionAliasResponse res = sdk.associateConnectionAlias(req);

            if (res.associateConnectionAliasResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
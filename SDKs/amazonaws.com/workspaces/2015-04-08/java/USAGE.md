<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateConnectionAliasHeaders;
import org.openapis.openapi.models.operations.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.operations.AssociateConnectionAliasResponse;
import org.openapis.openapi.models.shared.AssociateConnectionAliasRequest;

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

            AssociateConnectionAliasRequest req = new AssociateConnectionAliasRequest() {{
                headers = new AssociateConnectionAliasHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "WorkspacesService.AssociateConnectionAlias";
                }};
                request = new AssociateConnectionAliasRequest() {{
                    aliasId = "illum";
                    resourceId = "vel";
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
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.operations.AssociateConnectionAliasResponse;
import org.openapis.openapi.models.shared.AssociateConnectionAliasRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConnectionAliasRequest req = new AssociateConnectionAliasRequest() {{
                associateConnectionAliasRequest = new AssociateConnectionAliasRequest() {{
                    aliasId = "corrupti";
                    resourceId = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "WorkspacesService.AssociateConnectionAlias";
            }}            

            AssociateConnectionAliasResponse res = sdk.associateConnectionAlias(req);

            if (res.associateConnectionAliasResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
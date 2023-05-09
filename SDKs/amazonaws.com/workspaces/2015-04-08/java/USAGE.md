<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.operations.AssociateConnectionAliasResponse;
import org.openapis.openapi.models.operations.AssociateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConnectionAliasRequest req = new AssociateConnectionAliasRequest(                new AssociateConnectionAliasRequest("provident", "distinctio");, AssociateConnectionAliasXAmzTargetEnum.WORKSPACES_SERVICE_ASSOCIATE_CONNECTION_ALIAS) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateConnectionAliasResponse res = sdk.associateConnectionAlias(req);

            if (res.associateConnectionAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
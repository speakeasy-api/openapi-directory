<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesResponse;
import org.openapis.openapi.models.shared.AssociateFileSystemAliasesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFileSystemAliasesRequest req = new AssociateFileSystemAliasesRequest() {{
                associateFileSystemAliasesRequest = new AssociateFileSystemAliasesRequest() {{
                    aliases = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    clientRequestToken = "unde";
                    fileSystemId = "nulla";
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
                xAmzTarget = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases";
            }}            

            AssociateFileSystemAliasesResponse res = sdk.associateFileSystemAliases(req);

            if (res.associateFileSystemAliasesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
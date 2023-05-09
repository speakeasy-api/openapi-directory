<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesResponse;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFileSystemAliasesRequest req = new AssociateFileSystemAliasesRequest(                new AssociateFileSystemAliasesRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla") {{
                                clientRequestToken = "corrupti";
                            }};, AssociateFileSystemAliasesXAmzTargetEnum.AWS_SIMBA_API_SERVICE_V20180301_ASSOCIATE_FILE_SYSTEM_ALIASES) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            AssociateFileSystemAliasesResponse res = sdk.associateFileSystemAliases(req);

            if (res.associateFileSystemAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
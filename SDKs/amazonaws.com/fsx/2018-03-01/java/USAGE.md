<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesHeaders;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesRequest;
import org.openapis.openapi.models.operations.AssociateFileSystemAliasesResponse;
import org.openapis.openapi.models.shared.AssociateFileSystemAliasesRequest;

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

            AssociateFileSystemAliasesRequest req = new AssociateFileSystemAliasesRequest() {{
                headers = new AssociateFileSystemAliasesHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases";
                }};
                request = new AssociateFileSystemAliasesRequest() {{
                    aliases = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    clientRequestToken = "iure";
                    fileSystemId = "magnam";
                }};
            }};            

            AssociateFileSystemAliasesResponse res = sdk.associateFileSystemAliases(req);

            if (res.associateFileSystemAliasesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
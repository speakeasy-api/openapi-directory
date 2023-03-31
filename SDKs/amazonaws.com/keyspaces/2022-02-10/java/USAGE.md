<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateKeyspaceHeaders;
import org.openapis.openapi.models.operations.CreateKeyspaceRequest;
import org.openapis.openapi.models.operations.CreateKeyspaceResponse;
import org.openapis.openapi.models.shared.CreateKeyspaceRequest;
import org.openapis.openapi.models.shared.Tag;

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

            CreateKeyspaceRequest req = new CreateKeyspaceRequest() {{
                headers = new CreateKeyspaceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "KeyspacesService.CreateKeyspace";
                }};
                request = new CreateKeyspaceRequest() {{
                    keyspaceName = "illum";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                    }};
                }};
            }};            

            CreateKeyspaceResponse res = sdk.createKeyspace(req);

            if (res.createKeyspaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
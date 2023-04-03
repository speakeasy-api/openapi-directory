<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateKeyspaceRequest;
import org.openapis.openapi.models.operations.CreateKeyspaceResponse;
import org.openapis.openapi.models.shared.CreateKeyspaceRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateKeyspaceRequest req = new CreateKeyspaceRequest() {{
                createKeyspaceRequest = new CreateKeyspaceRequest() {{
                    keyspaceName = "corrupti";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "distinctio";
                            value = "quibusdam";
                        }}),
                        add(new Tag() {{
                            key = "unde";
                            value = "nulla";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
                xAmzTarget = "KeyspacesService.CreateKeyspace";
            }}            

            CreateKeyspaceResponse res = sdk.createKeyspace(req);

            if (res.createKeyspaceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
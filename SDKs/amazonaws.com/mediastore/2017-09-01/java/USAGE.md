<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateContainerXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateContainerRequest;
import org.openapis.openapi.models.operations.CreateContainerResponse;
import org.openapis.openapi.models.shared.CreateContainerInput;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerRequest req = new CreateContainerRequest() {{
                createContainerInput = new CreateContainerInput() {{
                    containerName = "corrupti";
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
                xAmzTarget = "MediaStore_20170901.CreateContainer";
            }}            

            CreateContainerResponse res = sdk.createContainer(req);

            if (res.createContainerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
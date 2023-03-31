<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateContainerXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateContainerHeaders;
import org.openapis.openapi.models.operations.CreateContainerRequest;
import org.openapis.openapi.models.operations.CreateContainerResponse;
import org.openapis.openapi.models.shared.CreateContainerInput;
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

            CreateContainerRequest req = new CreateContainerRequest() {{
                headers = new CreateContainerHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "MediaStore_20170901.CreateContainer";
                }};
                request = new CreateContainerInput() {{
                    containerName = "illum";
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

            CreateContainerResponse res = sdk.createContainer(req);

            if (res.createContainerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
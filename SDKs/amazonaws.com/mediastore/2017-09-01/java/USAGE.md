<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContainerRequest;
import org.openapis.openapi.models.operations.CreateContainerResponse;
import org.openapis.openapi.models.operations.CreateContainerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateContainerInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContainerRequest req = new CreateContainerRequest(                new CreateContainerInput("provident") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nulla") {{
                                        key = "quibusdam";
                                        value = "unde";
                                    }}),
                                    add(new Tag("vel") {{
                                        key = "corrupti";
                                        value = "illum";
                                    }}),
                                    add(new Tag("suscipit") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                }};
                            }};, CreateContainerXAmzTargetEnum.MEDIA_STORE20170901_CREATE_CONTAINER) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            CreateContainerResponse res = sdk.createContainer(req);

            if (res.createContainerOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
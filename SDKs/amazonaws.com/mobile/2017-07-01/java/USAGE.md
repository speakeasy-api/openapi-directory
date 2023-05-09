<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody() {{
                                contents = "provident";
                            }};) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                name = "Doug Hoppe";
                region = "debitis";
                snapshotId = "ipsa";
            }};            

            CreateProjectResponse res = sdk.createProject(req);

            if (res.createProjectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
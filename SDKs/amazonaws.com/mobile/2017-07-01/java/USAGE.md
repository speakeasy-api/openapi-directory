<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateProjectQueryParams;
import org.openapis.openapi.models.operations.CreateProjectHeaders;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;

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

            CreateProjectRequest req = new CreateProjectRequest() {{
                queryParams = new CreateProjectQueryParams() {{
                    name = "corrupti";
                    region = "provident";
                    snapshotId = "distinctio";
                }};
                headers = new CreateProjectHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
                }};
                request = new CreateProjectRequestBody() {{
                    contents = "deserunt";
                }};
            }};            

            CreateProjectResponse res = sdk.createProject(req);

            if (res.createProjectResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
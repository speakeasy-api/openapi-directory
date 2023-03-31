<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateActivityXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateActivityHeaders;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.shared.CreateActivityInput;
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

            CreateActivityRequest req = new CreateActivityRequest() {{
                headers = new CreateActivityHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSStepFunctions.CreateActivity";
                }};
                request = new CreateActivityInput() {{
                    name = "illum";
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

            CreateActivityResponse res = sdk.createActivity(req);

            if (res.createActivityOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
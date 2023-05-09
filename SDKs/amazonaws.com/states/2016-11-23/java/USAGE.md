<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.operations.CreateActivityXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateActivityInput;
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

            CreateActivityRequest req = new CreateActivityRequest(                new CreateActivityInput("provident") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quibusdam";
                                        value = "unde";
                                    }}),
                                    add(new Tag() {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag() {{
                                        key = "illum";
                                        value = "vel";
                                    }}),
                                }};
                            }};, CreateActivityXAmzTargetEnum.AWS_STEP_FUNCTIONS_CREATE_ACTIVITY) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateActivityResponse res = sdk.createActivity(req);

            if (res.createActivityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
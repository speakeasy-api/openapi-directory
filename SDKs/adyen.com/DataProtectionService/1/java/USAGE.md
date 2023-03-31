<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostRequestSubjectErasureSecurity;
import org.openapis.openapi.models.operations.PostRequestSubjectErasureRequest;
import org.openapis.openapi.models.operations.PostRequestSubjectErasureResponse;
import org.openapis.openapi.models.shared.SubjectErasureByPspReferenceRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRequestSubjectErasureRequest req = new PostRequestSubjectErasureRequest() {{
                security = new PostRequestSubjectErasureSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SubjectErasureByPspReferenceRequest() {{
                    forceErasure = false;
                    merchantAccount = "corrupti";
                    pspReference = "provident";
                }};
            }};            

            PostRequestSubjectErasureResponse res = sdk.general.postRequestSubjectErasure(req);

            if (res.subjectErasureResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
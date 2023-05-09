# general

### Available Operations

* [postRequestSubjectErasure](#postrequestsubjecterasure) - Submit a Subject Erasure Request.

## postRequestSubjectErasure

Sends the PSP reference containing the shopper data that should be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRequestSubjectErasureResponse;
import org.openapis.openapi.models.operations.PostRequestSubjectErasureSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SubjectErasureByPspReferenceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubjectErasureByPspReferenceRequest req = new SubjectErasureByPspReferenceRequest() {{
                forceErasure = false;
                merchantAccount = "distinctio";
                pspReference = "quibusdam";
            }};            

            PostRequestSubjectErasureResponse res = sdk.general.postRequestSubjectErasure(req, new PostRequestSubjectErasureSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.subjectErasureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

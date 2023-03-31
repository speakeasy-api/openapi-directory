<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelChangeSetQueryParams;
import org.openapis.openapi.models.operations.CancelChangeSetHeaders;
import org.openapis.openapi.models.operations.CancelChangeSetRequest;
import org.openapis.openapi.models.operations.CancelChangeSetResponse;

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

            CancelChangeSetRequest req = new CancelChangeSetRequest() {{
                queryParams = new CancelChangeSetQueryParams() {{
                    catalog = "corrupti";
                    changeSetId = "provident";
                }};
                headers = new CancelChangeSetHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            CancelChangeSetResponse res = sdk.cancelChangeSet(req);

            if (res.cancelChangeSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
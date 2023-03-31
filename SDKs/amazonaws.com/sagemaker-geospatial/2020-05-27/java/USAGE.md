<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobPathParams;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobHeaders;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobRequest;
import org.openapis.openapi.models.operations.DeleteEarthObservationJobResponse;

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

            DeleteEarthObservationJobRequest req = new DeleteEarthObservationJobRequest() {{
                pathParams = new DeleteEarthObservationJobPathParams() {{
                    arn = "corrupti";
                }};
                headers = new DeleteEarthObservationJobHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            DeleteEarthObservationJobResponse res = sdk.deleteEarthObservationJob(req);

            if (res.deleteEarthObservationJobOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
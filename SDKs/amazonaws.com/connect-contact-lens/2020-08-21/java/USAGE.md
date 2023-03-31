<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsQueryParams;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsHeaders;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequestBody;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequest;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsResponse;

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

            ListRealtimeContactAnalysisSegmentsRequest req = new ListRealtimeContactAnalysisSegmentsRequest() {{
                queryParams = new ListRealtimeContactAnalysisSegmentsQueryParams() {{
                    maxResults = "corrupti";
                    nextToken = "provident";
                }};
                headers = new ListRealtimeContactAnalysisSegmentsHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
                request = new ListRealtimeContactAnalysisSegmentsRequestBody() {{
                    contactId = "error";
                    instanceId = "deserunt";
                    maxResults = 384382;
                    nextToken = "iure";
                }};
            }};            

            ListRealtimeContactAnalysisSegmentsResponse res = sdk.listRealtimeContactAnalysisSegments(req);

            if (res.listRealtimeContactAnalysisSegmentsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
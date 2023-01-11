<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ListRealtimeContactAnalysisSegmentsRequest req = new ListRealtimeContactAnalysisSegmentsRequest() {{
                queryParams = new ListRealtimeContactAnalysisSegmentsQueryParams() {{
                    maxResults = "sit";
                    nextToken = "voluptas";
                }};
                headers = new ListRealtimeContactAnalysisSegmentsHeaders() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
                }};
                request = new ListRealtimeContactAnalysisSegmentsRequestBody() {{
                    contactId = "et";
                    instanceId = "nihil";
                    maxResults = 8325060299420976708;
                    nextToken = "dicta";
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
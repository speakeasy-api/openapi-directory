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
                    maxResults = "error";
                    nextToken = "odit";
                }};
                headers = new ListRealtimeContactAnalysisSegmentsHeaders() {{
                    xAmzAlgorithm = "repudiandae";
                    xAmzContentSha256 = "pariatur";
                    xAmzCredential = "est";
                    xAmzDate = "at";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "libero";
                    xAmzSignedHeaders = "aperiam";
                }};
                request = new ListRealtimeContactAnalysisSegmentsRequestBody() {{
                    contactId = "voluptatem";
                    instanceId = "sunt";
                    maxResults = 5474918243671586608;
                    nextToken = "quaerat";
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
# SDK

## Overview

<p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/contact-lens/>
### Available Operations

* [listRealtimeContactAnalysisSegments](#listrealtimecontactanalysissegments) - Provides a list of analysis segments for a real-time analysis session.

## listRealtimeContactAnalysisSegments

Provides a list of analysis segments for a real-time analysis session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequest;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequestBody;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRealtimeContactAnalysisSegmentsRequest req = new ListRealtimeContactAnalysisSegmentsRequest(                new ListRealtimeContactAnalysisSegmentsRequestBody("ipsa", "delectus") {{
                                maxResults = 272656L;
                                nextToken = "suscipit";
                            }};) {{
                maxResults = "molestiae";
                nextToken = "minus";
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            ListRealtimeContactAnalysisSegmentsResponse res = sdk.sdk.listRealtimeContactAnalysisSegments(req);

            if (res.listRealtimeContactAnalysisSegmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

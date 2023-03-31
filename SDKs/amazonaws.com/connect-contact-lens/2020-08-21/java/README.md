# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `listRealtimeContactAnalysisSegments` - Provides a list of analysis segments for a real-time analysis session.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequest;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsRequestBody;
import org.openapis.openapi.models.operations.ListRealtimeContactAnalysisSegmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRealtimeContactAnalysisSegmentsRequest req = new ListRealtimeContactAnalysisSegmentsRequest(                new ListRealtimeContactAnalysisSegmentsRequestBody("provident", "distinctio") {{
                                maxResults = 844266L;
                                nextToken = "unde";
                            }};) {{
                maxResults = "nulla";
                nextToken = "corrupti";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            ListRealtimeContactAnalysisSegmentsResponse res = sdk.listRealtimeContactAnalysisSegments(req);

            if (res.listRealtimeContactAnalysisSegmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [listRealtimeContactAnalysisSegments](docs/sdk/README.md#listrealtimecontactanalysissegments) - Provides a list of analysis segments for a real-time analysis session.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetClipHeaders;
import org.openapis.openapi.models.operations.GetClipRequestBodyClipFragmentSelector;
import org.openapis.openapi.models.operations.GetClipRequestBody;
import org.openapis.openapi.models.operations.GetClipRequest;
import org.openapis.openapi.models.operations.GetClipResponse;
import org.openapis.openapi.models.shared.ClipTimestampRange;
import org.openapis.openapi.models.shared.ClipFragmentSelectorTypeEnum;

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

            GetClipRequest req = new GetClipRequest() {{
                headers = new GetClipHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetClipRequestBody() {{
                    clipFragmentSelector = new GetClipRequestBodyClipFragmentSelector() {{
                        fragmentSelectorType = "SERVER_TIMESTAMP";
                        timestampRange = new ClipTimestampRange() {{
                            endTimestamp = "2022-05-18T09:34:54.894Z";
                            startTimestamp = "2022-03-26T09:37:56.283Z";
                        }};
                    }};
                    streamARN = "iure";
                    streamName = "magnam";
                }};
            }};            

            GetClipResponse res = sdk.getClip(req);

            if (res.getClipOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
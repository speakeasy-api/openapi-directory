<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClipRequest req = new GetClipRequest() {{
                requestBody = new GetClipRequestBody() {{
                    clipFragmentSelector = new GetClipRequestBodyClipFragmentSelector() {{
                        fragmentSelectorType = "SERVER_TIMESTAMP";
                        timestampRange = new ClipTimestampRange() {{
                            endTimestamp = "2021-07-27T21:52:56.087Z";
                            startTimestamp = "2021-03-11T23:22:42.658Z";
                        }};
                    }};
                    streamARN = "nulla";
                    streamName = "corrupti";
                }};
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }}            

            GetClipResponse res = sdk.getClip(req);

            if (res.getClipOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
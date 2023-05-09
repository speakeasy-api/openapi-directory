<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClipRequest;
import org.openapis.openapi.models.operations.GetClipRequestBody;
import org.openapis.openapi.models.operations.GetClipRequestBodyClipFragmentSelector;
import org.openapis.openapi.models.operations.GetClipResponse;
import org.openapis.openapi.models.shared.ClipFragmentSelectorTypeEnum;
import org.openapis.openapi.models.shared.ClipTimestampRange;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClipRequest req = new GetClipRequest(                new GetClipRequestBody(                new GetClipRequestBodyClipFragmentSelector() {{
                                                fragmentSelectorType = ClipFragmentSelectorTypeEnum.SERVER_TIMESTAMP;
                                                timestampRange = new ClipTimestampRange(OffsetDateTime.parse("2021-04-24T16:27:50.833Z"), OffsetDateTime.parse("2021-04-14T16:47:33.722Z"));;
                                            }};) {{
                                streamARN = "corrupti";
                                streamName = "illum";
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            GetClipResponse res = sdk.getClip(req);

            if (res.getClipOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
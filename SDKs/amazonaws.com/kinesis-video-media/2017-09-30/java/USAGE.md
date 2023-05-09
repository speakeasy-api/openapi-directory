<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMediaRequest;
import org.openapis.openapi.models.operations.GetMediaRequestBody;
import org.openapis.openapi.models.operations.GetMediaRequestBodyStartSelector;
import org.openapis.openapi.models.operations.GetMediaResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSelectorTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMediaRequest req = new GetMediaRequest(                new GetMediaRequestBody(                new GetMediaRequestBodyStartSelector() {{
                                                afterFragmentNumber = "provident";
                                                continuationToken = "distinctio";
                                                startSelectorType = StartSelectorTypeEnum.CONTINUATION_TOKEN;
                                                startTimestamp = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
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

            GetMediaResponse res = sdk.getMedia(req);

            if (res.getMediaOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
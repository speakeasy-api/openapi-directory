<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetMediaRequestBodyStartSelector;
import org.openapis.openapi.models.operations.GetMediaRequestBody;
import org.openapis.openapi.models.operations.GetMediaRequest;
import org.openapis.openapi.models.operations.GetMediaResponse;
import org.openapis.openapi.models.shared.StartSelectorTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMediaRequest req = new GetMediaRequest() {{
                requestBody = new GetMediaRequestBody() {{
                    startSelector = new GetMediaRequestBodyStartSelector() {{
                        afterFragmentNumber = "corrupti";
                        continuationToken = "provident";
                        startSelectorType = "EARLIEST";
                        startTimestamp = "2021-03-11T23:22:42.658Z";
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

            GetMediaResponse res = sdk.getMedia(req);

            if (res.getMediaOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
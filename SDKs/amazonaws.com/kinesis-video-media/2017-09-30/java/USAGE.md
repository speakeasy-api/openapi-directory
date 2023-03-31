<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetMediaHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetMediaRequest req = new GetMediaRequest() {{
                headers = new GetMediaHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetMediaRequestBody() {{
                    startSelector = new GetMediaRequestBodyStartSelector() {{
                        afterFragmentNumber = "illum";
                        continuationToken = "vel";
                        startSelectorType = "NOW";
                        startTimestamp = "2022-03-26T09:37:56.283Z";
                    }};
                    streamARN = "iure";
                    streamName = "magnam";
                }};
            }};            

            GetMediaResponse res = sdk.getMedia(req);

            if (res.getMediaOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
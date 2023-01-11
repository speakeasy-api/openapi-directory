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

            GetMediaRequest req = new GetMediaRequest() {{
                headers = new GetMediaHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new GetMediaRequestBody() {{
                    startSelector = new GetMediaRequestBodyStartSelector() {{
                        afterFragmentNumber = "voluptas";
                        continuationToken = "fugit";
                        startSelectorType = "FRAGMENT_NUMBER";
                        startTimestamp = "2003-05-13T04:57:12Z";
                    }};
                    streamARN = "rerum";
                    streamName = "dicta";
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
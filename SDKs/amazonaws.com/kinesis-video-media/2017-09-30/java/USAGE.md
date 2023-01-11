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
                    xAmzAlgorithm = "corporis";
                    xAmzContentSha256 = "at";
                    xAmzCredential = "nostrum";
                    xAmzDate = "recusandae";
                    xAmzSecurityToken = "iste";
                    xAmzSignature = "at";
                    xAmzSignedHeaders = "qui";
                }};
                request = new GetMediaRequestBody() {{
                    startSelector = new GetMediaRequestBodyStartSelector() {{
                        afterFragmentNumber = "fugit";
                        continuationToken = "repellat";
                        startSelectorType = "PRODUCER_TIMESTAMP";
                        startTimestamp = "2002-04-24T14:41:47Z";
                    }};
                    streamARN = "omnis";
                    streamName = "magni";
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
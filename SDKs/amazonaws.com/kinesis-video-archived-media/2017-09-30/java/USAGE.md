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

            GetClipRequest req = new GetClipRequest() {{
                headers = new GetClipHeaders() {{
                    xAmzAlgorithm = "ut";
                    xAmzContentSha256 = "optio";
                    xAmzCredential = "ut";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "velit";
                    xAmzSignature = "totam";
                    xAmzSignedHeaders = "doloribus";
                }};
                request = new GetClipRequestBody() {{
                    clipFragmentSelector = new GetClipRequestBodyClipFragmentSelector() {{
                        fragmentSelectorType = "PRODUCER_TIMESTAMP";
                        timestampRange = new ClipTimestampRange() {{
                            endTimestamp = "1995-01-21T20:44:43Z";
                            startTimestamp = "1979-10-28T05:11:44Z";
                        }};
                    }};
                    streamARN = "quae";
                    streamName = "soluta";
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
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

            CreateSignalingChannelRequest req = new CreateSignalingChannelRequest() {{
                headers = new CreateSignalingChannelHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateSignalingChannelRequestBody() {{
                    channelName = "voluptas";
                    channelType = "SINGLE_MASTER";
                    singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                        messageTtlSeconds = 1543572285742637646;
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "rerum";
                            value = "dicta";
                        }}),
                    }};
                }};
            }};

            CreateSignalingChannelResponse res = sdk.createSignalingChannel(req);

            if (res.createSignalingChannelOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
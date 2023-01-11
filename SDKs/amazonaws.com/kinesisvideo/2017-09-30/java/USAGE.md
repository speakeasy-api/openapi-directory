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
                    xAmzAlgorithm = "error";
                    xAmzContentSha256 = "voluptate";
                    xAmzCredential = "odit";
                    xAmzDate = "exercitationem";
                    xAmzSecurityToken = "hic";
                    xAmzSignature = "perferendis";
                    xAmzSignedHeaders = "cupiditate";
                }};
                request = new CreateSignalingChannelRequestBody() {{
                    channelName = "sed";
                    channelType = "SINGLE_MASTER";
                    singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                        messageTtlSeconds = 7341080715805291804;
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "qui";
                            value = "eius";
                        }}),
                        add(new Tag() {{
                            key = "voluptas";
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
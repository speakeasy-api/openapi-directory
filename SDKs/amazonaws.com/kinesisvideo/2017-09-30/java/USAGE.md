<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequest;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodyChannelTypeEnum;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodySingleMasterConfiguration;
import org.openapis.openapi.models.operations.CreateSignalingChannelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSignalingChannelRequest req = new CreateSignalingChannelRequest(                new CreateSignalingChannelRequestBody("provident") {{
                                channelType = CreateSignalingChannelRequestBodyChannelTypeEnum.FULL_MESH;
                                singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                                    messageTtlSeconds = 844266L;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateSignalingChannelResponse res = sdk.createSignalingChannel(req);

            if (res.createSignalingChannelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
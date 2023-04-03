<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodyChannelTypeEnum;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodySingleMasterConfiguration;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequest;
import org.openapis.openapi.models.operations.CreateSignalingChannelResponse;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSignalingChannelRequest req = new CreateSignalingChannelRequest() {{
                requestBody = new CreateSignalingChannelRequestBody() {{
                    channelName = "corrupti";
                    channelType = "FULL_MESH";
                    singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                        messageTtlSeconds = 715190;
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "unde";
                            value = "nulla";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                        add(new Tag() {{
                            key = "vel";
                            value = "error";
                        }}),
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }}            

            CreateSignalingChannelResponse res = sdk.createSignalingChannel(req);

            if (res.createSignalingChannelOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
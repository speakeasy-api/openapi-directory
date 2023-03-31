<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSignalingChannelHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateSignalingChannelRequest req = new CreateSignalingChannelRequest() {{
                headers = new CreateSignalingChannelHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateSignalingChannelRequestBody() {{
                    channelName = "illum";
                    channelType = "SINGLE_MASTER";
                    singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                        messageTtlSeconds = 623564;
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
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
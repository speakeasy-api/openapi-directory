<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSlackChannelConfigurationRequest req = new CreateSlackChannelConfigurationRequest(                new CreateSlackChannelConfigurationRequestBody("provident", "distinctio", CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum.HIGH, "unde") {{
                                channelName = "nulla";
                                notifyOnAddCorrespondenceToCase = false;
                                notifyOnCreateOrReopenCase = false;
                                notifyOnResolveCase = false;
                            }};) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            CreateSlackChannelConfigurationResponse res = sdk.createSlackChannelConfiguration(req);

            if (res.createSlackChannelConfigurationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
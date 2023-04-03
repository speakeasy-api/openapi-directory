<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSlackChannelConfigurationRequest req = new CreateSlackChannelConfigurationRequest() {{
                requestBody = new CreateSlackChannelConfigurationRequestBody() {{
                    channelId = "corrupti";
                    channelName = "provident";
                    channelRoleArn = "distinctio";
                    notifyOnAddCorrespondenceToCase = false;
                    notifyOnCaseSeverity = "high";
                    notifyOnCreateOrReopenCase = false;
                    notifyOnResolveCase = false;
                    teamId = "unde";
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }}            

            CreateSlackChannelConfigurationResponse res = sdk.createSlackChannelConfiguration(req);

            if (res.createSlackChannelConfigurationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
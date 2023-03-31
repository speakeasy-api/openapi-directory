<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationHeaders;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnum;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSlackChannelConfigurationResponse;

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

            CreateSlackChannelConfigurationRequest req = new CreateSlackChannelConfigurationRequest() {{
                headers = new CreateSlackChannelConfigurationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateSlackChannelConfigurationRequestBody() {{
                    channelId = "illum";
                    channelName = "vel";
                    channelRoleArn = "error";
                    notifyOnAddCorrespondenceToCase = false;
                    notifyOnCaseSeverity = "all";
                    notifyOnCreateOrReopenCase = false;
                    notifyOnResolveCase = false;
                    teamId = "suscipit";
                }};
            }};            

            CreateSlackChannelConfigurationResponse res = sdk.createSlackChannelConfiguration(req);

            if (res.createSlackChannelConfigurationResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionResponse;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest(                new AddApplicationCloudWatchLoggingOptionRequest("provident",                 new CloudWatchLoggingOption("distinctio");) {{
                                conditionalToken = "quibusdam";
                                currentApplicationVersionId = 602763L;
                            }};, AddApplicationCloudWatchLoggingOptionXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AddApplicationCloudWatchLoggingOptionResponse res = sdk.addApplicationCloudWatchLoggingOption(req);

            if (res.addApplicationCloudWatchLoggingOptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
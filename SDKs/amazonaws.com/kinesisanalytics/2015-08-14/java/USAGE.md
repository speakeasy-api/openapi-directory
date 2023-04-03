<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionResponse;
import org.openapis.openapi.models.shared.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest() {{
                addApplicationCloudWatchLoggingOptionRequest = new AddApplicationCloudWatchLoggingOptionRequest() {{
                    applicationName = "corrupti";
                    cloudWatchLoggingOption = new CloudWatchLoggingOption() {{
                        logStreamARN = "provident";
                        roleARN = "distinctio";
                    }};
                    currentApplicationVersionId = 844266;
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption";
            }}            

            AddApplicationCloudWatchLoggingOptionResponse res = sdk.addApplicationCloudWatchLoggingOption(req);

            if (res.addApplicationCloudWatchLoggingOptionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionHeaders;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionResponse;
import org.openapis.openapi.models.shared.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;

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

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest() {{
                headers = new AddApplicationCloudWatchLoggingOptionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption";
                }};
                request = new AddApplicationCloudWatchLoggingOptionRequest() {{
                    applicationName = "illum";
                    cloudWatchLoggingOption = new CloudWatchLoggingOption() {{
                        logStreamARN = "vel";
                    }};
                    conditionalToken = "error";
                    currentApplicationVersionId = 645894;
                }};
            }};            

            AddApplicationCloudWatchLoggingOptionResponse res = sdk.addApplicationCloudWatchLoggingOption(req);

            if (res.addApplicationCloudWatchLoggingOptionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
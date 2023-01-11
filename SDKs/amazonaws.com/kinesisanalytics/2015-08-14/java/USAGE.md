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

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest() {{
                headers = new AddApplicationCloudWatchLoggingOptionHeaders() {{
                    xAmzAlgorithm = "quia";
                    xAmzContentSha256 = "earum";
                    xAmzCredential = "a";
                    xAmzDate = "alias";
                    xAmzSecurityToken = "culpa";
                    xAmzSignature = "rerum";
                    xAmzSignedHeaders = "maxime";
                    xAmzTarget = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption";
                }};
                request = new AddApplicationCloudWatchLoggingOptionRequest() {{
                    applicationName = "omnis";
                    cloudWatchLoggingOption = new CloudWatchLoggingOption() {{
                        logStreamARN = "eos";
                        roleARN = "iusto";
                    }};
                    currentApplicationVersionId = 8230610447774493355;
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
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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption";
                }};
                request = new AddApplicationCloudWatchLoggingOptionRequest() {{
                    applicationName = "fugit";
                    cloudWatchLoggingOption = new CloudWatchLoggingOption() {{
                        logStreamARN = "et";
                    }};
                    conditionalToken = "nihil";
                    currentApplicationVersionId = 8325060299420976708;
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
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
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "voluptatem";
                    xAmzCredential = "veniam";
                    xAmzDate = "aspernatur";
                    xAmzSecurityToken = "sed";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "numquam";
                    xAmzTarget = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption";
                }};
                request = new AddApplicationCloudWatchLoggingOptionRequest() {{
                    applicationName = "et";
                    cloudWatchLoggingOption = new CloudWatchLoggingOption() {{
                        logStreamARN = "nulla";
                    }};
                    conditionalToken = "nulla";
                    currentApplicationVersionId = 8361513412454442989;
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
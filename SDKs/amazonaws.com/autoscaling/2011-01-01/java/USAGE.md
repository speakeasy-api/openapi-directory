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

            GetAttachInstancesRequest req = new GetAttachInstancesRequest() {{
                queryParams = new GetAttachInstancesQueryParams() {{
                    action = "AttachInstances";
                    autoScalingGroupName = "eum";
                    instanceIds = new String[]() {{
                        add("ut"),
                        add("similique"),
                    }};
                    version = "2011-01-01";
                }};
                headers = new GetAttachInstancesHeaders() {{
                    xAmzAlgorithm = "praesentium";
                    xAmzContentSha256 = "ipsa";
                    xAmzCredential = "ipsa";
                    xAmzDate = "rerum";
                    xAmzSecurityToken = "iure";
                    xAmzSignature = "rem";
                    xAmzSignedHeaders = "dolore";
                }};
            }};

            GetAttachInstancesResponse res = sdk.getAttachInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
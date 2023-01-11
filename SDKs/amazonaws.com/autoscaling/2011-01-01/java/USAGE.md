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
                    autoScalingGroupName = "voluptas";
                    instanceIds = new String[]() {{
                        add("expedita"),
                        add("consequuntur"),
                    }};
                    version = "2011-01-01";
                }};
                headers = new GetAttachInstancesHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "fugit";
                    xAmzDate = "et";
                    xAmzSecurityToken = "nihil";
                    xAmzSignature = "rerum";
                    xAmzSignedHeaders = "dicta";
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
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

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest() {{
                headers = new AddTagsToOnPremisesInstancesHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
                }};
                request = new AddTagsToOnPremisesInstancesInput() {{
                    instanceNames = new String[]() {{
                        add("et"),
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "rerum";
                            value = "dicta";
                        }}),
                    }};
                }};
            }};

            AddTagsToOnPremisesInstancesResponse res = sdk.addTagsToOnPremisesInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
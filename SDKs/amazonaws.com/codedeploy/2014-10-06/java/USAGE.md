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
                    xAmzAlgorithm = "deserunt";
                    xAmzContentSha256 = "sed";
                    xAmzCredential = "sint";
                    xAmzDate = "est";
                    xAmzSecurityToken = "est";
                    xAmzSignature = "omnis";
                    xAmzSignedHeaders = "reiciendis";
                    xAmzTarget = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
                }};
                request = new AddTagsToOnPremisesInstancesInput() {{
                    instanceNames = new String[]() {{
                        add("et"),
                        add("molestias"),
                        add("minus"),
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "voluptatum";
                            value = "tenetur";
                        }}),
                        add(new Tag() {{
                            key = "rem";
                            value = "autem";
                        }}),
                        add(new Tag() {{
                            key = "enim";
                            value = "quia";
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
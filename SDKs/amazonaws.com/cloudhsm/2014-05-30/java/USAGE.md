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

            AddTagsToResourceRequest req = new AddTagsToResourceRequest() {{
                headers = new AddTagsToResourceHeaders() {{
                    xAmzAlgorithm = "nihil";
                    xAmzContentSha256 = "magni";
                    xAmzCredential = "vitae";
                    xAmzDate = "excepturi";
                    xAmzSecurityToken = "ut";
                    xAmzSignature = "totam";
                    xAmzSignedHeaders = "blanditiis";
                    xAmzTarget = "CloudHsmFrontendService.AddTagsToResource";
                }};
                request = new AddTagsToResourceRequest() {{
                    resourceArn = "sint";
                    tagList = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "fugiat";
                            value = "adipisci";
                        }}),
                    }};
                }};
            }};

            AddTagsToResourceResponse res = sdk.addTagsToResource(req);

            if (res.addTagsToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
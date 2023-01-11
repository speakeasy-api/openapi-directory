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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "CloudHsmFrontendService.AddTagsToResource";
                }};
                request = new AddTagsToResourceRequest() {{
                    resourceArn = "fugit";
                    tagList = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "nihil";
                            value = "rerum";
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
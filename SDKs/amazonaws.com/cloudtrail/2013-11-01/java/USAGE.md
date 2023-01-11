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

            AddTagsRequest req = new AddTagsRequest() {{
                headers = new AddTagsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags";
                }};
                request = new AddTagsRequest() {{
                    resourceId = "fugit";
                    tagsList = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "nihil";
                            value = "rerum";
                        }}),
                    }};
                }};
            }};

            AddTagsResponse res = sdk.addTags(req);

            if (res.addTagsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
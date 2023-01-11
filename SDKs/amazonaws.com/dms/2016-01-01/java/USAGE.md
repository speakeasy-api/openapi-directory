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
                    xAmzAlgorithm = "laborum";
                    xAmzContentSha256 = "ex";
                    xAmzCredential = "ad";
                    xAmzDate = "voluptatem";
                    xAmzSecurityToken = "accusantium";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "sunt";
                    xAmzTarget = "AmazonDMSv20160101.AddTagsToResource";
                }};
                request = new AddTagsToResourceMessage() {{
                    resourceArn = "quidem";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "iure";
                            resourceArn = "incidunt";
                            value = "iusto";
                        }}),
                        add(new Tag() {{
                            key = "voluptatibus";
                            resourceArn = "voluptates";
                            value = "quia";
                        }}),
                        add(new Tag() {{
                            key = "tenetur";
                            resourceArn = "et";
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
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsHeaders;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.shared.AddTagsInput;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaggableResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddTagsRequest req = new AddTagsRequest() {{
                headers = new AddTagsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonML_20141212.AddTags";
                }};
                request = new AddTagsInput() {{
                    resourceId = "illum";
                    resourceType = "DataSource";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            AddTagsResponse res = sdk.addTags(req);

            if (res.addTagsOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
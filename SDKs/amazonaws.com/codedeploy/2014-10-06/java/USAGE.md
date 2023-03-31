<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesHeaders;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesRequest;
import org.openapis.openapi.models.operations.AddTagsToOnPremisesInstancesResponse;
import org.openapis.openapi.models.shared.AddTagsToOnPremisesInstancesInput;
import org.openapis.openapi.models.shared.Tag;

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

            AddTagsToOnPremisesInstancesRequest req = new AddTagsToOnPremisesInstancesRequest() {{
                headers = new AddTagsToOnPremisesInstancesHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
                }};
                request = new AddTagsToOnPremisesInstancesInput() {{
                    instanceNames = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
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
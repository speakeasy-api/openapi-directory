<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetFieldRequest;
import org.openapis.openapi.models.operations.BatchGetFieldRequestBody;
import org.openapis.openapi.models.operations.BatchGetFieldResponse;
import org.openapis.openapi.models.shared.FieldIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetFieldRequest req = new BatchGetFieldRequest(                new BatchGetFieldRequestBody(                new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                                                add(new FieldIdentifier("ipsam") {{
                                                    id = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                                                }}),
                                                add(new FieldIdentifier("ipsum") {{
                                                    id = "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7";
                                                }}),
                                                add(new FieldIdentifier("omnis") {{
                                                    id = "92059293-96fe-4a75-96eb-10faaa2352c5";
                                                }}),
                                            }});, "nemo") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            BatchGetFieldResponse res = sdk.batchGetField(req);

            if (res.batchGetFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
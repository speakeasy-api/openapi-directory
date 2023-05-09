<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToCertificateRequest;
import org.openapis.openapi.models.operations.AddTagsToCertificateResponse;
import org.openapis.openapi.models.operations.AddTagsToCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToCertificateRequest req = new AddTagsToCertificateRequest(                new AddTagsToCertificateRequest("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("nulla") {{
                                                    key = "quibusdam";
                                                    value = "unde";
                                                }}),
                                                add(new Tag("vel") {{
                                                    key = "corrupti";
                                                    value = "illum";
                                                }}),
                                                add(new Tag("suscipit") {{
                                                    key = "error";
                                                    value = "deserunt";
                                                }}),
                                            }});, AddTagsToCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            AddTagsToCertificateResponse res = sdk.addTagsToCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
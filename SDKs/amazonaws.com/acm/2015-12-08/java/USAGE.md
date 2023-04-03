<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToCertificateXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToCertificateRequest;
import org.openapis.openapi.models.operations.AddTagsToCertificateResponse;
import org.openapis.openapi.models.shared.AddTagsToCertificateRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToCertificateRequest req = new AddTagsToCertificateRequest() {{
                addTagsToCertificateRequest = new AddTagsToCertificateRequest() {{
                    certificateArn = "corrupti";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "distinctio";
                            value = "quibusdam";
                        }}),
                        add(new Tag() {{
                            key = "unde";
                            value = "nulla";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
                xAmzTarget = "CertificateManager.AddTagsToCertificate";
            }}            

            AddTagsToCertificateResponse res = sdk.addTagsToCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
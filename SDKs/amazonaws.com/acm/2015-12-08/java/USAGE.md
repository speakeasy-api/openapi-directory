<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddTagsToCertificateXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddTagsToCertificateHeaders;
import org.openapis.openapi.models.operations.AddTagsToCertificateRequest;
import org.openapis.openapi.models.operations.AddTagsToCertificateResponse;
import org.openapis.openapi.models.shared.AddTagsToCertificateRequest;
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

            AddTagsToCertificateRequest req = new AddTagsToCertificateRequest() {{
                headers = new AddTagsToCertificateHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CertificateManager.AddTagsToCertificate";
                }};
                request = new AddTagsToCertificateRequest() {{
                    certificateArn = "illum";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                    }};
                }};
            }};            

            AddTagsToCertificateResponse res = sdk.addTagsToCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
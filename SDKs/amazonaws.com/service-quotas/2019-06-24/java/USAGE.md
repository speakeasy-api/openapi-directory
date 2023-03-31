<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateHeaders;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateResponse;

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

            AssociateServiceQuotaTemplateRequest req = new AssociateServiceQuotaTemplateRequest() {{
                headers = new AssociateServiceQuotaTemplateHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("vel", "error");
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            AssociateServiceQuotaTemplateResponse res = sdk.associateServiceQuotaTemplate(req);

            if (res.associateServiceQuotaTemplateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
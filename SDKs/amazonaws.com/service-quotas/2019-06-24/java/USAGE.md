<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceQuotaTemplateRequest req = new AssociateServiceQuotaTemplateRequest() {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
                xAmzTarget = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate";
            }}            

            AssociateServiceQuotaTemplateResponse res = sdk.associateServiceQuotaTemplate(req);

            if (res.associateServiceQuotaTemplateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateRequest;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateResponse;
import org.openapis.openapi.models.operations.AssociateServiceQuotaTemplateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceQuotaTemplateRequest req = new AssociateServiceQuotaTemplateRequest(                new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}, AssociateServiceQuotaTemplateXAmzTargetEnum.SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            AssociateServiceQuotaTemplateResponse res = sdk.associateServiceQuotaTemplate(req);

            if (res.associateServiceQuotaTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
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

            AssociateServiceQuotaTemplateRequest req = new AssociateServiceQuotaTemplateRequest() {{
                headers = new AssociateServiceQuotaTemplateHeaders() {{
                    xAmzAlgorithm = "dolore";
                    xAmzContentSha256 = "eveniet";
                    xAmzCredential = "aut";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "omnis";
                    xAmzSignature = "amet";
                    xAmzSignedHeaders = "numquam";
                    xAmzTarget = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("ex", "id");
                    put("ea", "non");
                    put("non", "quam");
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
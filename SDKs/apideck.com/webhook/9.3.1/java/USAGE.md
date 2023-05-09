<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksAddRequest;
import org.openapis.openapi.models.operations.WebhooksAddResponse;
import org.openapis.openapi.models.operations.WebhooksAddSecurity;
import org.openapis.openapi.models.shared.CreateWebhookRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;
import org.openapis.openapi.models.shared.UnifiedApiIdEnum;
import org.openapis.openapi.models.shared.WebhookEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksAddRequest req = new WebhooksAddRequest(                new CreateWebhookRequest("https://example.com/my/webhook/endpoint",                 new org.openapis.openapi.models.shared.WebhookEventTypeEnum[]{{
                                                add(WebhookEventTypeEnum.CRM_COMPANY_CREATED),
                                                add(WebhookEventTypeEnum.CRM_COMPANY_CREATED),
                                                add(WebhookEventTypeEnum.CRM_COMPANY_CREATED),
                                            }}, StatusEnum.ENABLED, UnifiedApiIdEnum.CRM) {{
                                description = "A description";
                            }};, "provident");            

            WebhooksAddResponse res = sdk.webhooks.webhooksAdd(req, new WebhooksAddSecurity("distinctio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->
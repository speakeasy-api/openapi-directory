<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.WebhooksAddSecurity;
import org.openapis.openapi.models.operations.WebhooksAddRequest;
import org.openapis.openapi.models.operations.WebhooksAddResponse;
import org.openapis.openapi.models.shared.CreateWebhookRequest;
import org.openapis.openapi.models.shared.UnifiedApiIdEnum;
import org.openapis.openapi.models.shared.StatusEnum;
import org.openapis.openapi.models.shared.WebhookEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksAddRequest req = new WebhooksAddRequest() {{
                createWebhookRequest = new CreateWebhookRequest() {{
                    deliveryUrl = "https://example.com/my/webhook/endpoint";
                    description = "A description";
                    events = new org.openapis.openapi.models.shared.WebhookEventTypeEnum[]{{
                        add("crm.company.created"),
                        add("crm.company.created"),
                        add("crm.company.created"),
                    }};
                    status = "enabled";
                    unifiedApi = "crm";
                }};
                xApideckAppId = "provident";
            }}            

            WebhooksAddResponse res = sdk.webhooks.webhooksAdd(req, new WebhooksAddSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createWebhookResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
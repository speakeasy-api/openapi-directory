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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            WebhooksAddRequest req = new WebhooksAddRequest() {{
                security = new WebhooksAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new WebhooksAddHeaders() {{
                    xApideckAppId = "rerum";
                }};
                request = new CreateWebhookRequest() {{
                    deliveryUrl = "placeat";
                    description = "doloremque";
                    events = new openapisdk.models.shared.WebhookEventTypeEnum[]() {{
                        add("accounting.customer.updated"),
                        add("lead.lead.updated"),
                        add("pos.item.deleted"),
                    }};
                    status = "disabled";
                    unifiedApi = "file-storage";
                }};
            }};

            WebhooksAddResponse res = sdk.webhooks.webhooksAdd(req);

            if (res.createWebhookResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->
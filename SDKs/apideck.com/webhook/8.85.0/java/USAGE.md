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
                    xApideckAppId = "sit";
                }};
                request = new CreateWebhookRequest() {{
                    deliveryUrl = "voluptas";
                    description = "culpa";
                    events = new openapisdk.models.shared.WebhookEventTypeEnum[]() {{
                        add("crm.contact.created"),
                        add("crm.contact.updated"),
                    }};
                    status = "disabled";
                    unifiedApi = "crm";
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
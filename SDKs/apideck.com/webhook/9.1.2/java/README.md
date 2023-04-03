# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### webhooks

* `webhooksAdd` - Create webhook subscription
* `webhooksAll` - List webhook subscriptions
* `webhooksDelete` - Delete webhook subscription
* `webhooksExecute` - Execute a webhook
* `webhooksOne` - Get webhook subscription
* `webhooksResolve` - Resolve and Execute a connection webhook
* `webhooksShortExecute` - Execute a webhook
* `webhooksUpdate` - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

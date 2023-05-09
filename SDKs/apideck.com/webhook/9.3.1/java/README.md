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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [webhooks](docs/webhooks/README.md)

* [webhooksAdd](docs/webhooks/README.md#webhooksadd) - Create webhook subscription
* [webhooksAll](docs/webhooks/README.md#webhooksall) - List webhook subscriptions
* [webhooksDelete](docs/webhooks/README.md#webhooksdelete) - Delete webhook subscription
* [webhooksExecute](docs/webhooks/README.md#webhooksexecute) - Execute a webhook
* [webhooksOne](docs/webhooks/README.md#webhooksone) - Get webhook subscription
* [webhooksResolve](docs/webhooks/README.md#webhooksresolve) - Resolve and Execute a connection webhook
* [webhooksShortExecute](docs/webhooks/README.md#webhooksshortexecute) - Execute a webhook
* [webhooksUpdate](docs/webhooks/README.md#webhooksupdate) - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

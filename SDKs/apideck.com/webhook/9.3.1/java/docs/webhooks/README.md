# webhooks

### Available Operations

* [webhooksAdd](#webhooksadd) - Create webhook subscription
* [webhooksAll](#webhooksall) - List webhook subscriptions
* [webhooksDelete](#webhooksdelete) - Delete webhook subscription
* [webhooksExecute](#webhooksexecute) - Execute a webhook
* [webhooksOne](#webhooksone) - Get webhook subscription
* [webhooksResolve](#webhooksresolve) - Resolve and Execute a connection webhook
* [webhooksShortExecute](#webhooksshortexecute) - Execute a webhook
* [webhooksUpdate](#webhooksupdate) - Update webhook subscription

## webhooksAdd

Create a webhook subscription to receive events

### Example Usage

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
                                                add(WebhookEventTypeEnum.CRM_COMPANY_CREATED),
                                            }}, StatusEnum.ENABLED, UnifiedApiIdEnum.CRM) {{
                                description = "A description";
                            }};, "unde");            

            WebhooksAddResponse res = sdk.webhooks.webhooksAdd(req, new WebhooksAddSecurity("nulla") {{
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

## webhooksAll

List all webhook subscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksAllRequest;
import org.openapis.openapi.models.operations.WebhooksAllResponse;
import org.openapis.openapi.models.operations.WebhooksAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksAllRequest req = new WebhooksAllRequest("corrupti") {{
                cursor = "illum";
                limit = 423655L;
            }};            

            WebhooksAllResponse res = sdk.webhooks.webhooksAll(req, new WebhooksAllSecurity("error") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getWebhooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksDelete

Delete a webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksDeleteRequest;
import org.openapis.openapi.models.operations.WebhooksDeleteResponse;
import org.openapis.openapi.models.operations.WebhooksDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksDeleteRequest req = new WebhooksDeleteRequest("deserunt", "suscipit");            

            WebhooksDeleteResponse res = sdk.webhooks.webhooksDelete(req, new WebhooksDeleteSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksExecute

Execute a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksExecuteRequest;
import org.openapis.openapi.models.operations.WebhooksExecuteResponse;
import org.openapis.openapi.models.operations.WebhooksExecuteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksExecuteRequest req = new WebhooksExecuteRequest(                new java.util.HashMap<String, Object>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }}, "iusto", "excepturi");            

            WebhooksExecuteResponse res = sdk.webhooks.webhooksExecute(req, new WebhooksExecuteSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.executeWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksOne

Get the webhook subscription details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksOneRequest;
import org.openapis.openapi.models.operations.WebhooksOneResponse;
import org.openapis.openapi.models.operations.WebhooksOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksOneRequest req = new WebhooksOneRequest("recusandae", "temporibus");            

            WebhooksOneResponse res = sdk.webhooks.webhooksOne(req, new WebhooksOneSecurity("ab") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksResolve

Resolve a webhook based on lookup_id and then execute it

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksResolveRequest;
import org.openapis.openapi.models.operations.WebhooksResolveResponse;
import org.openapis.openapi.models.operations.WebhooksResolveSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksResolveRequest req = new WebhooksResolveRequest(                new java.util.HashMap<String, Object>() {{
                                put("deserunt", "perferendis");
                            }}, "ipsam", "repellendus") {{
                e = "sapiente";
            }};            

            WebhooksResolveResponse res = sdk.webhooks.webhooksResolve(req, new WebhooksResolveSecurity("quo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.resolveWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksShortExecute

Execute a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksShortExecuteRequest;
import org.openapis.openapi.models.operations.WebhooksShortExecuteResponse;
import org.openapis.openapi.models.operations.WebhooksShortExecuteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksShortExecuteRequest req = new WebhooksShortExecuteRequest(                new java.util.HashMap<String, Object>() {{
                                put("at", "maiores");
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                            }}, "dolorum", "dicta") {{
                e = "nam";
                lId = "officia";
            }};            

            WebhooksShortExecuteResponse res = sdk.webhooks.webhooksShortExecute(req, new WebhooksShortExecuteSecurity("occaecati") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.executeWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webhooksUpdate

Update a webhook subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebhooksUpdateRequest;
import org.openapis.openapi.models.operations.WebhooksUpdateResponse;
import org.openapis.openapi.models.operations.WebhooksUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusEnum;
import org.openapis.openapi.models.shared.UpdateWebhookRequest;
import org.openapis.openapi.models.shared.WebhookEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebhooksUpdateRequest req = new WebhooksUpdateRequest(                new UpdateWebhookRequest() {{
                                deliveryUrl = "https://example.com/my/webhook/endpoint";
                                description = "A description";
                                events = new org.openapis.openapi.models.shared.WebhookEventTypeEnum[]{{
                                    add(WebhookEventTypeEnum.CRM_COMPANY_CREATED),
                                }};
                                status = StatusEnum.ENABLED;
                            }};, "deleniti", "hic");            

            WebhooksUpdateResponse res = sdk.webhooks.webhooksUpdate(req, new WebhooksUpdateSecurity("optio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

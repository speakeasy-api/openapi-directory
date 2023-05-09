# webhooks

### Available Operations

* [createWebhook](#createwebhook) - Create a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [findWebhookResources](#findwebhookresources) - Find webhook resources
* [findWebhooks](#findwebhooks) - Find webhooks
* [getWebhook](#getwebhook) - Find a specific webhook
* [getWebhookResource](#getwebhookresource) - Find specific webhook resource
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.operations.CreateWebhookSecurity;
import org.openapis.openapi.models.shared.WebhookInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WebhookInput req = new WebhookInput() {{
                callback = "soluta";
                enabled = false;
                events = new String[]{{
                    add("temporibus"),
                    add("officia"),
                    add("amet"),
                }};
                expiresAt = 948541L;
                fields = "aspernatur";
                id = 778276L;
                name = "Gilberto Osinski";
                nonStrictSsl = false;
                resource = "qui";
                secret = "consectetur";
                singleUse = false;
            }};            

            CreateWebhookResponse res = sdk.webhooks.createWebhook(req, new CreateWebhookSecurity("repellat", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.resourceId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

Deletes a webhook instance. Will be removed permanently

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.operations.DeleteWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest(129355L);            

            DeleteWebhookResponse res = sdk.webhooks.deleteWebhook(req, new DeleteWebhookSecurity("exercitationem", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findWebhookResources

Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindWebhookResourcesRequest;
import org.openapis.openapi.models.operations.FindWebhookResourcesResponse;
import org.openapis.openapi.models.operations.FindWebhookResourcesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindWebhookResourcesRequest req = new FindWebhookResourcesRequest() {{
                fields = "non";
            }};            

            FindWebhookResourcesResponse res = sdk.webhooks.findWebhookResources(req, new FindWebhookResourcesSecurity("ab", "illo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.itemListWebhookResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findWebhooks

Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindWebhooksRequest;
import org.openapis.openapi.models.operations.FindWebhooksResponse;
import org.openapis.openapi.models.operations.FindWebhooksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindWebhooksRequest req = new FindWebhooksRequest() {{
                callback = "hic";
                enabled = false;
                event = "deserunt";
                fields = "delectus";
                limit = 251212;
                name = "Jared Heller";
                offset = 921193;
                resource = "modi";
            }};            

            FindWebhooksResponse res = sdk.webhooks.findWebhooks(req, new FindWebhooksSecurity("in", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.webhookPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhook

Returns a single Webhook instance for a given webhook id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookRequest;
import org.openapis.openapi.models.operations.GetWebhookResponse;
import org.openapis.openapi.models.operations.GetWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhookRequest req = new GetWebhookRequest(879857L) {{
                fields = "rem";
            }};            

            GetWebhookResponse res = sdk.webhooks.getWebhook(req, new GetWebhookSecurity("aperiam", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhookResource

Returns information about supported events for a given webhook resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookResourceRequest;
import org.openapis.openapi.models.operations.GetWebhookResourceResponse;
import org.openapis.openapi.models.operations.GetWebhookResourceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhookResourceRequest req = new GetWebhookResourceRequest("deleniti") {{
                fields = "enim";
            }};            

            GetWebhookResourceResponse res = sdk.webhooks.getWebhookResource(req, new GetWebhookResourceSecurity("voluptate", "similique") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.webhookResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

Updates the information in existing webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.operations.UpdateWebhookSecurity;
import org.openapis.openapi.models.shared.WebhookInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest(326118L) {{
                webhookInput = new WebhookInput() {{
                    callback = "libero";
                    enabled = false;
                    events = new String[]{{
                        add("sit"),
                        add("modi"),
                    }};
                    expiresAt = 430116L;
                    fields = "nesciunt";
                    id = 652125L;
                    name = "Hope Hegmann";
                    nonStrictSsl = false;
                    resource = "reiciendis";
                    secret = "ab";
                    singleUse = false;
                }};;
            }};            

            UpdateWebhookResponse res = sdk.webhooks.updateWebhook(req, new UpdateWebhookSecurity("modi", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

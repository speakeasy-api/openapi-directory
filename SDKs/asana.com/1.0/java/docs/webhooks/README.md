# webhooks

## Overview

Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).

For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).

### Available Operations

* [createWebhook](#createwebhook) - Establish a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [getWebhook](#getwebhook) - Get a webhook
* [getWebhooks](#getwebhooks) - Get multiple webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Establishing a webhook is a two-part process. First, a simple HTTP POST
request initiates the creation similar to creating any other resource.

Next, in the middle of this request comes the confirmation handshake.
When a webhook is created, we will send a test POST to the target with an
`X-Hook-Secret` header. The target must respond with a `200 OK` or `204
No Content` and a matching `X-Hook-Secret` header to confirm that this
webhook subscription is indeed expected. We strongly recommend storing
this secret to be used to verify future webhook event signatures.

The POST request to create the webhook will then return with the status
of the request. If you do not acknowledge the webhook’s confirmation
handshake it will fail to setup, and you will receive an error in
response to your attempt to create it. This means you need to be able to
receive and complete the webhook *while* the POST request is in-flight
(in other words, have a server that can handle requests asynchronously).

Invalid hostnames like localhost will recieve a 403 Forbidden status code.

```
# Request
curl -H "Authorization: Bearer <personal_access_token>" \
-X POST https://app.asana.com/api/1.0/webhooks \
-d "resource=8675309" \
-d "target=https://example.com/receive-webhook/7654"
```

```
# Handshake sent to https://example.com/
POST /receive-webhook/7654
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Handshake response sent by example.com
HTTP/1.1 200
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Response
HTTP/1.1 201
{
  "data": {
    "gid": "43214",
    "resource": {
      "gid": "8675309",
      "name": "Bugs"
    },
    "target": "https://example.com/receive-webhook/7654",
    "active": false,
    "last_success_at": null,
    "last_failure_at": null,
    "last_failure_content": null
  }
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookRequestBody;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookRequest;
import org.openapis.openapi.models.shared.WebhookRequestFilters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest(                new CreateWebhookRequestBody() {{
                                data = new WebhookRequest("12345", "https://example.com/receive-webhook/7654?app_specific_param=app_specific_value") {{
                                    filters = new org.openapis.openapi.models.shared.WebhookRequestFilters[]{{
                                        add(new WebhookRequestFilters() {{
                                            action = "changed";
                                            fields = new String[]{{
                                                add("reiciendis"),
                                                add("provident"),
                                                add("repellendus"),
                                            }};
                                            resourceSubtype = "milestone";
                                            resourceType = "task";
                                        }}),
                                        add(new WebhookRequestFilters() {{
                                            action = "changed";
                                            fields = new String[]{{
                                                add("voluptates"),
                                                add("perferendis"),
                                                add("est"),
                                                add("quidem"),
                                            }};
                                            resourceSubtype = "milestone";
                                            resourceType = "task";
                                        }}),
                                    }};
                                }};;
                            }};) {{
                optFields = new String[]{{
                    add("facere"),
                    add("fuga"),
                }};
                optPretty = false;
            }};            

            CreateWebhookResponse res = sdk.webhooks.createWebhook(req);

            if (res.createWebhook201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest("praesentium") {{
                optFields = new String[]{{
                    add("veniam"),
                    add("voluptatem"),
                    add("quisquam"),
                }};
                optPretty = false;
            }};            

            DeleteWebhookResponse res = sdk.webhooks.deleteWebhook(req);

            if (res.deleteWebhook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhook

Returns the full record for the given webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookRequest;
import org.openapis.openapi.models.operations.GetWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWebhookRequest req = new GetWebhookRequest("repudiandae") {{
                optFields = new String[]{{
                    add("atque"),
                }};
                optPretty = false;
            }};            

            GetWebhookResponse res = sdk.webhooks.getWebhook(req);

            if (res.getWebhook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooks

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksRequest;
import org.openapis.openapi.models.operations.GetWebhooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetWebhooksRequest req = new GetWebhooksRequest("reprehenderit") {{
                limit = 991142L;
                offset = "totam";
                optFields = new String[]{{
                    add("quidem"),
                    add("maxime"),
                }};
                optPretty = false;
                resource = "et";
            }};            

            GetWebhooksResponse res = sdk.webhooks.getWebhooks(req);

            if (res.getWebhooks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookRequestBody;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookUpdateRequest;
import org.openapis.openapi.models.shared.WebhookUpdateRequestFilters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest(                new UpdateWebhookRequestBody() {{
                                data = new WebhookUpdateRequest() {{
                                    filters = new org.openapis.openapi.models.shared.WebhookUpdateRequestFilters[]{{
                                        add(new WebhookUpdateRequestFilters() {{
                                            action = "changed";
                                            fields = new String[]{{
                                                add("assumenda"),
                                            }};
                                            resourceSubtype = "milestone";
                                            resourceType = "task";
                                        }}),
                                        add(new WebhookUpdateRequestFilters() {{
                                            action = "changed";
                                            fields = new String[]{{
                                                add("atque"),
                                                add("error"),
                                            }};
                                            resourceSubtype = "milestone";
                                            resourceType = "task";
                                        }}),
                                    }};
                                }};;
                            }};, "officiis") {{
                optFields = new String[]{{
                    add("accusamus"),
                    add("natus"),
                    add("minima"),
                    add("aspernatur"),
                }};
                optPretty = false;
            }};            

            UpdateWebhookResponse res = sdk.webhooks.updateWebhook(req);

            if (res.updateWebhook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

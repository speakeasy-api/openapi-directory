# Webhooks

## Overview

Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).

For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).

### Available Operations

* [CreateWebhook](#createwebhook) - Establish a webhook
* [DeleteWebhook](#deletewebhook) - Delete a webhook
* [GetWebhook](#getwebhook) - Get a webhook
* [GetWebhooks](#getwebhooks) - Get multiple webhooks
* [UpdateWebhook](#updatewebhook) - Update a webhook

## CreateWebhook

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhook(ctx, operations.CreateWebhookRequest{
        RequestBody: operations.CreateWebhookRequestBody{
            Data: &shared.WebhookRequest{
                Filters: []shared.WebhookRequestFilters{
                    shared.WebhookRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "provident",
                            "repellendus",
                            "delectus",
                            "voluptates",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                    shared.WebhookRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "est",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                    shared.WebhookRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "reprehenderit",
                            "facere",
                            "fuga",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                },
                Resource: "12345",
                Target: "https://example.com/receive-webhook/7654?app_specific_param=app_specific_value",
            },
        },
        OptFields: []string{
            "mollitia",
            "veniam",
            "voluptatem",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhook201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteWebhook

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        OptFields: []string{
            "repudiandae",
            "quasi",
            "atque",
            "reprehenderit",
        },
        OptPretty: sdk.Bool(false),
        WebhookGid: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWebhook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWebhook

Returns the full record for the given webhook.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhook(ctx, operations.GetWebhookRequest{
        OptFields: []string{
            "suscipit",
            "quidem",
            "maxime",
        },
        OptPretty: sdk.Bool(false),
        WebhookGid: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWebhooks

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.GetWebhooks(ctx, operations.GetWebhooksRequest{
        Limit: sdk.Int64(461007),
        Offset: sdk.String("amet"),
        OptFields: []string{
            "ea",
            "atque",
            "error",
            "officiis",
        },
        OptPretty: sdk.Bool(false),
        Resource: sdk.String("officiis"),
        Workspace: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateWebhook

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Webhooks.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        RequestBody: operations.UpdateWebhookRequestBody{
            Data: &shared.WebhookUpdateRequest{
                Filters: []shared.WebhookUpdateRequestFilters{
                    shared.WebhookUpdateRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "aspernatur",
                            "ex",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                    shared.WebhookUpdateRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "corrupti",
                            "at",
                            "error",
                            "blanditiis",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                    shared.WebhookUpdateRequestFilters{
                        Action: sdk.String("changed"),
                        Fields: []string{
                            "repudiandae",
                            "atque",
                        },
                        ResourceSubtype: sdk.String("milestone"),
                        ResourceType: sdk.String("task"),
                    },
                },
            },
        },
        OptFields: []string{
            "sunt",
            "recusandae",
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        WebhookGid: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWebhook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

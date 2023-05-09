# Webhooks

## Overview

Webhooks provide a way to configure Bitbucket Cloud to make requests to
your server (or another external service) whenever certain events occur in
Bitbucket Cloud.

A webhook consists of:

* A subject -- The resource that generates the events. Currently, this resource
is the repository, user account, or team where you create the webhook.
* One or more event -- The default event is a repository push, but you can
select multiple events that can trigger the webhook.
* A URL -- The endpoint where you want Bitbucket to send the event payloads
when a matching event happens.

There are two parts to getting a webhook to work: creating the webhook and
triggering the webhook. After you create a webhook for an event, every time
that event occurs, Bitbucket sends a payload request that describes the event
to the specified URL. Thus, you can think of webhooks as a kind of
notification system.

Use webhooks to integrate applications with Bitbucket Cloud. The following
use cases provides examples of when you would want to use webhooks:

* Every time a user pushes commits in a repository, you may want to notify
your CI server to start a build.
* Every time a user pushes commits or creates a pull request, you may want to
display a notification in your application.


### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlugHooksUID](#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [DeleteWorkspacesWorkspaceHooksUID](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [GetHookEvents](#gethookevents) - Get a webhook resource
* [GetHookEventsSubjectType](#gethookeventssubjecttype) - List subscribable webhook types
* [GetRepositoriesWorkspaceRepoSlugHooks](#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [GetRepositoriesWorkspaceRepoSlugHooksUID](#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [GetWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [GetWorkspacesWorkspaceHooksUID](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [PostRepositoriesWorkspaceRepoSlugHooks](#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [PostWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [PutRepositoriesWorkspaceRepoSlugHooksUID](#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [PutWorkspacesWorkspaceHooksUID](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

## DeleteRepositoriesWorkspaceRepoSlugHooksUID

Deletes the specified webhook subscription from the given
repository.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.DeleteRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "aliquid",
        UID: "porro",
        Workspace: "suscipit",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkspacesWorkspaceHooksUID

Deletes the specified webhook subscription from the given workspace.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.DeleteWorkspacesWorkspaceHooksUID(ctx, operations.DeleteWorkspacesWorkspaceHooksUIDRequest{
        UID: "dolorem",
        Workspace: "fugit",
    }, operations.DeleteWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHookEvents

Returns the webhook resource or subject types on which webhooks can
be registered.

Each resource/subject type contains an `events` link that returns the
paginated list of specific events each individual subject type can
emit.

This endpoint is publicly accessible and does not require
authentication or scopes.

Example:

```
$ curl https://api.bitbucket.org/2.0/hook_events

{
    "repository": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
            }
        }
    },
    "workspace": {
        "links": {
            "events": {
                "href": "https://api.bitbucket.org/2.0/hook_events/workspace"
            }
        }
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetHookEvents(ctx, operations.GetHookEventsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubjectTypes != nil {
        // handle response
    }
}
```

## GetHookEventsSubjectType

Returns a paginated list of all valid webhook events for the
specified entity.
**The team and user webhooks are deprecated, and you should use workspace instead.
For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**

This is public data that does not require any scopes or authentication.

Example:

NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
We return the same structure for the other `subject_type` objects.

```
$ curl https://api.bitbucket.org/2.0/hook_events/workspace
{
    "page": 1,
    "pagelen": 30,
    "size": 21,
    "values": [
        {
            "category": "Repository",
            "description": "Whenever a repository push occurs",
            "event": "repo:push",
            "label": "Push"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository fork occurs",
            "event": "repo:fork",
            "label": "Fork"
        },
        {
            "category": "Repository",
            "description": "Whenever a repository import occurs",
            "event": "repo:imported",
            "label": "Import"
        },
        ...
        {
            "category":"Pull Request",
            "label":"Approved",
            "description":"When someone has approved a pull request",
            "event":"pullrequest:approved"
        },
    ]
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetHookEventsSubjectType(ctx, operations.GetHookEventsSubjectTypeRequest{
        SubjectType: operations.GetHookEventsSubjectTypeSubjectTypeEnumWorkspace,
    }, operations.GetHookEventsSubjectTypeSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedHookEvents != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugHooks

Returns a paginated list of webhooks installed on this repository.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetRepositoriesWorkspaceRepoSlugHooks(ctx, operations.GetRepositoriesWorkspaceRepoSlugHooksRequest{
        RepoSlug: "fuga",
        Workspace: "ratione",
    }, operations.GetRepositoriesWorkspaceRepoSlugHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWebhookSubscriptions != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugHooksUID

Returns the webhook with the specified id installed on the specified
repository.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.GetRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "animi",
        UID: "necessitatibus",
        Workspace: "nulla",
    }, operations.GetRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceHooks

Returns a paginated list of webhooks installed on this workspace.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetWorkspacesWorkspaceHooks(ctx, operations.GetWorkspacesWorkspaceHooksRequest{
        Workspace: "consequatur",
    }, operations.GetWorkspacesWorkspaceHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedWebhookSubscriptions != nil {
        // handle response
    }
}
```

## GetWorkspacesWorkspaceHooksUID

Returns the webhook with the specified id installed on the given
workspace.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.GetWorkspacesWorkspaceHooksUID(ctx, operations.GetWorkspacesWorkspaceHooksUIDRequest{
        UID: "quasi",
        Workspace: "et",
    }, operations.GetWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugHooks

Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
  -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.PostRepositoriesWorkspaceRepoSlugHooks(ctx, operations.PostRepositoriesWorkspaceRepoSlugHooksRequest{
        RepoSlug: "ducimus",
        Workspace: "natus",
    }, operations.PostRepositoriesWorkspaceRepoSlugHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## PostWorkspacesWorkspaceHooks

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
  https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
  -d '
    {
      "description": "Webhook Description",
      "url": "https://example.com/",
      "active": true,
      "events": [
        "repo:push",
        "issue:created",
        "issue:updated"
      ]
    }'
```

This call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

The `url` must properly resolve and cannot be an internal, non-routed address.

Only workspace owners can install webhooks on workspaces.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.PostWorkspacesWorkspaceHooks(ctx, operations.PostWorkspacesWorkspaceHooksRequest{
        Workspace: "occaecati",
    }, operations.PostWorkspacesWorkspaceHooksSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugHooksUID

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.PutRepositoriesWorkspaceRepoSlugHooksUID(ctx, operations.PutRepositoriesWorkspaceRepoSlugHooksUIDRequest{
        RepoSlug: "suscipit",
        UID: "adipisci",
        Workspace: "quasi",
    }, operations.PutRepositoriesWorkspaceRepoSlugHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

## PutWorkspacesWorkspaceHooksUID

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.PutWorkspacesWorkspaceHooksUID(ctx, operations.PutWorkspacesWorkspaceHooksUIDRequest{
        UID: "magni",
        Workspace: "doloribus",
    }, operations.PutWorkspacesWorkspaceHooksUIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookSubscription != nil {
        // handle response
    }
}
```

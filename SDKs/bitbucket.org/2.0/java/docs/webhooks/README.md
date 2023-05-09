# webhooks

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

* [deleteRepositoriesWorkspaceRepoSlugHooksUid](#deleterepositoriesworkspacereposlughooksuid) - Delete a webhook for a repository
* [deleteWorkspacesWorkspaceHooksUid](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getHookEvents](#gethookevents) - Get a webhook resource
* [getHookEventsSubjectType](#gethookeventssubjecttype) - List subscribable webhook types
* [getRepositoriesWorkspaceRepoSlugHooks](#getrepositoriesworkspacereposlughooks) - List webhooks for a repository
* [getRepositoriesWorkspaceRepoSlugHooksUid](#getrepositoriesworkspacereposlughooksuid) - Get a webhook for a repository
* [getWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [postRepositoriesWorkspaceRepoSlugHooks](#postrepositoriesworkspacereposlughooks) - Create a webhook for a repository
* [postWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putRepositoriesWorkspaceRepoSlugHooksUid](#putrepositoriesworkspacereposlughooksuid) - Update a webhook for a repository
* [putWorkspacesWorkspaceHooksUid](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

## deleteRepositoriesWorkspaceRepoSlugHooksUid

Deletes the specified webhook subscription from the given
repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest req = new DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest("id", "quis", "reprehenderit");            

            DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse res = sdk.webhooks.deleteRepositoriesWorkspaceRepoSlugHooksUid(req, new DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## deleteWorkspacesWorkspaceHooksUid

Deletes the specified webhook subscription from the given workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceHooksUidRequest;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceHooksUidResponse;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspacesWorkspaceHooksUidRequest req = new DeleteWorkspacesWorkspaceHooksUidRequest("error", "illo");            

            DeleteWorkspacesWorkspaceHooksUidResponse res = sdk.webhooks.deleteWorkspacesWorkspaceHooksUid(req, new DeleteWorkspacesWorkspaceHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getHookEvents

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHookEventsResponse;
import org.openapis.openapi.models.operations.GetHookEventsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHookEventsResponse res = sdk.webhooks.getHookEvents(new GetHookEventsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.subjectTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHookEventsSubjectType

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHookEventsSubjectTypeRequest;
import org.openapis.openapi.models.operations.GetHookEventsSubjectTypeResponse;
import org.openapis.openapi.models.operations.GetHookEventsSubjectTypeSecurity;
import org.openapis.openapi.models.operations.GetHookEventsSubjectTypeSubjectTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHookEventsSubjectTypeRequest req = new GetHookEventsSubjectTypeRequest(GetHookEventsSubjectTypeSubjectTypeEnum.REPOSITORY);            

            GetHookEventsSubjectTypeResponse res = sdk.webhooks.getHookEventsSubjectType(req, new GetHookEventsSubjectTypeSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedHookEvents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugHooks

Returns a paginated list of webhooks installed on this repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugHooksRequest req = new GetRepositoriesWorkspaceRepoSlugHooksRequest("quidem", "eveniet");            

            GetRepositoriesWorkspaceRepoSlugHooksResponse res = sdk.webhooks.getRepositoriesWorkspaceRepoSlugHooks(req, new GetRepositoriesWorkspaceRepoSlugHooksSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWebhookSubscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugHooksUid

Returns the webhook with the specified id installed on the specified
repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugHooksUidRequest req = new GetRepositoriesWorkspaceRepoSlugHooksUidRequest("non", "vero", "doloremque");            

            GetRepositoriesWorkspaceRepoSlugHooksUidResponse res = sdk.webhooks.getRepositoriesWorkspaceRepoSlugHooksUid(req, new GetRepositoriesWorkspaceRepoSlugHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceHooks

Returns a paginated list of webhooks installed on this workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceHooksRequest req = new GetWorkspacesWorkspaceHooksRequest("iure");            

            GetWorkspacesWorkspaceHooksResponse res = sdk.webhooks.getWorkspacesWorkspaceHooks(req, new GetWorkspacesWorkspaceHooksSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWebhookSubscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceHooksUid

Returns the webhook with the specified id installed on the given
workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksUidRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksUidResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceHooksUidRequest req = new GetWorkspacesWorkspaceHooksUidRequest("ipsa", "totam");            

            GetWorkspacesWorkspaceHooksUidResponse res = sdk.webhooks.getWorkspacesWorkspaceHooksUid(req, new GetWorkspacesWorkspaceHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugHooks

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugHooksRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugHooksResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugHooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugHooksRequest req = new PostRepositoriesWorkspaceRepoSlugHooksRequest("quae", "molestiae");            

            PostRepositoriesWorkspaceRepoSlugHooksResponse res = sdk.webhooks.postRepositoriesWorkspaceRepoSlugHooks(req, new PostRepositoriesWorkspaceRepoSlugHooksSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWorkspacesWorkspaceHooks

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceHooksRequest;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceHooksResponse;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceHooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspacesWorkspaceHooksRequest req = new PostWorkspacesWorkspaceHooksRequest("eveniet");            

            PostWorkspacesWorkspaceHooksResponse res = sdk.webhooks.postWorkspacesWorkspaceHooks(req, new PostWorkspacesWorkspaceHooksSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugHooksUid

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugHooksUidRequest req = new PutRepositoriesWorkspaceRepoSlugHooksUidRequest("qui", "cum", "iure");            

            PutRepositoriesWorkspaceRepoSlugHooksUidResponse res = sdk.webhooks.putRepositoriesWorkspaceRepoSlugHooksUid(req, new PutRepositoriesWorkspaceRepoSlugHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkspacesWorkspaceHooksUid

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `active`
* `events`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceHooksUidRequest;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceHooksUidResponse;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceHooksUidSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspacesWorkspaceHooksUidRequest req = new PutWorkspacesWorkspaceHooksUidRequest("necessitatibus", "ratione");            

            PutWorkspacesWorkspaceHooksUidResponse res = sdk.webhooks.putWorkspacesWorkspaceHooksUid(req, new PutWorkspacesWorkspaceHooksUidSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.webhookSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

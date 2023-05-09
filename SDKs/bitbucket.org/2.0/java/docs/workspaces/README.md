# workspaces

## Overview

A workspace is where you create repositories, collaborate on
your code, and organize different streams of work in your Bitbucket
Cloud account. Workspaces replace the use of teams and users in API
calls.


### Available Operations

* [deleteWorkspacesWorkspaceHooksUid](#deleteworkspacesworkspacehooksuid) - Delete a webhook for a workspace
* [getUserPermissionsWorkspaces](#getuserpermissionsworkspaces) - List workspaces for the current user
* [getWorkspaces](#getworkspaces) - List workspaces for user
* [getWorkspacesWorkspace](#getworkspacesworkspace) - Get a workspace
* [getWorkspacesWorkspaceHooks](#getworkspacesworkspacehooks) - List webhooks for a workspace
* [getWorkspacesWorkspaceHooksUid](#getworkspacesworkspacehooksuid) - Get a webhook for a workspace
* [getWorkspacesWorkspaceMembers](#getworkspacesworkspacemembers) - List users in a workspace
* [getWorkspacesWorkspaceMembersMember](#getworkspacesworkspacemembersmember) - Get user membership for a workspace
* [getWorkspacesWorkspacePermissions](#getworkspacesworkspacepermissions) - List user permissions in a workspace
* [getWorkspacesWorkspacePermissionsRepositories](#getworkspacesworkspacepermissionsrepositories) - List all repository permissions for a workspace
* [getWorkspacesWorkspacePermissionsRepositoriesRepoSlug](#getworkspacesworkspacepermissionsrepositoriesreposlug) - List a repository permissions for a workspace
* [getWorkspacesWorkspaceProjects](#getworkspacesworkspaceprojects) - List projects in a workspace
* [getWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [postWorkspacesWorkspaceHooks](#postworkspacesworkspacehooks) - Create a webhook for a workspace
* [putWorkspacesWorkspaceHooksUid](#putworkspacesworkspacehooksuid) - Update a webhook for a workspace

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

            DeleteWorkspacesWorkspaceHooksUidRequest req = new DeleteWorkspacesWorkspaceHooksUidRequest("laborum", "distinctio");            

            DeleteWorkspacesWorkspaceHooksUidResponse res = sdk.workspaces.deleteWorkspacesWorkspaceHooksUid(req, new DeleteWorkspacesWorkspaceHooksUidSecurity() {{
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

## getUserPermissionsWorkspaces

Returns an object for each workspace the caller is a member of, and
their effective role - the highest level of privilege the caller has.
If a user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl https://api.bitbucket.org/2.0/user/permissions/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
      "type": "workspace_membership",
      "permission": "owner",
      "last_accessed": "2019-03-07T12:35:02.900024+00:00",
      "added_on": "2018-10-11T17:42:02.961424+00:00",
      "user": {
        "type": "user",
        "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
        "nickname": "evzijst",
        "display_name": "Erik van Zijst",
      },
      "workspace": {
        "type": "workspace",
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "slug": "bbworkspace1",
        "name": "Atlassian Bitbucket",
      }
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
* `sort=workspace.slug`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPermissionsWorkspacesRequest;
import org.openapis.openapi.models.operations.GetUserPermissionsWorkspacesResponse;
import org.openapis.openapi.models.operations.GetUserPermissionsWorkspacesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPermissionsWorkspacesRequest req = new GetUserPermissionsWorkspacesRequest() {{
                q = "voluptatum";
                sort = "rem";
            }};            

            GetUserPermissionsWorkspacesResponse res = sdk.workspaces.getUserPermissionsWorkspaces(req, new GetUserPermissionsWorkspacesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWorkspaceMemberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaces

Returns a list of workspaces accessible by the authenticated user.

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces

{
  "pagelen": 10,
  "page": 1,
  "size": 1,
  "values": [
    {
        "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
        "links": {
            "owners": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
            },
            "self": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
            },
            "repositories": {
                "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
            },
            "snippets": {
                "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
            },
            "html": {
                "href": "https://bitbucket.org/bbworkspace1/"
            },
            "avatar": {
                "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
            },
            "members": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
            },
            "projects": {
                "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
            }
        },
        "created_on": "2018-11-14T19:15:05.058566+00:00",
        "type": "workspace",
        "slug": "bbworkspace1",
        "is_private": true,
        "name": "Atlassian Bitbucket"
    }
  ]
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by
workspace or permission by adding the following query string parameters:

* `q=slug="bbworkspace1"` or `q=is_private=true`
* `sort=created_on`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesRequest;
import org.openapis.openapi.models.operations.GetWorkspacesResponse;
import org.openapis.openapi.models.operations.GetWorkspacesRoleEnum;
import org.openapis.openapi.models.operations.GetWorkspacesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesRequest req = new GetWorkspacesRequest() {{
                q = "aliquam";
                role = GetWorkspacesRoleEnum.OWNER;
                sort = "repellat";
            }};            

            GetWorkspacesResponse res = sdk.workspaces.getWorkspaces(req, new GetWorkspacesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWorkspaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspace

Returns the requested workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceRequest req = new GetWorkspacesWorkspaceRequest("alias");            

            GetWorkspacesWorkspaceResponse res = sdk.workspaces.getWorkspacesWorkspace(req, new GetWorkspacesWorkspaceSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.workspace != null) {
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

            GetWorkspacesWorkspaceHooksRequest req = new GetWorkspacesWorkspaceHooksRequest("corporis");            

            GetWorkspacesWorkspaceHooksResponse res = sdk.workspaces.getWorkspacesWorkspaceHooks(req, new GetWorkspacesWorkspaceHooksSecurity() {{
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

            GetWorkspacesWorkspaceHooksUidRequest req = new GetWorkspacesWorkspaceHooksUidRequest("perspiciatis", "nihil");            

            GetWorkspacesWorkspaceHooksUidResponse res = sdk.workspaces.getWorkspacesWorkspaceHooksUid(req, new GetWorkspacesWorkspaceHooksUidSecurity() {{
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

## getWorkspacesWorkspaceMembers

Returns all members of the requested workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceMembersRequest req = new GetWorkspacesWorkspaceMembersRequest("mollitia");            

            GetWorkspacesWorkspaceMembersResponse res = sdk.workspaces.getWorkspacesWorkspaceMembers(req, new GetWorkspacesWorkspaceMembersSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWorkspaceMemberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceMembersMember

Returns the workspace membership, which includes
a `User` object for the member and a `Workspace` object
for the requested workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersMemberRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersMemberResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceMembersMemberSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceMembersMemberRequest req = new GetWorkspacesWorkspaceMembersMemberRequest("voluptas", "alias");            

            GetWorkspacesWorkspaceMembersMemberResponse res = sdk.workspaces.getWorkspacesWorkspaceMembersMember(req, new GetWorkspacesWorkspaceMembersMemberSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.workspaceMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspacePermissions

Returns the list of members in a workspace
and their permission levels.
Permission can be:
* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**

Example:

```
$ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions

{
    "pagelen": 10,
    "values": [
        {
            "permission": "owner",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
                "display_name": "Erik van Zijst",
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        },
        {
            "permission": "member",
            "type": "workspace_membership",
            "user": {
                "type": "user",
                "nickname": "seanaty",
                "display_name": "Sean Conaty",
                "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
            },
            "workspace": {
                "type": "workspace",
                "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
                "slug": "bbworkspace1",
                "name": "Atlassian Bitbucket",
            }
        }
    ],
    "page": 1,
    "size": 2
}
```

Results may be further [filtered](/cloud/bitbucket/rest/intro/#filtering) by
permission by adding the following query string parameters:

* `q=permission="owner"`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspacePermissionsRequest req = new GetWorkspacesWorkspacePermissionsRequest("maiores") {{
                q = "reiciendis";
            }};            

            GetWorkspacesWorkspacePermissionsResponse res = sdk.workspaces.getWorkspacesWorkspacePermissions(req, new GetWorkspacesWorkspacePermissionsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedWorkspaceMemberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspacePermissionsRepositories

Returns an object for each repository permission for all of a
workspace's repositories.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Jeff Zeng",
        "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
      },
      "repository": {
        "type": "repository",
        "name": "whee",
        "full_name": "atlassian_tutorial/whee",
        "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
      },
      "permission": "admin"
    }
  ],
  "page": 1,
  "size": 3
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspacePermissionsRepositoriesRequest req = new GetWorkspacesWorkspacePermissionsRepositoriesRequest("dolores") {{
                q = "id";
                sort = "minima";
            }};            

            GetWorkspacesWorkspacePermissionsRepositoriesResponse res = sdk.workspaces.getWorkspacesWorkspacePermissionsRepositories(req, new GetWorkspacesWorkspacePermissionsRepositoriesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedRepositoryPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspacePermissionsRepositoriesRepoSlug

Returns an object for the repository permission of each user in the
requested repository.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Example:

```
$ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi

{
  "pagelen": 10,
  "values": [
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Erik van Zijst",
        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "admin"
    },
    {
      "type": "repository_permission",
      "user": {
        "type": "user",
        "display_name": "Sean Conaty",
        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
      },
      "repository": {
        "type": "repository",
        "name": "geordi",
        "full_name": "atlassian_tutorial/geordi",
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
      },
      "permission": "write"
    }
  ],
  "page": 1,
  "size": 2
}
```

Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering)
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest req = new GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest("dolore", "dolorum") {{
                q = "nesciunt";
                sort = "quae";
            }};            

            GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse res = sdk.workspaces.getWorkspacesWorkspacePermissionsRepositoriesRepoSlug(req, new GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedRepositoryPermissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjects

Returns the list of projects in this workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsRequest req = new GetWorkspacesWorkspaceProjectsRequest("recusandae");            

            GetWorkspacesWorkspaceProjectsResponse res = sdk.workspaces.getWorkspacesWorkspaceProjects(req, new GetWorkspacesWorkspaceProjectsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedProjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKey

Returns the requested project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyRequest("omnis", "quaerat");            

            GetWorkspacesWorkspaceProjectsProjectKeyResponse res = sdk.workspaces.getWorkspacesWorkspaceProjectsProjectKey(req, new GetWorkspacesWorkspaceProjectsProjectKeySecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.project != null) {
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

            PostWorkspacesWorkspaceHooksRequest req = new PostWorkspacesWorkspaceHooksRequest("molestiae");            

            PostWorkspacesWorkspaceHooksResponse res = sdk.workspaces.postWorkspacesWorkspaceHooks(req, new PostWorkspacesWorkspaceHooksSecurity() {{
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

            PutWorkspacesWorkspaceHooksUidRequest req = new PutWorkspacesWorkspaceHooksUidRequest("ex", "ut");            

            PutWorkspacesWorkspaceHooksUidResponse res = sdk.workspaces.putWorkspacesWorkspaceHooksUid(req, new PutWorkspacesWorkspaceHooksUidSecurity() {{
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

# projects

## Overview

Bitbucket Cloud projects make it easier for teams to focus on
a goal, product, or process by organizing their repositories.


### Available Operations

* [deleteWorkspacesWorkspaceProjectsProjectKey](#deleteworkspacesworkspaceprojectsprojectkey) - Delete a project for a workspace
* [deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#deleteworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Remove the specific user from the project's default reviewers
* [getWorkspacesWorkspaceProjectsProjectKey](#getworkspacesworkspaceprojectsprojectkey) - Get a project for a workspace
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers](#getworkspacesworkspaceprojectsprojectkeydefaultreviewers) - List the default reviewers in a project
* [getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#getworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Get a default reviewer
* [postWorkspacesWorkspaceProjects](#postworkspacesworkspaceprojects) - Create a project in a workspace
* [putWorkspacesWorkspaceProjectsProjectKey](#putworkspacesworkspaceprojectsprojectkey) - Update a project for a workspace
* [putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser](#putworkspacesworkspaceprojectsprojectkeydefaultreviewersselecteduser) - Add the specific user as a default reviewer for the project

## deleteWorkspacesWorkspaceProjectsProjectKey

Deletes this project. This is an irreversible operation.

You cannot delete a project that still contains repositories.
To delete the project, [delete](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-repo-slug-delete)
or transfer the repositories first.

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspacesWorkspaceProjectsProjectKeyRequest req = new DeleteWorkspacesWorkspaceProjectsProjectKeyRequest("odio", "eius");            

            DeleteWorkspacesWorkspaceProjectsProjectKeyResponse res = sdk.projects.deleteWorkspacesWorkspaceProjectsProjectKey(req, new DeleteWorkspacesWorkspaceProjectsProjectKeySecurity() {{
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

## deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Removes a default reviewer from the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

HTTP/1.1 204
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse;
import org.openapis.openapi.models.operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest req = new DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest("esse", "esse", "rem");            

            DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse res = sdk.projects.deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req, new DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity() {{
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

            GetWorkspacesWorkspaceProjectsProjectKeyRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyRequest("fuga", "reprehenderit");            

            GetWorkspacesWorkspaceProjectsProjectKeyResponse res = sdk.projects.getWorkspacesWorkspaceProjectsProjectKey(req, new GetWorkspacesWorkspaceProjectsProjectKeySecurity() {{
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

## getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers

Return a list of all default reviewers for a project. This is a list of users that will be added as default
reviewers to pull requests for any repository within the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../projects/.../default-reviewers | jq .
{
    "pagelen": 10,
    "values": [
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
        },
        {
            "user": {
                "display_name": "Jorge Rodriguez",
                "uuid": "{1aa43376-260d-4a0b-9660-f62672b9655d}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer"
        }
    ],
    "page": 1,
    "size": 2
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest("quidem", "fugiat");            

            GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersResponse res = sdk.projects.getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers(req, new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedDefaultReviewerAndType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Returns the specified default reviewer.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
{
    "display_name": "Davis Lee",
    "type": "user",
    "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest req = new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest("ut", "eum", "suscipit");            

            GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse res = sdk.projects.getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req, new GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWorkspacesWorkspaceProjects

Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
    "name": "Mars Project",
    "key": "MARS",
    "description": "Software for colonizing mars.",
    "links": {
        "avatar": {
            "href": "http://i.imgur.com/72tRx4w.gif"
        }
    },
    "is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
       -X POST \
       -d "$body" \
       https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
{
  // Serialized project document
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsRequest;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsResponse;
import org.openapis.openapi.models.operations.PostWorkspacesWorkspaceProjectsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspacesWorkspaceProjectsRequest req = new PostWorkspacesWorkspaceProjectsRequest(                new java.util.HashMap<String, Object>() {{
                                put("eos", "praesentium");
                                put("quisquam", "veritatis");
                                put("ipsa", "id");
                                put("quidem", "neque");
                            }}, "quo");            

            PostWorkspacesWorkspaceProjectsResponse res = sdk.projects.postWorkspacesWorkspaceProjects(req, new PostWorkspacesWorkspaceProjectsSecurity() {{
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

## putWorkspacesWorkspaceProjectsProjectKey

Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

#### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

#### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspacesWorkspaceProjectsProjectKeyRequest req = new PutWorkspacesWorkspaceProjectsProjectKeyRequest(                new java.util.HashMap<String, Object>() {{
                                put("quo", "fuga");
                                put("eius", "eos");
                                put("voluptas", "ab");
                                put("cupiditate", "consequatur");
                            }}, "tempora", "debitis");            

            PutWorkspacesWorkspaceProjectsProjectKeyResponse res = sdk.projects.putWorkspacesWorkspaceProjectsProjectKey(req, new PutWorkspacesWorkspaceProjectsProjectKeySecurity() {{
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

## putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser

Adds the specified user to the project's list of default reviewers. The method is
idempotent. Accepts an optional body containing the `uuid` of the user to be added.

Example:
```
$ curl -XPUT https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
-d { 'uuid': '{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}' }

HTTP/1.1 204
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse;
import org.openapis.openapi.models.operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest req = new PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest("ipsam", "aspernatur", "sequi");            

            PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse res = sdk.projects.putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req, new PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

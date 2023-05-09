# commitStatuses

## Overview

Commit statuses provide a way to tag commits with meta data,
like automated build results.


### Available Operations

* [getRepositoriesWorkspaceRepoSlugCommitCommitStatuses](#getrepositoriesworkspacereposlugcommitcommitstatuses) - List commit statuses for a commit
* [getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#getrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Get a build status for a commit
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild](#postrepositoriesworkspacereposlugcommitcommitstatusesbuild) - Create a build status for a commit
* [putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#putrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Update a build status for a commit

## getRepositoriesWorkspaceRepoSlugCommitCommitStatuses

Returns all statuses (e.g. build results) for a specific commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest req = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest("fugit", "deleniti", "hic") {{
                q = "optio";
                sort = "totam";
            }};            

            GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse res = sdk.commitStatuses.getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(req, new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedCommitstatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Returns the specified build status for a commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest req = new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest("beatae", "commodi", "molestiae", "modi");            

            GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse res = sdk.commitStatuses.getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req, new GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commitstatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses

Returns all statuses (e.g. build results) for the given pull
request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest(186332L, "impedit", "cum") {{
                q = "esse";
                sort = "ipsum";
            }};            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse res = sdk.commitStatuses.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedCommitstatuses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild

Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
    "key": "MY-BUILD",
    "state": "SUCCESSFUL",
    "description": "42 tests passed",
    "url": "https://www.example.org/my-build-result"
  }'
```

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
[Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest req = new PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest("excepturi", "aspernatur", "perferendis") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("natus", "sed");
                    put("iste", "dolor");
                }};
            }};            

            PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse res = sdk.commitStatuses.postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(req, new PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commitstatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest req = new PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest("natus", "laboriosam", "hic", "saepe") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("in", "corporis");
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
            }};            

            PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse res = sdk.commitStatuses.putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req, new PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commitstatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

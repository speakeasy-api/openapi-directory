# pullrequests

## Overview

Pull requests are a feature that makes it easier for developers
to collaborate using Bitbucket. They provide a user-friendly web
interface for discussing proposed changes before integrating them
into the official project.


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#deleterepositoriesworkspacereposlugdefaultreviewerstargetusername) - Remove a user from the default reviewers
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](#deleterepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Unapprove a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Delete a comment on a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Reopen a comment thread
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](#deleterepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Remove change request for a pull request
* [getPullrequestsForCommit](#getpullrequestsforcommit) - List pull requests that contain a commit
* [getPullrequestsSelectedUser](#getpullrequestsselecteduser) - List pull requests for a user
* [getRepositoriesWorkspaceRepoSlugDefaultReviewers](#getrepositoriesworkspacereposlugdefaultreviewers) - List default reviewers
* [getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#getrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Get a default reviewer
* [getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers](#getrepositoriesworkspacereposlugeffectivedefaultreviewers) - List effective default reviewers
* [getRepositoriesWorkspaceRepoSlugPullrequests](#getrepositoriesworkspacereposlugpullrequests) - List pull requests
* [getRepositoriesWorkspaceRepoSlugPullrequestsActivity](#getrepositoriesworkspacereposlugpullrequestsactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](#getrepositoriesworkspacereposlugpullrequestspullrequestid) - Get a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity](#getrepositoriesworkspacereposlugpullrequestspullrequestidactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](#getrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - List comments on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Get a comment on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommits) - List commits on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiff) - List changes in a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiffstat) - Get the diff stat for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId](#getrepositoriesworkspacereposlugpullrequestspullrequestidmergetaskstatustaskid) - Get the merge task status for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch](#getrepositoriesworkspacereposlugpullrequestspullrequestidpatch) - Get the patch for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequests](#postrepositoriesworkspacereposlugpullrequests) - Create a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](#postrepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Approve a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](#postrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - Create a comment on a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](#postrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Resolve a comment thread
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline](#postrepositoriesworkspacereposlugpullrequestspullrequestiddecline) - Decline a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge](#postrepositoriesworkspacereposlugpullrequestspullrequestidmerge) - Merge a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](#postrepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Request changes for a pull request
* [putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#putrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Add a user to the default reviewers
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](#putrepositoriesworkspacereposlugpullrequestspullrequestid) - Update a pull request
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#putrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Update a comment on a pull request

## deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Removes a default reviewer from the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest req = new DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest("quo", "esse", "recusandae");            

            DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = sdk.pullrequests.deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req, new DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove

Redact the authenticated user's approval of the specified pull
request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest req = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(44612L, "distinctio", "quod");            

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse res = sdk.pullrequests.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req, new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Deletes a specific pull request comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(490819L, 76956L, "nihil", "totam");            

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = sdk.pullrequests.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req, new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve

Reopen a comment thread

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest req = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest(882710L, 306810L, "odio", "occaecati");            

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveResponse res = sdk.pullrequests.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve(req, new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges

Remove change request for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest req = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(414567L, "sapiente", "dolores");            

            DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse res = sdk.pullrequests.deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req, new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity() {{
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

## getPullrequestsForCommit

Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullrequestsForCommitRequest;
import org.openapis.openapi.models.operations.GetPullrequestsForCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPullrequestsForCommitRequest req = new GetPullrequestsForCommitRequest("deserunt", "molestiae", "accusantium") {{
                page = 783648;
                pagelen = 430402;
            }};            

            GetPullrequestsForCommitResponse res = sdk.pullrequests.getPullrequestsForCommit(req);

            if (res.paginatedPullrequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPullrequestsSelectedUser

Returns all pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPullrequestsSelectedUserRequest;
import org.openapis.openapi.models.operations.GetPullrequestsSelectedUserResponse;
import org.openapis.openapi.models.operations.GetPullrequestsSelectedUserSecurity;
import org.openapis.openapi.models.operations.GetPullrequestsSelectedUserStateEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPullrequestsSelectedUserRequest req = new GetPullrequestsSelectedUserRequest("quas") {{
                state = GetPullrequestsSelectedUserStateEnum.DECLINED;
            }};            

            GetPullrequestsSelectedUserResponse res = sdk.pullrequests.getPullrequestsSelectedUser(req, new GetPullrequestsSelectedUserSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedPullrequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugDefaultReviewers

Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created. To obtain the repository's default reviewers
as well as the default reviewers inherited from the project, use the
[effective-default-reveiwers](#api-repositories-workspace-repo-slug-effective-default-reviewers-get) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest req = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest("consequuntur", "deleniti");            

            GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugDefaultReviewers(req, new GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest req = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest("fugit", "fuga", "mollitia");            

            GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req, new GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers

Returns the repository's effective default reviewers. This includes both default
reviewers defined at the repository level as well as those inherited from its project.

These are the users that are automatically added as reviewers on every
new pull request that is created.

```
$ curl https://api.bitbucket.org/2.0/repositories/{workspace_slug}/{repo_slug}/effective-default-reviewers?page=1&pagelen=20
{
    "pagelen": 20,
    "values": [
        {
            "user": {
                "display_name": "Patrick Wolf",
                "uuid": "{9565301a-a3cf-4b5d-88f4-dd6af8078d7e}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer",
        },
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "repository",
            "type": "default_reviewer",
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
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest req = new GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest("incidunt", "atque");            

            GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers(req, new GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequests

Returns all pull requests on the specified repository.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsRequest("explicabo", "minima") {{
                state = GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum.MERGED;
            }};            

            GetRepositoriesWorkspaceRepoSlugPullrequestsResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequests(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedPullrequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest("fugit", "sapiente");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsActivity(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId

Returns the specified pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(159870L, "ratione", "explicabo");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest(903984L, "occaecati", "atque");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments

Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more
details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(92260L, "esse", "eveniet");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedPullrequestComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Returns a specific pull request comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(882042L, 82971L, "esse", "quod");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequestComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits

Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest(724168L, "vero", "aliquid");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsSecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff

Redirects to the [repository diff](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diff-spec-get)
with the revspec that corresponds to the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest(93459L, "saepe", "vel");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat

Redirects to the [repository diffstat](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diffstat-spec-get)
with the revspec that corresponds to the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest(690025L, "molestiae", "rerum");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatSecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId

When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

```
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
```

If the merge task is not yet finished, a PENDING status will be returned.

```
HTTP/2 200
{
    "task_status": "PENDING",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    }
}
```

If the merge was successful, a SUCCESS status will be returned.

```
HTTP/2 200
{
    "task_status": "SUCCESS",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    },
    "merge_result": <the merged pull request object>
}
```

If the merge task failed, an error will be returned.

```
{
    "type": "error",
    "error": {
        "message": "<error message>"
    }
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest(580197L, "minima", "distinctio", "eligendi");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdSecurity() {{
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

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch

Redirects to the [repository patch](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-patch-spec-get)
with the revspec that corresponds to pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest(27069L, "culpa", "tempore");            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity() {{
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

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest req = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest(240020L, "cumque", "consequuntur") {{
                q = "consequatur";
                sort = "minus";
            }};            

            GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse res = sdk.pullrequests.getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req, new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity() {{
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

## postRepositoriesWorkspaceRepoSlugPullrequests

Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
    -u my-username:my-password \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "My Title",
        "source": {
            "branch": {
                "name": "staging"
            }
        }
    }'
```

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "destination": {
        "branch": {
            "name": "staging"
        }
    }
}
```

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "reviewers": [
        {
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
    ]
}
```

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsRequest("quaerat", "sapiente") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("esse", "blanditiis");
                }};
            }};            

            PostRepositoriesWorkspaceRepoSlugPullrequestsResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequests(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove

Approve the specified pull request as the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest(590984L, "a", "nulla");            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.participant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments

Creates a new pull request comment.

Returns the newly created pull request comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest(                new java.util.HashMap<String, Object>() {{
                                put("esse", "quasi");
                                put("a", "error");
                                put("sint", "pariatur");
                            }}, 820767L, "quia", "eveniet");            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequestComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve

Resolve a comment thread

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest(992430L, 815524L, "veritatis", "consequuntur");            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commentResolution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline

Declines the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest(94458L, "similique", "culpa");            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge

Merges the pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest(398434L, "tenetur", "quae") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vel", "in");
                    put("eius", "libero");
                    put("illum", "soluta");
                    put("accusantium", "aliquam");
                }};
                async = false;
            }};            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges

Request changes for a pull request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest req = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest(958983L, "dicta", "ullam");            

            PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse res = sdk.pullrequests.postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req, new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.participant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest req = new PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest("reprehenderit", "ullam", "nisi");            

            PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = sdk.pullrequests.putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req, new PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId

Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest req = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest(16328L, "voluptatum", "qui") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ex", "deleniti");
                    put("itaque", "dolorum");
                    put("architecto", "omnis");
                    put("tenetur", "quasi");
                }};
            }};            

            PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse res = sdk.pullrequests.putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req, new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Updates a specific pull request comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest req = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest(                new java.util.HashMap<String, Object>() {{
                                put("et", "voluptate");
                                put("ipsa", "minima");
                                put("veritatis", "consectetur");
                                put("adipisci", "iste");
                            }}, 839513L, 33074L, "rem", "aut");            

            PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = sdk.pullrequests.putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req, new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pullrequestComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

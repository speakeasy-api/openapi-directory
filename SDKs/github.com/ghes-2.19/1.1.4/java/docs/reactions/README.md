# reactions

## Overview

Interact with reactions to various GitHub entities.

### Available Operations

* [reactionsCreateForCommitComment](#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [reactionsCreateForIssue](#reactionscreateforissue) - Create reaction for an issue
* [reactionsCreateForIssueComment](#reactionscreateforissuecomment) - Create reaction for an issue comment
* [reactionsCreateForPullRequestReviewComment](#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [reactionsCreateForTeamDiscussion](#reactionscreateforteamdiscussion) - Create reaction for a team discussion
* [reactionsCreateForTeamDiscussionComment](#reactionscreateforteamdiscussioncomment) - Create reaction for a team discussion comment
* [reactionsDelete](#reactionsdelete) - Delete a reaction
* [reactionsListForCommitComment](#reactionslistforcommitcomment) - List reactions for a commit comment
* [reactionsListForIssue](#reactionslistforissue) - List reactions for an issue
* [reactionsListForIssueComment](#reactionslistforissuecomment) - List reactions for an issue comment
* [reactionsListForPullRequestReviewComment](#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [reactionsListForTeamDiscussion](#reactionslistforteamdiscussion) - List reactions for a team discussion
* [reactionsListForTeamDiscussionComment](#reactionslistforteamdiscussioncomment) - List reactions for a team discussion comment

## reactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForCommitCommentRequest req = new ReactionsCreateForCommitCommentRequest(                new ReactionsCreateForCommitCommentRequestBody(ReactionsCreateForCommitCommentRequestBodyContentEnum.CONFUSED);, 5189L, "maiores", "reiciendis");            

            ReactionsCreateForCommitCommentResponse res = sdk.reactions.reactionsCreateForCommitComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForIssueRequest req = new ReactionsCreateForIssueRequest(                new ReactionsCreateForIssueRequestBody(ReactionsCreateForIssueRequestBodyContentEnum.MINUS1);, 663866L, "minima", "dolore");            

            ReactionsCreateForIssueResponse res = sdk.reactions.reactionsCreateForIssue(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForIssueCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForIssueCommentRequest req = new ReactionsCreateForIssueCommentRequest(                new ReactionsCreateForIssueCommentRequestBody(ReactionsCreateForIssueCommentRequestBodyContentEnum.HOORAY);, 200364L, "quae", "recusandae");            

            ReactionsCreateForIssueCommentResponse res = sdk.reactions.reactionsCreateForIssueComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForPullRequestReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForPullRequestReviewCommentRequest req = new ReactionsCreateForPullRequestReviewCommentRequest(                new ReactionsCreateForPullRequestReviewCommentRequestBody(ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum.HEART);, 309251L, "molestiae", "ex");            

            ReactionsCreateForPullRequestReviewCommentResponse res = sdk.reactions.reactionsCreateForPullRequestReviewComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForTeamDiscussion

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionRequest req = new ReactionsCreateForTeamDiscussionRequest(                new ReactionsCreateForTeamDiscussionRequestBody(ReactionsCreateForTeamDiscussionRequestBodyContentEnum.LAUGH);, "culpa", 238413L, 890653L);            

            ReactionsCreateForTeamDiscussionResponse res = sdk.reactions.reactionsCreateForTeamDiscussion(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsCreateForTeamDiscussionComment

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentRequest;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentRequestBody;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
import org.openapis.openapi.models.operations.ReactionsCreateForTeamDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsCreateForTeamDiscussionCommentRequest req = new ReactionsCreateForTeamDiscussionCommentRequest(                new ReactionsCreateForTeamDiscussionCommentRequestBody(ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum.HEART);, "eum", 367927L, 928219L, 456520L);            

            ReactionsCreateForTeamDiscussionCommentResponse res = sdk.reactions.reactionsCreateForTeamDiscussionComment(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsDelete

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#delete-a-reaction-legacy>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsDeleteRequest;
import org.openapis.openapi.models.operations.ReactionsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsDeleteRequest req = new ReactionsDeleteRequest("provident", 337477L);            

            ReactionsDeleteResponse res = sdk.reactions.reactionsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForCommitCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForCommitCommentRequest req = new ReactionsListForCommitCommentRequest(431785L, "reiciendis", "provident") {{
                content = ReactionsListForCommitCommentContentEnum.MINUS1;
                page = 354506L;
                perPage = 96804L;
            }};            

            ReactionsListForCommitCommentResponse res = sdk.reactions.reactionsListForCommitComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForIssueContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForIssueRequest;
import org.openapis.openapi.models.operations.ReactionsListForIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForIssueRequest req = new ReactionsListForIssueRequest(657020L, "nostrum", "mollitia") {{
                content = ReactionsListForIssueContentEnum.HEART;
                page = 821719L;
                perPage = 659177L;
            }};            

            ReactionsListForIssueResponse res = sdk.reactions.reactionsListForIssue(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForIssueCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForIssueCommentRequest req = new ReactionsListForIssueCommentRequest(402767L, "aliquid", "accusantium") {{
                content = ReactionsListForIssueCommentContentEnum.EYES;
                page = 984632L;
                perPage = 351893L;
            }};            

            ReactionsListForIssueCommentResponse res = sdk.reactions.reactionsListForIssueComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForPullRequestReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForPullRequestReviewCommentRequest req = new ReactionsListForPullRequestReviewCommentRequest(448143L, "nam", "earum") {{
                content = ReactionsListForPullRequestReviewCommentContentEnum.HOORAY;
                page = 672041L;
                perPage = 813054L;
            }};            

            ReactionsListForPullRequestReviewCommentResponse res = sdk.reactions.reactionsListForPullRequestReviewComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForTeamDiscussion

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionRequest req = new ReactionsListForTeamDiscussionRequest("modi", 976226L, 564064L) {{
                content = ReactionsListForTeamDiscussionContentEnum.EYES;
                page = 956933L;
                perPage = 764562L;
            }};            

            ReactionsListForTeamDiscussionResponse res = sdk.reactions.reactionsListForTeamDiscussion(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactionsListForTeamDiscussionComment

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentContentEnum;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentRequest;
import org.openapis.openapi.models.operations.ReactionsListForTeamDiscussionCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactionsListForTeamDiscussionCommentRequest req = new ReactionsListForTeamDiscussionCommentRequest("vitae", 698249L, 272229L, 335498L) {{
                content = ReactionsListForTeamDiscussionCommentContentEnum.PLUS1;
                page = 147685L;
                perPage = 765271L;
            }};            

            ReactionsListForTeamDiscussionCommentResponse res = sdk.reactions.reactionsListForTeamDiscussionComment(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

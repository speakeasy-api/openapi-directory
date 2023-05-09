# forum

## Overview

forum

### Available Operations

* [forumGetCoreTopicsPaged](#forumgetcoretopicspaged) - Gets a listing of all topics marked as part of the core group.
* [forumGetForumTagSuggestions](#forumgetforumtagsuggestions) - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* [forumGetPoll](#forumgetpoll) - Gets the specified forum poll.
* [forumGetPostAndParent](#forumgetpostandparent) - Returns the post specified and its immediate parent.
* [forumGetPostAndParentAwaitingApproval](#forumgetpostandparentawaitingapproval) - Returns the post specified and its immediate parent of posts that are awaiting approval.
* [forumGetPostsThreadedPaged](#forumgetpoststhreadedpaged) - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* [forumGetPostsThreadedPagedFromChild](#forumgetpoststhreadedpagedfromchild) - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* [forumGetRecruitmentThreadSummaries](#forumgetrecruitmentthreadsummaries) - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* [forumGetTopicForContent](#forumgettopicforcontent) - Gets the post Id for the given content item's comments, if it exists.
* [forumGetTopicsPaged](#forumgettopicspaged) - Get topics from any forum.

## forumGetCoreTopicsPaged

Gets a listing of all topics marked as part of the core group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetCoreTopicsPagedRequest;
import org.openapis.openapi.models.operations.ForumGetCoreTopicsPagedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetCoreTopicsPagedRequest req = new ForumGetCoreTopicsPagedRequest(667411, 842342, 131797, 647174L) {{
                locales = "distinctio";
            }};            

            ForumGetCoreTopicsPagedResponse res = sdk.forum.forumGetCoreTopicsPaged(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetForumTagSuggestions

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetForumTagSuggestionsRequest;
import org.openapis.openapi.models.operations.ForumGetForumTagSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetForumTagSuggestionsRequest req = new ForumGetForumTagSuggestionsRequest() {{
                partialtag = "quibusdam";
            }};            

            ForumGetForumTagSuggestionsResponse res = sdk.forum.forumGetForumTagSuggestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetPoll

Gets the specified forum poll.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetPollRequest;
import org.openapis.openapi.models.operations.ForumGetPollResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetPollRequest req = new ForumGetPollRequest(289406L);            

            ForumGetPollResponse res = sdk.forum.forumGetPoll(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetPostAndParent

Returns the post specified and its immediate parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetPostAndParentRequest;
import org.openapis.openapi.models.operations.ForumGetPostAndParentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetPostAndParentRequest req = new ForumGetPostAndParentRequest(264730L) {{
                showbanned = "qui";
            }};            

            ForumGetPostAndParentResponse res = sdk.forum.forumGetPostAndParent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetPostAndParentAwaitingApproval

Returns the post specified and its immediate parent of posts that are awaiting approval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetPostAndParentAwaitingApprovalRequest;
import org.openapis.openapi.models.operations.ForumGetPostAndParentAwaitingApprovalResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetPostAndParentAwaitingApprovalRequest req = new ForumGetPostAndParentAwaitingApprovalRequest(397821L) {{
                showbanned = "cupiditate";
            }};            

            ForumGetPostAndParentAwaitingApprovalResponse res = sdk.forum.forumGetPostAndParentAwaitingApproval(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetPostsThreadedPaged

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetPostsThreadedPagedRequest;
import org.openapis.openapi.models.operations.ForumGetPostsThreadedPagedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetPostsThreadedPagedRequest req = new ForumGetPostsThreadedPagedRequest(false, 552822, 20107, 164940L, 828940, false, 369808) {{
                showbanned = "alias";
            }};            

            ForumGetPostsThreadedPagedResponse res = sdk.forum.forumGetPostsThreadedPaged(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetPostsThreadedPagedFromChild

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetPostsThreadedPagedFromChildRequest;
import org.openapis.openapi.models.operations.ForumGetPostsThreadedPagedFromChildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetPostsThreadedPagedFromChildRequest req = new ForumGetPostsThreadedPagedFromChildRequest(146441L, 677817, 569618, 270008, false, 703737) {{
                showbanned = "tempore";
            }};            

            ForumGetPostsThreadedPagedFromChildResponse res = sdk.forum.forumGetPostsThreadedPagedFromChild(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetRecruitmentThreadSummaries

Allows the caller to get a list of to 25 recruitment thread summary information objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetRecruitmentThreadSummariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetRecruitmentThreadSummariesResponse res = sdk.forum.forumGetRecruitmentThreadSummaries();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetTopicForContent

Gets the post Id for the given content item's comments, if it exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetTopicForContentRequest;
import org.openapis.openapi.models.operations.ForumGetTopicForContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetTopicForContentRequest req = new ForumGetTopicForContentRequest(288476L);            

            ForumGetTopicForContentResponse res = sdk.forum.forumGetTopicForContent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forumGetTopicsPaged

Get topics from any forum.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForumGetTopicsPagedRequest;
import org.openapis.openapi.models.operations.ForumGetTopicsPagedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ForumGetTopicsPagedRequest req = new ForumGetTopicsPagedRequest(962189, 433288L, 248753, 756107, 576157, 396098L) {{
                locales = "provident";
                tagstring = "necessitatibus";
            }};            

            ForumGetTopicsPagedResponse res = sdk.forum.forumGetTopicsPaged(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

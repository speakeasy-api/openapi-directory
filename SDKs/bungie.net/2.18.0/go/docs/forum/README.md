# Forum

## Overview

forum

### Available Operations

* [ForumGetCoreTopicsPaged](#forumgetcoretopicspaged) - Gets a listing of all topics marked as part of the core group.
* [ForumGetForumTagSuggestions](#forumgetforumtagsuggestions) - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* [ForumGetPoll](#forumgetpoll) - Gets the specified forum poll.
* [ForumGetPostAndParent](#forumgetpostandparent) - Returns the post specified and its immediate parent.
* [ForumGetPostAndParentAwaitingApproval](#forumgetpostandparentawaitingapproval) - Returns the post specified and its immediate parent of posts that are awaiting approval.
* [ForumGetPostsThreadedPaged](#forumgetpoststhreadedpaged) - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* [ForumGetPostsThreadedPagedFromChild](#forumgetpoststhreadedpagedfromchild) - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* [ForumGetRecruitmentThreadSummaries](#forumgetrecruitmentthreadsummaries) - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* [ForumGetTopicForContent](#forumgettopicforcontent) - Gets the post Id for the given content item's comments, if it exists.
* [ForumGetTopicsPaged](#forumgettopicspaged) - Get topics from any forum.

## ForumGetCoreTopicsPaged

Gets a listing of all topics marked as part of the core group.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetCoreTopicsPaged(ctx, operations.ForumGetCoreTopicsPagedRequest{
        CategoryFilter: 979587,
        Locales: sdk.String("dicta"),
        Page: 359444,
        QuickDate: 296140,
        Sort: 480894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetForumTagSuggestions

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetForumTagSuggestions(ctx, operations.ForumGetForumTagSuggestionsRequest{
        Partialtag: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetPoll

Gets the specified forum poll.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetPoll(ctx, operations.ForumGetPollRequest{
        TopicID: 688661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetPostAndParent

Returns the post specified and its immediate parent.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetPostAndParent(ctx, operations.ForumGetPostAndParentRequest{
        ChildPostID: 317983,
        Showbanned: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetPostAndParentAwaitingApproval

Returns the post specified and its immediate parent of posts that are awaiting approval.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetPostAndParentAwaitingApproval(ctx, operations.ForumGetPostAndParentAwaitingApprovalRequest{
        ChildPostID: 414263,
        Showbanned: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetPostsThreadedPaged

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetPostsThreadedPaged(ctx, operations.ForumGetPostsThreadedPagedRequest{
        GetParentPost: false,
        Page: 64147,
        PageSize: 216822,
        ParentPostID: 692472,
        ReplySize: 565189,
        RootThreadMode: false,
        Showbanned: sdk.String("excepturi"),
        SortMode: 865103,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetPostsThreadedPagedFromChild

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetPostsThreadedPagedFromChild(ctx, operations.ForumGetPostsThreadedPagedFromChildRequest{
        ChildPostID: 265389,
        Page: 508969,
        PageSize: 523248,
        ReplySize: 916723,
        RootThreadMode: false,
        Showbanned: sdk.String("quasi"),
        SortMode: 921158,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetRecruitmentThreadSummaries

Allows the caller to get a list of to 25 recruitment thread summary information objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetRecruitmentThreadSummaries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetTopicForContent

Gets the post Id for the given content item's comments, if it exists.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetTopicForContent(ctx, operations.ForumGetTopicForContentRequest{
        ContentID: 575947,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ForumGetTopicsPaged

Get topics from any forum.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Forum.ForumGetTopicsPaged(ctx, operations.ForumGetTopicsPagedRequest{
        CategoryFilter: 83112,
        Group: 929297,
        Locales: sdk.String("incidunt"),
        Page: 318569,
        PageSize: 9356,
        QuickDate: 667411,
        Sort: 842342,
        Tagstring: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

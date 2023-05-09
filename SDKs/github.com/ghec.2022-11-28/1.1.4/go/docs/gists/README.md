# Gists

## Overview

View, modify your gists.

### Available Operations

* [GistsCheckIsStarred](#gistscheckisstarred) - Check if a gist is starred
* [GistsCreate](#gistscreate) - Create a gist
* [GistsCreateComment](#gistscreatecomment) - Create a gist comment
* [GistsDelete](#gistsdelete) - Delete a gist
* [GistsDeleteComment](#gistsdeletecomment) - Delete a gist comment
* [GistsFork](#gistsfork) - Fork a gist
* [GistsGet](#gistsget) - Get a gist
* [GistsGetComment](#gistsgetcomment) - Get a gist comment
* [GistsGetRevision](#gistsgetrevision) - Get a gist revision
* [GistsList](#gistslist) - List gists for the authenticated user
* [GistsListComments](#gistslistcomments) - List gist comments
* [GistsListCommits](#gistslistcommits) - List gist commits
* [GistsListForUser](#gistslistforuser) - List gists for a user
* [GistsListForks](#gistslistforks) - List gist forks
* [GistsListPublic](#gistslistpublic) - List public gists
* [GistsListStarred](#gistsliststarred) - List starred gists
* [GistsStar](#gistsstar) - Star a gist
* [GistsUnstar](#gistsunstar) - Unstar a gist
* [GistsUpdate](#gistsupdate) - Update a gist
* [GistsUpdateComment](#gistsupdatecomment) - Update a gist comment

## GistsCheckIsStarred

Check if a gist is starred

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#check-if-a-gist-is-starred>

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
    res, err := s.Gists.GistsCheckIsStarred(ctx, operations.GistsCheckIsStarredRequest{
        GistID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GistsCreate

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#create-a-gist>

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
    res, err := s.Gists.GistsCreate(ctx, operations.GistsCreateRequestBody{
        Description: sdk.String("Example Ruby script"),
        Files: map[string]GistsCreateRequestBodyFiles{
            "laborum": operations.GistsCreateRequestBodyFiles{
                Content: "consectetur",
            },
            "velit": operations.GistsCreateRequestBodyFiles{
                Content: "atque",
            },
            "ipsum": operations.GistsCreateRequestBodyFiles{
                Content: "impedit",
            },
        },
        Public: &operations.GistsCreateRequestBodyPublic{},
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistSimple != nil {
        // handle response
    }
}
```

## GistsCreateComment

Create a gist comment

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#create-a-gist-comment>

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
    res, err := s.Gists.GistsCreateComment(ctx, operations.GistsCreateCommentRequest{
        RequestBody: operations.GistsCreateCommentRequestBody{
            Body: "Body of the attachment",
        },
        GistID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistComment != nil {
        // handle response
    }
}
```

## GistsDelete

Delete a gist

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#delete-a-gist>

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
    res, err := s.Gists.GistsDelete(ctx, operations.GistsDeleteRequest{
        GistID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GistsDeleteComment

Delete a gist comment

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#delete-a-gist-comment>

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
    res, err := s.Gists.GistsDeleteComment(ctx, operations.GistsDeleteCommentRequest{
        CommentID: 922757,
        GistID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GistsFork

Fork a gist

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#fork-a-gist>

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
    res, err := s.Gists.GistsFork(ctx, operations.GistsForkRequest{
        GistID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseGist != nil {
        // handle response
    }
}
```

## GistsGet

Get a gist

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#get-a-gist>

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
    res, err := s.Gists.GistsGet(ctx, operations.GistsGetRequest{
        GistID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistSimple != nil {
        // handle response
    }
}
```

## GistsGetComment

Get a gist comment

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#get-a-gist-comment>

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
    res, err := s.Gists.GistsGetComment(ctx, operations.GistsGetCommentRequest{
        CommentID: 453094,
        GistID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistComment != nil {
        // handle response
    }
}
```

## GistsGetRevision

Get a gist revision

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#get-a-gist-revision>

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
    res, err := s.Gists.GistsGetRevision(ctx, operations.GistsGetRevisionRequest{
        GistID: "dignissimos",
        Sha: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistSimple != nil {
        // handle response
    }
}
```

## GistsList

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-gists-for-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gists.GistsList(ctx, operations.GistsListRequest{
        Page: sdk.Int64(778172),
        PerPage: sdk.Int64(535468),
        Since: types.MustTimeFromString("2021-09-08T14:14:28.598Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseGists != nil {
        // handle response
    }
}
```

## GistsListComments

List gist comments

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-gist-comments>

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
    res, err := s.Gists.GistsListComments(ctx, operations.GistsListCommentsRequest{
        GistID: "odit",
        Page: sdk.Int64(974990),
        PerPage: sdk.Int64(426904),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistComments != nil {
        // handle response
    }
}
```

## GistsListCommits

List gist commits

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-gist-commits>

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
    res, err := s.Gists.GistsListCommits(ctx, operations.GistsListCommitsRequest{
        GistID: "magnam",
        Page: sdk.Int64(842855),
        PerPage: sdk.Int64(78969),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistCommits != nil {
        // handle response
    }
}
```

## GistsListForUser

Lists public gists for the specified user:

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-gists-for-a-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gists.GistsListForUser(ctx, operations.GistsListForUserRequest{
        Page: sdk.Int64(818034),
        PerPage: sdk.Int64(726878),
        Since: types.MustTimeFromString("2022-01-09T23:17:04.281Z"),
        Username: "Carli24",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseGists != nil {
        // handle response
    }
}
```

## GistsListForks

List gist forks

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-gist-forks>

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
    res, err := s.Gists.GistsListForks(ctx, operations.GistsListForksRequest{
        GistID: "illo",
        Page: sdk.Int64(36561),
        PerPage: sdk.Int64(424663),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistSimples != nil {
        // handle response
    }
}
```

## GistsListPublic

List public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-public-gists>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gists.GistsListPublic(ctx, operations.GistsListPublicRequest{
        Page: sdk.Int64(406922),
        PerPage: sdk.Int64(107617),
        Since: types.MustTimeFromString("2021-04-18T19:14:29.683Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseGists != nil {
        // handle response
    }
}
```

## GistsListStarred

List the authenticated user's starred gists:

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#list-starred-gists>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Gists.GistsListStarred(ctx, operations.GistsListStarredRequest{
        Page: sdk.Int64(431994),
        PerPage: sdk.Int64(246557),
        Since: types.MustTimeFromString("2022-05-28T07:14:46.447Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseGists != nil {
        // handle response
    }
}
```

## GistsStar

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#star-a-gist>

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
    res, err := s.Gists.GistsStar(ctx, operations.GistsStarRequest{
        GistID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GistsUnstar

Unstar a gist

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#unstar-a-gist>

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
    res, err := s.Gists.GistsUnstar(ctx, operations.GistsUnstarRequest{
        GistID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GistsUpdate

Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists/#update-a-gist>

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
    res, err := s.Gists.GistsUpdate(ctx, operations.GistsUpdateRequest{
        RequestBody: operations.GistsUpdateRequestBody2{
            Description: sdk.String("Example Ruby script"),
            Files: map[string]interface{}{
                "iste": operations.GistsUpdateRequestBody2Files3{
                    Content: sdk.String("alias"),
                    Filename: sdk.String("nisi"),
                },
                "itaque": operations.GistsUpdateRequestBody2Files1{
                    Content: "laborum",
                    Filename: sdk.String("non"),
                },
                "dolor": operations.GistsUpdateRequestBody2Files2{
                    Content: sdk.String("sit"),
                    Filename: "doloremque",
                },
                "consequatur": operations.GistsUpdateRequestBody2Files2{
                    Content: sdk.String("recusandae"),
                    Filename: "ea",
                },
            },
        },
        GistID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistSimple != nil {
        // handle response
    }
}
```

## GistsUpdateComment

Update a gist comment

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/gists#update-a-gist-comment>

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
    res, err := s.Gists.GistsUpdateComment(ctx, operations.GistsUpdateCommentRequest{
        RequestBody: operations.GistsUpdateCommentRequestBody{
            Body: "Body of the attachment",
        },
        CommentID: 377406,
        GistID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GistComment != nil {
        // handle response
    }
}
```

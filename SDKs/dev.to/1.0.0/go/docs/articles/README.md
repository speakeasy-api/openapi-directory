# Articles

### Available Operations

* [CreateArticle](#createarticle) - Publish article
* [GetArticleByID](#getarticlebyid) - Published article by id
* [GetArticleByPath](#getarticlebypath) - Published article by path
* [GetArticles](#getarticles) - Published articles
* [GetLatestArticles](#getlatestarticles) - Published articles sorted by published date
* [GetOrgArticles](#getorgarticles) - Organization's Articles
* [GetUserAllArticles](#getuserallarticles) - User's all articles
* [GetUserArticles](#getuserarticles) - User's articles
* [GetUserPublishedArticles](#getuserpublishedarticles) - User's published articles
* [GetUserUnpublishedArticles](#getuserunpublishedarticles) - User's unpublished articles
* [UnpublishArticle](#unpublisharticle) - Unpublish an article
* [UpdateArticle](#updatearticle) - Update an article by id
* [Videos](#videos) - Articles with a video

## CreateArticle

This endpoint allows the client to create a new article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.CreateArticle(ctx, shared.Article{
        Article: &shared.ArticleArticle{
            BodyMarkdown: sdk.String("vel"),
            CanonicalURL: sdk.String("error"),
            Description: sdk.String("deserunt"),
            MainImage: sdk.String("suscipit"),
            OrganizationID: sdk.Int64(437587),
            Published: sdk.Bool(false),
            Series: sdk.String("magnam"),
            Tags: sdk.String("debitis"),
            Title: sdk.String("Mr."),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetArticleByID

This endpoint allows the client to retrieve a single published article given its `id`.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetArticleByID(ctx, operations.GetArticleByIDRequest{
        ID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticleByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetArticleByPath

This endpoint allows the client to retrieve a single published article given its `path`.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetArticleByPath(ctx, operations.GetArticleByPathRequest{
        Slug: "tempora",
        Username: "Geraldine_Kreiger52",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticleByPath200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetArticles

This endpoint allows the client to retrieve a list of articles.

"Articles" are all the posts that users create on DEV that typically
show up in the feed. They can be a blog post, a discussion question,
a help thread etc. but is referred to as article within the code.

By default it will return featured, published articles ordered
by descending popularity.

It supports pagination, each page will contain `30` articles by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetArticles(ctx, operations.GetArticlesRequest{
        CollectionID: sdk.Int(479977),
        Page: sdk.Int(568045),
        PerPage: sdk.Int(392785),
        State: operations.GetArticlesStateEnumAll.ToPointer(),
        Tag: sdk.String("temporibus"),
        Tags: sdk.String("ab"),
        TagsExclude: sdk.String("quis"),
        Top: sdk.Int(87129),
        Username: sdk.String("Lydia_Aufderhar"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetLatestArticles

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.

It supports pagination, each page will contain 30 articles by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetLatestArticles(ctx, operations.GetLatestArticlesRequest{
        Page: sdk.Int(957156),
        PerPage: sdk.Int(778157),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetOrgArticles(ctx, operations.GetOrgArticlesRequest{
        Page: sdk.Int(140350),
        PerPage: sdk.Int(870013),
        Username: "Sarah_Wolff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetUserAllArticles(ctx, operations.GetUserAllArticlesRequest{
        Page: sdk.Int(800911),
        PerPage: sdk.Int(461479),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetUserArticles(ctx, operations.GetUserArticlesRequest{
        Page: sdk.Int(520478),
        PerPage: sdk.Int(780529),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetUserPublishedArticles(ctx, operations.GetUserPublishedArticlesRequest{
        Page: sdk.Int(678880),
        PerPage: sdk.Int(118274),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## GetUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.GetUserUnpublishedArticles(ctx, operations.GetUserUnpublishedArticlesRequest{
        Page: sdk.Int(720633),
        PerPage: sdk.Int(639921),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```

## UnpublishArticle

This endpoint allows the client to unpublish an article.

The user associated with the API key must have any 'admin' or 'moderator' role.

The article will be unpublished and will no longer be visible to the public. It will remain
in the database and will set back to draft status on the author's posts dashboard. Any
notifications associated with the article will be deleted. Any comments on the article
will remain.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.UnpublishArticle(ctx, operations.UnpublishArticleRequest{
        ID: 582020,
        Note: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateArticle

This endpoint allows the client to update an existing article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.UpdateArticle(ctx, operations.UpdateArticleRequest{
        Article: &shared.Article{
            Article: &shared.ArticleArticle{
                BodyMarkdown: sdk.String("deleniti"),
                CanonicalURL: sdk.String("hic"),
                Description: sdk.String("optio"),
                MainImage: sdk.String("totam"),
                OrganizationID: sdk.Int64(105907),
                Published: sdk.Bool(false),
                Series: sdk.String("commodi"),
                Tags: sdk.String("molestiae"),
                Title: sdk.String("Mrs."),
            },
        },
        ID: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Articles.Videos(ctx, operations.VideosRequest{
        Page: sdk.Int(774234),
        PerPage: sdk.Int(736918),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoArticles != nil {
        // handle response
    }
}
```

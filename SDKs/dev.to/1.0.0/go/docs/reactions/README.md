# Reactions

### Available Operations

* [PostAPIReactions](#postapireactions) - create reaction
* [PostAPIReactionsToggle](#postapireactionstoggle) - toggle reaction

## PostAPIReactions

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will return the previous "like"

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
    res, err := s.Reactions.PostAPIReactions(ctx, operations.PostAPIReactionsRequest{
        Category: operations.PostAPIReactionsCategoryEnumLike,
        ReactableID: 778346,
        ReactableType: operations.PostAPIReactionsReactableTypeEnumComment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIReactionsToggle

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will remove the "like" from the user

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
    res, err := s.Reactions.PostAPIReactionsToggle(ctx, operations.PostAPIReactionsToggleRequest{
        Category: operations.PostAPIReactionsToggleCategoryEnumFire,
        ReactableID: 368725,
        ReactableType: operations.PostAPIReactionsToggleReactableTypeEnumArticle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

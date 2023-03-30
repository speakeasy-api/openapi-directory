<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateArticleRequest{
        Request: &shared.Article{
            Article: &shared.ArticleArticle{
                BodyMarkdown: "unde",
                CanonicalURL: "deserunt",
                Description: "porro",
                MainImage: "nulla",
                OrganizationID: 602763,
                Published: false,
                Series: "vero",
                Tags: "perspiciatis",
                Title: "Internal Group Orchestrator",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Articles.CreateArticle(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->
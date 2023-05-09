<!-- Start SDK Example Usage -->
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
            BodyMarkdown: sdk.String("corrupti"),
            CanonicalURL: sdk.String("provident"),
            Description: sdk.String("distinctio"),
            MainImage: sdk.String("quibusdam"),
            OrganizationID: sdk.Int64(602763),
            Published: sdk.Bool(false),
            Series: sdk.String("nulla"),
            Tags: sdk.String("corrupti"),
            Title: sdk.String("Dr."),
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
<!-- End SDK Example Usage -->
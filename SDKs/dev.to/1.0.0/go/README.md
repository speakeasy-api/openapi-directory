# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/dev.to/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.Article{
        Article: &shared.ArticleArticle{
            BodyMarkdown: "corrupti",
            CanonicalURL: "provident",
            Description: "distinctio",
            MainImage: "quibusdam",
            OrganizationID: 602763,
            Published: false,
            Series: "nulla",
            Tags: "corrupti",
            Title: "Dr.",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Articles

* `CreateArticle` - Publish article
* `GetArticleByID` - Published article by id
* `GetArticleByPath` - Published article by path
* `GetArticles` - Published articles
* `GetLatestArticles` - Published articles sorted by published date
* `GetOrgArticles` - Organization's Articles
* `GetUserAllArticles` - User's all articles
* `GetUserArticles` - User's articles
* `GetUserPublishedArticles` - User's published articles
* `GetUserUnpublishedArticles` - User's unpublished articles
* `UnpublishArticle` - Unpublish an article
* `UpdateArticle` - Update an article by id
* `Videos` - Articles with a video

### Comments

* `GetCommentByID` - Comment by id
* `GetCommentsByArticleID` - Comments

### DisplayAds

* `GetAPIDisplayAds` - display ads
* `GetAPIDisplayAdsID` - display ad
* `PostAPIDisplayAds` - display ads
* `PutAPIDisplayAdsID` - display ads
* `PutAPIDisplayAdsIDUnpublish` - unpublish

### FollowedTags

* `GetFollowedTags` - Followed Tags

### Followers

* `GetFollowers` - Followers

### Organizations

* `GetOrgArticles` - Organization's Articles
* `GetOrgUsers` - Organization's users
* `GetOrganization` - An organization

### Pages

* `DeleteAPIPagesID` - remove a page
* `GetAPIPages` - show details for all pages
* `GetAPIPagesID` - show details for a page
* `PostAPIPages` - pages
* `PutAPIPagesID` - update details for a page

### PodcastEpisodes

* `GetPodcastEpisodes` - Podcast Episodes

### ProfileImages

* `GetProfileImage` - A Users or organizations profile image

### Reactions

* `PostAPIReactions` - create reaction
* `PostAPIReactionsToggle` - toggle reaction

### Readinglist

* `GetReadinglist` - Readinglist

### Tags

* `GetFollowedTags` - Followed Tags
* `GetTags` - Tags

### Users

* `GetOrgUsers` - Organization's users
* `GetUser` - A User
* `GetUserAllArticles` - User's all articles
* `GetUserArticles` - User's articles
* `GetUserMe` - The authenticated user
* `GetUserPublishedArticles` - User's published articles
* `GetUserUnpublishedArticles` - User's unpublished articles
* `PostAdminUsersCreate` - Invite a User
* `SuspendUser` - Suspend a User
* `UnpublishUser` - Unpublish a User's Articles and Comments

### Videos

* `Videos` - Articles with a video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

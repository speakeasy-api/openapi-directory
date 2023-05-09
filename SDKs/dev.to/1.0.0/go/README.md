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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Articles](docs/articles/README.md)

* [CreateArticle](docs/articles/README.md#createarticle) - Publish article
* [GetArticleByID](docs/articles/README.md#getarticlebyid) - Published article by id
* [GetArticleByPath](docs/articles/README.md#getarticlebypath) - Published article by path
* [GetArticles](docs/articles/README.md#getarticles) - Published articles
* [GetLatestArticles](docs/articles/README.md#getlatestarticles) - Published articles sorted by published date
* [GetOrgArticles](docs/articles/README.md#getorgarticles) - Organization's Articles
* [GetUserAllArticles](docs/articles/README.md#getuserallarticles) - User's all articles
* [GetUserArticles](docs/articles/README.md#getuserarticles) - User's articles
* [GetUserPublishedArticles](docs/articles/README.md#getuserpublishedarticles) - User's published articles
* [GetUserUnpublishedArticles](docs/articles/README.md#getuserunpublishedarticles) - User's unpublished articles
* [UnpublishArticle](docs/articles/README.md#unpublisharticle) - Unpublish an article
* [UpdateArticle](docs/articles/README.md#updatearticle) - Update an article by id
* [Videos](docs/articles/README.md#videos) - Articles with a video

### [Comments](docs/comments/README.md)

* [GetCommentByID](docs/comments/README.md#getcommentbyid) - Comment by id
* [GetCommentsByArticleID](docs/comments/README.md#getcommentsbyarticleid) - Comments

### [DisplayAds](docs/displayads/README.md)

* [GetAPIDisplayAds](docs/displayads/README.md#getapidisplayads) - display ads
* [GetAPIDisplayAdsID](docs/displayads/README.md#getapidisplayadsid) - display ad
* [PostAPIDisplayAds](docs/displayads/README.md#postapidisplayads) - display ads
* [PutAPIDisplayAdsID](docs/displayads/README.md#putapidisplayadsid) - display ads
* [PutAPIDisplayAdsIDUnpublish](docs/displayads/README.md#putapidisplayadsidunpublish) - unpublish

### [FollowedTags](docs/followedtags/README.md)

* [GetFollowedTags](docs/followedtags/README.md#getfollowedtags) - Followed Tags

### [Followers](docs/followers/README.md)

* [GetFollowers](docs/followers/README.md#getfollowers) - Followers

### [Organizations](docs/organizations/README.md)

* [GetOrgArticles](docs/organizations/README.md#getorgarticles) - Organization's Articles
* [GetOrgUsers](docs/organizations/README.md#getorgusers) - Organization's users
* [GetOrganization](docs/organizations/README.md#getorganization) - An organization

### [Pages](docs/pages/README.md)

* [DeleteAPIPagesID](docs/pages/README.md#deleteapipagesid) - remove a page
* [GetAPIPages](docs/pages/README.md#getapipages) - show details for all pages
* [GetAPIPagesID](docs/pages/README.md#getapipagesid) - show details for a page
* [PostAPIPages](docs/pages/README.md#postapipages) - pages
* [PutAPIPagesID](docs/pages/README.md#putapipagesid) - update details for a page

### [PodcastEpisodes](docs/podcastepisodes/README.md)

* [GetPodcastEpisodes](docs/podcastepisodes/README.md#getpodcastepisodes) - Podcast Episodes

### [ProfileImages](docs/profileimages/README.md)

* [GetProfileImage](docs/profileimages/README.md#getprofileimage) - A Users or organizations profile image

### [Reactions](docs/reactions/README.md)

* [PostAPIReactions](docs/reactions/README.md#postapireactions) - create reaction
* [PostAPIReactionsToggle](docs/reactions/README.md#postapireactionstoggle) - toggle reaction

### [Readinglist](docs/readinglist/README.md)

* [GetReadinglist](docs/readinglist/README.md#getreadinglist) - Readinglist

### [Tags](docs/tags/README.md)

* [GetFollowedTags](docs/tags/README.md#getfollowedtags) - Followed Tags
* [GetTags](docs/tags/README.md#gettags) - Tags

### [Users](docs/users/README.md)

* [GetOrgUsers](docs/users/README.md#getorgusers) - Organization's users
* [GetUser](docs/users/README.md#getuser) - A User
* [GetUserAllArticles](docs/users/README.md#getuserallarticles) - User's all articles
* [GetUserArticles](docs/users/README.md#getuserarticles) - User's articles
* [GetUserMe](docs/users/README.md#getuserme) - The authenticated user
* [GetUserPublishedArticles](docs/users/README.md#getuserpublishedarticles) - User's published articles
* [GetUserUnpublishedArticles](docs/users/README.md#getuserunpublishedarticles) - User's unpublished articles
* [PostAdminUsersCreate](docs/users/README.md#postadminuserscreate) - Invite a User
* [SuspendUser](docs/users/README.md#suspenduser) - Suspend a User
* [UnpublishUser](docs/users/README.md#unpublishuser) - Unpublish a User's Articles and Comments

### [Videos](docs/videos/README.md)

* [Videos](docs/videos/README.md#videos) - Articles with a video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

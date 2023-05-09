# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArticleResponse;
import org.openapis.openapi.models.shared.Article;
import org.openapis.openapi.models.shared.ArticleArticle;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Article req = new Article() {{
                article = new ArticleArticle() {{
                    bodyMarkdown = "provident";
                    canonicalUrl = "distinctio";
                    description = "quibusdam";
                    mainImage = "unde";
                    organizationId = 857946L;
                    published = false;
                    series = "corrupti";
                    tags = "illum";
                    title = "Ms.";
                }};;
            }};            

            CreateArticleResponse res = sdk.articles.createArticle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [articles](docs/articles/README.md)

* [createArticle](docs/articles/README.md#createarticle) - Publish article
* [getArticleById](docs/articles/README.md#getarticlebyid) - Published article by id
* [getArticleByPath](docs/articles/README.md#getarticlebypath) - Published article by path
* [getArticles](docs/articles/README.md#getarticles) - Published articles
* [getLatestArticles](docs/articles/README.md#getlatestarticles) - Published articles sorted by published date
* [getOrgArticles](docs/articles/README.md#getorgarticles) - Organization's Articles
* [getUserAllArticles](docs/articles/README.md#getuserallarticles) - User's all articles
* [getUserArticles](docs/articles/README.md#getuserarticles) - User's articles
* [getUserPublishedArticles](docs/articles/README.md#getuserpublishedarticles) - User's published articles
* [getUserUnpublishedArticles](docs/articles/README.md#getuserunpublishedarticles) - User's unpublished articles
* [unpublishArticle](docs/articles/README.md#unpublisharticle) - Unpublish an article
* [updateArticle](docs/articles/README.md#updatearticle) - Update an article by id
* [videos](docs/articles/README.md#videos) - Articles with a video

### [comments](docs/comments/README.md)

* [getCommentById](docs/comments/README.md#getcommentbyid) - Comment by id
* [getCommentsByArticleId](docs/comments/README.md#getcommentsbyarticleid) - Comments

### [displayAds](docs/displayads/README.md)

* [getApiDisplayAds](docs/displayads/README.md#getapidisplayads) - display ads
* [getApiDisplayAdsId](docs/displayads/README.md#getapidisplayadsid) - display ad
* [postApiDisplayAds](docs/displayads/README.md#postapidisplayads) - display ads
* [putApiDisplayAdsId](docs/displayads/README.md#putapidisplayadsid) - display ads
* [putApiDisplayAdsIdUnpublish](docs/displayads/README.md#putapidisplayadsidunpublish) - unpublish

### [followedTags](docs/followedtags/README.md)

* [getFollowedTags](docs/followedtags/README.md#getfollowedtags) - Followed Tags

### [followers](docs/followers/README.md)

* [getFollowers](docs/followers/README.md#getfollowers) - Followers

### [organizations](docs/organizations/README.md)

* [getOrgArticles](docs/organizations/README.md#getorgarticles) - Organization's Articles
* [getOrgUsers](docs/organizations/README.md#getorgusers) - Organization's users
* [getOrganization](docs/organizations/README.md#getorganization) - An organization

### [pages](docs/pages/README.md)

* [deleteApiPagesId](docs/pages/README.md#deleteapipagesid) - remove a page
* [getApiPages](docs/pages/README.md#getapipages) - show details for all pages
* [getApiPagesId](docs/pages/README.md#getapipagesid) - show details for a page
* [postApiPages](docs/pages/README.md#postapipages) - pages
* [putApiPagesId](docs/pages/README.md#putapipagesid) - update details for a page

### [podcastEpisodes](docs/podcastepisodes/README.md)

* [getPodcastEpisodes](docs/podcastepisodes/README.md#getpodcastepisodes) - Podcast Episodes

### [profileImages](docs/profileimages/README.md)

* [getProfileImage](docs/profileimages/README.md#getprofileimage) - A Users or organizations profile image

### [reactions](docs/reactions/README.md)

* [postApiReactions](docs/reactions/README.md#postapireactions) - create reaction
* [postApiReactionsToggle](docs/reactions/README.md#postapireactionstoggle) - toggle reaction

### [readinglist](docs/readinglist/README.md)

* [getReadinglist](docs/readinglist/README.md#getreadinglist) - Readinglist

### [tags](docs/tags/README.md)

* [getFollowedTags](docs/tags/README.md#getfollowedtags) - Followed Tags
* [getTags](docs/tags/README.md#gettags) - Tags

### [users](docs/users/README.md)

* [getOrgUsers](docs/users/README.md#getorgusers) - Organization's users
* [getUser](docs/users/README.md#getuser) - A User
* [getUserAllArticles](docs/users/README.md#getuserallarticles) - User's all articles
* [getUserArticles](docs/users/README.md#getuserarticles) - User's articles
* [getUserMe](docs/users/README.md#getuserme) - The authenticated user
* [getUserPublishedArticles](docs/users/README.md#getuserpublishedarticles) - User's published articles
* [getUserUnpublishedArticles](docs/users/README.md#getuserunpublishedarticles) - User's unpublished articles
* [postAdminUsersCreate](docs/users/README.md#postadminuserscreate) - Invite a User
* [suspendUser](docs/users/README.md#suspenduser) - Suspend a User
* [unpublishUser](docs/users/README.md#unpublishuser) - Unpublish a User's Articles and Comments

### [videos](docs/videos/README.md)

* [videos](docs/videos/README.md#videos) - Articles with a video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

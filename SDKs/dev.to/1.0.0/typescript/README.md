# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/dev.to/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/dev.to/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Article,
  CreateArticleResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Article = {
  article: {
    bodyMarkdown: "corrupti",
    canonicalUrl: "provident",
    description: "distinctio",
    mainImage: "quibusdam",
    organizationId: 602763,
    published: false,
    series: "nulla",
    tags: "corrupti",
    title: "Dr.",
  },
};

sdk.articles.createArticle(req).then((res: CreateArticleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### articles

* `createArticle` - Publish article
* `getArticleById` - Published article by id
* `getArticleByPath` - Published article by path
* `getArticles` - Published articles
* `getLatestArticles` - Published articles sorted by published date
* `getOrgArticles` - Organization's Articles
* `getUserAllArticles` - User's all articles
* `getUserArticles` - User's articles
* `getUserPublishedArticles` - User's published articles
* `getUserUnpublishedArticles` - User's unpublished articles
* `unpublishArticle` - Unpublish an article
* `updateArticle` - Update an article by id
* `videos` - Articles with a video

### comments

* `getCommentById` - Comment by id
* `getCommentsByArticleId` - Comments

### displayAds

* `getApiDisplayAds` - display ads
* `getApiDisplayAdsId` - display ad
* `postApiDisplayAds` - display ads
* `putApiDisplayAdsId` - display ads
* `putApiDisplayAdsIdUnpublish` - unpublish

### followedTags

* `getFollowedTags` - Followed Tags

### followers

* `getFollowers` - Followers

### organizations

* `getOrgArticles` - Organization's Articles
* `getOrgUsers` - Organization's users
* `getOrganization` - An organization

### pages

* `deleteApiPagesId` - remove a page
* `getApiPages` - show details for all pages
* `getApiPagesId` - show details for a page
* `postApiPages` - pages
* `putApiPagesId` - update details for a page

### podcastEpisodes

* `getPodcastEpisodes` - Podcast Episodes

### profileImages

* `getProfileImage` - A Users or organizations profile image

### reactions

* `postApiReactions` - create reaction
* `postApiReactionsToggle` - toggle reaction

### readinglist

* `getReadinglist` - Readinglist

### tags

* `getFollowedTags` - Followed Tags
* `getTags` - Tags

### users

* `getOrgUsers` - Organization's users
* `getUser` - A User
* `getUserAllArticles` - User's all articles
* `getUserArticles` - User's articles
* `getUserMe` - The authenticated user
* `getUserPublishedArticles` - User's published articles
* `getUserUnpublishedArticles` - User's unpublished articles
* `postAdminUsersCreate` - Invite a User
* `suspendUser` - Suspend a User
* `unpublishUser` - Unpublish a User's Articles and Comments

### videos

* `videos` - Articles with a video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


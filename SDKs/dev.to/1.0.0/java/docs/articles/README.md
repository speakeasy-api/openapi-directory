# articles

### Available Operations

* [createArticle](#createarticle) - Publish article
* [getArticleById](#getarticlebyid) - Published article by id
* [getArticleByPath](#getarticlebypath) - Published article by path
* [getArticles](#getarticles) - Published articles
* [getLatestArticles](#getlatestarticles) - Published articles sorted by published date
* [getOrgArticles](#getorgarticles) - Organization's Articles
* [getUserAllArticles](#getuserallarticles) - User's all articles
* [getUserArticles](#getuserarticles) - User's articles
* [getUserPublishedArticles](#getuserpublishedarticles) - User's published articles
* [getUserUnpublishedArticles](#getuserunpublishedarticles) - User's unpublished articles
* [unpublishArticle](#unpublisharticle) - Unpublish an article
* [updateArticle](#updatearticle) - Update an article by id
* [videos](#videos) - Articles with a video

## createArticle

This endpoint allows the client to create a new article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example Usage

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
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Article req = new Article() {{
                article = new ArticleArticle() {{
                    bodyMarkdown = "deserunt";
                    canonicalUrl = "suscipit";
                    description = "iure";
                    mainImage = "magnam";
                    organizationId = 891773L;
                    published = false;
                    series = "ipsa";
                    tags = "delectus";
                    title = "Mrs.";
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

## getArticleById

This endpoint allows the client to retrieve a single published article given its `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticleByIdRequest;
import org.openapis.openapi.models.operations.GetArticleByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticleByIdRequest req = new GetArticleByIdRequest(477665L);            

            GetArticleByIdResponse res = sdk.articles.getArticleById(req);

            if (res.getArticleById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArticleByPath

This endpoint allows the client to retrieve a single published article given its `path`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticleByPathRequest;
import org.openapis.openapi.models.operations.GetArticleByPathResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticleByPathRequest req = new GetArticleByPathRequest("placeat", "voluptatum");            

            GetArticleByPathResponse res = sdk.articles.getArticleByPath(req);

            if (res.getArticleByPath200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArticles

This endpoint allows the client to retrieve a list of articles.

"Articles" are all the posts that users create on DEV that typically
show up in the feed. They can be a blog post, a discussion question,
a help thread etc. but is referred to as article within the code.

By default it will return featured, published articles ordered
by descending popularity.

It supports pagination, each page will contain `30` articles by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticlesRequest;
import org.openapis.openapi.models.operations.GetArticlesResponse;
import org.openapis.openapi.models.operations.GetArticlesStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticlesRequest req = new GetArticlesRequest() {{
                collectionId = 568045;
                page = 392785;
                perPage = 925597;
                state = GetArticlesStateEnum.ALL;
                tag = "ab";
                tags = "quis";
                tagsExclude = "veritatis";
                top = 648172;
                username = "Aiyana_Hills77";
            }};            

            GetArticlesResponse res = sdk.articles.getArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestArticles

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.

It supports pagination, each page will contain 30 articles by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestArticlesRequest;
import org.openapis.openapi.models.operations.GetLatestArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLatestArticlesRequest req = new GetLatestArticlesRequest() {{
                page = 870013;
                perPage = 870088;
            }};            

            GetLatestArticlesResponse res = sdk.articles.getLatestArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrgArticlesRequest;
import org.openapis.openapi.models.operations.GetOrgArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrgArticlesRequest req = new GetOrgArticlesRequest("molestiae") {{
                page = 799159;
                perPage = 800911;
            }};            

            GetOrgArticlesResponse res = sdk.articles.getOrgArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAllArticlesRequest;
import org.openapis.openapi.models.operations.GetUserAllArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserAllArticlesRequest req = new GetUserAllArticlesRequest() {{
                page = 520478;
                perPage = 780529;
            }};            

            GetUserAllArticlesResponse res = sdk.articles.getUserAllArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserArticlesRequest;
import org.openapis.openapi.models.operations.GetUserArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserArticlesRequest req = new GetUserArticlesRequest() {{
                page = 118274;
                perPage = 720633;
            }};            

            GetUserArticlesResponse res = sdk.articles.getUserArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPublishedArticlesRequest;
import org.openapis.openapi.models.operations.GetUserPublishedArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserPublishedArticlesRequest req = new GetUserPublishedArticlesRequest() {{
                page = 582020;
                perPage = 143353;
            }};            

            GetUserPublishedArticlesResponse res = sdk.articles.getUserPublishedArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserUnpublishedArticlesRequest;
import org.openapis.openapi.models.operations.GetUserUnpublishedArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserUnpublishedArticlesRequest req = new GetUserUnpublishedArticlesRequest() {{
                page = 944669;
                perPage = 758616;
            }};            

            GetUserUnpublishedArticlesResponse res = sdk.articles.getUserUnpublishedArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpublishArticle

This endpoint allows the client to unpublish an article.

The user associated with the API key must have any 'admin' or 'moderator' role.

The article will be unpublished and will no longer be visible to the public. It will remain
in the database and will set back to draft status on the author's posts dashboard. Any
notifications associated with the article will be deleted. Any comments on the article
will remain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpublishArticleRequest;
import org.openapis.openapi.models.operations.UnpublishArticleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnpublishArticleRequest req = new UnpublishArticleRequest(105907) {{
                note = "commodi";
            }};            

            UnpublishArticleResponse res = sdk.articles.unpublishArticle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArticle

This endpoint allows the client to update an existing article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArticleRequest;
import org.openapis.openapi.models.operations.UpdateArticleResponse;
import org.openapis.openapi.models.shared.Article;
import org.openapis.openapi.models.shared.ArticleArticle;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateArticleRequest req = new UpdateArticleRequest(264555) {{
                article = new Article() {{
                    article = new ArticleArticle() {{
                        bodyMarkdown = "qui";
                        canonicalUrl = "impedit";
                        description = "cum";
                        mainImage = "esse";
                        organizationId = 216550L;
                        published = false;
                        series = "excepturi";
                        tags = "aspernatur";
                        title = "Mr.";
                    }};;
                }};;
            }};            

            UpdateArticleResponse res = sdk.articles.updateArticle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VideosRequest;
import org.openapis.openapi.models.operations.VideosResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VideosRequest req = new VideosRequest() {{
                page = 617636;
                perPage = 149675;
            }};            

            VideosResponse res = sdk.articles.videos(req);

            if (res.videoArticles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

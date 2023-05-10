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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Article;
use \OpenAPI\OpenAPI\Models\Shared\ArticleArticle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Article();
    $request->article = new ArticleArticle();
    $request->article->bodyMarkdown = 'vel';
    $request->article->canonicalUrl = 'error';
    $request->article->description = 'deserunt';
    $request->article->mainImage = 'suscipit';
    $request->article->organizationId = 437587;
    $request->article->published = false;
    $request->article->series = 'magnam';
    $request->article->tags = 'debitis';
    $request->article->title = 'Mr.';

    $response = $sdk->articles->createArticle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArticleById

This endpoint allows the client to retrieve a single published article given its `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArticleByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArticleByIdRequest();
    $request->id = 963663;

    $response = $sdk->articles->getArticleById($request);

    if ($response->getArticleById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArticleByPath

This endpoint allows the client to retrieve a single published article given its `path`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArticleByPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArticleByPathRequest();
    $request->slug = 'tempora';
    $request->username = 'Geraldine_Kreiger52';

    $response = $sdk->articles->getArticleByPath($request);

    if ($response->getArticleByPath200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArticlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetArticlesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArticlesRequest();
    $request->collectionId = 479977;
    $request->page = 568045;
    $request->perPage = 392785;
    $request->state = GetArticlesStateEnum::ALL;
    $request->tag = 'temporibus';
    $request->tags = 'ab';
    $request->tagsExclude = 'quis';
    $request->top = 87129;
    $request->username = 'Lydia_Aufderhar';

    $response = $sdk->articles->getArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestArticles

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.

It supports pagination, each page will contain 30 articles by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestArticlesRequest();
    $request->page = 957156;
    $request->perPage = 778157;

    $response = $sdk->articles->getLatestArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrgArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrgArticlesRequest();
    $request->page = 140350;
    $request->perPage = 870013;
    $request->username = 'Sarah_Wolff';

    $response = $sdk->articles->getOrgArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAllArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAllArticlesRequest();
    $request->page = 800911;
    $request->perPage = 461479;

    $response = $sdk->articles->getUserAllArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserArticlesRequest();
    $request->page = 520478;
    $request->perPage = 780529;

    $response = $sdk->articles->getUserArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPublishedArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPublishedArticlesRequest();
    $request->page = 678880;
    $request->perPage = 118274;

    $response = $sdk->articles->getUserPublishedArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserUnpublishedArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserUnpublishedArticlesRequest();
    $request->page = 720633;
    $request->perPage = 639921;

    $response = $sdk->articles->getUserUnpublishedArticles($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishArticleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishArticleRequest();
    $request->id = 582020;
    $request->note = 'fugit';

    $response = $sdk->articles->unpublishArticle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArticle

This endpoint allows the client to update an existing article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArticleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Article;
use \OpenAPI\OpenAPI\Models\Shared\ArticleArticle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArticleRequest();
    $request->article = new Article();
    $request->article->article = new ArticleArticle();
    $request->article->article->bodyMarkdown = 'deleniti';
    $request->article->article->canonicalUrl = 'hic';
    $request->article->article->description = 'optio';
    $request->article->article->mainImage = 'totam';
    $request->article->article->organizationId = 105907;
    $request->article->article->published = false;
    $request->article->article->series = 'commodi';
    $request->article->article->tags = 'molestiae';
    $request->article->article->title = 'Mrs.';
    $request->id = 186332;

    $response = $sdk->articles->updateArticle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## videos

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VideosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideosRequest();
    $request->page = 774234;
    $request->perPage = 736918;

    $response = $sdk->articles->videos($request);

    if ($response->videoArticles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

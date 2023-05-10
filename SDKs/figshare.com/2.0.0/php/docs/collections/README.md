# collections

### Available Operations

* [collectionArticles](#collectionarticles) - Public Collection Articles
* [collectionDetails](#collectiondetails) - Collection details
* [collectionVersionDetails](#collectionversiondetails) - Collection Version details
* [collectionVersions](#collectionversions) - Collection Versions list
* [collectionsList](#collectionslist) - Public Collections
* [collectionsSearch](#collectionssearch) - Public Collections Search
* [privateCollectionArticleDelete](#privatecollectionarticledelete) - Delete collection article
* [privateCollectionArticlesAdd](#privatecollectionarticlesadd) - Add collection articles
* [privateCollectionArticlesList](#privatecollectionarticleslist) - List collection articles
* [privateCollectionArticlesReplace](#privatecollectionarticlesreplace) - Replace collection articles
* [privateCollectionAuthorDelete](#privatecollectionauthordelete) - Delete collection author
* [privateCollectionAuthorsAdd](#privatecollectionauthorsadd) - Add collection authors
* [privateCollectionAuthorsList](#privatecollectionauthorslist) - List collection authors
* [privateCollectionAuthorsReplace](#privatecollectionauthorsreplace) - Replace collection authors
* [privateCollectionCategoriesAdd](#privatecollectioncategoriesadd) - Add collection categories
* [privateCollectionCategoriesList](#privatecollectioncategorieslist) - List collection categories
* [privateCollectionCategoriesReplace](#privatecollectioncategoriesreplace) - Replace collection categories
* [privateCollectionCategoryDelete](#privatecollectioncategorydelete) - Delete collection category
* [privateCollectionCreate](#privatecollectioncreate) - Create collection
* [privateCollectionDelete](#privatecollectiondelete) - Delete collection
* [privateCollectionDetails](#privatecollectiondetails) - Collection details
* [privateCollectionPrivateLinkCreate](#privatecollectionprivatelinkcreate) - Create collection private link
* [privateCollectionPrivateLinkDelete](#privatecollectionprivatelinkdelete) - Disable private link
* [privateCollectionPrivateLinkUpdate](#privatecollectionprivatelinkupdate) - Update collection private link
* [privateCollectionPrivateLinksList](#privatecollectionprivatelinkslist) - List collection private links
* [privateCollectionPublish](#privatecollectionpublish) - Private Collection Publish
* [privateCollectionReserveDoi](#privatecollectionreservedoi) - Private Collection Reserve DOI
* [privateCollectionReserveHandle](#privatecollectionreservehandle) - Private Collection Reserve Handle
* [privateCollectionResource](#privatecollectionresource) - Private Collection Resource
* [privateCollectionUpdate](#privatecollectionupdate) - Update collection
* [privateCollectionsList](#privatecollectionslist) - Private Collections List
* [privateCollectionsSearch](#privatecollectionssearch) - Private Collections Search

## collectionArticles

Returns a list of public collection articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionArticlesRequest();
    $request->collectionId = 749999;
    $request->limit = 171629;
    $request->offset = 339404;
    $request->page = 521037;
    $request->pageSize = 489549;

    $response = $sdk->collections->collectionArticles($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionDetails

View a collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionDetailsRequest();
    $request->collectionId = 54338;

    $response = $sdk->collections->collectionDetails($request);

    if ($response->collectionComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionVersionDetails

View details for a certain version of a collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionVersionDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionVersionDetailsRequest();
    $request->collectionId = 338985;
    $request->versionId = 199996;

    $response = $sdk->collections->collectionVersionDetails($request);

    if ($response->collectionComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionVersions

Returns a list of public collection Versions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionVersionsRequest();
    $request->collectionId = 179490;

    $response = $sdk->collections->collectionVersions($request);

    if ($response->collectionVersions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsList

Returns a list of public collections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsListOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsListRequest();
    $request->xCursor = '02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb';
    $request->doi = 'delectus';
    $request->group = 311945;
    $request->handle = 'quos';
    $request->institution = 398221;
    $request->limit = 212390;
    $request->modifiedSince = 'dolorem';
    $request->offset = 222443;
    $request->order = CollectionsListOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = CollectionsListOrderDirectionEnum::ASC;
    $request->page = 944373;
    $request->pageSize = 569574;
    $request->publishedSince = 'cum';
    $request->resourceDoi = 'voluptate';

    $response = $sdk->collections->collectionsList($request);

    if ($response->collections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsSearch

Returns a list of public collections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSearch;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionSearchOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsSearchRequest();
    $request->collectionSearch = new CollectionSearch();
    $request->collectionSearch->doi = '10.6084/m9.figshare.1407024';
    $request->collectionSearch->group = 2000013;
    $request->collectionSearch->handle = '10084/figshare.1407024';
    $request->collectionSearch->institution = 2000013;
    $request->collectionSearch->limit = 10;
    $request->collectionSearch->modifiedSince = '2017-12-22';
    $request->collectionSearch->offset = 490459;
    $request->collectionSearch->order = CollectionSearchOrderEnum::PUBLISHED_DATE;
    $request->collectionSearch->orderDirection = CollectionSearchOrderDirectionEnum::DESC;
    $request->collectionSearch->page = 1;
    $request->collectionSearch->pageSize = 10;
    $request->collectionSearch->publishedSince = '2017-12-22';
    $request->collectionSearch->resourceDoi = '10.6084/m9.figshare.1407024';
    $request->collectionSearch->searchFor = 'figshare';
    $request->xCursor = 'f3a41006-74eb-4f69-a80d-1ba77a89ebf7';

    $response = $sdk->collections->collectionsSearch($request);

    if ($response->collections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionArticleDelete

De-associate article from collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticleDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticleDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionArticleDeleteRequest();
    $request->articleId = 216897;
    $request->collectionId = 456015;

    $requestSecurity = new PrivateCollectionArticleDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionArticleDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionArticlesAdd

Associate new articles with the collection. This will add new articles to the list of already associated articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticlesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionArticlesAddRequest();
    $request->articlesCreator = new ArticlesCreator();
    $request->articlesCreator->articles = [
        906418,
        263322,
        137220,
    ];
    $request->collectionId = 20651;

    $requestSecurity = new PrivateCollectionArticlesAddSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionArticlesAdd($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionArticlesList

List collection articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionArticlesListRequest();
    $request->collectionId = 229219;
    $request->limit = 758379;
    $request->offset = 881586;
    $request->page = 320017;
    $request->pageSize = 904425;

    $requestSecurity = new PrivateCollectionArticlesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionArticlesList($request, $requestSecurity);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionArticlesReplace

Associate new articles with the collection. This will remove all already associated articles and add these new ones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticlesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionArticlesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionArticlesReplaceRequest();
    $request->articlesCreator = new ArticlesCreator();
    $request->articlesCreator->articles = [
        645785,
        588317,
    ];
    $request->collectionId = 324683;

    $requestSecurity = new PrivateCollectionArticlesReplaceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionArticlesReplace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionAuthorDelete

Delete collection author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionAuthorDeleteRequest();
    $request->authorId = 831049;
    $request->collectionId = 519711;

    $requestSecurity = new PrivateCollectionAuthorDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionAuthorDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionAuthorsAdd

Associate new authors with the collection. This will add new authors to the list of already associated authors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorsCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionAuthorsAddRequest();
    $request->authorsCreator = new AuthorsCreator();
    $request->authorsCreator->authors = [
        [
            'at' => 'quaerat',
        ],
        [
            'vel' => 'quod',
            'officiis' => 'qui',
        ],
        [
            'a' => 'esse',
            'harum' => 'iusto',
            'ipsum' => 'quisquam',
        ],
    ];
    $request->collectionId = 947371;

    $requestSecurity = new PrivateCollectionAuthorsAddSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionAuthorsAdd($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionAuthorsList

List collection authors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionAuthorsListRequest();
    $request->collectionId = 229442;

    $requestSecurity = new PrivateCollectionAuthorsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionAuthorsList($request, $requestSecurity);

    if ($response->authors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionAuthorsReplace

Associate new authors with the collection. This will remove all already associated authors and add these new ones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorsCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionAuthorsReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionAuthorsReplaceRequest();
    $request->authorsCreator = new AuthorsCreator();
    $request->authorsCreator->authors = [
        [
            'numquam' => 'enim',
            'dolorem' => 'sapiente',
            'totam' => 'nihil',
            'sit' => 'expedita',
        ],
        [
            'sed' => 'vel',
        ],
        [
            'voluptas' => 'deserunt',
            'quam' => 'ipsum',
            'incidunt' => 'qui',
        ],
    ];
    $request->collectionId = 586784;

    $requestSecurity = new PrivateCollectionAuthorsReplaceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionAuthorsReplace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionCategoriesAdd

Associate new categories with the collection. This will add new categories to the list of already associated categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionCategoriesAddRequest();
    $request->categoriesCreator = new CategoriesCreator();
    $request->categoriesCreator->categories = [
        863856,
        747080,
        117531,
        674848,
    ];
    $request->collectionId = 517379;

    $requestSecurity = new PrivateCollectionCategoriesAddSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionCategoriesAdd($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionCategoriesList

List collection categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionCategoriesListRequest();
    $request->collectionId = 276894;

    $requestSecurity = new PrivateCollectionCategoriesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionCategoriesList($request, $requestSecurity);

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionCategoriesReplace

Associate new categories with the collection. This will remove all already associated categories and add these new ones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoriesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionCategoriesReplaceRequest();
    $request->categoriesCreator = new CategoriesCreator();
    $request->categoriesCreator->categories = [
        174909,
    ];
    $request->collectionId = 716860;

    $requestSecurity = new PrivateCollectionCategoriesReplaceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionCategoriesReplace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionCategoryDelete

De-associate category from collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoryDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCategoryDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionCategoryDeleteRequest();
    $request->categoryId = 704474;
    $request->collectionId = 396060;

    $requestSecurity = new PrivateCollectionCategoryDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionCategoryDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionCreate

Create a new Collection by sending collection information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollectionCreate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionCreate();
    $request->articles = [
        565421,
        840429,
    ];
    $request->authors = [
        [
            'fugit' => 'magni',
        ],
    ];
    $request->categories = [
        124833,
        355613,
    ];
    $request->categoriesBySourceId = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->customFields = [
        'nobis' => 'et',
        'saepe' => 'ipsum',
        'veritatis' => 'nobis',
    ];
    $request->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->description = 'Test description of article';
    $request->doi = 'tempore';
    $request->funding = 'cupiditate';
    $request->fundingList = [
        new FundingCreate(),
    ];
    $request->groupId = 961937;
    $request->handle = 'dolorem';
    $request->keywords = [
        'labore',
        'adipisci',
    ];
    $request->references = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->resourceDoi = 'quas';
    $request->resourceId = 'itaque';
    $request->resourceLink = 'consequatur';
    $request->resourceTitle = 'est';
    $request->resourceVersion = 833038;
    $request->tags = [
        'doloribus',
        'ut',
        'facilis',
        'cupiditate',
    ];
    $request->timeline = new TimelineUpdate();
    $request->timeline->firstOnline = '2015-12-31';
    $request->timeline->publisherAcceptance = '2015-12-31';
    $request->timeline->publisherPublication = '2015-12-31';
    $request->title = 'Test collection title';

    $requestSecurity = new PrivateCollectionCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionCreate($request, $requestSecurity);

    if ($response->locationWarnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionDelete

Delete n collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionDeleteRequest();
    $request->collectionId = 181631;

    $requestSecurity = new PrivateCollectionDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionDetails

View a collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionDetailsRequest();
    $request->collectionId = 63955;

    $requestSecurity = new PrivateCollectionDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionDetails($request, $requestSecurity);

    if ($response->collectionCompletePrivate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionPrivateLinkCreate

Create new private link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionPrivateLinkCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionPrivateLinkCreateRequest();
    $request->collectionPrivateLinkCreator = new CollectionPrivateLinkCreator();
    $request->collectionPrivateLinkCreator->expiresDate = '2018-02-22 22:22:22';
    $request->collectionPrivateLinkCreator->readOnly = true;
    $request->collectionId = 512393;

    $requestSecurity = new PrivateCollectionPrivateLinkCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionPrivateLinkCreate($request, $requestSecurity);

    if ($response->privateLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionPrivateLinkDelete

Disable/delete private link for this collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionPrivateLinkDeleteRequest();
    $request->collectionId = 485628;
    $request->linkId = 'occaecati';

    $requestSecurity = new PrivateCollectionPrivateLinkDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionPrivateLinkDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionPrivateLinkUpdate

Update existing private link for this collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionPrivateLinkCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinkUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionPrivateLinkUpdateRequest();
    $request->collectionPrivateLinkCreator = new CollectionPrivateLinkCreator();
    $request->collectionPrivateLinkCreator->expiresDate = '2018-02-22 22:22:22';
    $request->collectionPrivateLinkCreator->readOnly = true;
    $request->collectionId = 977496;
    $request->linkId = 'quisquam';

    $requestSecurity = new PrivateCollectionPrivateLinkUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionPrivateLinkUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionPrivateLinksList

List article private links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinksListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPrivateLinksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionPrivateLinksListRequest();
    $request->collectionId = 876506;

    $requestSecurity = new PrivateCollectionPrivateLinksListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionPrivateLinksList($request, $requestSecurity);

    if ($response->privateLinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionPublish

When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPublishRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionPublishRequest();
    $request->collectionId = 606476;

    $requestSecurity = new PrivateCollectionPublishSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionPublish($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionReserveDoi

Reserve DOI for collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionReserveDoiRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionReserveDoiSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionReserveDoiRequest();
    $request->collectionId = 338159;

    $requestSecurity = new PrivateCollectionReserveDoiSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionReserveDoi($request, $requestSecurity);

    if ($response->collectionDOI !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionReserveHandle

Reserve Handle for collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionReserveHandleRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionReserveHandleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionReserveHandleRequest();
    $request->collectionId = 218403;

    $requestSecurity = new PrivateCollectionReserveHandleSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionReserveHandle($request, $requestSecurity);

    if ($response->collectionHandle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionResource

Edit collection resource data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionResourceRequest();
    $request->resource = new Resource();
    $request->resource->doi = 'delectus';
    $request->resource->id = 'aaaa23512';
    $request->resource->link = 'https://docs.figshare.com';
    $request->resource->status = 'frozen';
    $request->resource->title = 'Test title';
    $request->resource->version = 1;
    $request->collectionId = 455169;

    $requestSecurity = new PrivateCollectionResourceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionResource($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionUpdate

Update collection details; request can also be made with the PATCH method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionUpdateRequest();
    $request->collectionUpdate = new CollectionUpdate();
    $request->collectionUpdate->articles = [
        878870,
    ];
    $request->collectionUpdate->authors = [
        [
            'hic' => 'distinctio',
            'quod' => 'odio',
        ],
        [
            'facilis' => 'vero',
            'ducimus' => 'dolore',
            'quibusdam' => 'illum',
        ],
        [
            'natus' => 'impedit',
        ],
        [
            'voluptatibus' => 'exercitationem',
        ],
    ];
    $request->collectionUpdate->categories = [
        148141,
        780427,
        981830,
        985033,
    ];
    $request->collectionUpdate->categoriesBySourceId = [
        'eligendi',
        'ducimus',
    ];
    $request->collectionUpdate->customFields = [
        'officia' => 'tempora',
    ];
    $request->collectionUpdate->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->collectionUpdate->description = 'Test description of collection';
    $request->collectionUpdate->doi = 'ea';
    $request->collectionUpdate->funding = 'aspernatur';
    $request->collectionUpdate->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->collectionUpdate->groupId = 822118;
    $request->collectionUpdate->handle = 'magnam';
    $request->collectionUpdate->keywords = [
        'ex',
    ];
    $request->collectionUpdate->references = [
        'dicta',
        'dolor',
        'maiores',
    ];
    $request->collectionUpdate->resourceDoi = 'quasi';
    $request->collectionUpdate->resourceId = 'ex';
    $request->collectionUpdate->resourceLink = 'nulla';
    $request->collectionUpdate->resourceTitle = 'excepturi';
    $request->collectionUpdate->resourceVersion = 972920;
    $request->collectionUpdate->tags = [
        'sapiente',
        'quisquam',
    ];
    $request->collectionUpdate->timeline = new TimelineUpdate();
    $request->collectionUpdate->timeline->firstOnline = '2015-12-31';
    $request->collectionUpdate->timeline->publisherAcceptance = '2015-12-31';
    $request->collectionUpdate->timeline->publisherPublication = '2015-12-31';
    $request->collectionUpdate->title = 'Test collection title';
    $request->collectionId = 906556;

    $requestSecurity = new PrivateCollectionUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionUpdate($request, $requestSecurity);

    if ($response->locationWarningsUpdate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionsList

List private collections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionsListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionsListOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionsListRequest();
    $request->limit = 411372;
    $request->offset = 774048;
    $request->order = PrivateCollectionsListOrderEnum::MODIFIED_DATE;
    $request->orderDirection = PrivateCollectionsListOrderDirectionEnum::ASC;
    $request->page = 399499;
    $request->pageSize = 81101;

    $requestSecurity = new PrivateCollectionsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionsList($request, $requestSecurity);

    if ($response->collections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateCollectionsSearch

Returns a list of private Collections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PrivateCollectionSearch;
use \OpenAPI\OpenAPI\Models\Shared\PrivateCollectionSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateCollectionSearchOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateCollectionsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateCollectionSearch();
    $request->doi = '10.6084/m9.figshare.1407024';
    $request->group = 2000013;
    $request->handle = '10084/figshare.1407024';
    $request->institution = 2000013;
    $request->limit = 10;
    $request->modifiedSince = '2017-12-22';
    $request->offset = 301831;
    $request->order = PrivateCollectionSearchOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = PrivateCollectionSearchOrderDirectionEnum::DESC;
    $request->page = 1;
    $request->pageSize = 10;
    $request->publishedSince = '2017-12-22';
    $request->resourceDoi = '10.6084/m9.figshare.1407024';
    $request->resourceId = '1407024';
    $request->searchFor = 'figshare';

    $requestSecurity = new PrivateCollectionsSearchSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collections->privateCollectionsSearch($request, $requestSecurity);

    if ($response->collections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

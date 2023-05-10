# articles

### Available Operations

* [accountArticleReport](#accountarticlereport) - Account Article Report
* [accountArticleReportGenerate](#accountarticlereportgenerate) - Initiate a new Report
* [articleDetails](#articledetails) - View article details
* [articleFileDetails](#articlefiledetails) - Article file details
* [articleFiles](#articlefiles) - List article files
* [articleVersionConfidentiality](#articleversionconfidentiality) - Public Article Confidentiality for article version
* [articleVersionDetails](#articleversiondetails) - Article details for version
* [articleVersionEmbargo](#articleversionembargo) - Public Article Embargo for article version
* [articleVersionUpdate](#articleversionupdate) - Update article version
* [articleVersionUpdateThumb](#articleversionupdatethumb) - Update article version thumbnail
* [articleVersions](#articleversions) - List article versions
* [articlesList](#articleslist) - Public Articles
* [articlesSearch](#articlessearch) - Public Articles Search
* [privateArticleAuthorDelete](#privatearticleauthordelete) - Delete article author
* [privateArticleAuthorsAdd](#privatearticleauthorsadd) - Add article authors
* [privateArticleAuthorsList](#privatearticleauthorslist) - List article authors
* [privateArticleAuthorsReplace](#privatearticleauthorsreplace) - Replace article authors
* [privateArticleCategoriesAdd](#privatearticlecategoriesadd) - Add article categories
* [privateArticleCategoriesList](#privatearticlecategorieslist) - List article categories
* [privateArticleCategoriesReplace](#privatearticlecategoriesreplace) - Replace article categories
* [privateArticleCategoryDelete](#privatearticlecategorydelete) - Delete article category
* [privateArticleConfidentialityDelete](#privatearticleconfidentialitydelete) - Delete article confidentiality
* [privateArticleConfidentialityDetails](#privatearticleconfidentialitydetails) - Article confidentiality details
* [privateArticleConfidentialityUpdate](#privatearticleconfidentialityupdate) - Update article confidentiality
* [privateArticleCreate](#privatearticlecreate) - Create new Article
* [privateArticleDelete](#privatearticledelete) - Delete article
* [privateArticleDetails](#privatearticledetails) - Article details
* [privateArticleEmbargoDelete](#privatearticleembargodelete) - Delete Article Embargo
* [privateArticleEmbargoDetails](#privatearticleembargodetails) - Article Embargo Details
* [privateArticleEmbargoUpdate](#privatearticleembargoupdate) - Update Article Embargo
* [privateArticleFile](#privatearticlefile) - Single File
* [privateArticleFileDelete](#privatearticlefiledelete) - File Delete
* [privateArticleFilesList](#privatearticlefileslist) - List article files
* [privateArticlePrivateLink](#privatearticleprivatelink) - List private links
* [privateArticlePrivateLinkCreate](#privatearticleprivatelinkcreate) - Create private link
* [privateArticlePrivateLinkDelete](#privatearticleprivatelinkdelete) - Disable private link
* [privateArticlePrivateLinkUpdate](#privatearticleprivatelinkupdate) - Update private link
* [privateArticlePublish](#privatearticlepublish) - Private Article Publish
* [privateArticleReserveDoi](#privatearticlereservedoi) - Private Article Reserve DOI
* [privateArticleReserveHandle](#privatearticlereservehandle) - Private Article Reserve Handle
* [privateArticleResource](#privatearticleresource) - Private Article Resource
* [privateArticleUpdate](#privatearticleupdate) - Update article
* [privateArticleUploadComplete](#privatearticleuploadcomplete) - Complete Upload
* [privateArticleUploadInitiate](#privatearticleuploadinitiate) - Initiate Upload
* [privateArticlesList](#privatearticleslist) - Private Articles
* [privateArticlesSearch](#privatearticlessearch) - Private Articles search

## accountArticleReport

Return status on all reports generated for the account from the oauth credentials

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountArticleReportRequest();
    $request->groupId = 592845;

    $requestSecurity = new AccountArticleReportSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->accountArticleReport($request, $requestSecurity);

    if ($response->accountReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountArticleReportGenerate

Initiate a new Article Report for this Account. There is a limit of 1 report per day.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccountArticleReportGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AccountArticleReportGenerateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->accountArticleReportGenerate($requestSecurity);

    if ($response->accountReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleDetails

View an article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDetailsRequest();
    $request->articleId = 715190;

    $response = $sdk->articles->articleDetails($request);

    if ($response->articleComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleFileDetails

File by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleFileDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleFileDetailsRequest();
    $request->articleId = 844266;
    $request->fileId = 602763;

    $response = $sdk->articles->articleFileDetails($request);

    if ($response->publicFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleFiles

Files list for article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleFilesRequest();
    $request->articleId = 857946;

    $response = $sdk->articles->articleFiles($request);

    if ($response->publicFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersionConfidentiality

Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionConfidentialityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionConfidentialityRequest();
    $request->articleId = 544883;
    $request->vNumber = 847252;

    $response = $sdk->articles->articleVersionConfidentiality($request);

    if ($response->articleConfidentiality !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersionDetails

Article with specified version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionDetailsRequest();
    $request->articleId = 423655;
    $request->vNumber = 623564;

    $response = $sdk->articles->articleVersionDetails($request);

    if ($response->articleComplete !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersionEmbargo

Embargo for article version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionEmbargoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionEmbargoRequest();
    $request->articleId = 645894;
    $request->vNumber = 384382;

    $response = $sdk->articles->articleVersionEmbargo($request);

    if ($response->articleEmbargo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersionUpdate

Updating an article version by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionUpdateRequest();
    $request->articleUpdate = new ArticleUpdate();
    $request->articleUpdate->authors = [
        [
            'debitis' => 'ipsa',
            'delectus' => 'tempora',
        ],
        [
            'molestiae' => 'minus',
            'placeat' => 'voluptatum',
        ],
    ];
    $request->articleUpdate->categories = [
        568045,
        392785,
    ];
    $request->articleUpdate->categoriesBySourceId = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->articleUpdate->customFields = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->articleUpdate->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->articleUpdate->definedType = 'media';
    $request->articleUpdate->description = 'Test description of article';
    $request->articleUpdate->doi = 'at';
    $request->articleUpdate->funding = 'maiores';
    $request->articleUpdate->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->articleUpdate->groupId = 799159;
    $request->articleUpdate->handle = 'quod';
    $request->articleUpdate->isMetadataRecord = true;
    $request->articleUpdate->keywords = [
        'totam',
        'porro',
    ];
    $request->articleUpdate->license = 1;
    $request->articleUpdate->metadataReason = 'hosted somewhere else';
    $request->articleUpdate->references = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->articleUpdate->resourceDoi = 'occaecati';
    $request->articleUpdate->resourceTitle = 'fugit';
    $request->articleUpdate->tags = [
        'hic',
        'optio',
        'totam',
    ];
    $request->articleUpdate->timeline = new TimelineUpdate();
    $request->articleUpdate->timeline->firstOnline = '2015-12-31';
    $request->articleUpdate->timeline->publisherAcceptance = '2015-12-31';
    $request->articleUpdate->timeline->publisherPublication = '2015-12-31';
    $request->articleUpdate->title = 'Test article title';
    $request->articleId = 105907;
    $request->versionId = 414662;

    $requestSecurity = new ArticleVersionUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->articleVersionUpdate($request, $requestSecurity);

    if ($response->locationWarningsUpdate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersionUpdateThumb

For a given public article version update the article thumbnail by choosing one of the associated files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionUpdateThumbRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileId;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionUpdateThumbSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionUpdateThumbRequest();
    $request->fileId = new FileId();
    $request->fileId->fileId = 123;
    $request->articleId = 473600;
    $request->versionId = 264555;

    $requestSecurity = new ArticleVersionUpdateThumbSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->articleVersionUpdateThumb($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleVersions

List public article versions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticleVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleVersionsRequest();
    $request->articleId = 186332;

    $response = $sdk->articles->articleVersions($request);

    if ($response->articleVersions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlesList

Returns a list of public articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArticlesListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArticlesListOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlesListRequest();
    $request->xCursor = 'cb739205-9293-496f-aa75-96eb10faaa23';
    $request->doi = 'corporis';
    $request->group = 128926;
    $request->handle = 'nobis';
    $request->institution = 315428;
    $request->itemType = 607831;
    $request->limit = 363711;
    $request->modifiedSince = 'minima';
    $request->offset = 570197;
    $request->order = ArticlesListOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = ArticlesListOrderDirectionEnum::ASC;
    $request->page = 634274;
    $request->pageSize = 988374;
    $request->publishedSince = 'sapiente';
    $request->resourceDoi = 'architecto';

    $response = $sdk->articles->articlesList($request);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlesSearch

Returns a list of public articles, filtered by the search parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArticlesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticleSearch;
use \OpenAPI\OpenAPI\Models\Shared\ArticleSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArticleSearchOrderDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticlesSearchRequest();
    $request->articleSearch = new ArticleSearch();
    $request->articleSearch->doi = '10.6084/m9.figshare.1407024';
    $request->articleSearch->group = 2000013;
    $request->articleSearch->handle = '111084/m9.figshare.14074';
    $request->articleSearch->institution = 2000013;
    $request->articleSearch->itemType = 1;
    $request->articleSearch->limit = 10;
    $request->articleSearch->modifiedSince = '2017-12-22';
    $request->articleSearch->offset = 652790;
    $request->articleSearch->order = ArticleSearchOrderEnum::PUBLISHED_DATE;
    $request->articleSearch->orderDirection = ArticleSearchOrderDirectionEnum::DESC;
    $request->articleSearch->page = 1;
    $request->articleSearch->pageSize = 10;
    $request->articleSearch->projectId = 1;
    $request->articleSearch->publishedSince = '2017-12-22';
    $request->articleSearch->resourceDoi = '10.6084/m9.figshare.1407024';
    $request->articleSearch->searchFor = 'figshare';
    $request->xCursor = '3a2fa946-7739-4251-aa52-c3f5ad019da1';

    $response = $sdk->articles->articlesSearch($request);

    if ($response->articleWithProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleAuthorDelete

De-associate author from article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleAuthorDeleteRequest();
    $request->articleId = 971945;
    $request->authorId = 976460;

    $requestSecurity = new PrivateArticleAuthorDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleAuthorDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleAuthorsAdd

Associate new authors with the article. This will add new authors to the list of already associated authors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorsCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleAuthorsAddRequest();
    $request->authorsCreator = new AuthorsCreator();
    $request->authorsCreator->authors = [
        [
            'praesentium' => 'voluptatibus',
            'ipsa' => 'omnis',
        ],
        [
            'cum' => 'perferendis',
            'doloremque' => 'reprehenderit',
        ],
        [
            'maiores' => 'dicta',
            'corporis' => 'dolore',
        ],
        [
            'dicta' => 'harum',
            'enim' => 'accusamus',
        ],
    ];
    $request->articleId = 414263;

    $requestSecurity = new PrivateArticleAuthorsAddSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleAuthorsAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleAuthorsList

List article authors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleAuthorsListRequest();
    $request->articleId = 918236;

    $requestSecurity = new PrivateArticleAuthorsListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleAuthorsList($request, $requestSecurity);

    if ($response->authors !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleAuthorsReplace

Associate new authors with the article. This will remove all already associated authors and add these new ones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorsCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleAuthorsReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleAuthorsReplaceRequest();
    $request->authorsCreator = new AuthorsCreator();
    $request->authorsCreator->authors = [
        [
            'quidem' => 'molestias',
        ],
    ];
    $request->articleId = 566602;

    $requestSecurity = new PrivateArticleAuthorsReplaceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleAuthorsReplace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleCategoriesAdd

Associate new categories with the article. This will add new categories to the list of already associated categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleCategoriesAddRequest();
    $request->categoriesCreator = new CategoriesCreator();
    $request->categoriesCreator->categories = [
        265389,
        508969,
        523248,
        916723,
    ];
    $request->articleId = 93940;

    $requestSecurity = new PrivateArticleCategoriesAddSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleCategoriesAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleCategoriesList

List article categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleCategoriesListRequest();
    $request->articleId = 921158;

    $requestSecurity = new PrivateArticleCategoriesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleCategoriesList($request, $requestSecurity);

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleCategoriesReplace

Associate new categories with the article. This will remove all already associated categories and add these new ones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoriesCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoriesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleCategoriesReplaceRequest();
    $request->categoriesCreator = new CategoriesCreator();
    $request->categoriesCreator->categories = [
        83112,
        929297,
        277718,
    ];
    $request->articleId = 318569;

    $requestSecurity = new PrivateArticleCategoriesReplaceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleCategoriesReplace($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleCategoryDelete

De-associate category from article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoryDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCategoryDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleCategoryDeleteRequest();
    $request->articleId = 9356;
    $request->categoryId = 667411;

    $requestSecurity = new PrivateArticleCategoryDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleCategoryDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleConfidentialityDelete

Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleConfidentialityDeleteRequest();
    $request->articleId = 842342;

    $requestSecurity = new PrivateArticleConfidentialityDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleConfidentialityDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleConfidentialityDetails

View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleConfidentialityDetailsRequest();
    $request->articleId = 131797;

    $requestSecurity = new PrivateArticleConfidentialityDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleConfidentialityDetails($request, $requestSecurity);

    if ($response->articleConfidentiality !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleConfidentialityUpdate

Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfidentialityCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleConfidentialityUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleConfidentialityUpdateRequest();
    $request->confidentialityCreator = new ConfidentialityCreator();
    $request->confidentialityCreator->reason = 'deserunt';
    $request->articleId = 716327;

    $requestSecurity = new PrivateArticleConfidentialityUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleConfidentialityUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleCreate

Create a new Article by sending article information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ArticleCreate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleCreate();
    $request->authors = [
        [
            'modi' => 'qui',
            'aliquid' => 'cupiditate',
        ],
        [
            'perferendis' => 'magni',
            'assumenda' => 'ipsam',
            'alias' => 'fugit',
        ],
        [
            'excepturi' => 'tempora',
            'facilis' => 'tempore',
            'labore' => 'delectus',
        ],
        [
            'non' => 'eligendi',
            'sint' => 'aliquid',
        ],
    ];
    $request->categories = [
        896039,
        572252,
        638921,
    ];
    $request->categoriesBySourceId = [
        'debitis',
    ];
    $request->customFields = [
        'dolorum' => 'in',
        'in' => 'illum',
        'maiores' => 'rerum',
        'dicta' => 'magnam',
    ];
    $request->customFieldsList = [
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
        new CustomArticleFieldAdd(),
    ];
    $request->definedType = 'media';
    $request->description = 'Test description of article';
    $request->doi = 'facere';
    $request->funding = 'ea';
    $request->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->groupId = 675439;
    $request->handle = 'accusamus';
    $request->isMetadataRecord = true;
    $request->keywords = [
        'occaecati',
    ];
    $request->license = 1;
    $request->metadataReason = 'hosted somewhere else';
    $request->references = [
        'accusamus',
        'delectus',
    ];
    $request->resourceDoi = 'quidem';
    $request->resourceTitle = 'provident';
    $request->tags = [
        'id',
        'blanditiis',
        'deleniti',
    ];
    $request->timeline = new TimelineUpdate();
    $request->timeline->firstOnline = '2015-12-31';
    $request->timeline->publisherAcceptance = '2015-12-31';
    $request->timeline->publisherPublication = '2015-12-31';
    $request->title = 'Test article title';

    $requestSecurity = new PrivateArticleCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleCreate($request, $requestSecurity);

    if ($response->locationWarnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleDelete

Delete an article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleDeleteRequest();
    $request->articleId = 956084;

    $requestSecurity = new PrivateArticleDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleDetails

View a private article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleDetailsRequest();
    $request->articleId = 230533;

    $requestSecurity = new PrivateArticleDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleDetails($request, $requestSecurity);

    if ($response->articleCompletePrivate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleEmbargoDelete

Will lift the embargo for the specified article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleEmbargoDeleteRequest();
    $request->articleId = 643990;

    $requestSecurity = new PrivateArticleEmbargoDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleEmbargoDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleEmbargoDetails

View a private article embargo details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleEmbargoDetailsRequest();
    $request->articleId = 394869;

    $requestSecurity = new PrivateArticleEmbargoDetailsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleEmbargoDetails($request, $requestSecurity);

    if ($response->articleEmbargo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleEmbargoUpdate

Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticleEmbargoUpdater;
use \OpenAPI\OpenAPI\Models\Shared\ArticleEmbargoUpdaterEmbargoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleEmbargoUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleEmbargoUpdateRequest();
    $request->articleEmbargoUpdater = new ArticleEmbargoUpdater();
    $request->articleEmbargoUpdater->embargoDate = '2018-05-22T04:04:04';
    $request->articleEmbargoUpdater->embargoOptions = [
        [
            'omnis' => 'molestiae',
            'perferendis' => 'nihil',
            'magnam' => 'distinctio',
        ],
        [
            'labore' => 'labore',
            'suscipit' => 'natus',
            'nobis' => 'eum',
        ],
    ];
    $request->articleEmbargoUpdater->embargoReason = 'vero';
    $request->articleEmbargoUpdater->embargoTitle = 'File(s) under embargo';
    $request->articleEmbargoUpdater->embargoType = ArticleEmbargoUpdaterEmbargoTypeEnum::FILE;
    $request->articleEmbargoUpdater->isEmbargoed = true;
    $request->articleId = 135474;

    $requestSecurity = new PrivateArticleEmbargoUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleEmbargoUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleFile

View details of file for specified article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleFileRequest();
    $request->articleId = 102863;
    $request->fileId = 298282;

    $requestSecurity = new PrivateArticleFileSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleFile($request, $requestSecurity);

    if ($response->privateFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleFileDelete

Complete file upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFileDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFileDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleFileDeleteRequest();
    $request->articleId = 92373;
    $request->fileId = 569965;

    $requestSecurity = new PrivateArticleFileDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleFileDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleFilesList

List private files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFilesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleFilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleFilesListRequest();
    $request->articleId = 354047;

    $requestSecurity = new PrivateArticleFilesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleFilesList($request, $requestSecurity);

    if ($response->privateFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlePrivateLink

List private links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlePrivateLinkRequest();
    $request->articleId = 590873;

    $requestSecurity = new PrivateArticlePrivateLinkSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlePrivateLink($request, $requestSecurity);

    if ($response->privateLinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlePrivateLinkCreate

Create new private link for this article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrivateLinkCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlePrivateLinkCreateRequest();
    $request->privateLinkCreator = new PrivateLinkCreator();
    $request->privateLinkCreator->expiresDate = '2018-02-22 22:22:22';
    $request->privateLinkCreator->readOnly = true;
    $request->articleId = 551816;

    $requestSecurity = new PrivateArticlePrivateLinkCreateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlePrivateLinkCreate($request, $requestSecurity);

    if ($response->privateLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlePrivateLinkDelete

Disable/delete private link for this article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlePrivateLinkDeleteRequest();
    $request->articleId = 574325;
    $request->linkId = 'accusantium';

    $requestSecurity = new PrivateArticlePrivateLinkDeleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlePrivateLinkDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlePrivateLinkUpdate

Update existing private link for this article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PrivateLinkCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePrivateLinkUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlePrivateLinkUpdateRequest();
    $request->privateLinkCreator = new PrivateLinkCreator();
    $request->privateLinkCreator->expiresDate = '2018-02-22 22:22:22';
    $request->privateLinkCreator->readOnly = true;
    $request->articleId = 653201;
    $request->linkId = 'reiciendis';

    $requestSecurity = new PrivateArticlePrivateLinkUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlePrivateLinkUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlePublish

- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePublishRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlePublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlePublishRequest();
    $request->articleId = 652103;

    $requestSecurity = new PrivateArticlePublishSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlePublish($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleReserveDoi

Reserve DOI for article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleReserveDoiRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleReserveDoiSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleReserveDoiRequest();
    $request->articleId = 320997;

    $requestSecurity = new PrivateArticleReserveDoiSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleReserveDoi($request, $requestSecurity);

    if ($response->articleDOI !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleReserveHandle

Reserve Handle for article

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleReserveHandleRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleReserveHandleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleReserveHandleRequest();
    $request->articleId = 431418;

    $requestSecurity = new PrivateArticleReserveHandleSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleReserveHandle($request, $requestSecurity);

    if ($response->articleHandle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleResource

Edit article resource data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleResourceRequest();
    $request->resource = new Resource();
    $request->resource->doi = 'dolor';
    $request->resource->id = 'aaaa23512';
    $request->resource->link = 'https://docs.figshare.com';
    $request->resource->status = 'frozen';
    $request->resource->title = 'Test title';
    $request->resource->version = 1;
    $request->articleId = 896547;

    $requestSecurity = new PrivateArticleResourceSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleResource($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleUpdate

Updating an article by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArticleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArticleFieldAdd;
use \OpenAPI\OpenAPI\Models\Shared\FundingCreate;
use \OpenAPI\OpenAPI\Models\Shared\TimelineUpdate;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleUpdateRequest();
    $request->articleUpdate = new ArticleUpdate();
    $request->articleUpdate->authors = [
        [
            'quasi' => 'iure',
            'doloribus' => 'debitis',
        ],
    ];
    $request->articleUpdate->categories = [
        806194,
        537023,
    ];
    $request->articleUpdate->categoriesBySourceId = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->articleUpdate->customFields = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->articleUpdate->customFieldsList = [
        new CustomArticleFieldAdd(),
    ];
    $request->articleUpdate->definedType = 'media';
    $request->articleUpdate->description = 'Test description of article';
    $request->articleUpdate->doi = 'consequuntur';
    $request->articleUpdate->funding = 'praesentium';
    $request->articleUpdate->fundingList = [
        new FundingCreate(),
        new FundingCreate(),
        new FundingCreate(),
    ];
    $request->articleUpdate->groupId = 166847;
    $request->articleUpdate->handle = 'sunt';
    $request->articleUpdate->isMetadataRecord = true;
    $request->articleUpdate->keywords = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->articleUpdate->license = 1;
    $request->articleUpdate->metadataReason = 'hosted somewhere else';
    $request->articleUpdate->references = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->articleUpdate->resourceDoi = 'ab';
    $request->articleUpdate->resourceTitle = 'maiores';
    $request->articleUpdate->tags = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->articleUpdate->timeline = new TimelineUpdate();
    $request->articleUpdate->timeline->firstOnline = '2015-12-31';
    $request->articleUpdate->timeline->publisherAcceptance = '2015-12-31';
    $request->articleUpdate->timeline->publisherPublication = '2015-12-31';
    $request->articleUpdate->title = 'Test article title';
    $request->articleId = 722056;

    $requestSecurity = new PrivateArticleUpdateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleUpdate($request, $requestSecurity);

    if ($response->locationWarningsUpdate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleUploadComplete

Complete file upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUploadCompleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUploadCompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleUploadCompleteRequest();
    $request->articleId = 50588;
    $request->fileId = 866383;

    $requestSecurity = new PrivateArticleUploadCompleteSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleUploadComplete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticleUploadInitiate

Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUploadInitiateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileCreator;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticleUploadInitiateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleUploadInitiateRequest();
    $request->fileCreator = new FileCreator();
    $request->fileCreator->link = 'http://figshare.com/file.txt';
    $request->fileCreator->md5 = '6c16e6e7d7587bd078e5117dda01d565';
    $request->fileCreator->name = 'test.py';
    $request->fileCreator->size = 70;
    $request->articleId = 365496;

    $requestSecurity = new PrivateArticleUploadInitiateSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticleUploadInitiate($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlesList

Get Own Articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticlesListRequest();
    $request->limit = 975522;
    $request->offset = 16627;
    $request->page = 855804;
    $request->pageSize = 230742;

    $requestSecurity = new PrivateArticlesListSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlesList($request, $requestSecurity);

    if ($response->articles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privateArticlesSearch

Returns a list of private articles filtered by the search parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PrivateArticleSearch;
use \OpenAPI\OpenAPI\Models\Shared\PrivateArticleSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrivateArticleSearchOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivateArticlesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivateArticleSearch();
    $request->doi = '10.6084/m9.figshare.1407024';
    $request->group = 2000013;
    $request->handle = '111084/m9.figshare.14074';
    $request->institution = 2000013;
    $request->itemType = 1;
    $request->limit = 10;
    $request->modifiedSince = '2017-12-22';
    $request->offset = 11714;
    $request->order = PrivateArticleSearchOrderEnum::PUBLISHED_DATE;
    $request->orderDirection = PrivateArticleSearchOrderDirectionEnum::DESC;
    $request->page = 1;
    $request->pageSize = 10;
    $request->projectId = 1;
    $request->publishedSince = '2017-12-22';
    $request->resourceDoi = '10.6084/m9.figshare.1407024';
    $request->resourceId = '1407024';
    $request->searchFor = 'figshare';

    $requestSecurity = new PrivateArticlesSearchSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->articles->privateArticlesSearch($request, $requestSecurity);

    if ($response->articleWithProjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

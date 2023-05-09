# Articles

### Available Operations

* [AccountArticleReport](#accountarticlereport) - Account Article Report
* [AccountArticleReportGenerate](#accountarticlereportgenerate) - Initiate a new Report
* [ArticleDetails](#articledetails) - View article details
* [ArticleFileDetails](#articlefiledetails) - Article file details
* [ArticleFiles](#articlefiles) - List article files
* [ArticleVersionConfidentiality](#articleversionconfidentiality) - Public Article Confidentiality for article version
* [ArticleVersionDetails](#articleversiondetails) - Article details for version
* [ArticleVersionEmbargo](#articleversionembargo) - Public Article Embargo for article version
* [ArticleVersionUpdate](#articleversionupdate) - Update article version
* [ArticleVersionUpdateThumb](#articleversionupdatethumb) - Update article version thumbnail
* [ArticleVersions](#articleversions) - List article versions
* [ArticlesList](#articleslist) - Public Articles
* [ArticlesSearch](#articlessearch) - Public Articles Search
* [PrivateArticleAuthorDelete](#privatearticleauthordelete) - Delete article author
* [PrivateArticleAuthorsAdd](#privatearticleauthorsadd) - Add article authors
* [PrivateArticleAuthorsList](#privatearticleauthorslist) - List article authors
* [PrivateArticleAuthorsReplace](#privatearticleauthorsreplace) - Replace article authors
* [PrivateArticleCategoriesAdd](#privatearticlecategoriesadd) - Add article categories
* [PrivateArticleCategoriesList](#privatearticlecategorieslist) - List article categories
* [PrivateArticleCategoriesReplace](#privatearticlecategoriesreplace) - Replace article categories
* [PrivateArticleCategoryDelete](#privatearticlecategorydelete) - Delete article category
* [PrivateArticleConfidentialityDelete](#privatearticleconfidentialitydelete) - Delete article confidentiality
* [PrivateArticleConfidentialityDetails](#privatearticleconfidentialitydetails) - Article confidentiality details
* [PrivateArticleConfidentialityUpdate](#privatearticleconfidentialityupdate) - Update article confidentiality
* [PrivateArticleCreate](#privatearticlecreate) - Create new Article
* [PrivateArticleDelete](#privatearticledelete) - Delete article
* [PrivateArticleDetails](#privatearticledetails) - Article details
* [PrivateArticleEmbargoDelete](#privatearticleembargodelete) - Delete Article Embargo
* [PrivateArticleEmbargoDetails](#privatearticleembargodetails) - Article Embargo Details
* [PrivateArticleEmbargoUpdate](#privatearticleembargoupdate) - Update Article Embargo
* [PrivateArticleFile](#privatearticlefile) - Single File
* [PrivateArticleFileDelete](#privatearticlefiledelete) - File Delete
* [PrivateArticleFilesList](#privatearticlefileslist) - List article files
* [PrivateArticlePrivateLink](#privatearticleprivatelink) - List private links
* [PrivateArticlePrivateLinkCreate](#privatearticleprivatelinkcreate) - Create private link
* [PrivateArticlePrivateLinkDelete](#privatearticleprivatelinkdelete) - Disable private link
* [PrivateArticlePrivateLinkUpdate](#privatearticleprivatelinkupdate) - Update private link
* [PrivateArticlePublish](#privatearticlepublish) - Private Article Publish
* [PrivateArticleReserveDoi](#privatearticlereservedoi) - Private Article Reserve DOI
* [PrivateArticleReserveHandle](#privatearticlereservehandle) - Private Article Reserve Handle
* [PrivateArticleResource](#privatearticleresource) - Private Article Resource
* [PrivateArticleUpdate](#privatearticleupdate) - Update article
* [PrivateArticleUploadComplete](#privatearticleuploadcomplete) - Complete Upload
* [PrivateArticleUploadInitiate](#privatearticleuploadinitiate) - Initiate Upload
* [PrivateArticlesList](#privatearticleslist) - Private Articles
* [PrivateArticlesSearch](#privatearticlessearch) - Private Articles search

## AccountArticleReport

Return status on all reports generated for the account from the oauth credentials

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReport(ctx, operations.AccountArticleReportRequest{
        GroupID: sdk.Int64(592845),
    }, operations.AccountArticleReportSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReports != nil {
        // handle response
    }
}
```

## AccountArticleReportGenerate

Initiate a new Article Report for this Account. There is a limit of 1 report per day.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.AccountArticleReportGenerate(ctx, operations.AccountArticleReportGenerateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReport != nil {
        // handle response
    }
}
```

## ArticleDetails

View an article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleDetails(ctx, operations.ArticleDetailsRequest{
        ArticleID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleComplete != nil {
        // handle response
    }
}
```

## ArticleFileDetails

File by id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleFileDetails(ctx, operations.ArticleFileDetailsRequest{
        ArticleID: 844266,
        FileID: 602763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicFile != nil {
        // handle response
    }
}
```

## ArticleFiles

Files list for article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleFiles(ctx, operations.ArticleFilesRequest{
        ArticleID: 857946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicFiles != nil {
        // handle response
    }
}
```

## ArticleVersionConfidentiality

Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersionConfidentiality(ctx, operations.ArticleVersionConfidentialityRequest{
        ArticleID: 544883,
        VNumber: 847252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleConfidentiality != nil {
        // handle response
    }
}
```

## ArticleVersionDetails

Article with specified version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersionDetails(ctx, operations.ArticleVersionDetailsRequest{
        ArticleID: 423655,
        VNumber: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleComplete != nil {
        // handle response
    }
}
```

## ArticleVersionEmbargo

Embargo for article version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersionEmbargo(ctx, operations.ArticleVersionEmbargoRequest{
        ArticleID: 645894,
        VNumber: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleEmbargo != nil {
        // handle response
    }
}
```

## ArticleVersionUpdate

Updating an article version by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersionUpdate(ctx, operations.ArticleVersionUpdateRequest{
        ArticleUpdate: shared.ArticleUpdate{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "debitis": "ipsa",
                    "delectus": "tempora",
                },
                map[string]interface{}{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            },
            Categories: []int64{
                568045,
                392785,
            },
            CategoriesBySourceID: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            CustomFields: map[string]interface{}{
                "perferendis": "ipsam",
                "repellendus": "sapiente",
                "quo": "odit",
            },
            CustomFieldsList: []shared.CustomArticleFieldAdd{
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "at",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "maiores",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "molestiae",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "quod",
                },
            },
            DefinedType: sdk.String("media"),
            Description: sdk.String("Test description of article"),
            Doi: sdk.String("quod"),
            Funding: sdk.String("esse"),
            FundingList: []shared.FundingCreate{
                shared.FundingCreate{
                    ID: sdk.Int64(780529),
                    Title: sdk.String("Miss"),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(118274),
                    Title: sdk.String("Miss"),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(639921),
                    Title: sdk.String("Ms."),
                },
            },
            GroupID: sdk.Int64(143353),
            Handle: sdk.String("deleniti"),
            IsMetadataRecord: sdk.Bool(true),
            Keywords: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            License: sdk.Int64(1),
            MetadataReason: sdk.String("hosted somewhere else"),
            References: []string{
                "modi",
                "qui",
            },
            ResourceDoi: sdk.String("impedit"),
            ResourceTitle: sdk.String("cum"),
            Tags: []string{
                "ipsum",
                "excepturi",
            },
            Timeline: &shared.TimelineUpdate{
                FirstOnline: sdk.String("2015-12-31"),
                PublisherAcceptance: sdk.String("2015-12-31"),
                PublisherPublication: sdk.String("2015-12-31"),
            },
            Title: sdk.String("Test article title"),
        },
        ArticleID: 135218,
        VersionID: 18789,
    }, operations.ArticleVersionUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationWarningsUpdate != nil {
        // handle response
    }
}
```

## ArticleVersionUpdateThumb

For a given public article version update the article thumbnail by choosing one of the associated files

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersionUpdateThumb(ctx, operations.ArticleVersionUpdateThumbRequest{
        FileID: shared.FileID{
            FileID: sdk.Int64(123),
        },
        ArticleID: 324141,
        VersionID: 617636,
    }, operations.ArticleVersionUpdateThumbSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ArticleVersions

List public article versions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticleVersions(ctx, operations.ArticleVersionsRequest{
        ArticleID: 149675,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleVersions != nil {
        // handle response
    }
}
```

## ArticlesList

Returns a list of public articles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticlesList(ctx, operations.ArticlesListRequest{
        XCursor: sdk.String("9396fea7-596e-4b10-baaa-2352c5955907"),
        Doi: sdk.String("culpa"),
        Group: sdk.Int64(988374),
        Handle: sdk.String("sapiente"),
        Institution: sdk.Int64(102044),
        ItemType: sdk.Int64(652790),
        Limit: sdk.Int64(208876),
        ModifiedSince: sdk.String("culpa"),
        Offset: sdk.Int64(161309),
        Order: operations.ArticlesListOrderEnumCites.ToPointer(),
        OrderDirection: operations.ArticlesListOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(581850),
        PageSize: sdk.Int64(253291),
        PublishedSince: sdk.String("commodi"),
        ResourceDoi: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## ArticlesSearch

Returns a list of public articles, filtered by the search parameters

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.ArticlesSearch(ctx, operations.ArticlesSearchRequest{
        ArticleSearch: &shared.ArticleSearch{
            Doi: sdk.String("10.6084/m9.figshare.1407024"),
            Group: sdk.Int(2000013),
            Handle: sdk.String("111084/m9.figshare.14074"),
            Institution: sdk.Int(2000013),
            ItemType: sdk.Int64(1),
            Limit: sdk.Int64(10),
            ModifiedSince: sdk.String("2017-12-22"),
            Offset: sdk.Int64(474697),
            Order: shared.ArticleSearchOrderEnumPublishedDate.ToPointer(),
            OrderDirection: shared.ArticleSearchOrderDirectionEnumDesc.ToPointer(),
            Page: sdk.Int64(1),
            PageSize: sdk.Int64(10),
            ProjectID: sdk.Int64(1),
            PublishedSince: sdk.String("2017-12-22"),
            ResourceDoi: sdk.String("10.6084/m9.figshare.1407024"),
            SearchFor: sdk.String("figshare"),
        },
        XCursor: sdk.String("39251aa5-2c3f-45ad-819d-a1ffe78f097b"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleWithProjects != nil {
        // handle response
    }
}
```

## PrivateArticleAuthorDelete

De-associate author from article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleAuthorDelete(ctx, operations.PrivateArticleAuthorDeleteRequest{
        ArticleID: 19987,
        AuthorID: 39187,
    }, operations.PrivateArticleAuthorDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleAuthorsAdd

Associate new authors with the article. This will add new authors to the list of already associated authors

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleAuthorsAdd(ctx, operations.PrivateArticleAuthorsAddRequest{
        AuthorsCreator: shared.AuthorsCreator{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "maiores": "dicta",
                    "corporis": "dolore",
                },
                map[string]interface{}{
                    "dicta": "harum",
                    "enim": "accusamus",
                },
            },
        },
        ArticleID: 414263,
    }, operations.PrivateArticleAuthorsAddSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleAuthorsList

List article authors

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleAuthorsList(ctx, operations.PrivateArticleAuthorsListRequest{
        ArticleID: 918236,
    }, operations.PrivateArticleAuthorsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authors != nil {
        // handle response
    }
}
```

## PrivateArticleAuthorsReplace

Associate new authors with the article. This will remove all already associated authors and add these new ones

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleAuthorsReplace(ctx, operations.PrivateArticleAuthorsReplaceRequest{
        AuthorsCreator: shared.AuthorsCreator{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "quidem": "molestias",
                },
            },
        },
        ArticleID: 566602,
    }, operations.PrivateArticleAuthorsReplaceSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleCategoriesAdd

Associate new categories with the article. This will add new categories to the list of already associated categories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleCategoriesAdd(ctx, operations.PrivateArticleCategoriesAddRequest{
        CategoriesCreator: shared.CategoriesCreator{
            Categories: []int64{
                265389,
                508969,
                523248,
                916723,
            },
        },
        ArticleID: 93940,
    }, operations.PrivateArticleCategoriesAddSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleCategoriesList

List article categories

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleCategoriesList(ctx, operations.PrivateArticleCategoriesListRequest{
        ArticleID: 921158,
    }, operations.PrivateArticleCategoriesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Categories != nil {
        // handle response
    }
}
```

## PrivateArticleCategoriesReplace

Associate new categories with the article. This will remove all already associated categories and add these new ones

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleCategoriesReplace(ctx, operations.PrivateArticleCategoriesReplaceRequest{
        CategoriesCreator: shared.CategoriesCreator{
            Categories: []int64{
                83112,
                929297,
                277718,
            },
        },
        ArticleID: 318569,
    }, operations.PrivateArticleCategoriesReplaceSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleCategoryDelete

De-associate category from article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleCategoryDelete(ctx, operations.PrivateArticleCategoryDeleteRequest{
        ArticleID: 9356,
        CategoryID: 667411,
    }, operations.PrivateArticleCategoryDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleConfidentialityDelete

Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleConfidentialityDelete(ctx, operations.PrivateArticleConfidentialityDeleteRequest{
        ArticleID: 842342,
    }, operations.PrivateArticleConfidentialityDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleConfidentialityDetails

View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleConfidentialityDetails(ctx, operations.PrivateArticleConfidentialityDetailsRequest{
        ArticleID: 131797,
    }, operations.PrivateArticleConfidentialityDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleConfidentiality != nil {
        // handle response
    }
}
```

## PrivateArticleConfidentialityUpdate

Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleConfidentialityUpdate(ctx, operations.PrivateArticleConfidentialityUpdateRequest{
        ConfidentialityCreator: shared.ConfidentialityCreator{
            Reason: "deserunt",
        },
        ArticleID: 716327,
    }, operations.PrivateArticleConfidentialityUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleCreate

Create a new Article by sending article information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleCreate(ctx, shared.ArticleCreate{
        Authors: []map[string]interface{}{
            map[string]interface{}{
                "modi": "qui",
                "aliquid": "cupiditate",
            },
            map[string]interface{}{
                "perferendis": "magni",
                "assumenda": "ipsam",
                "alias": "fugit",
            },
            map[string]interface{}{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
            map[string]interface{}{
                "non": "eligendi",
                "sint": "aliquid",
            },
        },
        Categories: []int64{
            896039,
            572252,
            638921,
        },
        CategoriesBySourceID: []string{
            "debitis",
        },
        CustomFields: map[string]interface{}{
            "dolorum": "in",
            "in": "illum",
            "maiores": "rerum",
            "dicta": "magnam",
        },
        CustomFieldsList: []shared.CustomArticleFieldAdd{
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "facere",
            },
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "ea",
            },
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "aliquid",
            },
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "laborum",
            },
        },
        DefinedType: sdk.String("media"),
        Description: sdk.String("Test description of article"),
        Doi: sdk.String("accusamus"),
        Funding: sdk.String("non"),
        FundingList: []shared.FundingCreate{
            shared.FundingCreate{
                ID: sdk.Int64(313218),
                Title: sdk.String("Dr."),
            },
            shared.FundingCreate{
                ID: sdk.Int64(965417),
                Title: sdk.String("Miss"),
            },
            shared.FundingCreate{
                ID: sdk.Int64(588465),
                Title: sdk.String("Miss"),
            },
        },
        GroupID: sdk.Int64(659669),
        Handle: sdk.String("blanditiis"),
        IsMetadataRecord: sdk.Bool(true),
        Keywords: []string{
            "sapiente",
            "amet",
            "deserunt",
        },
        License: sdk.Int64(1),
        MetadataReason: sdk.String("hosted somewhere else"),
        References: []string{
            "vel",
            "natus",
        },
        ResourceDoi: sdk.String("omnis"),
        ResourceTitle: sdk.String("molestiae"),
        Tags: []string{
            "nihil",
        },
        Timeline: &shared.TimelineUpdate{
            FirstOnline: sdk.String("2015-12-31"),
            PublisherAcceptance: sdk.String("2015-12-31"),
            PublisherPublication: sdk.String("2015-12-31"),
        },
        Title: "Test article title",
    }, operations.PrivateArticleCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationWarnings != nil {
        // handle response
    }
}
```

## PrivateArticleDelete

Delete an article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleDelete(ctx, operations.PrivateArticleDeleteRequest{
        ArticleID: 301575,
    }, operations.PrivateArticleDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleDetails

View a private article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleDetails(ctx, operations.PrivateArticleDetailsRequest{
        ArticleID: 716075,
    }, operations.PrivateArticleDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleCompletePrivate != nil {
        // handle response
    }
}
```

## PrivateArticleEmbargoDelete

Will lift the embargo for the specified article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleEmbargoDelete(ctx, operations.PrivateArticleEmbargoDeleteRequest{
        ArticleID: 660174,
    }, operations.PrivateArticleEmbargoDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleEmbargoDetails

View a private article embargo details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleEmbargoDetails(ctx, operations.PrivateArticleEmbargoDetailsRequest{
        ArticleID: 287991,
    }, operations.PrivateArticleEmbargoDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleEmbargo != nil {
        // handle response
    }
}
```

## PrivateArticleEmbargoUpdate

Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleEmbargoUpdate(ctx, operations.PrivateArticleEmbargoUpdateRequest{
        ArticleEmbargoUpdater: shared.ArticleEmbargoUpdater{
            EmbargoDate: "2018-05-22T04:04:04",
            EmbargoOptions: []map[string]interface{}{
                map[string]interface{}{
                    "natus": "nobis",
                    "eum": "vero",
                },
                map[string]interface{}{
                    "architecto": "magnam",
                },
            },
            EmbargoReason: sdk.String("et"),
            EmbargoTitle: sdk.String("File(s) under embargo"),
            EmbargoType: shared.ArticleEmbargoUpdaterEmbargoTypeEnumFile,
            IsEmbargoed: true,
        },
        ArticleID: 569965,
    }, operations.PrivateArticleEmbargoUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleFile

View details of file for specified article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleFile(ctx, operations.PrivateArticleFileRequest{
        ArticleID: 354047,
        FileID: 590873,
    }, operations.PrivateArticleFileSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateFile != nil {
        // handle response
    }
}
```

## PrivateArticleFileDelete

Complete file upload

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleFileDelete(ctx, operations.PrivateArticleFileDeleteRequest{
        ArticleID: 551816,
        FileID: 574325,
    }, operations.PrivateArticleFileDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleFilesList

List private files

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleFilesList(ctx, operations.PrivateArticleFilesListRequest{
        ArticleID: 33625,
    }, operations.PrivateArticleFilesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateFiles != nil {
        // handle response
    }
}
```

## PrivateArticlePrivateLink

List private links

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlePrivateLink(ctx, operations.PrivateArticlePrivateLinkRequest{
        ArticleID: 653201,
    }, operations.PrivateArticlePrivateLinkSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateLinks != nil {
        // handle response
    }
}
```

## PrivateArticlePrivateLinkCreate

Create new private link for this article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlePrivateLinkCreate(ctx, operations.PrivateArticlePrivateLinkCreateRequest{
        PrivateLinkCreator: &shared.PrivateLinkCreator{
            ExpiresDate: sdk.String("2018-02-22 22:22:22"),
            ReadOnly: sdk.Bool(true),
        },
        ArticleID: 968962,
    }, operations.PrivateArticlePrivateLinkCreateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateLinkResponse != nil {
        // handle response
    }
}
```

## PrivateArticlePrivateLinkDelete

Disable/delete private link for this article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlePrivateLinkDelete(ctx, operations.PrivateArticlePrivateLinkDeleteRequest{
        ArticleID: 652103,
        LinkID: "ad",
    }, operations.PrivateArticlePrivateLinkDeleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticlePrivateLinkUpdate

Update existing private link for this article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlePrivateLinkUpdate(ctx, operations.PrivateArticlePrivateLinkUpdateRequest{
        PrivateLinkCreator: &shared.PrivateLinkCreator{
            ExpiresDate: sdk.String("2018-02-22 22:22:22"),
            ReadOnly: sdk.Bool(true),
        },
        ArticleID: 431418,
        LinkID: "dolor",
    }, operations.PrivateArticlePrivateLinkUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticlePublish

- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlePublish(ctx, operations.PrivateArticlePublishRequest{
        ArticleID: 896547,
    }, operations.PrivateArticlePublishSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## PrivateArticleReserveDoi

Reserve DOI for article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleReserveDoi(ctx, operations.PrivateArticleReserveDoiRequest{
        ArticleID: 141264,
    }, operations.PrivateArticleReserveDoiSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleDOI != nil {
        // handle response
    }
}
```

## PrivateArticleReserveHandle

Reserve Handle for article

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleReserveHandle(ctx, operations.PrivateArticleReserveHandleRequest{
        ArticleID: 367562,
    }, operations.PrivateArticleReserveHandleSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleHandle != nil {
        // handle response
    }
}
```

## PrivateArticleResource

Edit article resource data.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleResource(ctx, operations.PrivateArticleResourceRequest{
        Resource: shared.Resource{
            Doi: sdk.String("quasi"),
            ID: sdk.String("aaaa23512"),
            Link: sdk.String("https://docs.figshare.com"),
            Status: sdk.String("frozen"),
            Title: sdk.String("Test title"),
            Version: sdk.Int64(1),
        },
        ArticleID: 435865,
    }, operations.PrivateArticleResourceSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## PrivateArticleUpdate

Updating an article by passing body parameters; request can also be made with the PATCH method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleUpdate(ctx, operations.PrivateArticleUpdateRequest{
        ArticleUpdate: shared.ArticleUpdate{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "eius": "maxime",
                    "deleniti": "facilis",
                    "in": "architecto",
                    "architecto": "repudiandae",
                },
                map[string]interface{}{
                    "expedita": "nihil",
                    "repellat": "quibusdam",
                },
                map[string]interface{}{
                    "saepe": "pariatur",
                },
                map[string]interface{}{
                    "consequuntur": "praesentium",
                },
            },
            Categories: []int64{
                166847,
                123820,
                779051,
            },
            CategoriesBySourceID: []string{
                "pariatur",
                "maxime",
                "ea",
                "excepturi",
            },
            CustomFields: map[string]interface{}{
                "ea": "accusantium",
            },
            CustomFieldsList: []shared.CustomArticleFieldAdd{
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "maiores",
                },
            },
            DefinedType: sdk.String("media"),
            Description: sdk.String("Test description of article"),
            Doi: sdk.String("quidem"),
            Funding: sdk.String("ipsam"),
            FundingList: []shared.FundingCreate{
                shared.FundingCreate{
                    ID: sdk.Int64(420075),
                    Title: sdk.String("Miss"),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(50588),
                    Title: sdk.String("Dr."),
                },
            },
            GroupID: sdk.Int64(365496),
            Handle: sdk.String("voluptatibus"),
            IsMetadataRecord: sdk.Bool(true),
            Keywords: []string{
                "fugiat",
            },
            License: sdk.Int64(1),
            MetadataReason: sdk.String("hosted somewhere else"),
            References: []string{
                "aut",
            },
            ResourceDoi: sdk.String("cumque"),
            ResourceTitle: sdk.String("corporis"),
            Tags: []string{
                "libero",
                "nobis",
                "dolores",
                "quis",
            },
            Timeline: &shared.TimelineUpdate{
                FirstOnline: sdk.String("2015-12-31"),
                PublisherAcceptance: sdk.String("2015-12-31"),
                PublisherPublication: sdk.String("2015-12-31"),
            },
            Title: sdk.String("Test article title"),
        },
        ArticleID: 521037,
    }, operations.PrivateArticleUpdateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationWarningsUpdate != nil {
        // handle response
    }
}
```

## PrivateArticleUploadComplete

Complete file upload

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleUploadComplete(ctx, operations.PrivateArticleUploadCompleteRequest{
        ArticleID: 489549,
        FileID: 54338,
    }, operations.PrivateArticleUploadCompleteSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PrivateArticleUploadInitiate

Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticleUploadInitiate(ctx, operations.PrivateArticleUploadInitiateRequest{
        FileCreator: shared.FileCreator{
            Link: sdk.String("http://figshare.com/file.txt"),
            Md5: sdk.String("6c16e6e7d7587bd078e5117dda01d565"),
            Name: sdk.String("test.py"),
            Size: sdk.Int64(70),
        },
        ArticleID: 338985,
    }, operations.PrivateArticleUploadInitiateSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## PrivateArticlesList

Get Own Articles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlesList(ctx, operations.PrivateArticlesListRequest{
        Limit: sdk.Int64(199996),
        Offset: sdk.Int64(179490),
        Page: sdk.Int64(18521),
        PageSize: sdk.Int64(170986),
    }, operations.PrivateArticlesListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## PrivateArticlesSearch

Returns a list of private articles filtered by the search parameters

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Articles.PrivateArticlesSearch(ctx, shared.PrivateArticleSearch{
        Doi: sdk.String("10.6084/m9.figshare.1407024"),
        Group: sdk.Int(2000013),
        Handle: sdk.String("111084/m9.figshare.14074"),
        Institution: sdk.Int(2000013),
        ItemType: sdk.Int64(1),
        Limit: sdk.Int64(10),
        ModifiedSince: sdk.String("2017-12-22"),
        Offset: sdk.Int64(793698),
        Order: shared.PrivateArticleSearchOrderEnumPublishedDate.ToPointer(),
        OrderDirection: shared.PrivateArticleSearchOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(10),
        ProjectID: sdk.Int64(1),
        PublishedSince: sdk.String("2017-12-22"),
        ResourceDoi: sdk.String("10.6084/m9.figshare.1407024"),
        ResourceID: sdk.String("1407024"),
        SearchFor: sdk.String("figshare"),
    }, operations.PrivateArticlesSearchSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleWithProjects != nil {
        // handle response
    }
}
```

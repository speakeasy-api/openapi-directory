# Collections

### Available Operations

* [CollectionArticles](#collectionarticles) - Public Collection Articles
* [CollectionDetails](#collectiondetails) - Collection details
* [CollectionVersionDetails](#collectionversiondetails) - Collection Version details
* [CollectionVersions](#collectionversions) - Collection Versions list
* [CollectionsList](#collectionslist) - Public Collections
* [CollectionsSearch](#collectionssearch) - Public Collections Search
* [PrivateCollectionArticleDelete](#privatecollectionarticledelete) - Delete collection article
* [PrivateCollectionArticlesAdd](#privatecollectionarticlesadd) - Add collection articles
* [PrivateCollectionArticlesList](#privatecollectionarticleslist) - List collection articles
* [PrivateCollectionArticlesReplace](#privatecollectionarticlesreplace) - Replace collection articles
* [PrivateCollectionAuthorDelete](#privatecollectionauthordelete) - Delete collection author
* [PrivateCollectionAuthorsAdd](#privatecollectionauthorsadd) - Add collection authors
* [PrivateCollectionAuthorsList](#privatecollectionauthorslist) - List collection authors
* [PrivateCollectionAuthorsReplace](#privatecollectionauthorsreplace) - Replace collection authors
* [PrivateCollectionCategoriesAdd](#privatecollectioncategoriesadd) - Add collection categories
* [PrivateCollectionCategoriesList](#privatecollectioncategorieslist) - List collection categories
* [PrivateCollectionCategoriesReplace](#privatecollectioncategoriesreplace) - Replace collection categories
* [PrivateCollectionCategoryDelete](#privatecollectioncategorydelete) - Delete collection category
* [PrivateCollectionCreate](#privatecollectioncreate) - Create collection
* [PrivateCollectionDelete](#privatecollectiondelete) - Delete collection
* [PrivateCollectionDetails](#privatecollectiondetails) - Collection details
* [PrivateCollectionPrivateLinkCreate](#privatecollectionprivatelinkcreate) - Create collection private link
* [PrivateCollectionPrivateLinkDelete](#privatecollectionprivatelinkdelete) - Disable private link
* [PrivateCollectionPrivateLinkUpdate](#privatecollectionprivatelinkupdate) - Update collection private link
* [PrivateCollectionPrivateLinksList](#privatecollectionprivatelinkslist) - List collection private links
* [PrivateCollectionPublish](#privatecollectionpublish) - Private Collection Publish
* [PrivateCollectionReserveDoi](#privatecollectionreservedoi) - Private Collection Reserve DOI
* [PrivateCollectionReserveHandle](#privatecollectionreservehandle) - Private Collection Reserve Handle
* [PrivateCollectionResource](#privatecollectionresource) - Private Collection Resource
* [PrivateCollectionUpdate](#privatecollectionupdate) - Update collection
* [PrivateCollectionsList](#privatecollectionslist) - Private Collections List
* [PrivateCollectionsSearch](#privatecollectionssearch) - Private Collections Search

## CollectionArticles

Returns a list of public collection articles

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
    res, err := s.Collections.CollectionArticles(ctx, operations.CollectionArticlesRequest{
        CollectionID: 944120,
        Limit: sdk.Int64(928082),
        Offset: sdk.Int64(608253),
        Page: sdk.Int64(704415),
        PageSize: sdk.Int64(596656),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```

## CollectionDetails

View a collection

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
    res, err := s.Collections.CollectionDetails(ctx, operations.CollectionDetailsRequest{
        CollectionID: 31838,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionComplete != nil {
        // handle response
    }
}
```

## CollectionVersionDetails

View details for a certain version of a collection

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
    res, err := s.Collections.CollectionVersionDetails(ctx, operations.CollectionVersionDetailsRequest{
        CollectionID: 783645,
        VersionID: 164694,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionComplete != nil {
        // handle response
    }
}
```

## CollectionVersions

Returns a list of public collection Versions

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
    res, err := s.Collections.CollectionVersions(ctx, operations.CollectionVersionsRequest{
        CollectionID: 500026,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionVersions != nil {
        // handle response
    }
}
```

## CollectionsList

Returns a list of public collections

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
    res, err := s.Collections.CollectionsList(ctx, operations.CollectionsListRequest{
        XCursor: sdk.String("909b3fe4-9a8d-49cb-b486-33323f9b77f3"),
        Doi: sdk.String("dolorum"),
        Group: sdk.Int64(254356),
        Handle: sdk.String("veritatis"),
        Institution: sdk.Int64(58029),
        Limit: sdk.Int64(56418),
        ModifiedSince: sdk.String("iure"),
        Offset: sdk.Int64(487838),
        Order: operations.CollectionsListOrderEnumModifiedDate.ToPointer(),
        OrderDirection: operations.CollectionsListOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(696344),
        PageSize: sdk.Int64(976405),
        PublishedSince: sdk.String("voluptas"),
        ResourceDoi: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collections != nil {
        // handle response
    }
}
```

## CollectionsSearch

Returns a list of public collections

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
    res, err := s.Collections.CollectionsSearch(ctx, operations.CollectionsSearchRequest{
        CollectionSearch: &shared.CollectionSearch{
            Doi: sdk.String("10.6084/m9.figshare.1407024"),
            Group: sdk.Int(2000013),
            Handle: sdk.String("10084/figshare.1407024"),
            Institution: sdk.Int(2000013),
            Limit: sdk.Int64(10),
            ModifiedSince: sdk.String("2017-12-22"),
            Offset: sdk.Int64(179603),
            Order: shared.CollectionSearchOrderEnumPublishedDate.ToPointer(),
            OrderDirection: shared.CollectionSearchOrderDirectionEnumDesc.ToPointer(),
            Page: sdk.Int64(1),
            PageSize: sdk.Int64(10),
            PublishedSince: sdk.String("2017-12-22"),
            ResourceDoi: sdk.String("10.6084/m9.figshare.1407024"),
            SearchFor: sdk.String("figshare"),
        },
        XCursor: sdk.String("80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collections != nil {
        // handle response
    }
}
```

## PrivateCollectionArticleDelete

De-associate article from collection

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
    res, err := s.Collections.PrivateCollectionArticleDelete(ctx, operations.PrivateCollectionArticleDeleteRequest{
        ArticleID: 831049,
        CollectionID: 519711,
    }, operations.PrivateCollectionArticleDeleteSecurity{
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

## PrivateCollectionArticlesAdd

Associate new articles with the collection. This will add new articles to the list of already associated articles

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
    res, err := s.Collections.PrivateCollectionArticlesAdd(ctx, operations.PrivateCollectionArticlesAddRequest{
        ArticlesCreator: shared.ArticlesCreator{
            Articles: []int64{
                55,
                872651,
                311860,
            },
        },
        CollectionID: 273542,
    }, operations.PrivateCollectionArticlesAddSecurity{
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

## PrivateCollectionArticlesList

List collection articles

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
    res, err := s.Collections.PrivateCollectionArticlesList(ctx, operations.PrivateCollectionArticlesListRequest{
        CollectionID: 425451,
        Limit: sdk.Int64(798047),
        Offset: sdk.Int64(885338),
        Page: sdk.Int64(185636),
        PageSize: sdk.Int64(679880),
    }, operations.PrivateCollectionArticlesListSecurity{
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

## PrivateCollectionArticlesReplace

Associate new articles with the collection. This will remove all already associated articles and add these new ones

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
    res, err := s.Collections.PrivateCollectionArticlesReplace(ctx, operations.PrivateCollectionArticlesReplaceRequest{
        ArticlesCreator: shared.ArticlesCreator{
            Articles: []int64{
                456130,
                687488,
                483409,
                215507,
            },
        },
        CollectionID: 788740,
    }, operations.PrivateCollectionArticlesReplaceSecurity{
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

## PrivateCollectionAuthorDelete

Delete collection author

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
    res, err := s.Collections.PrivateCollectionAuthorDelete(ctx, operations.PrivateCollectionAuthorDeleteRequest{
        AuthorID: 947371,
        CollectionID: 229442,
    }, operations.PrivateCollectionAuthorDeleteSecurity{
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

## PrivateCollectionAuthorsAdd

Associate new authors with the collection. This will add new authors to the list of already associated authors

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
    res, err := s.Collections.PrivateCollectionAuthorsAdd(ctx, operations.PrivateCollectionAuthorsAddRequest{
        AuthorsCreator: shared.AuthorsCreator{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "numquam": "enim",
                    "dolorem": "sapiente",
                    "totam": "nihil",
                    "sit": "expedita",
                },
                map[string]interface{}{
                    "sed": "vel",
                },
                map[string]interface{}{
                    "voluptas": "deserunt",
                    "quam": "ipsum",
                    "incidunt": "qui",
                },
            },
        },
        CollectionID: 586784,
    }, operations.PrivateCollectionAuthorsAddSecurity{
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

## PrivateCollectionAuthorsList

List collection authors

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
    res, err := s.Collections.PrivateCollectionAuthorsList(ctx, operations.PrivateCollectionAuthorsListRequest{
        CollectionID: 807581,
    }, operations.PrivateCollectionAuthorsListSecurity{
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

## PrivateCollectionAuthorsReplace

Associate new authors with the collection. This will remove all already associated authors and add these new ones

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
    res, err := s.Collections.PrivateCollectionAuthorsReplace(ctx, operations.PrivateCollectionAuthorsReplaceRequest{
        AuthorsCreator: shared.AuthorsCreator{
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "dicta": "laborum",
                    "totam": "incidunt",
                    "aspernatur": "dolores",
                },
                map[string]interface{}{
                    "facilis": "aliquid",
                    "quam": "molestias",
                    "temporibus": "qui",
                },
                map[string]interface{}{
                    "fugit": "magni",
                },
                map[string]interface{}{
                    "sunt": "ullam",
                    "nam": "hic",
                },
            },
        },
        CollectionID: 30452,
    }, operations.PrivateCollectionAuthorsReplaceSecurity{
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

## PrivateCollectionCategoriesAdd

Associate new categories with the collection. This will add new categories to the list of already associated categories

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
    res, err := s.Collections.PrivateCollectionCategoriesAdd(ctx, operations.PrivateCollectionCategoriesAddRequest{
        CategoriesCreator: shared.CategoriesCreator{
            Categories: []int64{
                746994,
                748664,
                92596,
                903720,
            },
        },
        CollectionID: 217450,
    }, operations.PrivateCollectionCategoriesAddSecurity{
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

## PrivateCollectionCategoriesList

List collection categories

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
    res, err := s.Collections.PrivateCollectionCategoriesList(ctx, operations.PrivateCollectionCategoriesListRequest{
        CollectionID: 83422,
    }, operations.PrivateCollectionCategoriesListSecurity{
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

## PrivateCollectionCategoriesReplace

Associate new categories with the collection. This will remove all already associated categories and add these new ones

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
    res, err := s.Collections.PrivateCollectionCategoriesReplace(ctx, operations.PrivateCollectionCategoriesReplaceRequest{
        CategoriesCreator: shared.CategoriesCreator{
            Categories: []int64{
                552193,
                731694,
                584476,
            },
        },
        CollectionID: 45614,
    }, operations.PrivateCollectionCategoriesReplaceSecurity{
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

## PrivateCollectionCategoryDelete

De-associate category from collection

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
    res, err := s.Collections.PrivateCollectionCategoryDelete(ctx, operations.PrivateCollectionCategoryDeleteRequest{
        CategoryID: 961937,
        CollectionID: 209157,
    }, operations.PrivateCollectionCategoryDeleteSecurity{
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

## PrivateCollectionCreate

Create a new Collection by sending collection information

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
    res, err := s.Collections.PrivateCollectionCreate(ctx, shared.CollectionCreate{
        Articles: []int64{
            286915,
            240829,
        },
        Authors: []map[string]interface{}{
            map[string]interface{}{
                "quae": "aut",
            },
            map[string]interface{}{
                "itaque": "consequatur",
                "est": "repellendus",
                "porro": "doloribus",
            },
            map[string]interface{}{
                "facilis": "cupiditate",
                "qui": "quae",
            },
        },
        Categories: []int64{
            485628,
            580447,
            977496,
        },
        CategoriesBySourceID: []string{
            "vero",
            "omnis",
            "quis",
            "ipsum",
        },
        CustomFields: map[string]interface{}{
            "voluptate": "consectetur",
            "vero": "tenetur",
            "dignissimos": "hic",
            "distinctio": "quod",
        },
        CustomFieldsList: []shared.CustomArticleFieldAdd{
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "similique",
            },
            shared.CustomArticleFieldAdd{
                Name: "key",
                Value: "facilis",
            },
        },
        Description: sdk.String("Test description of article"),
        Doi: sdk.String("vero"),
        Funding: sdk.String("ducimus"),
        FundingList: []shared.FundingCreate{
            shared.FundingCreate{
                ID: sdk.Int64(844550),
                Title: sdk.String("Dr."),
            },
            shared.FundingCreate{
                ID: sdk.Int64(194342),
                Title: sdk.String("Miss"),
            },
        },
        GroupID: sdk.Int64(773326),
        Handle: sdk.String("aut"),
        Keywords: []string{
            "exercitationem",
            "nulla",
            "fugit",
            "porro",
        },
        References: []string{
            "doloribus",
            "iusto",
            "eligendi",
            "ducimus",
        },
        ResourceDoi: sdk.String("alias"),
        ResourceID: sdk.String("officia"),
        ResourceLink: sdk.String("tempora"),
        ResourceTitle: sdk.String("ipsam"),
        ResourceVersion: sdk.Int64(410492),
        Tags: []string{
            "vel",
        },
        Timeline: &shared.TimelineUpdate{
            FirstOnline: sdk.String("2015-12-31"),
            PublisherAcceptance: sdk.String("2015-12-31"),
            PublisherPublication: sdk.String("2015-12-31"),
        },
        Title: "Test collection title",
    }, operations.PrivateCollectionCreateSecurity{
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

## PrivateCollectionDelete

Delete n collection

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
    res, err := s.Collections.PrivateCollectionDelete(ctx, operations.PrivateCollectionDeleteRequest{
        CollectionID: 822118,
    }, operations.PrivateCollectionDeleteSecurity{
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

## PrivateCollectionDetails

View a collection

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
    res, err := s.Collections.PrivateCollectionDetails(ctx, operations.PrivateCollectionDetailsRequest{
        CollectionID: 297842,
    }, operations.PrivateCollectionDetailsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionCompletePrivate != nil {
        // handle response
    }
}
```

## PrivateCollectionPrivateLinkCreate

Create new private link

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
    res, err := s.Collections.PrivateCollectionPrivateLinkCreate(ctx, operations.PrivateCollectionPrivateLinkCreateRequest{
        CollectionPrivateLinkCreator: &shared.CollectionPrivateLinkCreator{
            ExpiresDate: sdk.String("2018-02-22 22:22:22"),
            ReadOnly: sdk.Bool(true),
        },
        CollectionID: 189848,
    }, operations.PrivateCollectionPrivateLinkCreateSecurity{
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

## PrivateCollectionPrivateLinkDelete

Disable/delete private link for this collection

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
    res, err := s.Collections.PrivateCollectionPrivateLinkDelete(ctx, operations.PrivateCollectionPrivateLinkDeleteRequest{
        CollectionID: 401132,
        LinkID: "laudantium",
    }, operations.PrivateCollectionPrivateLinkDeleteSecurity{
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

## PrivateCollectionPrivateLinkUpdate

Update existing private link for this collection

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
    res, err := s.Collections.PrivateCollectionPrivateLinkUpdate(ctx, operations.PrivateCollectionPrivateLinkUpdateRequest{
        CollectionPrivateLinkCreator: &shared.CollectionPrivateLinkCreator{
            ExpiresDate: sdk.String("2018-02-22 22:22:22"),
            ReadOnly: sdk.Bool(true),
        },
        CollectionID: 120657,
        LinkID: "dolor",
    }, operations.PrivateCollectionPrivateLinkUpdateSecurity{
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

## PrivateCollectionPrivateLinksList

List article private links

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
    res, err := s.Collections.PrivateCollectionPrivateLinksList(ctx, operations.PrivateCollectionPrivateLinksListRequest{
        CollectionID: 980700,
    }, operations.PrivateCollectionPrivateLinksListSecurity{
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

## PrivateCollectionPublish

When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.

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
    res, err := s.Collections.PrivateCollectionPublish(ctx, operations.PrivateCollectionPublishRequest{
        CollectionID: 97844,
    }, operations.PrivateCollectionPublishSecurity{
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

## PrivateCollectionReserveDoi

Reserve DOI for collection

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
    res, err := s.Collections.PrivateCollectionReserveDoi(ctx, operations.PrivateCollectionReserveDoiRequest{
        CollectionID: 406120,
    }, operations.PrivateCollectionReserveDoiSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionDOI != nil {
        // handle response
    }
}
```

## PrivateCollectionReserveHandle

Reserve Handle for collection

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
    res, err := s.Collections.PrivateCollectionReserveHandle(ctx, operations.PrivateCollectionReserveHandleRequest{
        CollectionID: 862192,
    }, operations.PrivateCollectionReserveHandleSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionHandle != nil {
        // handle response
    }
}
```

## PrivateCollectionResource

Edit collection resource data.

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
    res, err := s.Collections.PrivateCollectionResource(ctx, operations.PrivateCollectionResourceRequest{
        Resource: shared.Resource{
            Doi: sdk.String("excepturi"),
            ID: sdk.String("aaaa23512"),
            Link: sdk.String("https://docs.figshare.com"),
            Status: sdk.String("frozen"),
            Title: sdk.String("Test title"),
            Version: sdk.Int64(1),
        },
        CollectionID: 972920,
    }, operations.PrivateCollectionResourceSecurity{
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

## PrivateCollectionUpdate

Update collection details; request can also be made with the PATCH method.

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
    res, err := s.Collections.PrivateCollectionUpdate(ctx, operations.PrivateCollectionUpdateRequest{
        CollectionUpdate: shared.CollectionUpdate{
            Articles: []int64{
                960835,
                788873,
            },
            Authors: []map[string]interface{}{
                map[string]interface{}{
                    "impedit": "corporis",
                    "veniam": "aliquid",
                },
                map[string]interface{}{
                    "magnam": "ea",
                },
                map[string]interface{}{
                    "consectetur": "recusandae",
                    "aspernatur": "minima",
                    "eaque": "a",
                    "libero": "aut",
                },
                map[string]interface{}{
                    "deleniti": "impedit",
                },
            },
            Categories: []int64{
                146946,
                882860,
            },
            CategoriesBySourceID: []string{
                "non",
            },
            CustomFields: map[string]interface{}{
                "dolorum": "laborum",
            },
            CustomFieldsList: []shared.CustomArticleFieldAdd{
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "velit",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "eum",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "autem",
                },
                shared.CustomArticleFieldAdd{
                    Name: "key",
                    Value: "nobis",
                },
            },
            Description: sdk.String("Test description of collection"),
            Doi: sdk.String("quas"),
            Funding: sdk.String("assumenda"),
            FundingList: []shared.FundingCreate{
                shared.FundingCreate{
                    ID: sdk.Int64(379034),
                    Title: sdk.String("Miss"),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(96549),
                    Title: sdk.String("Mrs."),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(256139),
                    Title: sdk.String("Mr."),
                },
                shared.FundingCreate{
                    ID: sdk.Int64(591935),
                    Title: sdk.String("Mr."),
                },
            },
            GroupID: sdk.Int64(476477),
            Handle: sdk.String("magnam"),
            Keywords: []string{
                "eius",
                "esse",
            },
            References: []string{
                "rem",
                "fuga",
            },
            ResourceDoi: sdk.String("reprehenderit"),
            ResourceID: sdk.String("quidem"),
            ResourceLink: sdk.String("fugiat"),
            ResourceTitle: sdk.String("ut"),
            ResourceVersion: sdk.Int64(433439),
            Tags: []string{
                "assumenda",
                "eos",
            },
            Timeline: &shared.TimelineUpdate{
                FirstOnline: sdk.String("2015-12-31"),
                PublisherAcceptance: sdk.String("2015-12-31"),
                PublisherPublication: sdk.String("2015-12-31"),
            },
            Title: sdk.String("Test collection title"),
        },
        CollectionID: 509342,
    }, operations.PrivateCollectionUpdateSecurity{
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

## PrivateCollectionsList

List private collections

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
    res, err := s.Collections.PrivateCollectionsList(ctx, operations.PrivateCollectionsListRequest{
        Limit: sdk.Int64(788546),
        Offset: sdk.Int64(86377),
        Order: operations.PrivateCollectionsListOrderEnumPublishedDate.ToPointer(),
        OrderDirection: operations.PrivateCollectionsListOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(696997),
        PageSize: sdk.Int64(206594),
    }, operations.PrivateCollectionsListSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collections != nil {
        // handle response
    }
}
```

## PrivateCollectionsSearch

Returns a list of private Collections

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
    res, err := s.Collections.PrivateCollectionsSearch(ctx, shared.PrivateCollectionSearch{
        Doi: sdk.String("10.6084/m9.figshare.1407024"),
        Group: sdk.Int(2000013),
        Handle: sdk.String("10084/figshare.1407024"),
        Institution: sdk.Int(2000013),
        Limit: sdk.Int64(10),
        ModifiedSince: sdk.String("2017-12-22"),
        Offset: sdk.Int64(778696),
        Order: shared.PrivateCollectionSearchOrderEnumPublishedDate.ToPointer(),
        OrderDirection: shared.PrivateCollectionSearchOrderDirectionEnumDesc.ToPointer(),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(10),
        PublishedSince: sdk.String("2017-12-22"),
        ResourceDoi: sdk.String("10.6084/m9.figshare.1407024"),
        ResourceID: sdk.String("1407024"),
        SearchFor: sdk.String("figshare"),
    }, operations.PrivateCollectionsSearchSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collections != nil {
        // handle response
    }
}
```

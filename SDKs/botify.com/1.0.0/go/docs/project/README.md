# Project

### Available Operations

* [GetProjectAnalyses](#getprojectanalyses) - List all analyses for a project
* [GetProjectUrlsAggs](#getprojecturlsaggs) - Project Query aggregator
* [GetSavedFilter](#getsavedfilter) - Retrieves a specific saved filter's name, ID and filter value
* [GetSavedFilters](#getsavedfilters) - List all the project's saved filters (each filter's name, ID and filter value)
* [TestURLRewritingRules](#testurlrewritingrules) - Match and replace parts of a URL based on rules passed in POST data

## GetProjectAnalyses

List all analyses for a project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.GetProjectAnalyses(ctx, operations.GetProjectAnalysesRequest{
        Page: sdk.Int64(764912),
        ProjectSlug: "corporis",
        Size: sdk.Int64(944124),
        Username: "Morgan33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectAnalyses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetProjectUrlsAggs

Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.GetProjectUrlsAggs(ctx, operations.GetProjectUrlsAggsRequest{
        RequestBody: []shared.UrlsAggsQuery{
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "quis": "nesciunt",
                    },
                    map[string]interface{}{
                        "perferendis": "dolores",
                    },
                },
                Filters: map[string]interface{}{
                    "quam": "dolor",
                    "vero": "nostrum",
                    "hic": "recusandae",
                    "omnis": "facilis",
                },
            },
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "porro": "consequuntur",
                    },
                    map[string]interface{}{
                        "error": "eaque",
                        "occaecati": "rerum",
                        "adipisci": "asperiores",
                    },
                    map[string]interface{}{
                        "modi": "iste",
                        "dolorum": "deleniti",
                        "pariatur": "provident",
                        "nobis": "libero",
                    },
                },
                Filters: map[string]interface{}{
                    "quaerat": "quos",
                    "aliquid": "dolorem",
                    "dolorem": "dolor",
                    "qui": "ipsum",
                },
            },
            shared.UrlsAggsQuery{
                Aggs: []map[string]interface{}{
                    map[string]interface{}{
                        "cum": "voluptate",
                        "dignissimos": "reiciendis",
                        "amet": "dolorum",
                    },
                    map[string]interface{}{
                        "veritatis": "ipsa",
                        "ipsa": "iure",
                    },
                    map[string]interface{}{
                        "quaerat": "accusamus",
                        "quidem": "voluptatibus",
                    },
                    map[string]interface{}{
                        "natus": "eos",
                        "atque": "sit",
                    },
                },
                Filters: map[string]interface{}{
                    "ab": "soluta",
                    "dolorum": "iusto",
                    "voluptate": "dolorum",
                    "deleniti": "omnis",
                },
            },
        },
        Area: operations.GetProjectUrlsAggsAreaEnumNew.ToPointer(),
        LastAnalysisSlug: sdk.String("distinctio"),
        NbAnalyses: sdk.Int(990339),
        ProjectSlug: "nihil",
        Username: "Curt_Klocko",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Default != nil {
        // handle response
    }
}
```

## GetSavedFilter

Retrieves a specific saved filter's name, ID and filter value

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.GetSavedFilter(ctx, operations.GetSavedFilterRequest{
        Identifier: "eius",
        ProjectSlug: "aspernatur",
        Username: "Al_Fay32",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectSavedFilter != nil {
        // handle response
    }
}
```

## GetSavedFilters

List all the project's saved filters (each filter's name, ID and filter value)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.GetSavedFilters(ctx, operations.GetSavedFiltersRequest{
        Page: sdk.Int64(904425),
        ProjectSlug: "suscipit",
        Size: sdk.Int64(645785),
        Username: "Ladarius_Hane62",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavedFilters200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TestURLRewritingRules

Match and replace parts of a URL based on rules passed in POST data.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DjangoRestToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Project.TestURLRewritingRules(ctx, operations.TestURLRewritingRulesRequest{
        ProjectSlug: "alias",
        Username: "Savion42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLRewritingRulesSerializer != nil {
        // handle response
    }
}
```

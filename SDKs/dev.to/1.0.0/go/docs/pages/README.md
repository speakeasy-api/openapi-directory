# Pages

### Available Operations

* [DeleteAPIPagesID](#deleteapipagesid) - remove a page
* [GetAPIPages](#getapipages) - show details for all pages
* [GetAPIPagesID](#getapipagesid) - show details for a page
* [PostAPIPages](#postapipages) - pages
* [PutAPIPagesID](#putapipagesid) - update details for a page

## DeleteAPIPagesID

This endpoint allows the client to delete a single Page object, specified by ID.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pages.DeleteAPIPagesID(ctx, operations.DeleteAPIPagesIDRequest{
        ID: 363711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## GetAPIPages

This endpoint allows the client to retrieve details for all Page objects.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pages.GetAPIPages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Pages != nil {
        // handle response
    }
}
```

## GetAPIPagesID

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pages.GetAPIPagesID(ctx, operations.GetAPIPagesIDRequest{
        ID: 325047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## PostAPIPages

This endpoint allows the client to create a new page.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pages.PostAPIPages(ctx, operations.PostAPIPagesRequestBody{
        BodyJSON: sdk.String("excepturi"),
        BodyMarkdown: sdk.String("accusantium"),
        Description: sdk.String("iure"),
        IsTopLevelPath: sdk.Bool(false),
        Slug: sdk.String("culpa"),
        Template: operations.PostAPIPagesRequestBodyTemplateEnumJSON.ToPointer(),
        Title: sdk.String("Dr."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAPIPagesID

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Pages.PutAPIPagesID(ctx, operations.PutAPIPagesIDRequest{
        Page: &shared.Page{
            BodyJSON: sdk.String("architecto"),
            BodyMarkdown: sdk.String("mollitia"),
            Description: "dolorem",
            IsTopLevelPath: sdk.Bool(false),
            Slug: "culpa",
            SocialImage: map[string]interface{}{
                "repellat": "mollitia",
            },
            Template: shared.PageTemplateEnumNavBarIncluded,
            Title: "Mrs.",
        },
        ID: 414369,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```
